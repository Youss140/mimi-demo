// Scroll-driven hero: pin, shrink + round corners, fade/slide content out,
// then the next section slides up and covers the hero like a card.
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const heroPinWrap = document.querySelector('.hero-pin-wrap');
  const heroScale = document.querySelector('.hero-scale');
  const heroContent = document.querySelector('.hero-content');
  const heroScrollBadge = document.querySelector('.hero-pin-wrap .scroll-badge');

  if (heroPinWrap && heroScale) {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroPinWrap,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1
      }
    })
      .to(heroScale, { scale: 0.92, borderRadius: '32px', ease: 'none' }, 0)
      .to(heroContent, { opacity: 0, y: -70, ease: 'none' }, 0)
      .to(heroScrollBadge, { opacity: 0, ease: 'none' }, 0);
  }
}
