document.querySelectorAll('nav a, .top-nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    let targetId;

    // Check for data-section attribute first, else use href
    if (link.hasAttribute('data-section')) {
      targetId = link.getAttribute('data-section');
    } else {
      targetId = link.getAttribute('href').replace('#', '');
    }

    // Show the targeted section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});
