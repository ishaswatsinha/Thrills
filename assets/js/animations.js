// =====================================
// GSAP INIT
// =====================================

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
});

document.addEventListener("DOMContentLoaded", () => {


// =====================================
// PAGE TRANSITION
// =====================================

gsap.to(".page-transition", {
  scaleY: 0,
  duration: 1.2,
  ease: "power4.inOut",
  transformOrigin: "top"
});


// =====================================
// HERO ANIMATION
// =====================================

const heroTL = gsap.timeline({defaults:{ease:"power3.out"}});

heroTL
.from(".hero-title",{
  y:80,
  opacity:0,
  duration:1
})
.from(".hero-subtitle",{
  y:40,
  opacity:0,
  duration:.8
},"-=0.6")
.from(".hero-buttons a",{
  y:20,
  opacity:0,
  stagger:.2,
  duration:.6
},"-=0.4");


// =====================================
// GLOBAL SECTION TEXT REVEAL
// =====================================

gsap.utils.toArray("section").forEach(section => {

if(section.classList.contains("hero")) return;

const elements = section.querySelectorAll("h2, p");

if(!elements.length) return;

gsap.from(elements,{
scrollTrigger:{
trigger:section,
start:"top 85%"
},
y:50,
opacity:0,
stagger:.15,
duration:.8,
ease:"power3.out"
});

});


// =====================================
// COUNTER ANIMATION
// =====================================

gsap.utils.toArray(".counter").forEach(counter => {

const target = +counter.dataset.target;

gsap.to(counter,{
innerText:target,
duration:2,
snap:{innerText:1},
ease:"power2.out",
scrollTrigger:{
trigger:counter,
start:"top 85%"
}
});

});


// =====================================
// ABOUT SECTION
// =====================================

if(document.querySelector(".about-modern")){

gsap.from(".about-left",{
scrollTrigger:{
trigger:".about-modern",
start:"top 80%"
},
x:-80,
opacity:0,
duration:1
});

}


// =====================================
// TIMELINE
// =====================================

if(document.querySelector(".timeline-premium")){

gsap.from(".timeline-item",{
scrollTrigger:{
trigger:".timeline-premium",
start:"top 80%"
},
y:60,
opacity:0,
stagger:.25,
duration:1,
ease:"power3.out"
});

gsap.to(".timeline-dot",{
scale:1.3,
repeat:-1,
yoyo:true,
duration:1.4,
ease:"sine.inOut"
});

}


// =====================================
// SERVICE CARDS
// =====================================

gsap.utils.toArray(".service-card-v2").forEach(card => {

gsap.from(card,{
scrollTrigger:{
trigger:card,
start:"top 90%"
},
y:50,
opacity:0,
duration:.8
});

});


// =====================================
// WHY THRILLS SECTION
// =====================================

if(document.querySelector(".why-ai")){

gsap.utils.toArray(".why-ai-left > *").forEach((el,i)=>{

gsap.from(el,{
scrollTrigger:{
trigger:".why-ai",
start:"top 80%"
},
y:40,
opacity:0,
delay:i*0.1,
duration:.8
});

});

gsap.from(".why-ai-image",{
scrollTrigger:{
trigger:".why-ai",
start:"top 80%"
},
x:80,
opacity:0,
duration:1
});

}


// =====================================
// ABOUT HERO
// =====================================

if(document.querySelector(".about-hero")){

gsap.from(".about-hero-content h1",{
y:60,
opacity:0,
duration:1
});

gsap.from(".breadcrumb",{
y:20,
opacity:0,
delay:.3,
duration:.8
});

}


// =====================================
// MISSION SECTION
// =====================================

if(document.querySelector(".about-mission")){

gsap.from(".mission-left",{
scrollTrigger:{
trigger:".about-mission",
start:"top 80%"
},
x:-80,
opacity:0,
duration:1
});

gsap.from(".mission-item",{
scrollTrigger:{
trigger:".about-mission",
start:"top 80%"
},
y:60,
opacity:0,
stagger:.25,
duration:1
});

gsap.to(".mission-dot",{
scale:1.4,
repeat:-1,
yoyo:true,
duration:1.4
});

}


// =====================================
// APPROACH SECTION
// =====================================

// if(document.querySelector(".approach-section")){

// gsap.from(".approach-header",{
// scrollTrigger:{
// trigger:".approach-section",
// start:"top 80%"
// },
// y:60,
// opacity:0,
// duration:1
// });

// gsap.from(".approach-card",{
// scrollTrigger:{
// trigger:".approach-section",
// start:"top 80%"
// },
// y:70,
// opacity:0,
// stagger:.2,
// duration:1
// });

// }


// =====================================
// GLASS TILT EFFECT
// =====================================

const tilt = document.querySelector(".cap-container");

if(tilt){

let tx=0, ty=0, cx=0, cy=0;

tilt.addEventListener("mousemove",(e)=>{

const rect = tilt.getBoundingClientRect();

tx=((e.clientX-rect.left)/rect.width-.5)*8;
ty=((e.clientY-rect.top)/rect.height-.5)*-8;

});

tilt.addEventListener("mouseleave",()=>{
tx=0;
ty=0;
});

gsap.ticker.add(()=>{

cx+=(tx-cx)*0.06;
cy+=(ty-cy)*0.06;

tilt.style.transform=
`perspective(1000px) rotateY(${cx}deg) rotateX(${cy}deg)`;

});

}




// =====================================
// FINAL REFRESH
// =====================================

ScrollTrigger.refresh();

});