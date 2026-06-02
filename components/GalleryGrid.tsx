"use client";

import { motion } from "framer-motion";
import { RevealGroup, itemVariants } from "./Reveal";
import { PlaceholderImage } from "./Graphics";

export default function GalleryGrid({ items }: { items: string[] }) {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((label, i) => (
        <motion.figure
          key={label}
          variants={itemVariants}
          className="group relative overflow-hidden rounded-3xl border border-line shadow-soft"
        >
          <PlaceholderImage
            index={i}
            label={label}
            className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {label}
          </figcaption>
        </motion.figure>
      ))}
    </RevealGroup>
  );
}
