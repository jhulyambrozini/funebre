const menuMobileButton: HTMLButtonElement | null = document.querySelector(
  '.menu-mobile-button'
);
const menuMobileIcon: HTMLOrSVGImageElement | null =
  document.querySelector('#menu-mobile-icon');
const menuMobileList: HTMLDivElement | null =
  document.querySelector('.menu-mobile');

const menuMobileListItem: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.header__nav__menu-link');

function showMenuMobileList(event: Event) {
  if (event.type === 'touchstart') event.preventDefault();

  menuMobileList?.classList.toggle('active');

  menuMobileButton?.setAttribute('aria-expanded', 'true');

  if (menuMobileList?.classList.contains('active')) {
    menuMobileButton?.setAttribute('aria-Label', 'Fechar menu');
    menuMobileIcon?.setAttribute(
      'src',
      './src/assets/icons/close-menu-icon.svg'
    );
  } else closeMenuList();
}

function closeMenuList() {
  menuMobileButton?.setAttribute('aria-expanded', 'false');
  menuMobileIcon?.setAttribute('src', './src/assets/icons/menu-mobile.svg');
  menuMobileButton?.setAttribute('aria-Label', 'Abrir menu');

  if (menuMobileList?.classList.contains('active')) {
    menuMobileList.classList.remove('active');
  }
}

menuMobileButton?.addEventListener('click', showMenuMobileList);
menuMobileButton?.addEventListener('touchstart', showMenuMobileList);

menuMobileListItem.forEach(item => {
  item.addEventListener('click', closeMenuList);
});
