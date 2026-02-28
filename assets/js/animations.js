// ==============================
// INIT
// ==============================

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
});

// ==============================
// PAGE LOAD REVEAL
// ==============================

window.addEventListener("load", () => {

  gsap.to(".page-transition", {
    scaleY: 0,
    duration: 1.2,
    ease: "power4.inOut",
    transformOrigin: "top"
  });

});

// ==============================
// HERO ANIMATION
// ==============================

gsap.timeline()
.from(".hero-title", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  force3D: true
})
.from(".hero-subtitle", {
  y: 40,
  opacity: 0,
  duration: 0.8
}, "-=0.6")
.from(".hero-buttons a", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6
}, "-=0.4");

// Floating Orbs (GPU accelerated)
gsap.to(".orb1", {
  y: 40,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  force3D: true
});

gsap.to(".orb2", {
  y: -40,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  force3D: true
});

// ==============================
// SECTION REVEALS
// ==============================

gsap.utils.toArray("section").forEach(section => {

  if (!section.classList.contains("hero")) {

    const elements = section.querySelectorAll("h2, p");

    if (elements.length) {
      gsap.from(elements, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%"
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        force3D: true
      });
    }

  }

});

// ==============================
// COUNTERS
// ==============================

gsap.utils.toArray(".counter").forEach(counter => {

  let target = +counter.getAttribute("data-target");

  gsap.to(counter, {
    innerText: target,
    duration: 2,
    ease: "power2.out",
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: counter,
      start: "top 85%"
    }
  });

});

// ==============================
// ABOUT SECTION ANIMATIONS
// ==============================

gsap.from(".about-left", {
  scrollTrigger: {
    trigger: ".about-modern",
    start: "top 85%"
  },
  x: -80,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  force3D: true
});

gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: ".about-modern",
    start: "top 75%"
  },
  y: 50,
  opacity: 0,
  stagger: 0.25,
  duration: 0.9,
  ease: "power3.out",
  force3D: true
});

// ==============================
// SERVICE CARD REVEAL
// ==============================

gsap.utils.toArray(".service-card-v2").forEach((card) => {

  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    force3D: true
  });

});

// ==============================
// GLASS CONTAINER TILT (GSAP TICKER)
// ==============================

(function () {

  const container = document.querySelector(".cap-container");
  if (!container) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  container.addEventListener("mousemove", (e) => {

    const rect = container.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * -8;

  });

  container.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  gsap.ticker.add(() => {

    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    container.style.transform =
      `perspective(1000px)
       rotateY(${currentX}deg)
       rotateX(${currentY}deg)
       translateZ(0)`;

  });

})();