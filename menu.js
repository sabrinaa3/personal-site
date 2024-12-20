document.querySelector('.hamburger-menu i').addEventListener('click', function() {
  const nav = document.querySelector('.dropdown-nav');
  nav.classList.toggle('visible');
});