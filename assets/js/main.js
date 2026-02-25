document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     LENIS SMOOTH SCROLL
  ========================= */

  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  /* Sync Lenis with GSAP ScrollTrigger */
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /* =========================
     PREMIUM MOBILE MENU
  ========================= */

  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const overlay = document.querySelector(".menu-overlay");
  const body = document.body;

  if (toggle && navMenu && overlay) {

    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll("nav ul li a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    function closeMenu() {
      toggle.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("menu-open");
    }

  }

});

// ==============================
// HERO TYPING ANIMATION
// ==============================

document.addEventListener("DOMContentLoaded", function () {

  const texts = [
    "Digital Growth Engines",
    "AI-Powered Marketing Systems",
    "High-Performance Web Platforms"
  ];

  const typedText = document.getElementById("typed-text");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {
      typedText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1500);
      }

    } else {
      typedText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

});