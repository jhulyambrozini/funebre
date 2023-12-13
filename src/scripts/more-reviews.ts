const moreReviewsItems = document.querySelector('.more__reviews-items');
const moreReviewsButton = document.querySelector('.more__reviews-button');

function toggleMoreReviews() {
  if (moreReviewsItems?.classList.contains('active')) {
    moreReviewsItems?.classList.remove('active');
    moreReviewsButton.innerHTML = 'MAIS AVALIAÇÕES';
  } else {
    moreReviewsItems?.classList.add('active');
    moreReviewsButton.innerHTML = 'MOSTRAR MENOS';
  }
}

moreReviewsButton?.addEventListener('click', toggleMoreReviews);
