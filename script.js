// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const nav = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const preloader = document.getElementById('preloader');

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

  // Initialize animated background using Vanta.js when available
  if (window.VANTA && typeof VANTA.NET === 'function') {
    VANTA.NET({
      el: '#hero',
      color: 0x62c2e5,
      backgroundColor: 0x050710,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 15.0
    });
  } else if (window.VANTA && typeof VANTA.WAVES === 'function') {
    // fallback to Waves effect if Net is unavailable
    VANTA.WAVES({
      el: '#hero',
      color: 0x62c2e5,
      shininess: 50,
      waveHeight: 20,
      waveSpeed: 0.4,
      zoom: 0.8
    });
  }

  // Hide preloader once the page and assets are fully loaded
  window.addEventListener('load', () => {
    if (preloader) {
      preloader.classList.add('hidden');
    }
  });
});