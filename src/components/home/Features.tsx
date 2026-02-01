import React from "react";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const Features: React.FC = () => {
  const features = [
    {
      icon: "verified",
      title: "Quality Assurance",
      desc: "Setiap batch melewati uji laboratorium ketat untuk konsistensi warna, viskositas, dan daya tahan.",
    },
    {
      icon: "science",
      title: "Innovative R&D",
      desc: "Formulasi kustom yang dikembangkan oleh ahli kimia berpengalaman untuk kebutuhan spesifik industri Anda.",
    },
    {
      icon: "eco",
      title: "Eco-Conscious",
      desc: "Komitmen pada keberlanjutan dengan pengembangan produk low-VOC dan pengolahan limbah terstandar.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <StaggerItem
              key={i}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-navy transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 font-display">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;
