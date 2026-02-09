"use client";

import React from "react";
import dynamic from "next/dynamic";
import ScaleIn from "../animations/ScaleIn";

const Map = dynamic(() => import("./MapWrapper"), {
  loading: () => (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500 text-sm tracking-widest uppercase">
        Loading...
      </p>
    </div>
  ),
  ssr: false,
});

const ContactMap: React.FC = () => {
  return (
    <section className="relative w-full h-[550px] bg-gray-100 overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 z-0">
        <Map />
      </div>

      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white/80 to-transparent pointer-events-none z-10"></div>

      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 pointer-events-none z-20">
        <ScaleIn
          delay={0.5}
          className="pointer-events-auto bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl max-w-[340px] border-l-4 border-primary"
        >
          <div className="flex items-start justify-between mb-2">
            <h5 className="text-navy font-bold text-lg">Pabrik Utama</h5>
            <span className="material-symbols-outlined text-primary">
              factory
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
            Kp. Kebon baru no 88, Babat, Legok,
            <br /> Kabupaten Tangerang, Banten.
          </p>
          <a
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-navy px-5 py-3 rounded-lg hover:bg-primary hover:text-navy transition-all shadow-lg hover:shadow-primary/30 group w-full justify-center"
            href="https://maps.google.com/?q=-6.318152,106.537024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
              directions
            </span>
            Buka di Google Maps
          </a>
        </ScaleIn>
      </div>
    </section>
  );
};

export default ContactMap;
