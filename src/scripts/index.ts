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

////////////////////////////-----------SERVICES CARDS DESCRIPTIONS MOBILE------//////////////////////////////////////////
const serviceCards: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  '.services__cards__container'
);

serviceCards.forEach(item => {
  item.addEventListener('click', event => {
    const element = event.currentTarget as HTMLDivElement;
    const elementDescription = element.lastElementChild?.innerHTML;

    const div = document.createElement('div');
    div.setAttribute('class', 'description-focused');

    if (elementDescription) div.innerHTML = elementDescription;

    if (element.children.length === 3) {
      element.appendChild(div);
    } else {
      const div = document.querySelectorAll('.description-focused')!;

      div.forEach(elem => {
        if (elem.innerHTML == elementDescription) element.removeChild(elem);
      });
    }
  });
});

////////////////////////////-----------MORE REVIEWS------//////////////////////////////////////////
const moreReviews = document.querySelector('.more__reviews-items');
const moreReviewsButton = document.querySelector('.more__reviews-button');

moreReviewsButton?.addEventListener('click', () => {
  if (moreReviews?.classList.contains('active')) {
    moreReviews?.classList.remove('active');
    moreReviewsButton.innerHTML = 'MAIS AVALIAÇÕES';
  } else {
    moreReviews?.classList.add('active');
    moreReviewsButton.innerHTML = 'MOSTRAR MENOS';
  }
});

////////////////////////////-----------VALIDAÇÃO DO FORM------//////////////////////////////////////////
const form = document.querySelector('form');
const btnSubmit: HTMLButtonElement | null =
  document.querySelector('#btnSubmit');

// validate form
function validate(element: HTMLInputElement | HTMLTextAreaElement) {
  const messageErrorElement = element.nextElementSibling;

  if (messageErrorElement)
    if (element.value === '') {
      messageErrorElement.classList.remove('text-muted');
      messageErrorElement.innerHTML = 'Preencha este campo.';
      return false;
    } else {
      messageErrorElement.classList.add('text-muted');
      return true;
    }
  return false;
}

// validates the field when losing focus
document.addEventListener(
  'blur',
  function (e: FocusEvent) {
    const target = e.target as HTMLElement;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
    ) {
      validate(target);
    }
  },
  true
);

form?.addEventListener('submit', event => {
  event.preventDefault();

  const inputName: HTMLInputElement | null = document.querySelector('#name');
  const inputEmail: HTMLInputElement | null = document.querySelector('#email');
  const textarea: HTMLTextAreaElement | null =
    document.querySelector('#message');

  if (inputEmail && inputName && textarea && btnSubmit) {
    validate(inputEmail);
    validate(inputName);
    validate(textarea);

    if (validate(inputEmail) && validate(inputName) && validate(textarea)) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = 'ENVIANDO...';

      setTimeout(function () {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = 'MENSAGEM ENVIADA!';

        inputEmail.value = '';
        inputName.value = '';
        textarea.value = '';
      }, 3000);
    }
  }
});
