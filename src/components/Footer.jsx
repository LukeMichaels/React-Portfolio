// src/components/Footer.jsx
import { useEffect, useRef } from "react";

export default function Footer() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use .site-main if it actually scrolls, otherwise window
    let scrollContainer = document.querySelector(".site-main");
    const isScrollable =
      scrollContainer &&
      scrollContainer.scrollHeight > scrollContainer.clientHeight;

    if (!isScrollable) {
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

    const getMaxScroll = () => {
      if (scrollContainer === window) {
        const doc = document.documentElement;
        const body = document.body;
        const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight);
        return scrollHeight - window.innerHeight;
      }
      return scrollContainer.scrollHeight - scrollContainer.clientHeight;
    };

    const updateParallax = () => {
      ticking = false;

      if (window.innerWidth < 890) {
        img.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const scrollY = getScrollY();
      const maxScroll = getMaxScroll();
      if (maxScroll <= 0) {
        img.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      // progress: 0 at top, 1 at very bottom
      let progress = scrollY / maxScroll;
      progress = Math.min(Math.max(progress, 0), 1);

      // Move only in the lower portion of the page, e.g. last 40%
      const startAt = 0.6; // start parallax at 60% down the page
      let segProgress = 0;
      if (progress > startAt) {
        segProgress = (progress - startAt) / (1 - startAt); // 0..1
      }

      const maxOffset = 60; // px of movement; tweak as desired

      // At startAt: offset = -maxOffset (image higher)
      // At bottom:  offset = 0 (image settles into place)
      const offset = (segProgress - 1) * maxOffset;

      img.style.transform = `translate3d(0, ${offset}px, 0)`;
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

    // Initial placement
    updateParallax();

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      scrollContainer.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <footer className="site-footer" aria-label="Primary site footer">
        <img
          ref={imgRef}
          src="/images/ui/footer_cropped.webp"
          className="img-responsive footer-parallax-img"
          aria-hidden="true"
          loading="lazy"
          alt=""
        />
      </footer>
      <div className="copyright">
        <span className="mark">&copy;</span> {new Date().getFullYear()} Luke Michaels
      </div>
    </>
  );
}
