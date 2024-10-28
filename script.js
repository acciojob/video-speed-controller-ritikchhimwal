const video = document.querySelector('.viewer');
const playPauseButton = document.getElementById('playPause');
const volumeSlider = document.getElementById('volume');
const playbackSpeedSlider = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const progress = document.querySelector('.progress');
const progressFilled = document.getElementById('progressFilled');

// Play/Pause Toggle
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    updatePlayButton();
}

// Update Play Button Icon
function updatePlayButton() {
    playPauseButton.textContent = video.paused ? '►' : '❚ ❚';
}

// Volume Control
function handleVolume() {
    video.volume = volumeSlider.value;
}

// Playback Speed Control
function handlePlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}

// Rewind 10 Seconds
function rewind() {
    video.currentTime -= 10;
}

// Forward 25 Seconds
function forward() {
    video.currentTime += 25;
}

// Update Progress Bar
function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Scrub through the video
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Event Listeners
video.addEventListener('click', togglePlay);
playPauseButton.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', updateProgressBar);

volumeSlider.addEventListener('input', handleVolume);
playbackSpeedSlider.addEventListener('input', handlePlaybackSpeed);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);

progress.addEventListener('click', scrub);
