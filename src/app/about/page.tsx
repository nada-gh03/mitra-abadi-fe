import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import History from "@/components/about/History";
import VisionMission from "@/components/about/VisionMission";
import Philosophy from "@/components/about/Philosophy";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Mitra Abadi Group",
  description:
    "Pelajari sejarah, visi, misi, dan filosofi Mitra Abadi Group dalam memberikan solusi kimia industri terbaik sejak 2007.",
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
