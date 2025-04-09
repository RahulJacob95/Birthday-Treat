document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-audio");
    let playButton = document.getElementById("play-audio");

    // Attempt autoplay
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction...");
            playButton.style.display = "block"; // Show button if autoplay fails
        });
    }

    // Play on button click if autoplay is blocked
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Hide button after playing
    });
});
