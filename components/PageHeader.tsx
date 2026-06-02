import Link from "next/link";
import { Blob } from "./Graphics";
import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  desc,
  crumb,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-brand pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <Blob className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 opacity-20" color="#19c7d6" />
      <Blob className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 opacity-10" color="#f7b500" />
      <div className="container-x relative text-center">
        <nav className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
          <Link href="/" className="transition-colors hover:text-gold">Beranda</Link>
          <span className="text-aqua">/</span>
          <span className="text-gold">{crumb}</span>
        </nav>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">{desc}</p>
        )}
      </div>
    </section>
  );
}
