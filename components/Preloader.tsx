"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "./Logo";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const startedAt = Date.now();
    const minDuration = 1500;

    // animate fake progress
    const tick = setInterval(() => {
      setProgress((p) => (p < 90 ? p + Math.max(1, (95 - p) * 0.08) : p));
    }, 90);

    const finish = () => {
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setDone(true), 350);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      clearInterval(tick);
      window.removeEventListener("load", finish);
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center gradient-brand"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-aqua/30" />
              <LogoMark className="h-20 w-20 drop-shadow-lg" animated />
            </div>
            <p className="mt-6 text-lg font-extrabold tracking-tight text-white">
              Bintang Lancar <span className="text-aqua-soft">Bali</span>
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-aqua-soft/80">
              Solusi Pipa &amp; WC Mampet
            </p>

            <div className="mt-7 h-1 w-52 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full rounded-full bg-gold"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <span className="mt-2 text-xs font-semibold tabular-nums text-white/70">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
