// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const nav = document.getElementById('navbar');
  const hero = document.querySelector('.hero');

  // IntersectionObserver for sections
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => observer.observe(section));

  // Toggle navbar visibility based on scroll position
  const toggleNav = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 80) {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  };

  window.addEventListener('scroll', toggleNav);
  toggleNav();

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
