// src/components/Hero/Hero.jsx
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Detect the scroll container:
    // - If `.site-main` is scrollable, use that
    // - Otherwise fall back to window
    const scrollElement =
      document.querySelector(".site-main") || window;

    const isWindow = scrollElement === window;

    const getScrollY = () => {
      if (isWindow) {
        return window.scrollY || window.pageYOffset || 0;
      } else {
        return scrollElement.scrollTop || 0;
      }
    };

    const updateParallax = () => {
      // Disable parallax under 890px (match your SCSS)
      if (window.innerWidth < 890) {
        img.style.transform = "translate(-50%, 0px)";
        return;
      }

      const scrolled = getScrollY();
      const offset = scrolled * 0.3; // parallax strength

      img.style.transform = `translate(-50%, ${offset}px)`;
    };

    const handleScroll = () => {
      updateParallax();
    };

    const handleResize = () => {
      if (window.innerWidth < 890) {
        img.style.transform = "translate(-50%, 0px)";
      } else {
        updateParallax();
      }
    };

    // Initial styles
    img.style.transform = "translate(-50%, 0px)";
    handleResize();

    // Attach listeners
    scrollElement.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
