document.addEventListener("mousemove", function(e) {
    gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });

    gsap.to(".cursor-follower", {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3
    });
});