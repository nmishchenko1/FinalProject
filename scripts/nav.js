// scripts/nav.js
document.addEventListener('DOMContentLoaded', () => {
  const navURL = 'https://nmishchenko1.github.io/FinalProject/pages/nav.html';

  fetch(navURL)
    .then(res => {
      if (!res.ok) throw new Error('Navigation fetch failed');
      return res.text();
    })
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;

      const toggle = document.querySelector('.toggle-button');
      const links = document.querySelector('.nav-links');
      if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('active'));
      }
    })
    .catch(err => console.error('Nav load error:', err));
});