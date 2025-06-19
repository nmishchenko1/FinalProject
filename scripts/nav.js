// scripts/nav.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://nmishchenko1.github.io/FinalProject/pages/nav.html')
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