"use client";

import Link from "next/link";
import {
  advantages,
  services,
  steps,
  testimonials,
  stats,
  serviceAreas,
  waLink,
} from "@/lib/site";
import { serviceIcons, featureIcons, IconArrow, IconCheck, IconPin } from "./Icons";
import { Reveal, RevealGroup, itemVariants } from "./Reveal";
import { SectionHeading, Button, StarRow, Eyebrow } from "./ui";
import { Blob } from "./Graphics";
import { motion } from "framer-motion";

/* ---------- Stats strip ---------- */
export function StatsStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4 ${dark ? "bg-white/10" : "bg-line"}`}>
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i}
          className={`flex flex-col items-center justify-center px-4 py-7 text-center ${dark ? "bg-brand-900" : "bg-white"}`}
        >
          <span className={`text-3xl font-extrabold tracking-tight md:text-4xl ${dark ? "text-gold" : "gradient-text"}`}>
            {s.value}
          </span>
          <span className={`mt-1 text-xs font-semibold uppercase tracking-wider ${dark ? "text-brand-100/70" : "text-ink-soft"}`}>
            {s.label}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Services grid ---------- */
export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const list = showAll ? services : services.slice(0, 6);
  return (
    <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => {
        const Icon = serviceIcons[s.icon];
        return (
          <motion.article
            key={s.slug}
            variants={itemVariants}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-aqua-soft/60 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white shadow-soft">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="relative mt-5 text-lg font-bold text-ink">{s.title}</h3>
            <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            <ul className="relative mt-4 space-y-1.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs font-semibold text-ink-soft">
                  <IconCheck className="h-4 w-4 text-aqua" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/layanan"
              className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-all group-hover:gap-2.5"
            >
              Selengkapnya <IconArrow className="h-4 w-4" />
            </Link>
          </motion.article>
        );
      })}
    </RevealGroup>
  );
}

/* ---------- Why us ---------- */
export function WhyUs() {
  return (
    <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {advantages.map((a) => {
        const Icon = featureIcons[a.icon];
        return (
          <motion.div
            key={a.title}
            variants={itemVariants}
            className="flex gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand/30"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-ink">{a.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </RevealGroup>
  );
}

/* ---------- Steps ---------- */
export function StepsSection() {
  return (
    <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <motion.div key={s.no} variants={itemVariants} className="relative rounded-3xl border border-line bg-white p-6 shadow-soft">
          <span className="text-5xl font-extrabold text-brand-100">{s.no}</span>
          <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  return (
    <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <motion.figure
          key={t.name}
          variants={itemVariants}
          className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft"
        >
          <StarRow count={t.rating} />
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">“{t.text}”</blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
            <span className="grid h-10 w-10 place-items-center rounded-full gradient-brand text-sm font-bold text-white">
              {t.name.charAt(0)}
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">{t.name}</span>
              <span className="block text-xs text-ink-soft">{t.role}</span>
            </span>
          </figcaption>
        </motion.figure>
      ))}
    </RevealGroup>
  );
}

/* ---------- Service areas ---------- */
export function ServiceAreasSection() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-2.5">
      {serviceAreas.map((area, i) => (
        <Reveal
          key={area}
          delay={i % 8}
          as="span"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-soft shadow-soft"
        >
          <IconPin className="h-4 w-4 text-aqua" />
          {area}
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- FAQ wrapper ---------- */
export { default as FAQ } from "./FAQ";

/* ---------- CTA band ---------- */
export function CtaBand() {
  return (
    <section className="container-x">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] gradient-brand px-6 py-14 text-center shadow-card md:px-16 md:py-20">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
        <Blob className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 opacity-20" color="#19c7d6" />
        <Blob className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 opacity-20" color="#f7b500" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance md:text-4xl">
            Pipa atau WC Mampet? Tenang, Kami Siap 24 Jam.
          </h2>
          <p className="mt-4 text-base text-brand-100">
            Hubungi sekarang untuk konsultasi gratis dan respons cepat di seluruh Bali.
            Pengerjaan profesional dan bergaransi.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={waLink()} external variant="gold" withArrow>
              Chat WhatsApp Sekarang
            </Button>
            <Button href="/kontak" variant="outline" className="!border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
              Lihat Kontak Lengkap
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Section wrapper helpers ---------- */
export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-x py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export { SectionHeading, Eyebrow };
