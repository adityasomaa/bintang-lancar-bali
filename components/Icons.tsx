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
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
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
