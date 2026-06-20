const ROUTES = {
  "#/": { page: "page-dashboard", init: "initDashboard" },
  "#/quiz": { page: "page-quiz", init: "initQuiz" },
  "#/stats": { page: "page-stats", init: "initStats" },
  "#/flag-quiz": { page: "page-flag-quiz", init: "initFlagQuiz" }
};

function navigasi(path, fresh) {
  const hash = "#" + path;
  const route = ROUTES[hash];
  if (!route) return;
  if (hash === window.__currentHash && !fresh) return;

  if (window.__currentHash) {
    const prev = document.getElementById(ROUTES[window.__currentHash].page);
    if (prev) prev.classList.remove("aktif");
  }

  const page = document.getElementById(route.page);
  page.classList.add("aktif");

  window.__currentHash = hash;
  location.hash = hash;

  window[route.init](fresh);
}

window.addEventListener("hashchange", () => {
  const hash = location.hash || "#/";
  const route = ROUTES[hash];
  if (!route) return;
  if (hash === window.__currentHash) return;

  if (window.__currentHash) {
    const prev = document.getElementById(ROUTES[window.__currentHash].page);
    if (prev) prev.classList.remove("aktif");
  }

  const page = document.getElementById(route.page);
  page.classList.add("aktif");
  window.__currentHash = hash;

  window[route.init](false);
});

document.addEventListener("click", e => {
  const link = e.target.closest("[data-nav]");
  if (link) {
    e.preventDefault();
    navigasi(link.dataset.nav, false);
  }
});

// Boot — read hash to determine initial page
(function() {
  const hash = location.hash || "#/";
  const route = ROUTES[hash] || ROUTES["#/"];
  document.querySelectorAll(".page").forEach(p => p.classList.remove("aktif"));
  const page = document.getElementById(route.page);
  if (page) page.classList.add("aktif");
  window.__currentHash = hash;
})();
