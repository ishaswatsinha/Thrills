document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll (Lenis)
    const lenis = new Lenis({
        duration: 1.2,
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

});

// Add Mobile Menu JS

document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const overlay = document.querySelector(".menu-overlay");
  const body = document.body;

  if (!toggle) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  overlay.addEventListener("click", function () {
    toggle.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  });

  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function () {
      toggle.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

});