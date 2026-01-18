import React from "react";
import ScaleIn from "../animations/ScaleIn";
import TextReveal from "../animations/TextReveal";
import FadeIn from "../animations/FadeIn";

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full bg-navy overflow-hidden">
      <ScaleIn className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/assets/img/contact-hero.jpeg')",
          }}
        />
      </ScaleIn>

      <div className="relative flex justify-center py-16 lg:py-24 px-6 lg:px-10 z-10">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col items-start gap-4 max-w-[800px]">
            <div className="flex gap-4 border-l-4 border-primary pl-6">
              <div className="flex flex-col gap-2">
                <TextReveal
                  text="Hubungi Kami"
                  className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                />
                <FadeIn delay={0.3}>
                  <p className="text-white/90 text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
                    Tim kami siap membantu memberikan solusi cat dan kimia
                    terbaik untuk bisnis Anda.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
