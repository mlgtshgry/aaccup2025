 gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".program-card",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".programs-section",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false // Remove this line after debugging
      }
    });