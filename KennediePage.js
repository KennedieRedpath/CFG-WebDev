
// Navigation Bar
function myFunction(x) {
    x.classList.toggle("change");
  }

// Slideshow
document.addEventListener("DOMContentLoaded", function() {
  const slideshowImages = document.querySelectorAll(".slideshow-image");
  let currentImageIndex = 0;
    
  setInterval(() => {
    slideshowImages[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    slideshowImages[currentImageIndex].classList.add("active");
  }, 2000);
});