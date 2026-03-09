const welcomeModal = document.getElementById('welcomeModal');
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
  welcomeModal.setAttribute('aria-hidden', 'true');
});

document.getElementById('homeLink').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  welcomeModal.setAttribute('aria-hidden', 'false');
});