const ROUTES = {
  "/": "index.html",
  "/quiz": "quiz.html",
  "/stats": "stats.html"
};

function navigasi(path) {
  if (ROUTES[path]) {
    window.location.href = ROUTES[path];
  }
}

document.addEventListener("click", e => {
  const link = e.target.closest("[data-nav]");
  if (link) {
    e.preventDefault();
    navigasi(link.dataset.nav);
  }
});
