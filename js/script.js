/* ════════════════════════════════════════════════════
   HANNETTE STAACK BJJ — script.js
   ════════════════════════════════════════════════════ */

// ─── ACTIVE NAV LINK ON SCROLL ───────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ─── DYNAMIC YEAR IN FOOTER ──────────────────────
document.getElementById('ano').textContent = new Date().getFullYear();
