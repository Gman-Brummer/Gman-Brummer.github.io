window.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");
    includes.forEach(el => {
      const file = el.getAttribute("data-include");
      fetch(file)
        .then(res => res.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          el.innerHTML = "<p>Failed to load component.</p>";
          console.error("Include load error:", err);
        });
    });
  });
  