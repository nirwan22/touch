// Filename: innervation.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas and context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Load the heart innervation image
    var img = new Image();
    img.src = "./heart_innervation.png"; // Ensure this path is correct
    img.crossOrigin = "Anonymous"; // To prevent cross-origin issues
    img.onload = function () {
        // Draw the background image
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Cache the image data for performance
        imageDataCache = context.getImageData(0, 0, canvas.width, canvas.height);
    };

    var imageDataCache; // Variable to store cached image data

    // Define the mapping from color hex values to nerves
    var colorNerveMap = {
        '#ff0000': { // Red color
            nerve: 'Vagus Nerve',
            heartRateChange: -20 // Decrease heart rate by 20 bpm
        },
        '#800080': { // Purple color
            nerve: 'Sympathetic Nerve',
            heartRateChange: 20 // Increase heart rate by 20 bpm
        }
    };

    // Audio context and heartbeat management
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var heartbeatBuffer = null; // Buffer for the heartbeat audio
    var heartbeatSource = null; // Current heartbeat buffer source

    // The original audio file is recorded at 60 BPM
    // We can set a user-defined base heart rate that changes the "neutral" speed
    var originalFileBPM = 60; // The audio file is originally at 60 BPM
    var baseHeartRate = 60;   // User-adjustable base heart rate
    var currentHeartRate = baseHeartRate; // Current heart rate (changes via nerves/buttons)
    var heartbeatStarted = false; // Flag to check if heartbeat has started
    var isTouchingCanvas = false; // Flag to track if the canvas is being touched
    var currentNerve = null; // Currently touched nerve

    // Function to resume audio context on user interaction
    function resumeAudioContext() {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
            console.log('Audio context resumed.');
        }
    }

    document.body.addEventListener('pointerdown', resumeAudioContext);
    document.body.addEventListener('touchstart', resumeAudioContext);

    // Function to load the heartbeat audio buffer
    function loadHeartbeatAudio() {
        fetch('../audio/human-heartbeat-60-bpm.mp3') // Path to your heartbeat audio file
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.arrayBuffer();
            })
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                heartbeatBuffer = audioBuffer;
                console.log('Heartbeat audio loaded successfully.');
            })
            .catch(error => {
                console.error('Error loading heartbeat audio:', error);
            });
    }

    // Load the heartbeat audio on script load
    loadHeartbeatAudio();

    // Function to update the status div
    function updateStatus(message) {
        var statusDiv = document.getElementById('status');
        if (statusDiv) {
            statusDiv.innerText = message;
        }
    }

    // Function to update touch information
    function updateTouchInfo(x, y, color) {
        var touchInfoDiv = document.getElementById('touchInfo');
        if (touchInfoDiv) {
            touchInfoDiv.innerHTML = 'x: ' + x + ', y: ' + y + '<br>Color: ' + color;
        }
    }

    // Function to play the heartbeat audio with a given playback rate
    function playHeartbeatSound() {
        if (!heartbeatBuffer) {
            console.warn('Heartbeat audio buffer is not loaded yet.');
            updateStatus("Heartbeat audio is loading...");
            return;
        }

        stopHeartbeatSound(); // Stop any existing heartbeat before starting a new one

        heartbeatSource = audioContext.createBufferSource();
        heartbeatSource.buffer = heartbeatBuffer;
        heartbeatSource.loop = true;

        // Playback rate determined by currentHeartRate relative to the original file BPM
        heartbeatSource.playbackRate.value = currentHeartRate / originalFileBPM;

        heartbeatSource.connect(audioContext.destination);

        heartbeatSource.start(0);
        heartbeatStarted = true;

        updateStartStopButton(); // Update button text to "Stop"
        updateStatus("Heart rate: " + currentHeartRate + " BPM");
        console.log("Heartbeat started at " + currentHeartRate + " BPM with playback rate " + heartbeatSource.playbackRate.value.toFixed(2));
    }

    // Function to stop the heartbeat audio
    function stopHeartbeatSound() {
        if (heartbeatSource) {
            heartbeatSource.stop(0);
            heartbeatSource.disconnect();
            heartbeatSource = null;
            heartbeatStarted = false;
            updateStartStopButton(); // Update button text to "Start"
            updateStatus("Heartbeat stopped");
            console.log("Heartbeat stopped.");
        }
    }

    // Function to set the current heart rate and adjust playback rate
    function updateHeartRate(newRate) {
        // Clamp heart rate between 30 and 150 BPM
        currentHeartRate = Math.max(30, Math.min(newRate, 150));

        if (heartbeatStarted && heartbeatSource) {
            // Adjust playback rate based on currentHeartRate and the original file BPM
            heartbeatSource.playbackRate.value = currentHeartRate / originalFileBPM;
            updateStatus("Heart rate: " + currentHeartRate + " BPM");
            console.log("Heart rate updated to " + currentHeartRate + " BPM with playback rate " + heartbeatSource.playbackRate.value.toFixed(2));
        } else {
            updateStatus("Heart rate: " + currentHeartRate + " BPM");
            console.log("Heart rate set to " + currentHeartRate + " BPM.");
        }
    }

    // Helper functions for conversions and calculations
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function colorDistance(color1, color2) {
        var rDiff = Math.abs(color1.r - color2.r);
        var gDiff = Math.abs(color1.g - color2.g);
        var bDiff = Math.abs(color1.b - color2.b);
        return rDiff + gDiff + bDiff;
    }

    // Interaction event handlers
    function handlePointerDown(e) {
        if (e.pointerType === 'touch' || e.pointerType === 'mouse' || e.pointerType === 'pen') {
            if (isTouchingCanvas) return;
            isTouchingCanvas = true;
            if (!heartbeatStarted) {
                playHeartbeatSound();
            }
            e.target.setPointerCapture(e.pointerId);
            handleInteraction(e);
            e.preventDefault();
        }
    }

    function handlePointerMove(e) {
        if (isTouchingCanvas) {
            handleInteraction(e);
            e.preventDefault();
        }
    }

    function handlePointerUp(e) {
        if (isTouchingCanvas) {
            isTouchingCanvas = false;
            currentNerve = null;
            // Reset to the current base heart rate (not the original BPM necessarily)
            updateHeartRate(baseHeartRate);
            console.log("Heart rate reset to base rate: " + baseHeartRate + " BPM");
            e.target.releasePointerCapture(e.pointerId);
            e.preventDefault();
        }
    }

    function handleInteraction(e) {
        var pos = findPos(canvas);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;

        x = Math.floor(x);
        y = Math.floor(y);

        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            return;
        }

        var touchRadius = 10;
        var matchedNerve = null;
        var p = null;

        for (var dy = -touchRadius; dy <= touchRadius; dy++) {
            for (var dx = -touchRadius; dx <= touchRadius; dx++) {
                var nx = x + dx;
                var ny = y + dy;

                if (dx * dx + dy * dy <= touchRadius * touchRadius) {
                    if (nx >= 0 && ny >= 0 && nx < canvas.width && ny < canvas.height) {
                        var index = (ny * imageDataCache.width + nx) * 4;
                        p = imageDataCache.data.slice(index, index + 4);
                        var currentColor = { r: p[0], g: p[1], b: p[2] };

                        var minDistance = 60;
                        for (var colorHexKey in colorNerveMap) {
                            var nerveInfo = colorNerveMap[colorHexKey];
                            var r = parseInt(colorHexKey.substr(1, 2), 16);
                            var g = parseInt(colorHexKey.substr(3, 2), 16);
                            var b = parseInt(colorHexKey.substr(5, 2), 16);
                            var mappedColor = { r: r, g: g, b: b };

                            var distance = colorDistance(currentColor, mappedColor);
                            if (distance < minDistance) {
                                minDistance = distance;
                                matchedNerve = nerveInfo;
                                break;
                            }
                        }

                        if (matchedNerve) {
                            break;
                        }
                    }
                }
            }
            if (matchedNerve) {
                break;
            }
        }

        var colorHex = p ? rgbToHex(p[0], p[1], p[2]) : "Unknown";
        updateTouchInfo(x, y, matchedNerve ? "Nerve Color" : colorHex);

        if (matchedNerve && currentNerve !== matchedNerve) {
            currentNerve = matchedNerve;
            var newHeartRate = baseHeartRate + matchedNerve.heartRateChange;
            // Clamp heart rate between 30 and 150 BPM
            newHeartRate = Math.max(30, Math.min(newHeartRate, 150));
            updateHeartRate(newHeartRate);
            updateStatus("Touched " + matchedNerve.nerve + ". Heart rate: " + currentHeartRate + " BPM");
            console.log("Touched " + matchedNerve.nerve + ". Heart rate: " + currentHeartRate + " BPM");
        } else if (!matchedNerve && currentNerve) {
            currentNerve = null;
            updateHeartRate(baseHeartRate);
            updateStatus("Heart rate: " + currentHeartRate + " BPM");
            console.log("Heart rate reset to base rate: " + currentHeartRate + " BPM");
        }
    }

    function findPos(obj) {
        var rect = obj.getBoundingClientRect();
        return { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
    }

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);
    canvas.addEventListener('pointerleave', handlePointerUp);

    canvas.style.touchAction = "none"; // Disable default touch actions

    // Get references to the buttons
    var increaseRateButton = document.getElementById('increaseRateButton');
    var startStopButton = document.getElementById('startStopButton');
    var decreaseRateButton = document.getElementById('decreaseRateButton');

    if (!increaseRateButton || !decreaseRateButton || !startStopButton) {
        console.error("One or more buttons are missing in the HTML. Please ensure the buttons with IDs 'increaseRateButton', 'decreaseRateButton', and 'startStopButton' exist.");
    } else {
        increaseRateButton.addEventListener('click', function () {
            console.log("Increase Rate Button Clicked");
            // Increase base heart rate by 5 BPM and clamp between 30 and 150
            baseHeartRate = Math.min(baseHeartRate + 5, 150);
            updateHeartRate(baseHeartRate);
            updateStatus("Heart rate: " + currentHeartRate + " BPM");
            console.log("Base heart rate increased to " + baseHeartRate + " BPM");
        });

        decreaseRateButton.addEventListener('click', function () {
            console.log("Decrease Rate Button Clicked");
            // Decrease base heart rate by 5 BPM and clamp between 30 and 150
            baseHeartRate = Math.max(baseHeartRate - 5, 30);
            updateHeartRate(baseHeartRate);
            updateStatus("Heart rate: " + currentHeartRate + " BPM");
            console.log("Base heart rate decreased to " + baseHeartRate + " BPM");
        });

        startStopButton.addEventListener('click', function () {
            if (heartbeatStarted) {
                stopHeartbeatSound();
                console.log("Heartbeat stopped via Start/Stop button.");
            } else {
                // Use the current base heart rate
                updateHeartRate(baseHeartRate);
                playHeartbeatSound();
                console.log("Heartbeat started via Start/Stop button.");
            }
        });
    }

    function updateStartStopButton() {
        if (startStopButton) {
            if (heartbeatStarted) {
                startStopButton.innerText = "Stop";
            } else {
                startStopButton.innerText = "Start";
            }
        }
    }
});
