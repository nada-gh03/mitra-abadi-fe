import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactBrands from "@/components/contact/ContactBrands";

export const metadata: Metadata = {
  title: "Contact Us | Mitra Abadi Group",
  description:
    "Hubungi tim ahli kami untuk konsultasi produk, permintaan sampel, atau informasi lebih lanjut tentang solusi cat dan kimia industri.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactBrands />
    </main>
  );
}
