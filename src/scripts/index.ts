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

function isEmailValid(email: string) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
}

function setErro(
  inputGroup: HTMLElement,
  messageErrorElement: Element,
  message: string
) {
  inputGroup.classList.remove('success');
  inputGroup.classList.add('error');
  messageErrorElement.classList.remove('text-muted');
  messageErrorElement.innerHTML = message;
}

function setSuccess(inputGroup: HTMLElement, messageErrorElement: Element) {
  inputGroup.classList.remove('error');
  inputGroup.classList.add('success');
  messageErrorElement.classList.add('text-muted');
}
// validate form
function validate(element: HTMLInputElement | HTMLTextAreaElement) {
  const messageErrorElement = element.nextElementSibling;
  const inputGroup = element.parentElement;

  if (messageErrorElement && inputGroup) {
    if (element.id === 'email') {
      if (element.value !== '' && isEmailValid(element.value)) {
        setSuccess(inputGroup, messageErrorElement);
      } else {
        setErro(inputGroup, messageErrorElement, 'Preencha um email válido');
      }
    }

    if (element.id === 'name') {
      if (element.value !== '') {
        if (element.value.length > 3) {
          setSuccess(inputGroup, messageErrorElement);
        } else {
          setErro(
            inputGroup,
            messageErrorElement,
            'O nome precisa ter mais de 3 letras'
          );
        }
      } else {
        setErro(inputGroup, messageErrorElement, 'Campo obrigatório');
      }
    }

    if (element.id === 'message') {
      if (element.value !== '') {
        setSuccess(inputGroup, messageErrorElement);
      } else {
        setErro(inputGroup, messageErrorElement, 'Campo obrigatório');
      }
    }
  }
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

    const inputGroupEmail = inputEmail.parentElement;
    const inputGroupName = inputName.parentElement;
    const inputGroupTextare = textarea.parentElement;

    const inputsValid =
      inputGroupEmail?.classList.contains('success') ||
      inputGroupName?.classList.contains('success') ||
      inputGroupTextare?.classList.contains('success');

    if (inputsValid) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = 'ENVIANDO...';

      setTimeout(function () {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = 'MENSAGEM ENVIADA!';

        inputEmail.value = '';
        inputName.value = '';
        textarea.value = '';

        inputGroupEmail?.classList.remove('success');
        inputGroupName?.classList.remove('success');
        inputGroupTextare?.classList.remove('success');
      }, 3000);
    }
  }
});
