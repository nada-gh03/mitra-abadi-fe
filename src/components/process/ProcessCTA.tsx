import React from "react";
import Link from "next/link";
import ScaleIn from "../animations/ScaleIn";
import FadeIn from "../animations/FadeIn";

const ProcessCTA: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-navy py-20 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#FDB813 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <ScaleIn className="mx-auto flex max-w-[960px] flex-col items-center gap-8 px-6 relative z-10">
        <div className="flex flex-col gap-4">
          <FadeIn delay={0.2}>
            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Siap Berkolaborasi dengan Kami?
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-white/80 text-lg font-normal leading-normal max-w-2xl mx-auto">
              Mulai langkah pertama Anda dengan konsultasi teknis bersama tim
              ahli kami.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <Link
            href="/contact"
            className="group relative flex min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-none bg-primary h-14 px-8 text-navy text-base font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
          >
            <span className="relative z-10">Hubungi Tim Teknis Kami</span>
          </Link>
        </FadeIn>
      </ScaleIn>
    </section>
  );
};

export default ProcessCTA;
