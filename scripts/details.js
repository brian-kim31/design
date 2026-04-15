function toggleNav() {
  const n = document.getElementById("nav");
  const s = document.getElementById("tsv");
  const slim = n.classList.toggle("slim");
  s.innerHTML = slim ? '<path d="M9 18l6-6-6-6"/>' : '<path d="M15 18l-6-6 6-6"/>';
}

function switchTab(el, id) {
  document.querySelectorAll(".tab").forEach(function (t) {
    t.classList.remove("on");
  });
  el.classList.add("on");
  document.querySelectorAll(".tab-content").forEach(function (c) {
    c.style.display = "none";
  });
  document.getElementById("tab-" + id).style.display = "block";
}

document.querySelectorAll(".c-opt").forEach(function (c) {
  c.addEventListener("click", function () {
    c.classList.toggle("on");
  });
});

document.querySelectorAll(".ni").forEach(function (i) {
  i.addEventListener("click", function () {
    document.querySelectorAll(".ni").forEach(function (x) {
      x.classList.remove("on");
    });
    i.classList.add("on");
  });
});

initThemeToggle("themeToggle", "themeLabel");
