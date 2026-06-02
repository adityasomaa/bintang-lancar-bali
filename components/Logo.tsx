import { site } from "@/lib/site";

export function LogoMark({ className = "", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-drop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#19c7d6" />
          <stop offset="1" stopColor="#0c6fb0" />
        </linearGradient>
      </defs>
      {/* water drop */}
      <path
        d="M24 4c6 7.5 11 13.2 11 19.4A11 11 0 0 1 24 34a11 11 0 0 1-11-10.6C13 17.2 18 11.5 24 4Z"
        fill="url(#lm-drop)"
      />
      {/* shine */}
      <path d="M20 17c-1.6 1.8-2.6 3.7-2.6 6.1A6.6 6.6 0 0 0 20 28.4" fill="none" stroke="#d3f6f9" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      {/* star */}
      <path
        d="M24 14.5l1.7 3.5 3.8.5-2.8 2.7.7 3.8L24 23.2l-3.4 1.8.7-3.8-2.8-2.7 3.8-.5L24 14.5Z"
        fill="#f7b500"
        className={animated ? "animate-floaty" : ""}
        style={{ transformOrigin: "24px 20px" }}
      />
    </svg>
  );
}

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-tight ${invert ? "text-white" : "text-ink"}`}>
          Bintang Lancar
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.22em] ${invert ? "text-aqua-soft" : "text-brand"}`}>
          Bali
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
