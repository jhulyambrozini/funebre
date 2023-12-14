const servicesCards: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  '.services__cards__container'
);

function addDescription(event: MouseEvent) {
  const currentElement = event.currentTarget as HTMLDivElement;
  const currentElementDescription = currentElement.lastElementChild;

  currentElementDescription.classList.toggle('active');
}

servicesCards.forEach(item => {
  item.addEventListener('click', addDescription);
});
