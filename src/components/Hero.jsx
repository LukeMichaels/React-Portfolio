// src/components/Hero.jsx
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollContainer;
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

      return scrollContainer?.scrollTop || 0;
    };

    const updateParallax = () => {
      ticking = false;

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

    const detachListeners = () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", onScroll);
      }

      window.removeEventListener("resize", onResize);
      scrollContainer = undefined;
      ticking = false;
    };

    const attachListeners = () => {
      scrollContainer = document.querySelector(".site-main");

      const isScrollable =
        scrollContainer &&
        scrollContainer.scrollHeight > scrollContainer.clientHeight;

      if (!isScrollable) {
        scrollContainer = window;
      }

      updateParallax();

      scrollContainer.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
    };

    const handleMotionPreference = () => {
      detachListeners();

      if (mediaQuery.matches) {
        img.style.transform = "translate3d(-50%, 0, 0)";
        return;
      }

      attachListeners();
    };

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      detachListeners();
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <section className="hero" aria-hidden="true">
      <img
        ref={imgRef}
        className="parallax-img"
        src="/images/ui/Header_1080.webp"
        srcSet="/images/ui/Header_1080.webp 1x, /images/ui/Header_2160.webp 2x"
        alt=""
        aria-hidden="true"
        loading="eager"
      />
    </section>
  );
}
