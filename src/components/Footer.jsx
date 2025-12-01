// src/components/Footer.jsx
import { useEffect, useRef } from "react";

export default function Footer() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    let ticking = false;

    const getScrollY = () =>
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;

    const getMaxScroll = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight);
      return scrollHeight - window.innerHeight;
    };

    const updateParallax = () => {
      ticking = false;

      if (window.innerWidth < 890) {
        img.style.transform = "translate3d(-50%, 0, 0)";
        return;
      }

      const maxScroll = getMaxScroll();
      const scrollY = getScrollY();

      if (maxScroll <= 0) {
        img.style.transform = "translate3d(-50%, 0, 0)";
        return;
      }

      let progress = scrollY / maxScroll;
      progress = Math.min(Math.max(progress, 0), 1);

      const startAt = 0.55;
      const BASE_OFFSET = -40;
      let offset = BASE_OFFSET;

      if (progress > startAt) {
        const seg = (progress - startAt) / (1 - startAt); // 0..1
        offset = BASE_OFFSET * (1 - seg);
      }

      img.style.transform = `translate3d(-50%, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    const onResize = () => {
      ticking = false;
      updateParallax();
    };

    updateParallax();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <footer aria-label="Primary site footer">
        <img
          ref={imgRef}
          className="img-responsive footer-parallax-img"
          src="/images/ui/footer.webp"
          srcSet="/images/ui/Footer_1080.webp 1x, /images/ui/Footer_2160.webp 2x"
          alt=""
          aria-hidden="true"
        />
      </footer>
      <div className="copyright">
        <span className="mark">&copy;</span> {new Date().getFullYear()} Luke Michaels
      </div>
    </>
  );
}
