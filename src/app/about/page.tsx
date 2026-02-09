import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import History from "@/components/about/History";
import VisionMission from "@/components/about/VisionMission";
import Philosophy from "@/components/about/Philosophy";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Mitra Abadi Group, ahli cat dan pelapis industri sejak 2006. Visi kami memberikan solusi inovatif dan ramah lingkungan bagi pasar global.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <History />
      <VisionMission />
      <Philosophy />
      <CTA />
    </main>
  );
}
