import React from "react";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const ContactBrands: React.FC = () => {
  const brands = [
    { id: "TWA", name: "PT Trimitra Warna Abadi" },
    { id: "MC", name: "PT Mitra Abadi Sinar Selaras", primary: true },
    { id: "MASS", name: "PT Mitra Abadi Selaras Sejahtera" },
  ];

  return (
    <section className="py-16 px-6 lg:px-10 bg-white border-t border-gray-100">
      <div className="flex flex-col items-center justify-center gap-10 max-w-[1280px] mx-auto">
        <h3 className="text-navy text-xl md:text-2xl font-bold text-center tracking-tight">
          Mitra Abadi Group - Sinergi Teknologi dan Keahlian
        </h3>

        <StaggerContainer className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {brands.map((brand) => (
            <StaggerItem
              key={brand.id}
              className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div
                className={`h-20 w-20 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg ${
                  brand.primary
                    ? "group-hover:bg-primary group-hover:text-navy"
                    : "group-hover:bg-navy group-hover:text-white"
                }`}
              >
                {brand.id}
              </div>
              <span className="text-sm font-bold text-navy/60 group-hover:text-navy transition-colors text-center max-w-[150px] leading-tight">
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
