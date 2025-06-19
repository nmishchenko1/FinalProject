document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");
  if (placeholder) {
    const src = placeholder.getAttribute("data-src") || "pages/nav.html";
    fetch(src)
      .then((res) => res.text())
      .then((data) => {
        placeholder.innerHTML = data;
      })
      .catch((err) => {
        console.error("Navigation load error:", err);
      });
  }
});