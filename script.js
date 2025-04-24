
let currentSlide = 0;
const slides = document.getElementsByClassName("logo-img");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function changeSlide(n) {
  currentSlide += n;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Initialize the slider
window.onload = function() {
  showSlide(currentSlide);
};
