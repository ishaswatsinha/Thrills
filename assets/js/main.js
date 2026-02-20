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