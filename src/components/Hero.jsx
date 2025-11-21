// src/components/Hero.jsx
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // FIND THE REAL SCROLL CONTAINER
    let scrollContainer = document.querySelector(".site-main");

    // Check if .site-main is actually scrollable
    const isScrollable =
      scrollContainer &&
      scrollContainer.scrollHeight > scrollContainer.clientHeight;

    if (!isScrollable) {
      // fall back to the real page scroll element
      scrollContainer = window;
    }

    let ticking = false;

    const getScrollY = () => {
      if (scrollContainer === window) {
        return (
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          0
        );
      }

      return scrollContainer.scrollTop || 0;
    };

    const updateParallax = () => {
      ticking = false;

      // Match SCSS: disable on small screens
      if (window.innerWidth < 890) {
        img.style.transform = "translate3d(-50%, 0, 0)";
        return;
      }

      const scrolled = getScrollY();
      const offset = scrolled * 0.3;

      img.style.transform = `translate3d(-50%, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const onResize = () => {
      ticking = false;
      updateParallax();
    };

    updateParallax();

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      scrollContainer.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="hero" aria-hidden="true">
      <img
        ref={imgRef}
        className="parallax-img"
        src="/images/header.webp"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}
