import React from "react";

const ContactBrands: React.FC = () => {
  const brands = [
    { id: "TWA", name: "PT Trimitra Warna Abadi" },
    { id: "MC", name: "MASS Chemical", primary: true },
    { id: "MASS", name: "PT Mitra Abadi Selaras Sejahtera" },
  ];

  return (
    <section className="py-16 px-6 lg:px-10 bg-white border-t border-gray-100">
      <div className="flex flex-col items-center justify-center gap-10 max-w-[1280px] mx-auto">
        <h3 className="text-navy text-xl md:text-2xl font-bold text-center tracking-tight">
          Mitra Abadi Group - Sinergi Teknologi dan Keahlian
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col items-center gap-3 cursor-pointer"
            >
              <div
                className={`h-16 w-16 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-2xl transition-colors ${
                  brand.primary
                    ? "group-hover:bg-primary group-hover:text-navy"
                    : "group-hover:bg-navy group-hover:text-white"
                }`}
              >
                {brand.id}
              </div>
              <span className="text-sm font-bold text-navy/70 group-hover:text-navy transition-colors text-center grayscale group-hover:grayscale-0 duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBrands;
