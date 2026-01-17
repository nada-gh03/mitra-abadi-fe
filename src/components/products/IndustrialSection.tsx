import React from "react";
import FadeIn from "../animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const IndustrialSection: React.FC = () => {
  const products = [
    {
      title: "Wood Coatings",
      img: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80",
      features: ["Sealers & Top Coating", "Stairs Coating", "UV Curing System"],
    },
    {
      title: "Plastic Coatings",
      img: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80",
      features: [
        "Base Coat & Top Coat",
        "Air Dry / UV",
        "Adhesion Promoter",
        "Motor-parts Specialty",
      ],
    },
    {
      title: "Synthetic Rubber",
      img: "https://images.unsplash.com/photo-1605218427368-35b019b885a1?auto=format&fit=crop&q=80",
      features: ["Gloss & Matt for PVC/PU", "Outsole Coating"],
    },
    {
      title: "Metal Coatings",
      img: "https://images.unsplash.com/photo-1535813547-99c456a4194c?auto=format&fit=crop&q=80",
      features: ["Zincromate & Anti-Rust", "Cat Seng & Cat Sintetik"],
    },
    {
      title: "Concrete Coatings",
      img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80",
      features: [
        "Roof Coating/Waterproofing",
        "Epoxy Flooring",
        "Wall Coating",
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
            <div className="h-48 w-full overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
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
