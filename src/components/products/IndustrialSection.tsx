import React from "react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const IndustrialSection: React.FC = () => {
  const products = [
    {
      title: "Wood Coatings",
      img: "/assets/img/product-wood.avif",
      features: ["Sealers & Top Coating", "Stairs Coating", "UV Curing System"],
    },
    {
      title: "Plastic Coatings",
      img: "/assets/img/product-plastic.avif",
      features: [
        "Base Coat & Top Coat",
        "Air Dry / UV",
        "Adhesion Promoter",
        "Motor-parts Specialty",
      ],
    },
    {
      title: "Synthetic Rubber Coatings",
      img: "/assets/img/product-rubber.avif",
      features: ["Gloss & Matt for PVC, TPR & PU", "Outsole Coating"],
    },
    {
      title: "Metal Coatings",
      img: "/assets/img/product-metal.avif",
      features: ["Zincromate & Anti-Rust", "Cat Seng & Cat Sintetik"],
    },
    {
      title: "Concrete Coatings",
      img: "/assets/img/product-concrete.avif",
      features: [
        "Roof Coating/Waterproofing",
        "Epoxy Flooring",
        "Wall Coating",
      ],
    },
    {
      title: "Speciality Coatings",
      img: "/assets/img/product-speciality.avif",
      features: [
        "UV Coating",
        "Protective Coating",
        "Zinc Rich Coating",
        "PU Coating",
      ],
    },
  ];

  return (
    <section
      id="industrial"
      className="w-full max-w-[1200px] flex flex-col gap-8 scroll-mt-32"
    >
      <FadeIn className="flex items-center gap-4">
        <span className="text-6xl font-black text-gray-200 select-none -mb-3">
          I.
        </span>
        <h2 className="text-navy text-2xl lg:text-3xl font-bold leading-tight pt-3">
          Industrial Coatings
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, idx) => (
          <StaggerItem
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full group"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-navy text-lg font-bold mb-3">{item.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600 flex-1">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default IndustrialSection;
