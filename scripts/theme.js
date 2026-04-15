function initThemeToggle(buttonId, labelId) {
  const root = document.documentElement;
  const themeBtn = document.getElementById(buttonId || "themeToggle");
  const themeLabel = labelId ? document.getElementById(labelId) : document.getElementById("themeLabel");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
    localStorage.setItem("theme", theme);
  }

  applyTheme(localStorage.getItem("theme") || "light");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }
}
