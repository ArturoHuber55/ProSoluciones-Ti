window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (!menuToggle) return;

  menuToggle.checked = false;

  window.addEventListener('scroll', () => {
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  });

  const menuLinks = document.querySelectorAll('nav ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });

  
  document.addEventListener('touchstart', (e) => {
    const nav = document.querySelector('nav');
    if (menuToggle.checked && !nav.contains(e.target)) {
      menuToggle.checked = false;
    }
  }, { passive: true }); 
});
