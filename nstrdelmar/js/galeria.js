const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = slider.children.length - 1;
  } else {
    currentIndex--;
  }
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex === slider.children.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

window.addEventListener('resize', () => {
  currentIndex = 0;
  updateSlider();
});