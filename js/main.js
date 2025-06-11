// Menu mobile
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
});

// Linha do tempo
const timelineSteps = document.querySelectorAll('.timeline__step');
const prevBtn = document.querySelector('.timeline__btn--prev');
const nextBtn = document.querySelector('.timeline__btn--next');
const indicators = document.querySelectorAll('.timeline__indicator');
let currentIndex = 0;

function updateTimeline() {
  timelineSteps.forEach(step => {
    step.classList.remove('timeline__step--active');
  });
  
  timelineSteps[currentIndex].classList.add('timeline__step--active');
  
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('timeline__indicator--active');
    } else {
      indicator.classList.remove('timeline__indicator--active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + timelineSteps.length) % timelineSteps.length;
  updateTimeline();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % timelineSteps.length;
  updateTimeline();
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    currentIndex = parseInt(indicator.getAttribute('data-index'));
    updateTimeline();
  });
});

updateTimeline();