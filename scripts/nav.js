document.addEventListener('DOMContentLoaded', () => {
  const isRoot = location.pathname.endsWith('index.html') || location.pathname === '/FinalProject/';
  const navPath = isRoot ? 'pages/nav.html' : 'nav.html';

  fetch(navPath)
    .then(res => res.text())
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;

      const toggle = document.querySelector('.toggle-button');
      const links = document.querySelector('.nav-links');
      if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('active'));
      }
    });
});