// Filename: innervation.js

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
var heartbeatSound = null; // Object to manage heartbeat sound
var baseHeartRate = 70; // Base heart rate in BPM
var currentHeartRate = baseHeartRate; // Current heart rate, can change when touching nerves
var heartbeatStarted = false; // Flag to check if heartbeat has started
var isTouchingCanvas = false; // Flag to track if the canvas is being touched
var currentNerve = null; // Currently touched nerve

// Function to resume audio context on user interaction
function resumeAudioContext() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

document.body.addEventListener('pointerdown', resumeAudioContext);
document.body.addEventListener('touchstart', resumeAudioContext);

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

// Function to generate and play heartbeat sound procedurally
function playHeartbeatSound() {
    var context = audioContext;
    heartbeatSound = {}; // Initialize heartbeatSound object

    // Create a gain node to control the volume
    var gainNode = context.createGain();
    gainNode.gain.setValueAtTime(1, context.currentTime);

    // Create a compressor node to control dynamics
    var compressor = context.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-20, context.currentTime);
    compressor.knee.setValueAtTime(40, context.currentTime);
    compressor.ratio.setValueAtTime(12, context.currentTime);
    compressor.attack.setValueAtTime(0, context.currentTime);
    compressor.release.setValueAtTime(0.25, context.currentTime);

    // Connect nodes: gainNode -> compressor -> destination
    gainNode.connect(compressor);
    compressor.connect(context.destination);

    heartbeatSound.gainNode = gainNode;

    // Function to create a heartbeat pulse
    function heartbeat(time) {
        var oscillator = context.createOscillator();
        var gain = context.createGain();

        oscillator.type = 'sine'; // Using square wave for stronger actuator response
        oscillator.frequency.setValueAtTime(100, time); // 65 Hz for actuator resonance

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(1, time + 0.005); // Quick attack
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1); // Decay over 100ms

        oscillator.connect(gain);
        gain.connect(gainNode);

        oscillator.start(time);
        oscillator.stop(time + 0.2);

        // Keep track of oscillators for stopping later
        heartbeatSound.oscillators.push(oscillator);
    }

    heartbeatSound.oscillators = [];
    heartbeatSound.isPlaying = true;

    // Schedule heartbeat pulses
    function scheduleHeartbeats() {
        if (!heartbeatSound.isPlaying) return;

        var now = context.currentTime;
        var interval = 60 / currentHeartRate; // Interval between beats in seconds

        for (var i = 0; i < 5; i++) { // Schedule 5 beats ahead
            var time = now + i * interval;
            if (heartbeatSound.isPlaying) {
                heartbeat(time);
            }
        }

        // Schedule next batch if still playing
        if (heartbeatSound.isPlaying) {
            heartbeatSound.timeoutID = setTimeout(scheduleHeartbeats, 5 * interval * 1000);
        }
    }

    scheduleHeartbeats();
    heartbeatStarted = true;
    updateStartStopButton(); // Update button text to "Stop"
    updateStatus("Heart rate: " + currentHeartRate + " BPM");
}

// Function to stop the heartbeat sound
function stopHeartbeatSound() {
    if (heartbeatSound && heartbeatSound.isPlaying) {
        heartbeatSound.isPlaying = false;
        // Clear any scheduled timeouts
        if (heartbeatSound.timeoutID) {
            clearTimeout(heartbeatSound.timeoutID);
        }
        // Stop all oscillators
        heartbeatSound.oscillators.forEach(function(oscillator) {
            oscillator.stop();
        });
        // Disconnect nodes
        if (heartbeatSound.gainNode) {
            heartbeatSound.gainNode.disconnect();
        }
        heartbeatSound = null;
        heartbeatStarted = false; // Reset the heartbeat started flag
        updateStatus("Heartbeat stopped");
        updateStartStopButton(); // Update button text to "Start"
    }
}

// Function to set the current heart rate
function updateHeartRate(newRate) {
    currentHeartRate = newRate;
    if (heartbeatStarted) {
        // Restart the heartbeat sound with the new rate
        stopHeartbeatSound();
        playHeartbeatSound();
    }
    // Update the status div
    if (heartbeatStarted) {
        updateStatus("Heart rate: " + currentHeartRate + " BPM");
    }
}

