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

      const scrollY = getScrollY();
      const maxScroll = getMaxScroll();

      let progress = scrollY / maxScroll;
      progress = Math.min(Math.max(progress, 0), 1);

      const startAt = 0.55;
      let offset = 100;

      if (progress > startAt) {
        const seg = (progress - startAt) / (1 - startAt); 
        offset = 100 - seg * 100;
      }

      img.style.bottom = `-${offset}%`;
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
          src="/images/ui/footer.webp"
          className="img-responsive footer-parallax-img"
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
