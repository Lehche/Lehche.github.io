const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const clock = document.getElementById("clock");
const visits = document.getElementById("visits");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
}

let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {}
applyTheme(saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

toggle.addEventListener("click", function () {
  applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

function tick() {
  clock.textContent = "Your local time: " + new Date().toLocaleString();
}
tick();
setInterval(tick, 1000);

try {
  const count = Number(localStorage.getItem("visits") || 0) + 1;
  localStorage.setItem("visits", count);
  visits.textContent = "Visits from this browser: " + count;
} catch (e) {}
