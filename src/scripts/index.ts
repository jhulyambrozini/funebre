////////////////////////////-----------MENU MOBILE------//////////////////////////////////////////
const menuMobileButton: HTMLButtonElement | null = document.querySelector(
  '.menu-mobile-button'
);
const menuMobileIcon: HTMLOrSVGImageElement | null =
  document.querySelector('#menu-mobile-icon');
const menuMobileList: HTMLDivElement | null =
  document.querySelector('.menu-mobile');

const menuMobileLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.header__nav__menu-link');

const exibemenulinks = (event: Event) => {
  if (event.type === 'touchstart') event.preventDefault();
  menuMobileList?.classList.toggle('active');
  menuMobileButton?.setAttribute('aria-expanded', 'true');
  if (menuMobileList?.classList.contains('active')) {
    menuMobileButton?.setAttribute('aria-Label', 'Fechar menu');
    menuMobileIcon?.setAttribute(
      'src',
      './src/assets/icons/close-menu-icon.svg'
    );
  } else {
    menuMobileButton?.setAttribute('aria-expanded', 'false');
    menuMobileIcon?.setAttribute('src', './src/assets/icons/menu-mobile.svg');
  }
};

const closeMenuList = () => {
  if (menuMobileList?.classList.contains('active')) {
    menuMobileList.classList.remove('active');
    menuMobileButton?.setAttribute('aria-expanded', 'false');
    menuMobileIcon?.setAttribute('src', './src/assets/icons/menu-mobile.svg');
  }
};

menuMobileButton?.addEventListener('click', exibemenulinks);
menuMobileButton?.addEventListener('touchstart', exibemenulinks);

menuMobileLinks.forEach(item => {
  item.addEventListener('click', closeMenuList);
});

////////////////////////////-----------CAROULSEl PLANS------//////////////////////////////////////////
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
  updateSlider();
});

prevButton?.addEventListener('click', () => {
  if (currentIndex === 2) return;
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateSlider();
});

function updateSlider() {
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
