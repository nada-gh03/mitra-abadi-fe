import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessBenefits from "@/components/process/ProcessBenefits";
import ProcessCTA from "@/components/process/ProcessCTA";

export const metadata: Metadata = {
  title: "Our Process | Mitra Abadi Group",
  description:
    "Pelajari standar operasional dan kualitas kami, mulai dari analisis kebutuhan, formulasi R&D, hingga kontrol kualitas dan layanan purna jual.",
};

export default function ProcessPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProcessHero />
      <ProcessTimeline />
      <ProcessBenefits />
      <ProcessCTA />
    </main>
  );
}
