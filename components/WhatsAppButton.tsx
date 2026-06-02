"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi via WhatsApp"
          className="group fixed bottom-5 right-5 z-[85] inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-sm font-bold text-white shadow-card"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.04 }}
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
          <IconWhatsApp className="h-6 w-6" />
          <span className="hidden sm:inline">Butuh Bantuan?</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
