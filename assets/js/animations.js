// =====================================
// GSAP INIT
// =====================================

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  markers: false
});

document.addEventListener("DOMContentLoaded", () => {

const ctx = gsap.context(() => {

// =====================================
// PAGE TRANSITION
// =====================================

if(document.querySelector(".page-transition")){
gsap.to(".page-transition",{
scaleY:0,
duration:1.2,
ease:"power4.inOut",
transformOrigin:"top"
});
}


// =====================================
// HERO ANIMATION
// =====================================

if(document.querySelector(".hero-title")){

const heroTL = gsap.timeline({defaults:{ease:"power3.out"}});

heroTL
.from(".hero-title",{y:80,opacity:0,duration:1})
.from(".hero-subtitle",{y:40,opacity:0,duration:.8},"-=0.6")
.from(".hero-buttons a",{y:20,opacity:0,stagger:.2,duration:.6},"-=0.4");

}


// =====================================
// GLOBAL SECTION REVEAL
// =====================================

gsap.utils.toArray("section").forEach(section=>{

if(section.classList.contains("hero")) return;

const targets = section.querySelectorAll("h2,p");

if(!targets.length) return;

gsap.from(targets,{
scrollTrigger:{
trigger:section,
start:"top 85%"
},
y:40,
opacity:0,
stagger:.12,
duration:.7,
ease:"power3.out"
});

});


// =====================================
// COUNTER ANIMATION
// =====================================

gsap.utils.toArray(".counter").forEach(counter=>{

const target = +counter.dataset.target;

gsap.to(counter,{
innerText:target,
duration:2,
snap:{innerText:1},
ease:"power2.out",
scrollTrigger:{
trigger:counter,
start:"top 90%"
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
y:50,
opacity:0,
stagger:.2,
duration:.9
});

gsap.to(".timeline-dot",{
scale:1.2,
repeat:-1,
yoyo:true,
duration:1.2,
ease:"sine.inOut"
});

}


// =====================================
// SERVICE CARDS
// =====================================

gsap.utils.toArray(".service-card-v2").forEach(card=>{

gsap.from(card,{
scrollTrigger:{
trigger:card,
start:"top 90%"
},
y:40,
opacity:0,
duration:.7
});

});


// =====================================
// WHY THRILLS
// =====================================

if(document.querySelector(".why-ai")){

gsap.from(".why-ai-left > *",{
scrollTrigger:{
trigger:".why-ai",
start:"top 80%"
},
y:40,
opacity:0,
stagger:.12,
duration:.8
});

gsap.from(".why-ai-image",{
scrollTrigger:{
trigger:".why-ai",
start:"top 80%"
},
x:60,
opacity:0,
duration:.9
});

}


// =====================================
// ABOUT HERO
// =====================================

if(document.querySelector(".about-hero")){

gsap.from(".about-hero-content h1",{
y:50,
opacity:0,
duration:1
});

gsap.from(".breadcrumb",{
y:20,
opacity:0,
delay:.3,
duration:.7
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
duration:.9
});

gsap.from(".mission-item",{
scrollTrigger:{
trigger:".about-mission",
start:"top 80%"
},
y:50,
opacity:0,
stagger:.2,
duration:.9
});

gsap.to(".mission-dot",{
scale:1.3,
repeat:-1,
yoyo:true,
duration:1.2
});

}


// =====================================
// FAQ SECTION
// =====================================

if(document.querySelector(".faq-section")){

gsap.from(".faq-images",{
scrollTrigger:{
trigger:".faq-section",
start:"top 80%"
},
x:-70,
opacity:0,
duration:.9
});

gsap.from(".faq-item",{
scrollTrigger:{
trigger:".faq-section",
start:"top 80%"
},
y:40,
opacity:0,
stagger:.12,
duration:.8
});

}


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

}); // end context

});