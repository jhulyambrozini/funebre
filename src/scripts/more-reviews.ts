const moreReviewsItems = document.querySelector('.more__reviews-items');
const moreReviewsButton = document.querySelector('.more__reviews-button');

function toggleMoreReviews() {
  moreReviewsItems.classList.toggle('active');

  if (moreReviewsItems?.classList.contains('active')) {
    moreReviewsButton.innerHTML = 'MOSTRAR MENOS';
    moreReviewsButton.ariaExpanded = 'true';
  } else {
    moreReviewsButton.innerHTML = 'MAIS AVALIAÇÕES';
    moreReviewsButton.ariaExpanded = 'false';
  }
}

moreReviewsButton?.addEventListener('click', toggleMoreReviews);
