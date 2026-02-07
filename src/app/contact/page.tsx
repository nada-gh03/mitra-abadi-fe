import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapWrapper from "@/components/contact/MapWrapper";

export const metadata: Metadata = {
  title: "Hubungi Kami | Lokasi Tangerang",
  description:
    "Hubungi Mitra Abadi Group di Tangerang untuk konsultasi kebutuhan cat industri dan kimia. Layanan pelanggan profesional untuk solusi terbaik.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
      <MapWrapper />
    </main>
  );
}
