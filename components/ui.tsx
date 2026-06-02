import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrow, IconStar } from "./Icons";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "gold" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  withArrow?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  withArrow = false,
}: ButtonProps) {
  const styles: Record<string, string> = {
    primary:
      "bg-brand text-white shadow-soft hover:bg-brand-700 hover:-translate-y-0.5",
    gold: "bg-gold text-ink shadow-soft hover:brightness-105 hover:-translate-y-0.5",
    outline:
      "border border-brand/30 text-brand bg-white/60 hover:bg-brand-50 hover:border-brand/50",
    ghost: "text-ink hover:text-brand",
  };
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${styles[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {withArrow && (
        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.6rem] md:leading-[1.1] ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed ${invert ? "text-brand-100" : "text-ink-soft"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

export function StarRow({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 text-gold ${className}`} aria-label={`${count} dari 5 bintang`}>
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}
