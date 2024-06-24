let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.prev').addEventListener('click', showPrevImage);
document.querySelector('.next').addEventListener('click', showNextImage);

function showPrevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
  updateCarousel();
}

function showNextImage() {
  currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}

function updateCarousel() {
  const carouselWidth = document.querySelector('.carousel').clientWidth;
  const newTransformValue = -carouselWidth * currentIndex;
  document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}px)`;
}