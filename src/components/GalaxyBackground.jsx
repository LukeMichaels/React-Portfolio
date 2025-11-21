// src/components/GalaxyBackground.jsx
import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
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

    // Motion preferences
    let prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const STAR_COUNT = 550;
    const MAX_RADIUS_FACTOR = 0.75;
    const BASE_SPEED = 0.0004;

    // Parallax variables
    const PARALLAX_STRENGTH = 40; // px max offset
    let mouseNormX = 0; // -1 to 1
    let mouseNormY = 0; // -1 to 1
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

      const maxRadius =
        (Math.sqrt(width * width + height * height) / 2) * MAX_RADIUS_FACTOR;

      for (let i = 0; i < STAR_COUNT; i++) {
        const t = Math.random();
        const radius = Math.pow(t, 0.5) * maxRadius;
        const angle = Math.random() * Math.PI * 2;

        const size = 0.7 + Math.random() * 1.8;
        const speed = BASE_SPEED * (0.3 + Math.random() * 1.7);

        const hueOptions = [210, 230, 260, 290, 320];
        const hue = hueOptions[Math.floor(Math.random() * hueOptions.length)];
        const saturation = 60 + Math.random() * 20;
        const lightness = 60 + Math.random() * 20;

        stars.push({ radius, angle, size, speed, hue, saturation, lightness });
      }
    }

    function drawBackground() {
      const gradient = ctx.createRadialGradient(
        centerX + cameraOffsetX * 0.5, // slight parallax of background center
        centerY + cameraOffsetY * 0.5,
        0,
        centerX + cameraOffsetX * 0.5,
        centerY + cameraOffsetY * 0.5,
        Math.max(width, height)
      );

      gradient.addColorStop(0, "#050814");
      gradient.addColorStop(0.6, "#040612");
      gradient.addColorStop(1, "#03040f");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStar(star) {
      // Apply camera/parallax offset
      const x = centerX + cameraOffsetX + Math.cos(star.angle) * star.radius;
      const y = centerY + cameraOffsetY + Math.sin(star.angle) * star.radius;
      const r = star.size;

      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
      const core = `hsla(${star.hue}, ${star.saturation}%, ${star.lightness}%, 1)`;
      const glow = `hsla(${star.hue}, ${star.saturation}%, ${
        star.lightness + 10
      }%, 0)`;

      grad.addColorStop(0, core);
      grad.addColorStop(1, glow);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    function renderFrame() {
      // Smoothly move camera offset toward mouse target
      const targetX = mouseNormX * PARALLAX_STRENGTH;
      const targetY = mouseNormY * PARALLAX_STRENGTH;
      const lerpFactor = 0.05;

      cameraOffsetX += (targetX - cameraOffsetX) * lerpFactor;
      cameraOffsetY += (targetY - cameraOffsetY) * lerpFactor;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(2, 3, 14, 0.35)";
      ctx.fillRect(0, 0, width, height);

      drawBackground();

      ctx.globalCompositeOperation = "lighter";

      for (const star of stars) {
        if (!prefersReduced) {
          star.angle += star.speed;
        }
        drawStar(star);
      }

      if (!prefersReduced) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    }

    function renderStatic() {
      // Static but still parallax-capable — we’ll just draw once
      ctx.clearRect(0, 0, width, height);
      drawBackground();
      ctx.globalCompositeOperation = "lighter";
      for (const star of stars) {
        drawStar(star);
      }
    }

    function start() {
      cancelAnimationFrame(animationFrameId);
      if (prefersReduced) {
        renderStatic();
      } else {
        renderFrame();
      }
    }

    // Resize handler
    let resizeTimeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        start();
      }, 150);
    }

    // Mouse move handler for parallax
    function handleMouseMove(e) {
      if (prefersReduced) return; // respect reduced motion fully

      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0–1
      const y = (e.clientY - rect.top) / rect.height; // 0–1

      mouseNormX = (x - 0.5) * 2; // -1 to 1
      mouseNormY = (y - 0.5) * 2; // -1 to 1
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Reduced motion watcher
    let motionQuery;
    let handleMotionChange;
    if (window.matchMedia) {
      motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      handleMotionChange = (e) => {
        prefersReduced = e.matches;
        start();
      };
      motionQuery.addEventListener("change", handleMotionChange);
    }

    resizeCanvas();
    start();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (motionQuery && handleMotionChange) {
        motionQuery.removeEventListener("change", handleMotionChange);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="galaxy-bg" aria-hidden="true"></canvas>;
}
