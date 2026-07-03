// Pequeño detalle: resalta el link de navegación de la sección visible
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a');

const setActive = () => {
  let current = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent-cyan)' : '';
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
