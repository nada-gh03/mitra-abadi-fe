import React from "react";
import Link from "next/link";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[320px] bg-navy overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/70 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')",
          }}
        ></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
          Tentang Mitra Abadi Group
          <span className="block w-full h-1.5 bg-primary mt-2 rounded-full"></span>
        </h1>
        <div className="flex items-center gap-2 mt-4 text-white/80 text-sm font-medium">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-white">About Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
