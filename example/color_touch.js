// Filename: color_touch.js

// Get the canvas and context
var canvas = document.getElementById('example');
var context = canvas.getContext('2d');

// Load the heart image
var img = new Image(); // Create new img element
img.src = "./heart_colour.png"; // Ensure this path is correct
img.crossOrigin = "Anonymous"; // To prevent cross-origin issues
img.onload = function () {
    // Draw the background image
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    // Cache the image data for performance
    imageDataCache = context.getImageData(0, 0, canvas.width, canvas.height);
};

var imageDataCache; // Variable to store cached image data

// Define the mapping from color hex values to regions and audio files
var colorRegionMap = {
    '#ff0000': { // Red color
        region: 'Myocardium',
        audioFile: '../audio/fur2.mp4' // Map to an audio file (for other sounds)
    },
    '#00ff00': { // Green color
        region: 'Epicardium',
        audioFile: '../audio/fur3.mp4'
    },
    '#0000ff': { // Blue color
        region: 'Pericardial cavity',
        audioFile: '../audio/Scaly lr.m4a'
    },
    '#ffff00': { // Yellow color
        region: 'Parietal layer of serous pericardium',
        audioFile: '../audio/croc-scales.mp4'
    },
    '#ff00ff': { // Magenta color
        region: 'Fibrous pericardium',
        audioFile: '../audio/Scaly bt.mp3'
    },
    '#000000': { // Black color
        region: 'Outline',
        audioFile: '../audio/bumblebee.mp4' // Provide your audio file for the outline if available
    }
};

// Function to calculate color distance
function colorDistance(color1, color2) {
    var rDiff = Math.abs(color1.r - color2.r);
    var gDiff = Math.abs(color1.g - color2.g);
    var bDiff = Math.abs(color1.b - color2.b);
    return rDiff + gDiff + bDiff;
}

// Audio management
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var currentAudio = null;
var heartbeatSound = null; // Object to manage heartbeat sound
var paint = false; // Flag to indicate pointer is down
var currentRegion = null; // To keep track of the current region

// Function to resume audio context on user interaction
function resumeAudioContext() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

document.body.addEventListener('click', resumeAudioContext, { once: true });
document.body.addEventListener('touchstart', resumeAudioContext, { once: true });

// Function to play an audio file
function playAudioFile(audioSrc) {
    stopCurrentAudio();

    currentAudio = new Audio(audioSrc);
    currentAudio.loop = true;
    currentAudio.play();
}

// Function to generate and play heartbeat sound procedurally
function playHeartbeatSound() {
    var context = audioContext;
    heartbeatSound = {}; // Initialize heartbeatSound object

    // Create a gain node to control the volume
    var gainNode = context.createGain();
    gainNode.gain.setValueAtTime(1, context.currentTime);

    // Connect gainNode to destination
    gainNode.connect(context.destination);

    heartbeatSound.gainNode = gainNode;

    // Function to create a heartbeat pulse
    function heartbeat(time) {
        var oscillator = context.createOscillator();
        var gain = context.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(150, time);

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(1, time + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

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
    var bpm = 72; // Heartbeats per minute
    var interval = 72 / bpm; // Interval between beats in seconds

    function scheduleHeartbeats() {
        var now = context.currentTime;

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
}

// Function to stop any ongoing sound
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    // Stop heartbeat sound
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
    }
}

// Function to find the position of the canvas
function findPos(obj) {
    var rect = obj.getBoundingClientRect();
    return { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
}

// Interaction handler function for pointer events
function handlePointerDown(e) {
    paint = true;
    handleInteraction(e);
}

function handlePointerMove(e) {
    if (paint) {
        handleInteraction(e);
    }
}

function handlePointerUp(e) {
    paint = false;
    stopCurrentAudio();
    currentRegion = null;
    $('#status').text("No region selected");
}

function handleInteraction(e) {
    var pos = findPos(canvas);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;

    x = Math.floor(x);
    y = Math.floor(y);

    // Ensure coordinates are within canvas bounds
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
        stopCurrentAudio();
        $('#status').text("Out of bounds");
        return;
    }

    var index = (y * imageDataCache.width + x) * 4;
    var p = imageDataCache.data.slice(index, index + 4);

    var currentColor = { r: p[0], g: p[1], b: p[2] };
    var coord = "x=" + x + ", y=" + y;

    // Approximate color matching
    var matchedRegion = null;
    var minDistance = 60; // Adjust as needed

    for (var colorHex in colorRegionMap) {
        var regionInfo = colorRegionMap[colorHex];
        var r = parseInt(colorHex.substr(1, 2), 16);
        var g = parseInt(colorHex.substr(3, 2), 16);
        var b = parseInt(colorHex.substr(5, 2), 16);
        var mappedColor = { r: r, g: g, b: b };

        var distance = colorDistance(currentColor, mappedColor);
        if (distance < minDistance) {
            minDistance = distance;
            matchedRegion = regionInfo;
        }
    }

    if (matchedRegion) {
        $('#status').html(coord + "<br>Region: " + matchedRegion.region);

        if (currentRegion !== matchedRegion.region) {
            currentRegion = matchedRegion.region;
            playRegionAudio(matchedRegion);
        }
    } else {
        $('#status').html(coord + "<br>Unknown region");
        stopCurrentAudio();
        currentRegion = null;
    }

    e.preventDefault(); // Prevent default touch actions
}

// Function to play audio for a region
function playRegionAudio(regionInfo) {
    stopCurrentAudio();

    if (regionInfo.region === 'Myocardium') {
        // Play both the assigned mp3 and the procedural heartbeat sound
        playAudioFile(regionInfo.audioFile);
        playHeartbeatSound();
    } else {
        // Play only the assigned mp3/mp4 file
        playAudioFile(regionInfo.audioFile);
    }
}

// Event listeners for pointer events
canvas.addEventListener('pointerdown', handlePointerDown);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
canvas.addEventListener('pointercancel', handlePointerUp);
canvas.addEventListener('pointerout', handlePointerUp);
canvas.addEventListener('pointerleave', handlePointerUp);

// Functions to play sounds when buttons in the legend are clicked
function getRegionInfoByName(regionName) {
    for (var colorHex in colorRegionMap) {
        if (colorRegionMap[colorHex].region === regionName) {
            return colorRegionMap[colorHex];
        }
    }
    return null;
}

function playSoundByRegion(regionName) {
    var regionInfo = getRegionInfoByName(regionName);
    if (regionInfo) {
        stopCurrentAudio();
        playRegionAudio(regionInfo);
    }
}

// Stop sound when clicking outside the legend buttons
document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('play-sound-button')) {
        stopCurrentAudio();
    }
});
