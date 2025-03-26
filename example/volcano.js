// Filename: volcano.js

// Get the canvas and context
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Load the volcano image
var img = new Image();
img.src = "./volcano_diagram.png"; // Ensure this path is correct
img.crossOrigin = "Anonymous"; // To prevent cross-origin issues
img.onload = function () {
    // Draw the background image
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    // Cache the image data for performance
    imageDataCache = context.getImageData(0, 0, canvas.width, canvas.height);
};

var imageDataCache; // Variable to store cached image data

// Define the mapping from color hex values to volcano parts and sounds
var colorPartMap = {
    '#808080': { // Gray color for ash cloud
        part: 'Ash Cloud',
        sound: '../audio/ash_cloud_sound.mp3' // Path to the ash cloud sound file (ensure it's an audio file)
    },
    '#ff4500': { // OrangeRed color for lava flow
        part: 'Lava Flow',
        sound: '../audio/fire.mp4' // Changed to .mp3 for audio compatibility
    },
    '#8b4513': { // SaddleBrown color for volcano cone
        part: 'Volcano Cone',
        sound: '../audio/Tree bark 4 bt.mp4' // Changed to .mp3 for audio compatibility
    },
    '#ffd700': { // Gold color for dike
        part: 'Dike',
        sound: '../audio/dike_sound.mp3' // Ensure it's an audio file
    },    '#800080': { // Purple color for magma chamber
        part: 'Magma Chamber',
        sound: '../audio/magma.mp3' // Added sound file for Magma Chamber
    }
};


// Audio context and sound management
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var playingSounds = []; // Array to keep track of all playing sounds
var isTouchingCanvas = false; // Flag to track if the canvas is being touched
var currentPart = null; // Currently touched volcano part
var touchStartTime = null; // Time when touch started on magma chamber
var pulseIntervalID = null; // ID for the pulse interval

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

// Function to play the sound associated with a volcano part
function playSound(partInfo) {
    // Stop all currently playing sounds
    stopAllSounds();

    if (partInfo.sound) {
        // Fetch the sound file and play it
        fetch(partInfo.sound)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.arrayBuffer();
            })
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                var soundSource = audioContext.createBufferSource();
                soundSource.buffer = audioBuffer;
                soundSource.connect(audioContext.destination);
                soundSource.loop = true;
                soundSource.start(0);
                playingSounds.push(soundSource);
            })
            .catch(error => {
                console.error('Error loading sound:', error);
            });
    }
}

// Function to stop all currently playing sounds
function stopAllSounds() {
    playingSounds.forEach(sound => {
        try {
            sound.stop(0);
        } catch (e) {
            console.warn('Error stopping sound:', e);
        }
    });
    playingSounds = [];

    // Also stop any pulse intervals and sounds
    if (pulseIntervalID) {
        clearInterval(pulseIntervalID);
        pulseIntervalID = null;
    }
}

// Function to start generating pulses for the magma chamber (if needed)
function startPulses() {
    touchStartTime = Date.now();
    // Start the pulses immediately
    generatePulse();
    scheduleNextPulse(1000); // Start with a 1-second interval
}

// Function to schedule the next pulse
function scheduleNextPulse(interval) {
    if (pulseIntervalID) {
        clearInterval(pulseIntervalID);
    }
    pulseIntervalID = setInterval(() => {
        generatePulse();
        updatePulseInterval(); // Adjust the interval based on touch duration
    }, interval);
}

// Function to generate a single pulse (if needed)
function generatePulse() {
    var oscillator = audioContext.createOscillator();
    var gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime); // Frequency in Hz

    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);

    playingSounds.push(oscillator); // Keep reference to stop if needed
}

// Function to update the pulse interval based on touch duration (if needed)
function updatePulseInterval() {
    var touchDuration = (Date.now() - touchStartTime) / 1000; // Duration in seconds

    // Calculate new interval (minimum 0.2 seconds)
    var newInterval = Math.max(1 - touchDuration * 0.1, 0.2) * 1000; // Convert to milliseconds

    // Update the interval for pulses
    if (pulseIntervalID) {
        clearInterval(pulseIntervalID);
    }
    pulseIntervalID = setInterval(() => {
        generatePulse();
        updatePulseInterval(); // Continuously adjust the interval
    }, newInterval);
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
        e.target.setPointerCapture(e.pointerId); // Capture the pointer
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
        currentPart = null;
        stopAllSounds();
        updateStatus("Interact with the volcano to hear its sounds.");
        e.target.releasePointerCapture(e.pointerId); // Release the pointer
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
    var matchedPart = null;
    var matchedColorHexKey = null;
    var p = null; // Initialize 'p' to prevent undefined errors

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
                    p = imageDataCache.data.slice(index, index + 4);
                    var currentColor = { r: p[0], g: p[1], b: p[2] };

                    // Approximate color matching
                    var minDistance = 60; // Adjust as needed

                    for (var colorHexKey in colorPartMap) {
                        var partInfo = colorPartMap[colorHexKey];
                        var r = parseInt(colorHexKey.substr(1, 2), 16);
                        var g = parseInt(colorHexKey.substr(3, 2), 16);
                        var b = parseInt(colorHexKey.substr(5, 2), 16);
                        var mappedColor = { r: r, g: g, b: b };

                        var distance = colorDistance(currentColor, mappedColor);
                        if (distance < minDistance) {
                            minDistance = distance;
                            matchedPart = partInfo;
                            matchedColorHexKey = colorHexKey;
                            break; // Exit the loop if a part is matched
                        }
                    }

                    if (matchedPart) {
                        break; // Exit loops if part is found
                    }
                }
            }
        }
        if (matchedPart) {
            break; // Exit outer loop if part is found
        }
    }

    if (matchedPart && currentPart !== matchedPart) {
        currentPart = matchedPart;
        playSound(currentPart);
        updateStatus("Touched " + currentPart.part + ".");
        updateTouchInfo(x, y, matchedColorHexKey);
    } else if (!matchedPart && currentPart) {
        // If no part is matched but previously a part was touched
        currentPart = null;
        stopAllSounds();
        updateStatus("Interact with the volcano to hear its sounds.");
        if (p) {
            updateTouchInfo(x, y, rgbToHex(p[0], p[1], p[2]));
        } else {
            updateTouchInfo(x, y, "Unknown");
        }
    }
}

// Function to calculate color distance
function colorDistance(color1, color2) {
    var rDiff = Math.abs(color1.r - color2.r);
    var gDiff = Math.abs(color1.g - color2.g);
    var bDiff = Math.abs(color1.b - color2.b);
    return rDiff + gDiff + bDiff;
}

// Function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Disable multitouch and set up event listeners
canvas.addEventListener('pointerdown', handlePointerDown);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
canvas.addEventListener('pointercancel', handlePointerUp);
canvas.addEventListener('pointerleave', handlePointerUp);

// Set pointer event attributes
canvas.style.touchAction = "none"; // Disable default touch actions
