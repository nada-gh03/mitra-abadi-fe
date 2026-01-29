"use client";

import React from "react";
import Image from "next/image";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";
import ScaleIn from "../animations/ScaleIn";

const ContactBrands: React.FC = () => {
  const brands = [
    // {
    //   id: "TWA",
    //   name: "PT Trimitra Warna Abadi",
    //   logo: "/assets/logo/logo.png",
    // },
    {
      id: "MC",
      name: "PT Mitra Abadi Sinar Selaras",
      logo: "/assets/logo/mass-logo.png",
    },
    {
      id: "MASS",
      name: "PT Mitra Abadi Selaras Sejahtera",
      logo: "/assets/logo/selaras-logo.png",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-10 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center gap-12 max-w-[1280px] mx-auto relative z-10">
        <ScaleIn>
          <h3 className="text-navy text-xl md:text-2xl font-bold text-center tracking-tight max-w-2xl leading-relaxed">
            Mitra Abadi Group - Sinergi Teknologi dan Keahlian
          </h3>
        </ScaleIn>

        <StaggerContainer className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map((brand) => (
            <StaggerItem
              key={brand.id}
              className="group flex flex-col items-center gap-6 cursor-pointer"
            >
              <div
                className={`
                  relative h-24 w-24 md:h-32 md:w-32 flex items-center justify-center 
                  bg-white rounded-2xl shadow-sm border border-gray-100 p-4
                  transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-primary/30
                `}
              >
                {/* Logo Image */}
                <div className="relative w-full h-full filter group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
              </div>

              <span className="text-sm font-bold text-navy/60 group-hover:text-navy transition-colors text-center max-w-[180px] leading-tight opacity-80 group-hover:opacity-100">
                {brand.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ContactBrands;
