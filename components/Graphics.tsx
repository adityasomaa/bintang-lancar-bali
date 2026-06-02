// Decorative SVG graphics used as image placeholders across the site.

export function HeroGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} role="img" aria-label="Ilustrasi layanan plumbing">
      <defs>
        <linearGradient id="hg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0c6fb0" />
          <stop offset="1" stopColor="#06283f" />
        </linearGradient>
        <linearGradient id="hg-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#19c7d6" />
          <stop offset="1" stopColor="#0c6fb0" />
        </linearGradient>
        <radialGradient id="hg-glow" cx="0.5" cy="0.35" r="0.6">
          <stop offset="0" stopColor="#19c7d6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#19c7d6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="520" height="520" rx="40" fill="url(#hg-bg)" />
      <circle cx="260" cy="200" r="220" fill="url(#hg-glow)" />

      {/* pipe system */}
      <g stroke="#9bd4f0" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.55">
        <path d="M70 120h120a40 40 0 0 1 40 40v110" />
        <path d="M450 150v120a40 40 0 0 1-40 40H300" />
        <path d="M120 430h150" />
      </g>
      <g stroke="#f7b500" strokeWidth="6" fill="none" strokeDasharray="2 16" strokeLinecap="round">
        <path d="M70 120h120a40 40 0 0 1 40 40v110" />
        <path d="M450 150v120a40 40 0 0 1-40 40H300" />
      </g>

      {/* central drop */}
      <g className="animate-floaty" style={{ transformOrigin: "260px 260px" }}>
        <path d="M260 130c44 56 80 96 80 142a80 80 0 0 1-160 0c0-46 36-86 80-142Z" fill="url(#hg-water)" />
        <path d="M226 250c-9 11-15 23-15 38a40 40 0 0 0 17 33" fill="none" stroke="#d3f6f9" strokeWidth="9" strokeLinecap="round" opacity="0.85" />
        {/* star */}
        <path d="M260 232l9 18 20 3-15 14 4 20-18-9-18 9 4-20-15-14 20-3 9-18Z" fill="#f7b500" />
      </g>

      {/* fittings */}
      <circle cx="70" cy="120" r="16" fill="#19c7d6" />
      <circle cx="450" cy="150" r="16" fill="#f7b500" />
      <circle cx="120" cy="430" r="12" fill="#9bd4f0" />
      <circle cx="270" cy="430" r="12" fill="#19c7d6" />
    </svg>
  );
}

const palettes = [
  ["#0c6fb0", "#06283f"],
  ["#19c7d6", "#0c6fb0"],
  ["#095688", "#06283f"],
  ["#0c6fb0", "#19c7d6"],
];

// Generic gallery / image placeholder with a plumbing-themed motif and label.
export function PlaceholderImage({
  index = 0,
  label,
  className = "",
}: {
  index?: number;
  label?: string;
  className?: string;
}) {
  const [a, b] = palettes[index % palettes.length];
  const gid = `ph-${index}`;
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label={label ?? "Placeholder"}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${gid})`} />
      <g opacity="0.18" stroke="#ffffff" strokeWidth="2" fill="none">
        <circle cx="60" cy="60" r="40" />
        <circle cx="60" cy="60" r="64" />
        <path d="M-20 240 Q 100 180 200 230 T 440 220" strokeWidth="3" />
        <path d="M-20 270 Q 120 210 230 260 T 440 250" strokeWidth="3" />
      </g>
      <g transform="translate(200 130)">
        <path d="M0 -46c18 23 33 39 33 58a33 33 0 0 1-66 0c0-19 15-35 33-58Z" fill="#ffffff" opacity="0.92" />
        <path d="M-14 40l4-12M2 44l4-14M16 38l3-10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        <path d="M0 8l5 10 11 1-8 8 2 11-10-6-10 6 2-11-8-8 11-1 5-10Z" fill="#f7b500" />
      </g>
      {label && (
        <text
          x="200"
          y="250"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#ffffff"
          opacity="0.95"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

// Soft blurred background blobs for sections.
export function Blob({ className = "", color = "#19c7d6" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M44 -64C58 -54 70 -44 75 -31C80 -17 78 0 72 15C66 30 56 43 43 53C30 63 15 70 -1 71C-17 73 -33 69 -47 60C-61 51 -72 37 -77 21C-82 5 -80 -13 -72 -28C-63 -43 -49 -55 -34 -64C-19 -73 -3 -79 11 -79C25 -79 30 -74 44 -64Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
