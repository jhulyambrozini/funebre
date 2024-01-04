const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const carouselItems: NodeListOf<HTMLDivElement> =
  document.querySelectorAll('.carousel-item');
const carouselContainer: HTMLDivElement | null = document.querySelector(
  '.plans__carousel-mobile__items'
);

let currentIndex = 0;
let touchStartX: number | null = null;
let moving = false;

nextButton?.addEventListener('click', nextSlide);

prevButton?.addEventListener('click', prevSlide);

window.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;

  moving = true;
});

window.addEventListener('touchmove', e => {
  // console.log(e.target);
  if (moving) {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 10) prevSlide();
    else if (deltaX < -10) nextSlide();

    touchStartX = null;
  }
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

function updateCarousel() {
  if (carouselContainer) {
    if (currentIndex === 2) {
      let newPosition = 280;
      carouselContainer.style.transform = `translateX(${newPosition}px)`;
    } else {
      let newPosition = -currentIndex * 280;
      carouselContainer.style.transform = `translateX(${newPosition}px)`;
    }
  }
}
