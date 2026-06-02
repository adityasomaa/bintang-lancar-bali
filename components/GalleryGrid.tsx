"use client";

import { motion } from "framer-motion";
import { RevealGroup, itemVariants } from "./Reveal";
import Photo from "./Photo";

export default function GalleryGrid({ items }: { items: { src: string; label: string }[] }) {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.figure
          key={item.src}
          variants={itemVariants}
          className="group relative overflow-hidden rounded-3xl border border-line shadow-soft"
        >
          <Photo
            src={item.src}
            alt={item.label}
            aspect="aspect-[4/3]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-4 text-sm font-bold text-white">
            {item.label}
          </figcaption>
        </motion.figure>
      ))}
    </RevealGroup>
  );
}
