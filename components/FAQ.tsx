"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/site";
import { IconPlus } from "./Icons";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-white shadow-soft">
      {faqs.map((item, i) => {
        const active = open === i;
        return (
          <div key={i} className="px-5 sm:px-7">
            <button
              type="button"
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={active}
            >
              <span className={`text-base font-bold sm:text-lg ${active ? "text-brand" : "text-ink"}`}>
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  active ? "rotate-45 bg-brand text-white" : "bg-brand-50 text-brand"
                }`}
              >
                <IconPlus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-ink-soft sm:text-base">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
