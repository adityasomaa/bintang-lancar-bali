import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading, Testimonials, CtaBand } from "@/components/sections";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri dokumentasi pengerjaan Bintang Lancar Bali — sedot WC, saluran mampet, kuras septic tank, dan perbaikan plumbing di Bali.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        crumb="Galeri"
        eyebrow="Dokumentasi"
        title={<>Galeri Pengerjaan Kami</>}
        desc="Cuplikan layanan dan hasil kerja kami di berbagai lokasi di Bali."
      />

      <Section>
        <GalleryGrid items={galleryImages} />
      </Section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Testimoni"
            title={<>Kepuasan <span className="gradient-text">Pelanggan Kami</span></>}
            desc="Cerita nyata dari pelanggan yang telah mempercayakan masalahnya kepada kami."
          />
          <Testimonials />
        </div>
      </section>

      <div className="pb-20 md:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
