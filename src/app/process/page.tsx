import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessBenefits from "@/components/process/ProcessBenefits";
import ProcessCTA from "@/components/process/ProcessCTA";

export const metadata: Metadata = {
  title: "Proses Kerja & SOP",
  description:
    "Standar operasional Mitra Abadi Group mulai dari analisis kebutuhan, R&D, pengujian sampel, hingga produksi massal dan kontrol kualitas.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
      <ProcessTimeline />
      <ProcessBenefits />
      <ProcessCTA />
    </main>
  );
}
