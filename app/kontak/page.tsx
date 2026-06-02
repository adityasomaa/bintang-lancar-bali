import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/sections";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/lib/site";
import { IconWhatsApp, IconPhone, IconMail, IconPin, IconClock } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} untuk jasa sedot WC & pipa mampet di Bali. WhatsApp ${site.phoneDisplay}, siap 24 jam.`,
};

const contacts = [
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: waLink(),
    accent: true,
  },
  { icon: IconPhone, label: "Telepon", value: site.phoneDisplay, href: `tel:+${site.phoneIntl}` },
  { icon: IconMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function KontakPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
  return (
    <>
      <PageHeader
        crumb="Kontak"
        eyebrow="Hubungi Kami"
        title={<>Siap Membantu Anda 24 Jam</>}
        desc="Ada saluran atau WC mampet? Hubungi kami kapan saja — respons cepat di seluruh Bali."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Informasi Kontak
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Pilih cara yang paling nyaman untuk menghubungi kami. Untuk respons tercepat,
              gunakan WhatsApp.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex flex-col gap-3 rounded-2xl border p-5 shadow-soft transition-all hover:-translate-y-1 ${
                    c.accent ? "border-transparent bg-[#25D366] text-white" : "border-line bg-white"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ${
                      c.accent ? "bg-white/20 text-white" : "bg-brand-50 text-brand"
                    }`}
                  >
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className={`block text-xs font-bold uppercase tracking-wider ${c.accent ? "text-white/80" : "text-ink-soft"}`}>
                      {c.label}
                    </span>
                    <span className={`mt-0.5 block break-all text-sm font-bold ${c.accent ? "text-white" : "text-ink"}`}>
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-5 space-y-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
              <div className="flex gap-3">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-bold text-ink">Alamat</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-3 border-t border-line pt-4">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-bold text-ink">Jam Operasional</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{site.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-line shadow-soft">
              <iframe
                title="Lokasi Bintang Lancar Bali"
                src={mapSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
