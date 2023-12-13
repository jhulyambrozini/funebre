const menuMobileButton: HTMLButtonElement | null = document.querySelector(
  '.menu-mobile-button'
);
const menuMobileIcon: HTMLOrSVGImageElement | null =
  document.querySelector('#menu-mobile-icon');
const menuMobileList: HTMLDivElement | null =
  document.querySelector('.menu-mobile');

const menuMobileItemList: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.header__nav__menu-link');

function showMenuList(event: Event) {
  if (event.type === 'touchstart') event.preventDefault();

  menuMobileList?.classList.toggle('active');

  menuMobileButton?.setAttribute('aria-expanded', 'true');

  if (menuMobileList?.classList.contains('active')) openMenuList();
  else closeMenuList();
}

function openMenuList() {
  menuMobileButton?.setAttribute('aria-Label', 'Fechar menu');
  menuMobileIcon?.setAttribute('src', './src/assets/icons/close-menu-icon.svg');
}

function closeMenuList() {
  menuMobileButton?.setAttribute('aria-expanded', 'false');
  menuMobileIcon?.setAttribute('src', './src/assets/icons/menu-mobile.svg');
  menuMobileButton?.setAttribute('aria-Label', 'Abrir menu');

  if (menuMobileList?.classList.contains('active')) {
    menuMobileList.classList.remove('active');
  }
}

menuMobileButton?.addEventListener('click', showMenuList);
menuMobileButton?.addEventListener('touchstart', showMenuList);

menuMobileItemList.forEach(item => {
  item.addEventListener('click', closeMenuList);
});
