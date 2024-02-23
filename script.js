// script.js
function setupCarousel(wrapperSelector, viewSelector, cardSelector) {
  const carouselWrapper = document.querySelector(wrapperSelector);
  const carouselCards = document.querySelectorAll(cardSelector);

  const totalCards = carouselCards.length;
  let currentIndex = 0;
  const cardsPerPage = 4; // Поменяйте это значение на 3, если вам нужно отображать 3 карточки на странице

  function showCards(startIndex) {
      carouselCards.forEach((card, i) => {
          const adjustedIndex = (startIndex + i) % totalCards;
          card.style.display = (i < cardsPerPage) ? 'block' : 'none';
          card.style.order = (adjustedIndex < cardsPerPage) ? adjustedIndex : '';
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalCards;
      showCards(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      showCards(currentIndex);
  }

  // Show first set of cards initially
  showCards(currentIndex);

  // Add event listeners for next and previous buttons
  document.querySelector(viewSelector).addEventListener('click', nextSlide);
}

// Setup carousel for jobs
setupCarousel('.carousel__wrapper', '.carousel__view', '.carousel__card');

// Setup carousel for companies
setupCarousel('.companies__wrapper', '.companies__view', '.companies__card');
