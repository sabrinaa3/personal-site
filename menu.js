function toggleMenu() {
  const menu = document.querySelector('.dropdown-nav');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  
  // Toggle the dropdown visibility
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  
  // Hide the dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = 'none';
    }
  });
}