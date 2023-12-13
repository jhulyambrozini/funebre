const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const carouselItems: NodeListOf<HTMLDivElement> =
  document.querySelectorAll('.carousel-item');
const carouselContainer: HTMLDivElement | null = document.querySelector(
  '.plans__carousel-mobile__items'
);

let currentIndex = 0;

nextButton?.addEventListener('click', () => {
  if (currentIndex === 1) return;
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

prevButton?.addEventListener('click', () => {
  if (currentIndex === 2) return;
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

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
