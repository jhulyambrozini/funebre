const form = document.querySelector('form');
const submitButton: HTMLButtonElement | null =
  document.querySelector('#btnSubmit');

interface simulateApiCallsParams {
  inputName: HTMLInputElement;
  inputEmail: HTMLInputElement;
  textarea: HTMLTextAreaElement;
}

function formSubmit(event: SubmitEvent) {
  event.preventDefault();

  const inputName: HTMLInputElement | null = document.querySelector('#name');
  const inputEmail: HTMLInputElement | null = document.querySelector('#email');
  const textarea: HTMLTextAreaElement | null =
    document.querySelector('#message');

  if (inputEmail && inputName && textarea && submitButton) {
    validate(inputEmail);
    validate(inputName);
    validate(textarea);

    const inputGroupEmailIsValid =
      inputEmail.parentElement.classList.contains('success');
    const inputGroupNameIsValid =
      inputName.parentElement.classList.contains('success');
    const inputGroupTextareaIsValid =
      textarea.parentElement.classList.contains('success');

    const inputsValid =
      inputGroupEmailIsValid ||
      inputGroupNameIsValid ||
      inputGroupTextareaIsValid;

    if (inputsValid) {
      simulateApiCalls({ inputName, inputEmail, textarea });
    }
  }
}

function simulateApiCalls(params: simulateApiCallsParams) {
  submitButton.disabled = true;
  submitButton.setAttribute('aria-disabled', 'true');
  submitButton.innerHTML = 'ENVIANDO...';

  setTimeout(function () {
    submitButton.disabled = false;
    submitButton.setAttribute('aria-disabled', 'false');
    submitButton.innerHTML = 'MENSAGEM ENVIADA!';

    params.inputEmail.value = '';
    params.inputName.value = '';
    params.textarea.value = '';

    params.inputEmail.parentElement?.classList.remove('success');
    params.inputName.parentElement?.classList.remove('success');
    params.textarea.parentElement?.classList.remove('success');
  }, 3000);
}

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
  const input = inputGroup.children.item(1);
  input.ariaInvalid = 'true';
  inputGroup.classList.remove('success');
  inputGroup.classList.add('error');
  messageErrorElement.classList.remove('text-muted');
  messageErrorElement.innerHTML = message;
}

function setSuccess(inputGroup: HTMLElement, messageErrorElement: Element) {
  const input = inputGroup.children.item(1);
  input.ariaInvalid = 'false';
  inputGroup.classList.remove('error');
  inputGroup.classList.add('success');
  messageErrorElement.classList.add('text-muted');
}

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

function inputFocusValidate(e: FocusEvent) {
  const target = e.target as HTMLElement;
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement
  ) {
    validate(target);
  }
}

document.addEventListener('blur', inputFocusValidate, true);
form?.addEventListener('submit', formSubmit);
