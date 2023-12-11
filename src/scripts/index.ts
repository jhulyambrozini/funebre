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
  item.addEventListener('touchstart', closeMenuList);
  item.addEventListener('click', closeMenuList);
});
