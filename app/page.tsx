import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import {
  Section,
  SectionHeading,
  StatsStrip,
  ServicesGrid,
  WhyUs,
  StepsSection,
  Testimonials,
  ServiceAreasSection,
  CtaBand,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <Section className="!py-12">
        <StatsStrip />
      </Section>

      {/* Services */}
      <Section id="layanan" className="!pt-4">
        <SectionHeading
          eyebrow="Layanan Kami"
          title={<>Atasi Segala Masalah <span className="gradient-text">Saluran &amp; Sanitasi</span></>}
          desc="Dari WC mampet hingga kuras septic tank — semua ditangani profesional dengan alat modern dan hasil bergaransi."
        />
        <ServicesGrid />
      </Section>

      {/* Why us */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kenapa Bintang Lancar"
            title={<>Alasan Ribuan Pelanggan <span className="gradient-text">Mempercayai Kami</span></>}
            desc="Berpengalaman sejak 2015 melayani rumah, villa, dan bisnis di seluruh Bali."
          />
          <WhyUs />
        </div>
      </section>

      {/* Steps */}
      <Section>
        <SectionHeading
          eyebrow="Cara Pemesanan"
          title={<>Mudah, Cepat, Hanya <span className="gradient-text">4 Langkah</span></>}
          desc="Proses sederhana dari konsultasi sampai masalah Anda beres dan bergaransi."
        />
        <StepsSection />
      </Section>

      {/* Service areas */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Area Layanan"
            title={<>Menjangkau <span className="gradient-text">Seluruh Bali</span></>}
            desc="Tim kami siap meluncur ke lokasi Anda di berbagai wilayah berikut dan sekitarnya."
          />
          <ServiceAreasSection />
        </div>
      </section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimoni"
          title={<>Apa Kata <span className="gradient-text">Pelanggan Kami</span></>}
          desc="Kepuasan pelanggan adalah prioritas utama kami di setiap pengerjaan."
        />
        <Testimonials />
      </Section>

      {/* FAQ */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Pertanyaan yang <span className="gradient-text">Sering Diajukan</span></>}
            desc="Belum menemukan jawaban? Hubungi kami langsung via WhatsApp."
          />
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <div className="pb-20 md:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