// Function to find the position of the canvas
function findPos(obj) {
    var rect = obj.getBoundingClientRect();
    return { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
}

// Interaction handler functions
function handlePointerDown(e) {
    if (e.pointerType === 'touch' || e.pointerType === 'mouse' || e.pointerType === 'pen') {
        if (isTouchingCanvas) return; // Ignore if already touching
        isTouchingCanvas = true;
        if (!heartbeatStarted) {
            updateHeartRate(baseHeartRate);
            playHeartbeatSound();
        }
        handleInteraction(e);
        e.preventDefault(); // Prevent default touch actions
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
        updateHeartRate(baseHeartRate); // Reset heart rate to base rate
        updateStatus("Heart rate: " + currentHeartRate + " BPM");
        e.preventDefault();
    }
}

function handleInteraction(e) {
    var pos = findPos(canvas);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;

    x = Math.floor(x);
    y = Math.floor(y);

    // Ensure coordinates are within canvas bounds
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
        return;
    }

    // Increase touch radius
    var touchRadius = 10; // Adjust radius as needed
    var matchedNerve = null;

    // Loop over pixels within the touch radius
    for (var dy = -touchRadius; dy <= touchRadius; dy++) {
        for (var dx = -touchRadius; dx <= touchRadius; dx++) {
            var nx = x + dx;
            var ny = y + dy;

            // Check if the point is within the circle
            if (dx * dx + dy * dy <= touchRadius * touchRadius) {
                // Ensure coordinates are within canvas bounds
                if (nx >= 0 && ny >= 0 && nx < canvas.width && ny < canvas.height) {
                    var index = (ny * imageDataCache.width + nx) * 4;
                    var p = imageDataCache.data.slice(index, index + 4);
                    var currentColor = { r: p[0], g: p[1], b: p[2] };

                    // Approximate color matching
                    var minDistance = 60; // Adjust as needed

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
                            break; // Exit the loop if a nerve is matched
                        }
                    }

                    if (matchedNerve) {
                        break; // Exit loops if nerve is found
                    }
                }
            }
        }
        if (matchedNerve) {
            break; // Exit outer loop if nerve is found
        }
    }

    // Update touch info with coordinates and color
    var colorHex = matchedNerve ? colorHexKey : rgbToHex(p[0], p[1], p[2]);
    updateTouchInfo(x, y, colorHex);

    if (matchedNerve && currentNerve !== matchedNerve) {
        currentNerve = matchedNerve;
        var newHeartRate = baseHeartRate + matchedNerve.heartRateChange;
        updateHeartRate(newHeartRate);

        // Provide feedback to the user
        updateStatus("Touched " + matchedNerve.nerve + ". Heart rate: " + currentHeartRate + " BPM");
    } else if (!matchedNerve && currentNerve) {
        // If no nerve is matched but previously a nerve was touched
        currentNerve = null;
        updateHeartRate(baseHeartRate); // Reset to base heart rate
        updateStatus("Heart rate: " + currentHeartRate + " BPM");
    }
}

// Function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Function to calculate color distance
function colorDistance(color1, color2) {
    var rDiff = Math.abs(color1.r - color2.r);
    var gDiff = Math.abs(color1.g - color2.g);
    var bDiff = Math.abs(color1.b - color2.b);
    return rDiff + gDiff + bDiff;
}

// Disable multitouch
canvas.addEventListener('pointerdown', handlePointerDown);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
canvas.addEventListener('pointercancel', handlePointerUp);
canvas.addEventListener('pointerleave', handlePointerUp);

// Set pointer event attributes
canvas.style.touchAction = "none"; // Disable default touch actions

// Get references to the buttons
var increaseRateButton = document.getElementById('increaseRateButton');
var startStopButton = document.getElementById('startStopButton');
var decreaseRateButton = document.getElementById('decreaseRateButton');

// Event listeners for buttons
increaseRateButton.addEventListener('click', function() {
    baseHeartRate += 5;
    if (!currentNerve) {
        updateHeartRate(baseHeartRate);
        updateStatus("Heart rate: " + currentHeartRate + " BPM");
    }
});

decreaseRateButton.addEventListener('click', function() {
    baseHeartRate -= 5;
    if (baseHeartRate < 30) baseHeartRate = 30; // Minimum heart rate
    if (!currentNerve) {
        updateHeartRate(baseHeartRate);
        updateStatus("Heart rate: " + currentHeartRate + " BPM");
    }
});

startStopButton.addEventListener('click', function() {
    if (heartbeatStarted) {
        stopHeartbeatSound();
    } else {
        updateHeartRate(baseHeartRate); // Start with base heart rate
        playHeartbeatSound();
    }
});

// Function to update the Start/Stop button text
function updateStartStopButton() {
    if (heartbeatStarted) {
        startStopButton.innerText = "Stop";
    } else {
        startStopButton.innerText = "Start";
    }
}
