// src/components/GalaxyBackground.jsx
import { useEffect, useRef, useState } from "react";

export default function GalaxyBackground() {
  const canvasRef = useRef(null);
  const MIN_WIDTH = 1080;
  const [isLargeViewport, setIsLargeViewport] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= MIN_WIDTH : false
  );

  useEffect(() => {
    function handleResizeWidth() {
      setIsLargeViewport(window.innerWidth >= MIN_WIDTH);
    }
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  useEffect(() => {
    if (!isLargeViewport) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    let stars = [];
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let animationFrameId;
    let resizeTimeout;
    let lastTimestamp = null;

    let prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let isVisible = document.visibilityState !== "hidden";

    const STAR_COUNT = 550;
    const MAX_RADIUS_FACTOR = 0.75;
    const BASE_SPEED = 0.005; // radians per second

    const PARALLAX_STRENGTH = 40;
    let mouseNormX = 0;
    let mouseNormY = 0;
    let cameraOffsetX = 0;
    let cameraOffsetY = 0;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      centerX = width / 2;
      centerY = height / 2;
      initStars();
    }

    function initStars() {
      stars = [];
      const maxRadius = Math.min(width, height) * MAX_RADIUS_FACTOR;
      const minRadius = maxRadius * 0.15;

      for (let i = 0; i < STAR_COUNT; i++) {
        const t = Math.random();
        const r = Math.sqrt(t);
        const radius = minRadius + r * (maxRadius - minRadius);
        const speedFactor = (radius - minRadius) / (maxRadius - minRadius);
        const speed = BASE_SPEED + speedFactor * BASE_SPEED * 1.8;
        const angle = Math.random() * Math.PI * 2;

        const hueBase = 220;
        const hueRange = 40;
        const hue =
          hueBase +
          (Math.random() * hueRange - hueRange / 2) +
          speedFactor * 10;
        const saturation = 60 + Math.random() * 15;
        const lightness = 65 + Math.random() * 20;
        const size = 0.7 + Math.random() * 1.3;

        stars.push({ angle, radius, speed, hue, saturation, lightness, size });
      }
    }

    function drawBackground() {
      ctx.globalCompositeOperation = "source-over";
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(width, height)
      );
      gradient.addColorStop(0, "rgba(15, 20, 64, 1)");
      gradient.addColorStop(0.35, "rgba(10, 10, 35, 1)");
      gradient.addColorStop(1, "rgba(2, 3, 14, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStar(star) {
      const x = centerX + cameraOffsetX + Math.cos(star.angle) * star.radius;
      const y = centerY + cameraOffsetY + Math.sin(star.angle) * star.radius;
      const r = star.size;

      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
      grad.addColorStop(0, `hsla(${star.hue}, ${star.saturation}%, ${star.lightness}%, 1)`);
      grad.addColorStop(1, `hsla(${star.hue}, ${star.saturation}%, ${star.lightness + 10}%, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    function renderFrame(timestamp) {
      const delta = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const targetX = mouseNormX * PARALLAX_STRENGTH;
      const targetY = mouseNormY * PARALLAX_STRENGTH;
      cameraOffsetX += (targetX - cameraOffsetX) * 0.05;
      cameraOffsetY += (targetY - cameraOffsetY) * 0.05;

      drawBackground();

      ctx.globalCompositeOperation = "lighter";
      for (const star of stars) {
        star.angle += star.speed * delta;
        drawStar(star);
      }

      animationFrameId = requestAnimationFrame(renderFrame);
    }

    function renderStatic() {
      lastTimestamp = null;
      drawBackground();
      ctx.globalCompositeOperation = "lighter";
      for (const star of stars) drawStar(star);
    }

    function start() {
      cancelAnimationFrame(animationFrameId);
      lastTimestamp = null;
      if (prefersReduced || !isVisible) {
        renderStatic();
      } else {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    }

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => { resizeCanvas(); start(); }, 150);
    }

    function handleMouseMove(e) {
      if (prefersReduced) return;
      const rect = canvas.getBoundingClientRect();
      mouseNormX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseNormY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    function handleVisibilityChange() {
      isVisible = !document.hidden;
      if (!isVisible) {
        cancelAnimationFrame(animationFrameId);
        renderStatic();
      } else {
        start();
      }
    }

    function handleMotionChange(e) {
      prefersReduced = e.matches;
      start();
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    motionQuery?.addEventListener("change", handleMotionChange);

    resizeCanvas();
    start();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery?.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, [isLargeViewport]);

  if (!isLargeViewport) return null;

  return <canvas ref={canvasRef} className="galaxy-bg" aria-hidden="true" />;
}