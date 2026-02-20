document.addEventListener("DOMContentLoaded", function () {

gsap.registerPlugin(ScrollTrigger);

// PAGE LOAD TRANSITION
window.addEventListener("load", function () {

  const transition = document.querySelector(".page-transition");

  if (!transition) return;

  gsap.to(transition, {
    scaleY: 0,
    duration: 1,
    ease: "power4.out"
  });

});

/* Floating Orbs */
gsap.to(".orb1", {
  y: 60,
  x: 40,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".orb2", {
  y: -60,
  x: -40,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

/* Split Text */
const splitText = document.querySelector(".split-text");
if (splitText) {
  const chars = splitText.textContent.split("");
  splitText.innerHTML = chars.map(char =>
    `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
  ).join("");

  gsap.from(".char", {
    y: 100,
    opacity: 0,
    stagger: 0.02,
    duration: 1.2,
    ease: "power4.out"
  });
}

/* Counter */
gsap.utils.toArray(".counter").forEach(counter => {
  let target = +counter.getAttribute("data-target");
  gsap.to(counter, {
    innerText: target,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: counter,
      start: "top 80%"
    }
  });
});

/* Scroll Reveal */
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 1.2
  });
});

});