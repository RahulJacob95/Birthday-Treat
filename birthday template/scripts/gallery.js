document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("gallery-image");

    let imageIndex = 1; // Start from r1.jpg
    const totalImages = 14;

    function showNextImage() {
        if (imageIndex <= totalImages) {
            imageElement.src = `assets/r${imageIndex}.jpg`;
            imageElement.style.opacity = 0; // Fade out effect
            setTimeout(() => {
                imageElement.style.opacity = 1; // Fade in effect
            }, 500);
            imageIndex++;
            setTimeout(showNextImage, 2000); // Change image every 2 seconds
        }
    }

    showNextImage(); // Start slideshow
});
