// scripts/burger.js
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.closest(".toggle-button")) {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    }
  });
});