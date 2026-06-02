import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading, CtaBand } from "@/components/sections";
import FAQ from "@/components/FAQ";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Button } from "@/components/ui";
import { IconCheck, IconStar } from "@/components/Icons";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Estimasi harga jasa sedot WC, saluran mampet, dan kuras septic tank Bintang Lancar Bali. Harga terjangkau, transparan, dan survei gratis.",
};

const packages = [
  {
    name: "Atasi Mampet",
    note: "WC · saluran · wastafel",
    price: "Mulai 150rb",
    highlight: false,
    features: [
      "Penanganan WC/saluran mampet",
      "Tanpa bongkar lantai",
      "Alat pembersih modern",
      "Garansi pengerjaan",
    ],
  },
  {
    name: "Kuras Septic Tank",
    note: "Rumah · kos · villa",
    price: "Mulai 350rb",
    highlight: true,
    features: [
      "Penyedotan sampai tuntas",
      "Armada modern & higienis",
      "Pembuangan limbah aman",
      "Area kerja tetap bersih",
      "Garansi pengerjaan",
    ],
  },
  {
    name: "Perbaikan Plumbing",
    note: "Instalasi & perbaikan",
    price: "Sesuai Survei",
    highlight: false,
    features: [
      "Survei & estimasi gratis",
      "Perbaikan pipa & sambungan",
      "Material berkualitas",
      "Untuk rumah & bisnis",
    ],
  },
];

export default function HargaPage() {
  return (
    <>
      <PageHeader
        crumb="Harga"
        eyebrow="Daftar Harga"
        title={<>Harga Terjangkau &amp; Transparan</>}
        desc="Estimasi biaya yang bersahabat dengan kualitas tetap profesional. Penawaran pasti diberikan setelah survei kondisi — gratis."
      />

      <Section>
        <RevealGroup className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <Reveal key={p.name}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                  p.highlight
                    ? "border-transparent gradient-brand text-white shadow-card"
                    : "border-line bg-white"
                }`}
              >
                {p.highlight && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">
                    <IconStar className="h-3.5 w-3.5" /> Populer
                  </span>
                )}
                <h3 className={`text-lg font-bold ${p.highlight ? "text-white" : "text-ink"}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.highlight ? "text-brand-100" : "text-ink-soft"}`}>{p.note}</p>
                <p className={`mt-5 text-3xl font-extrabold tracking-tight ${p.highlight ? "text-gold" : "gradient-text"}`}>
                  {p.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex gap-2.5 text-sm ${p.highlight ? "text-brand-100" : "text-ink-soft"}`}>
                      <IconCheck className={`h-5 w-5 shrink-0 ${p.highlight ? "text-gold" : "text-aqua"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={waLink(`Halo Bintang Lancar Bali, saya mau tanya harga untuk "${p.name}".`)}
                  external
                  variant={p.highlight ? "gold" : "primary"}
                  className="mt-8 w-full"
                >
                  Tanya Harga
                </Button>
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand/15 bg-brand-50 px-6 py-5 text-center text-sm leading-relaxed text-brand-800">
          <strong>Catatan:</strong> Harga di atas merupakan estimasi awal dan dapat
          berbeda tergantung tingkat kesulitan, lokasi, dan kondisi di lapangan. Untuk
          penawaran pasti, silakan hubungi kami — konsultasi &amp; survei gratis.
        </Reveal>
      </Section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Pertanyaan Seputar <span className="gradient-text">Harga &amp; Layanan</span></>}
          />
          <FAQ />
        </div>
      </section>

      <div className="py-20 md:py-28">
        <CtaBand />
      </div>
    </>
  );
}
