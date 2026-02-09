import type { Metadata } from "next";
import IndustrialSection from "@/components/products/IndustrialSection";
import ProductCTA from "@/components/products/ProductCTA";
import ProductHero from "@/components/products/ProductHero";
import ProtectiveSection from "@/components/products/ProtectiveSection";

export const metadata: Metadata = {
  title: "Produk & Solusi Cat Industri",
  description:
    "Jelajahi produk unggulan kami: Wood Coating, Plastic Coating, Metal Coating, Protective Coating, hingga cat tembok brand Catalya.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProductHero />
      <div className="flex flex-col items-center w-full bg-background-light px-4 lg:px-20 py-12 gap-16">
        <IndustrialSection />
        <ProtectiveSection />
        <ProductCTA />
      </div>
    </main>
  );
}
