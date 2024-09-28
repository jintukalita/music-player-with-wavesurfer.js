// script.js

// Create an instance of WaveSurfer
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#007bff',
    progressColor: '#0056b3',
    barWidth: 2,
    height: 30, // Change the waveform height to 30px
    responsive: true,
    hideScrollbar: true,
});

// Load your audio file
wavesurfer.load('https://ik.imagekit.io/n1cw2npd4/One%20Of%20The%20Girls%20(with%20JENNIE,%20Lily%20Rose%20Depp)%20-%20%20The%20Weeknd,%20JENNIE,%20and%20Lily-Rose%20Depp.mp3?updatedAt=1727531019328');

// Play/pause button functionality
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');

playButton.addEventListener('click', function () {
    wavesurfer.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
});

pauseButton.addEventListener('click', function () {
    wavesurfer.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline-block';
});

// Rewind button functionality
var rewindButton = document.getElementById('rewind');
rewindButton.addEventListener('click', function () {
    wavesurfer.skipBackward(5); // Rewind by 5 seconds
});

// Fast forward button functionality
var fastForwardButton = document.getElementById('fast-forward');
fastForwardButton.addEventListener('click', function () {
    wavesurfer.skipForward(5); // Fast forward by 5 seconds
});

// Volume control functionality
var volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', function () {
    wavesurfer.setVolume(this.value);
});

// Update current time and total duration
wavesurfer.on('audioprocess', function () {
    var currentTime = wavesurfer.getCurrentTime();
    document.getElementById('current-time').innerText = formatTime(currentTime);
});

wavesurfer.on('ready', function () {
    var duration = wavesurfer.getDuration();
    document.getElementById('total-duration').innerText = formatTime(duration);
});

// Helper function to format time in mm:ss
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
