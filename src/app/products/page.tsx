import IndustrialSection from "@/components/products/IndustrialSection";
import ProductCTA from "@/components/products/ProductCTA";
import ProductHero from "@/components/products/ProductHero";
import ProductNav from "@/components/ProductNav";
import ProtectiveSection from "@/components/products/ProtectiveSection";
import RetailSection from "@/components/RetailSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Solutions | Mitra Abadi Group",
  description:
    "Jelajahi katalog lengkap kami mulai dari Industrial Coatings, Chemical Solvents, hingga Retail Paint dan Safety Gear.",
};

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProductHero />
      {/* <ProductNav /> */}

      <div className="flex flex-col items-center w-full bg-[#f8f7f5] px-4 lg:px-20 py-12 gap-16">
        <IndustrialSection />
        <ProtectiveSection />
        {/* <RetailSection /> */}
        <ProductCTA />
      </div>
    </main>
  );
}
