import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ---- Service icons ---- */
export function IconDrain(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 6c0 4 1.5 7 8 7s8-3 8-7" />
      <path d="M8 13v5M12 13v6M16 13v5" />
      <path d="M6 21h12" />
    </svg>
  );
}
export function IconToilet(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 4h7v5H6z" />
      <path d="M5 9h13a0 0 0 0 1 0 0 6 6 0 0 1-6 6H9a4 4 0 0 1-4-4V9Z" />
      <path d="M9 15l-1 5h6l-1-3" />
    </svg>
  );
}
export function IconSink(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M10 7h4" />
      <path d="M4 11h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M12 7v4" />
      <path d="M9 21l1-3M15 21l-1-3" />
    </svg>
  );
}
export function IconTap(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 10h6V8a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4h-2" />
      <path d="M9 10v2H3v-2" />
      <path d="M6 12v3a3 3 0 0 0 6 0" />
      <path d="M16 12c1.5 1.5 1.5 3 0 4.5" />
    </svg>
  );
}
export function IconSeptic(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="9" width="18" height="11" rx="2" />
      <path d="M3 13h18" />
      <path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      <path d="M8 16h2M14 16h2" />
    </svg>
  );
}
export function IconRepair(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.9 4.4l-5.3 5.3a2 2 0 0 0 2.8 2.8l5.3-5.3a3.5 3.5 0 0 0 4.4-4.9l-2 2-2-2 1.7-2.3Z" />
    </svg>
  );
}

export const serviceIcons = {
  drain: IconDrain,
  toilet: IconToilet,
  sink: IconSink,
  tap: IconTap,
  septic: IconSeptic,
  repair: IconRepair,
};

/* ---- Feature / utility icons ---- */
export function IconBolt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
    </svg>
  );
}
export function IconBadge(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m9 12 2 2 4-4" />
      <path d="M12 3l2.5 1.6 3-.2.9 2.9 2.3 1.9-1.3 2.7 1.3 2.7-2.3 1.9-.9 2.9-3-.2L12 21l-2.5-1.6-3 .2-.9-2.9L3.3 15l1.3-2.7L3.3 9.6 5.6 7.7l.9-2.9 3 .2L12 3Z" />
    </svg>
  );
}
export function IconTools(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-2.3 2.5-2.5Z" />
    </svg>
  );
}
export function IconTag(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </svg>
  );
}
export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export const featureIcons = {
  bolt: IconBolt,
  badge: IconBadge,
  tools: IconTools,
  tag: IconTag,
  shield: IconShield,
  clock: IconClock,
};

/* ---- UI icons ---- */
export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
export function IconWhatsApp(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.74c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.24-4.3c0-4.46 3.63-8.1 8.1-8.1Zm-2.27 4.5c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.62 2.62 1.03 3.16.83 3.73.78.57-.05 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.13-.29-.21-.6-.36-.31-.16-1.84-.91-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.02-.55-.08-.16-.69-1.69-.95-2.31-.25-.61-.5-.53-.69-.54l-.59-.01Z" />
    </svg>
  );
}
export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 4 4 10-11" />
    </svg>
  );
}
export function IconStar(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}
export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
export function IconClose(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
export function IconPlus(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
