import Link from "next/link";
import { Logo } from "./Logo";
import { nav, services, site, waLink } from "@/lib/site";
import { IconWhatsApp, IconMail, IconPin, IconClock, IconPhone } from "./Icons";

export default function Footer() {
  const year = 2025;
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-900 text-brand-100">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <div className="container-x relative pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* brand */}
          <div>
            <Logo invert />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/80">
              {site.description}
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5"
            >
              <IconWhatsApp className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>

          {/* nav */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigasi</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-100/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Layanan</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/layanan" className="text-brand-100/80 transition-colors hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <a href={`tel:+${site.phoneIntl}`} className="hover:text-gold">{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-100/60 sm:flex-row">
          <p>© {year} {site.name}. Seluruh hak cipta dilindungi.</p>
          <p>Melayani sedot WC &amp; pipa mampet di seluruh Bali · Sejak {site.established}</p>
        </div>
      </div>
    </footer>
  );
}
