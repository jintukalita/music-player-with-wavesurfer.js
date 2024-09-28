
# Custom Audio Player with WaveSurfer.js

A modern, visually appealing audio player built with HTML, CSS, and JavaScript using the WaveSurfer.js library for generating waveforms. This player comes with interactive playback controls, a dynamic waveform visualization, and a sleek design that includes album artwork with a gradient overlay for readability.

## Features

- **Waveform Visualization**: Displays a dynamic waveform that visualizes the audio track, powered by WaveSurfer.js.
- **Play, Pause, Rewind, and Fast-Forward Controls**: Easy to use playback controls to play, pause, skip forward or backward through the track.
- **Volume Control**: Adjust the volume directly within the player using a slider.
- **Gradient Overlay on Album Art**: A smooth gradient is applied to the album artwork, ensuring that the bottom of the image is subtly faded for better text visibility.
- **Responsive Design**: The player is designed to work well across both desktop and mobile devices.

## Technologies Used

- **HTML5**: Markup for structuring the player and UI components.
- **CSS3**: Styling for the player, including gradient overlays, buttons, and waveform customization.
- **JavaScript (ES6)**: Used for controlling the player’s functionality and interaction with the WaveSurfer.js library.
- **WaveSurfer.js**: A powerful library for generating customizable waveforms for audio files.

## Setup

To use this player locally or in your project, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/custom-audio-player.git
cd custom-audio-player
```

### 2. Include WaveSurfer.js

Make sure you are loading WaveSurfer.js from a CDN in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/4.6.0/wavesurfer.min.js"></script>
```

### 3. Structure of the Files

- `index.html`: Contains the markup structure for the player.
- `styles.css`: Contains the custom styles for the player, including the gradient overlay and control button designs.
- `script.js`: JavaScript logic for managing the playback controls, volume, and waveform visualization.

### 4. How to Run

Open the `index.html` file in a web browser to view and interact with the audio player. 

### 5. Modify for Your Own Audio File

To use your own audio file, replace the audio file URL in the `script.js` file:

```javascript
// Load your audio file
wavesurfer.load('YOUR_AUDIO_FILE_URL.mp3');
```

Replace the URL with the location of your own `.mp3` file, and the player will automatically load your track.

## Code Overview

### HTML Structure

```html
<div class="audio-player-container">
    <div class="player-title">
        <span class="player-title-text">Custom Player with WaveSurfer.js</span>
    </div>

    <!-- Album Artwork as Background -->
    <div class="album-art"></div>

    <!-- Track Information -->
    <div class="audio-info">
        <span class="track-title">One Of The Girls</span>
        <span class="artist-name">The Weeknd, JENNIE, and Lily-Rose Depp</span>
    </div>

    <!-- Waveform -->
    <div id="waveform"></div>

    <!-- Time and Progress -->
    <div class="time-info">
        <span id="current-time">0:00</span>
        <span id="total-duration">0:00</span>
    </div>

    <!-- Volume Control -->
    <div class="volume-control">
        <label for="volume">Volume:</label>
        <input type="range" id="volume" min="0" max="1" step="0.01" value="1">
    </div>

    <!-- Audio Controls -->
    <div class="audio-controls">
        <button id="rewind" class="control-btn">...</button>
        <button id="play-button" class="play-btn control-btn">...</button>
        <button id="pause-button" class="pause-btn control-btn" style="display: none;">...</button>
        <button id="fast-forward" class="control-btn">...</button>
    </div>
</div>
```

### JavaScript Functionality

```javascript
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#007bff',
    progressColor: '#0056b3',
    barWidth: 2,
    height: 30,
    responsive: true,
    hideScrollbar: true,
});

wavesurfer.load('https://ik.imagekit.io/n1cw2npd4/One%20Of%20The%20Girls%20(with%20JENNIE,%20Lily%20Rose%20Depp)%20-%20%20The%20Weeknd,%20JENNIE,%20and%20Lily-Rose%20Depp.mp3');

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
```

### CSS Styling

The player is styled with custom CSS, and includes an overlay gradient on the album art for better visibility:

```css
.album-art::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    z-index: 1;
    pointer-events: none;
}
```

## Customization

- You can replace the album artwork and song information with your own content.
- The CSS styles can be modified to change the look of the player to suit your preferences.
- You can add additional controls like shuffle, repeat, or playlist functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
