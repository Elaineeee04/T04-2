document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('header nav a');
  const logo = document.querySelector('header img');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page') + '.html';
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pageToLoad = link.getAttribute('data-page') + '.html';
      window.location.href = pageToLoad;
    });

    link.addEventListener('mouseover', () => {
      if (!link.classList.contains('active')) {
        link.style.color = '#e67e22';
      }
    });

    link.addEventListener('mouseout', () => {
      if (!link.classList.contains('active')) {
        link.style.color = '#333';
      }
    });
  });

  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});