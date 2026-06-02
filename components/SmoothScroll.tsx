"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll — DESKTOP ONLY.
 * Activated only when the viewport is >= 1024px AND uses a fine pointer
 * (mouse). Tablets and phones keep native scrolling for best touch feel.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    let lenis: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };

    const sync = () => (mql.matches ? start() : stop());

    sync();
    mql.addEventListener("change", sync);
    return () => {
      mql.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return null;
}
