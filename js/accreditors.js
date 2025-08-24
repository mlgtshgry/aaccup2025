document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".animation-section");

  sections.forEach(section => {
    const cards = section.querySelectorAll(".animation-card");

    // Hide cards initially
    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",       // start when section top reaches 80% viewport
        end: "bottom 20%",      // end point (optional)
        toggleActions: "play reverse play reverse", 
        markers: false
      }
    });
  });

  // Refresh after images/fonts load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
