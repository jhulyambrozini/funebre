const menuMobileIcon = document.querySelector('.menu-mobile-icon');
const menuMobileLinks: HTMLUListElement | null = document.querySelector(
  '.menu-mobile .header__nav__menu'
);

const exibemenulinks = () => {
  console.log('clcik');
  if (menuMobileLinks) {
    if (menuMobileLinks.style.display === 'block') {
      menuMobileLinks.style.display = 'none';
    } else {
      menuMobileLinks.style.display = 'block';
    }
  }
};

menuMobileIcon?.addEventListener('click', exibemenulinks);
