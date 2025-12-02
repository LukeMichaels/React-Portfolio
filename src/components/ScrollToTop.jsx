// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    );
    const shouldReduceMotion = reduceMotionQuery?.matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [location.key]);

  return null;
}
