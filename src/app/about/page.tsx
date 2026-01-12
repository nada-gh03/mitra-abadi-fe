import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import History from "@/components/History";
import VisionMission from "@/components/VisionMission";
import Philosophy from "@/components/Philosophy";
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
