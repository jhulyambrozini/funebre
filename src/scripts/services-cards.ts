const servicesCards: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  '.services__cards__container'
);

function addDescription(event: MouseEvent) {
  const currentElement = event.currentTarget as HTMLDivElement;
  const currentElementDescription = currentElement.lastElementChild?.innerHTML;

  const div = document.createElement('div');
  div.setAttribute('class', 'description-focused');

  if (currentElementDescription) div.innerHTML = currentElementDescription;

  // check if the card already has a description
  if (currentElement.children.length === 3) {
    currentElement.appendChild(div);
  } else {
    const divDescription = document.querySelectorAll('.description-focused')!;

    divDescription.forEach(element => {
      if (element.innerHTML == currentElementDescription)
        currentElement.removeChild(element);
    });
  }
}

servicesCards.forEach(item => {
  item.addEventListener('click', addDescription);
});
