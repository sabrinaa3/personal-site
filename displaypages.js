document.querySelectorAll('.top-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    const targetId = this.getAttribute('data-section');

    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    // Show the targeted section
    document.getElementById(targetId).style.display = 'block';
  });
});