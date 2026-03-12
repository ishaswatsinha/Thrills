document.addEventListener("DOMContentLoaded", function () {

  /* ==================================================
     PREMIUM MOBILE MENU
  ================================================== */

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


  /* ==================================================
     HERO TYPING ANIMATION
  ================================================== */

  const texts = [
    "Digital Growth Engines",
    "AI-Powered Marketing Systems",
    "High-Performance Web Platforms"
  ];

  const typedText = document.getElementById("typed-text");

  if (typedText) {

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

      setTimeout(typeEffect, isDeleting ? 50 : 90);
    }

    typeEffect();
  }


  /* ==================================================
     SERVICE CARD 3D TILT
  ================================================== */

  // const serviceCards = document.querySelectorAll(".service-card");

  // serviceCards.forEach(card => {

  //   card.addEventListener("mousemove", (e) => {

  //     const rect = card.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;

  //     const centerX = rect.width / 2;
  //     const centerY = rect.height / 2;

  //     const rotateX = (y - centerY) / 18;
  //     const rotateY = (centerX - x) / 18;

  //     card.style.transform =
  //       `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  //   });

  //   card.addEventListener("mouseleave", () => {
  //     card.style.transform =
  //       "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  //   });

  // });


  /* ==================================================
     SMOOTH ARROW MORPH
  ================================================== */

  document.querySelectorAll(".service-card-v2").forEach(card => {

    const path = card.querySelector(".arrow-path");
    if (!path) return;

    const diagonal = "M7 17L17 7M17 7H9M17 7V15";
    const horizontal = "M5 12H19M13 6L19 12L13 18";

    card.addEventListener("mouseenter", () => {
      gsap.to(path, {
        duration: 0.45,
        attr: { d: horizontal },
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(path, {
        duration: 0.45,
        attr: { d: diagonal },
        ease: "power2.out"
      });
    });

  });

});



/* ==================================================
   Industries We Serve - Scroll Animations
================================================== */


window.addEventListener("load", () => {

  const track = document.querySelector(".marquee-track");
  if (!track) return;

  // Duplicate cards once
  const originalCards = Array.from(track.children);
  originalCards.forEach(card => {
    track.appendChild(card.cloneNode(true));
  });

  // Create tween
  const tween = gsap.to(track, {
    xPercent: -50,
    duration: 25,
    ease: "none",
    repeat: -1
  });

  // IMPORTANT: Attach hover AFTER duplication
  const allCards = document.querySelectorAll(".marquee-card");

  allCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
      tween.pause();
    });

    card.addEventListener("mouseleave", () => {
      tween.resume();
    });

  });

});

/* ==================================================
   LOGO MARQUEE
================================================== */

// window.addEventListener("load", () => {

//   const track = document.querySelector(".logo-track");
//   if (!track) return;

//   const logos = Array.from(track.children);
//   logos.forEach(logo => track.appendChild(logo.cloneNode(true)));

//   gsap.to(track, {
//     xPercent: -50,
//     duration: 25,
//     ease: "linear",
//     repeat: -1
//   });

// });


/* ==================================================
   CAPABILITIES SCROLL SYSTEM (STEP SCROLL VERSION)
================================================== */

window.addEventListener("load", () => {

  const track = document.querySelector(".cap-track");
  if (!track) return;

  // Duplicate once for seamless infinite loop
  const items = Array.from(track.children);
  items.forEach(item => track.appendChild(item.cloneNode(true)));

  // How much to move per step (adjust if needed)
  const movePercent = 25; // moves ~2 cards (depends on layout)

  const tl = gsap.timeline({ repeat: -1 });

  tl.to(track, {
      xPercent: `-=${movePercent}`,
      duration: 2.2,
      ease: "power2.inOut"
    })
    .to({}, { duration: 2 }) // PAUSE
    .to(track, {
      xPercent: `-=${movePercent}`,
      duration: 2.2,
      ease: "power2.inOut"
    })
    .to({}, { duration: 2 });

});



/* =========================
FAQ SECTION
========================= */

document.querySelectorAll(".faq-question").forEach(btn => {

btn.addEventListener("click", () => {

const item = btn.parentElement;

document.querySelectorAll(".faq-item").forEach(el => {

if(el !== item){
el.classList.remove("active");
el.querySelector(".faq-icon").textContent="+";
}

});

item.classList.toggle("active");

const icon = item.querySelector(".faq-icon");

icon.textContent = item.classList.contains("active") ? "−" : "+";

});

});