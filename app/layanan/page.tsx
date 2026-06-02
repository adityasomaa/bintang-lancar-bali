import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading, ServicesGrid, StepsSection, CtaBand } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import Photo from "@/components/Photo";
import { PlaceholderImage } from "@/components/Graphics";
import { Button } from "@/components/ui";
import { serviceIcons, IconCheck } from "@/components/Icons";
import { services, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan Bintang Lancar Bali: sedot WC, saluran & wastafel mampet, pipa kran air, kuras septic tank, dan perbaikan plumbing di seluruh Bali.",
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        crumb="Layanan"
        eyebrow="Layanan Kami"
        title={<>Solusi Lengkap Saluran &amp; Sanitasi</>}
        desc="Apa pun masalah pipa, WC, atau septic tank Anda — tim kami siap menanganinya dengan cepat, bersih, dan bergaransi."
      />

      <Section>
        <SectionHeading
          eyebrow="Daftar Layanan"
          title={<>Pilih Layanan yang <span className="gradient-text">Anda Butuhkan</span></>}
          desc="Semua layanan ditangani teknisi berpengalaman dengan peralatan modern."
        />
        <ServicesGrid showAll />
      </Section>

      {/* Detailed alternating list */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x space-y-16 md:space-y-24">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            const flip = i % 2 === 1;
            return (
              <div
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
              >
                <Reveal className={flip ? "lg:order-2" : ""}>
                  {s.image ? (
                    <Photo
                      src={s.image}
                      alt={s.title}
                      aspect="aspect-[4/3]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="rounded-3xl shadow-card ring-1 ring-line"
                    />
                  ) : (
                    <PlaceholderImage index={i} label={s.title} className="w-full rounded-3xl shadow-card" />
                  )}
                </Reveal>
                <Reveal delay={1} className={flip ? "lg:order-1" : ""}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-soft">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.desc}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand">
                          <IconCheck className="h-4 w-4" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={waLink(`Halo Bintang Lancar Bali, saya mau tanya soal layanan "${s.title}".`)}
                    external
                    variant="primary"
                    className="mt-7"
                    withArrow
                  >
                    Pesan Layanan Ini
                  </Button>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Cara Pemesanan"
          title={<>Proses Mudah dalam <span className="gradient-text">4 Langkah</span></>}
        />
        <StepsSection />
      </Section>

      <div className="pb-20 md:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
