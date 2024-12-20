<script>
  document.querySelector('.hamburger-menu i').addEventListener('click', () => {
    const nav = document.querySelector('.dropdown-nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
</script>
