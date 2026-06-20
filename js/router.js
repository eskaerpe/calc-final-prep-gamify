const ROUTES = {
  "/": { page: "page-dashboard", init: "initDashboard" },
  "/quiz": { page: "page-quiz", init: "initQuiz" },
  "/stats": { page: "page-stats", init: "initStats" }
};

function navigasi(path, fresh) {
  const route = ROUTES[path];
  if (!route) return;
  if (path === window.__currentPath && !fresh) return;

  if (window.__currentPath) {
    const prev = document.getElementById(ROUTES[window.__currentPath].page);
    if (prev) prev.classList.remove("aktif");
  }

  const page = document.getElementById(route.page);
  page.classList.add("aktif");

  window.__currentPath = path;
  history.pushState({ path }, "", path);

  window[route.init](fresh);
}

window.addEventListener("popstate", e => {
  const path = e.state?.path || "/";
  const route = ROUTES[path];
  if (!route) return;

  if (window.__currentPath) {
    const prev = document.getElementById(ROUTES[window.__currentPath].page);
    if (prev) prev.classList.remove("aktif");
  }

  const page = document.getElementById(route.page);
  page.classList.add("aktif");
  window.__currentPath = path;

  window[route.init](false);
});

document.addEventListener("click", e => {
  const link = e.target.closest("[data-nav]");
  if (link) {
    e.preventDefault();
    navigasi(link.dataset.nav, false);
  }
});

// Restore on reload — check URL path
(function() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const route = ROUTES[path];
  if (route) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("aktif"));
    const page = document.getElementById(route.page);
    if (page) page.classList.add("aktif");
    window.__currentPath = path;
  }
})();
