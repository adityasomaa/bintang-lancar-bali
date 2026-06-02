import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading, StatsStrip, WhyUs, CtaBand } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/Graphics";
import { IconCheck } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Bintang Lancar Bali — penyedia jasa sedot WC dan atasi pipa mampet profesional di Bali sejak 2015.",
};

const missions = [
  "Memberikan solusi cepat dan tuntas untuk setiap masalah saluran & sanitasi.",
  "Mengutamakan kualitas pengerjaan yang rapi, bersih, dan bergaransi.",
  "Menyediakan layanan 24 jam yang responsif di seluruh Bali.",
  "Menjaga harga tetap terjangkau tanpa mengurangi profesionalisme.",
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        crumb="Tentang"
        eyebrow="Tentang Kami"
        title={<>Mitra Terpercaya untuk Saluran Lancar di Bali</>}
        desc={`Berdiri sejak ${site.established}, kami telah melayani ribuan pelanggan dengan dedikasi pada kecepatan, kebersihan, dan kepuasan.`}
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <PlaceholderImage index={0} label="Tim Bintang Lancar Bali" className="w-full rounded-3xl shadow-card" />
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading
              align="left"
              eyebrow="Profil Perusahaan"
              title={<>Pengalaman Sejak <span className="gradient-text">2015</span></>}
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                <strong className="text-ink">{site.name}</strong> adalah perusahaan jasa
                sedot WC dan perbaikan saluran pipa yang berbasis di Dalung, Kuta Utara,
                Badung. Sejak {site.established}, kami telah melayani ribuan pelanggan di
                seluruh wilayah Bali.
              </p>
              <p>
                Kami dikelola oleh tim teknisi yang berpengalaman dan terlatih dalam
                menangani berbagai masalah saluran air dan sistem sanitasi — mulai dari
                rumah tinggal, kos, hingga villa dan tempat usaha.
              </p>
              <p>
                Dengan dukungan alat modern, kami bekerja cepat, bersih, dan rapi. Setiap
                pengerjaan kami beri garansi agar Anda tenang dan puas.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section className="!pt-0">
        <StatsStrip />
      </Section>

      {/* Vision & Mission */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-line bg-white p-8 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Visi</span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              Menjadi jasa sanitasi paling terpercaya di Bali.
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Kami ingin menjadi pilihan utama masyarakat Bali untuk setiap kebutuhan
              sedot WC, saluran mampet, dan perawatan sistem perpipaan — dikenal karena
              kecepatan, kejujuran, dan kualitas.
            </p>
          </Reveal>
          <Reveal delay={1} className="rounded-3xl border border-line bg-white p-8 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Misi</span>
            <ul className="mt-4 space-y-3">
              {missions.map((m) => (
                <li key={m} className="flex gap-3 text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <Section>
        <SectionHeading
          eyebrow="Nilai Kami"
          title={<>Yang Membuat Kami <span className="gradient-text">Berbeda</span></>}
          desc="Prinsip yang kami pegang di setiap pekerjaan, besar maupun kecil."
        />
        <WhyUs />
      </Section>

      <div className="pb-20 md:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
