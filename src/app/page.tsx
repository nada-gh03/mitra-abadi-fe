import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Products from "@/components/home/Products";
import Workflow from "@/components/home/Workflow";

export const metadata: Metadata = {
  title: "Mitra Abadi Group | Advanced Coatings & Chemical Solutions",
  description:
    "Solusi inovatif cat, pelapis industri, dan bahan kimia kualitas tinggi untuk kebutuhan industri dan ritel sejak 2006. Distributor resmi brand Catalya.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Workflow />
    </main>
  );
}
