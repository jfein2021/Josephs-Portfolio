// 1. Grab the sprite element using the ID "sprite-character" from your HTML
const sprite = document.getElementById("sprite-character");

// 2. Grab the main title as our clickable trigger
const clickTarget = document.getElementById("portfolio-title");

// Only run the code if both elements are found on the page
if (sprite && clickTarget) {
  clickTarget.addEventListener("click", () => {
    // If it's already walking, don't trigger it again
    if (sprite.classList.contains("walking")) return;

    // Start the animation!
    sprite.classList.add("walking");

    // Remove the class once it finishes walking off-screen (5 seconds)
    setTimeout(() => {
      sprite.classList.remove("walking");
    }, 5000); 
  });
}