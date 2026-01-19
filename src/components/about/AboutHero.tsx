import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScaleIn from "../animations/ScaleIn";
import TextReveal from "../animations/TextReveal";
import FadeIn from "../animations/FadeIn";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[320px] bg-navy overflow-hidden flex items-center justify-center">
      <ScaleIn className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-navy/70 z-10"></div>
        <Image
          src="/assets/img/about-hero.avif"
          alt="Tentang Mitra Abadi Group - Pabrik Cat & Kimia"
          fill
          priority={true}
          className="object-cover object-center"
          sizes="100vw"
        />
      </ScaleIn>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <div className="relative mb-4">
          <TextReveal
            text="Tentang Mitra Abadi Group"
            className="text-4xl md:text-5xl font-bold text-white relative inline-block"
          />
          <FadeIn
            delay={0.8}
            direction="left"
            className="block w-full h-1.5 bg-primary mt-2 rounded-full"
          />
        </div>

        <FadeIn
          delay={1}
          className="flex items-center gap-2 mt-4 text-white/80 text-sm font-medium"
        >
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-white">About Us</span>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutHero;
