// ==============================
// GLOBAL SCROLL SYSTEM
// ==============================

gsap.registerPlugin(ScrollTrigger);

// Sync GSAP with Lenis
if (typeof lenis !== "undefined") {
  lenis.on("scroll", ScrollTrigger.update);
}

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
  ease: "power4.out"
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

// Subtle floating orbs motion
gsap.to(".orb1", {
  y: 40,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".orb2", {
  y: -40,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// ==============================
// GENERIC SECTION REVEAL SYSTEM
// ==============================

gsap.utils.toArray("section").forEach(section => {

  if (!section.classList.contains("hero")) {

    gsap.from(section.querySelectorAll("h2, p"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });

  }

});

// ==============================
// COUNTER ANIMATION
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
// ABOUT ANIMATION
// ==============================

gsap.from(".about-left", {
  scrollTrigger: {
    trigger: ".about-modern",
    start: "top 80%"
  },
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: ".about-modern",
    start: "top 70%"
  },
  y: 60,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});



// ===============================
// SERVICES ANIMATION
// ===============================

gsap.utils.toArray(".service-card-v2").forEach((card) => {

  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

});