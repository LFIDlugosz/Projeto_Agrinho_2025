// Validação do formulário
const feedbackForm = document.getElementById('feedback-form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const sugestaoInput = document.getElementById('sugestao');
const nomeError = document.getElementById('nome-error');
const emailError = document.getElementById('email-error');
const sugestaoError = document.getElementById('sugestao-error');
const formSuccess = document.getElementById('form-success');

function validateNome() {
  if (nomeInput.value.trim() === '') {
    nomeError.textContent = 'Por favor, insira seu nome.';
    return false;
  }
  nomeError.textContent = '';
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Por favor, insira um e-mail válido.';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validateSugestao() {
  if (sugestaoInput.value.trim().length < 20) {
    sugestaoError.textContent = 'Sua opinião deve ter pelo menos 20 caracteres.';
    return false;
  }
  sugestaoError.textContent = '';
  return true;
}

nomeInput.addEventListener('input', validateNome);
emailInput.addEventListener('input', validateEmail);
sugestaoInput.addEventListener('input', validateSugestao);

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isNomeValid = validateNome();
  const isEmailValid = validateEmail();
  const isSugestaoValid = validateSugestao();
  
  if (isNomeValid && isEmailValid && isSugestaoValid) {
    formSuccess.textContent = 'Obrigado pelo seu feedback! Sua opinião foi enviada com sucesso.';
    
    setTimeout(() => {
      feedbackForm.reset();
      formSuccess.textContent = '';
    }, 5000);
  }
});

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