"use client";

import { motion } from "framer-motion";
import { site, waLink } from "@/lib/site";
import { HeroGraphic, Blob } from "./Graphics";
import { Button, StarRow } from "./ui";
import { IconCheck, IconClock, IconShield, IconBolt } from "./Icons";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const badges = [
  { icon: IconBolt, label: "Respons Cepat" },
  { icon: IconShield, label: "Bergaransi" },
  { icon: IconClock, label: "Siap 24 Jam" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <Blob className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] opacity-20" color="#19c7d6" />
      <Blob className="pointer-events-none absolute -left-40 top-40 h-96 w-96 opacity-10" color="#0c6fb0" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div>
          <motion.span
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand shadow-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
            </span>
            Melayani Seluruh Bali · Sejak {site.established}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.6rem]"
          >
            Solusi <span className="gradient-text">Pipa &amp; WC Mampet</span>{" "}
            di Bali, Cepat &amp; Bergaransi
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Jasa sedot WC, atasi saluran mampet, dan kuras septic tank profesional.
            Ditangani teknisi berpengalaman dengan alat modern — bersih, rapi, dan siap 24 jam.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={waLink()} external variant="gold" withArrow>
              Pesan via WhatsApp
            </Button>
            <Button href="/layanan" variant="outline">
              Lihat Layanan
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {badges.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <b.icon className="h-5 w-5 text-brand" />
                {b.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroGraphic className="w-full drop-shadow-2xl" />

          {/* floating rating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:left-0"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-soft text-gold">
              <StarRow count={1} className="!gap-0" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-ink">4.9 / 5.0</p>
              <p className="text-xs text-ink-soft">Ribuan pelanggan puas</p>
            </div>
          </motion.div>

          {/* floating guarantee card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -right-1 top-6 flex items-center gap-2 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-right-4"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand">
              <IconCheck className="h-5 w-5" />
            </span>
            <p className="text-xs font-bold text-ink">
              Pengerjaan
              <br />
              Bergaransi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
