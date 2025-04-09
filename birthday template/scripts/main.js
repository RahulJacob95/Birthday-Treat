const text = "Rushdha, I didn't love you because I was lacking company or because I was bored and needed a timepass. \n\nIt was far from it. I was happy in my own world and my own solitude, but then YOU appeared. \n\nIt wasn’t just a spark, but a blaze that burned so well that darkness was no longer my companion. \n\nAnd even if loving you would break me, I would still choose you in every lifetime, because loving you was the best thing I ever did.";
let index = 0;
const speed = 50; // Speed of typing effect

function typeEffect() {
    if (index < text.length) {
        document.getElementById("thoughts").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
