import React from "react";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const Products: React.FC = () => {
  const productCards = [
    {
      title: "Industrial & Protective Coatings",
      desc: "Wood, Plastic, Metal, Concrete & Rubber Solutions tailored for durability.",
      img: "/assets/img/home-product-coating.avif",
      href: "/products#industrial",
      isExternal: false,
    },
    {
      title: "Chemicals & Solvents",
      desc: "High-purity CYC, MC, Thinners, and more for demanding industrial use.",
      img: "/assets/img/home-product-chem.avif",
      href: "/products#protective",
      isExternal: false,
    },
    {
      title: "Retail Paint & Safety Gear",
      desc: "Featuring our trusted Catalya wall paint and durable Cataboost safety boots.",
      img: "/assets/img/home-product-gear.avif",
      href: "https://catapaint.com",
      isExternal: true,
    },
  ];

  return (
    <section className="bg-[#f4f6f8] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <FadeIn direction="right" className="max-w-2xl">
            <h2 className="text-navy text-3xl lg:text-4xl font-black mb-4 font-display">
              Our Diverse Product Range
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions for industrial manufacturing to commercial
              retail needs.
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <Link
              className="text-navy font-bold flex items-center gap-2 hover:text-primary transition-colors group px-6 py-3 rounded-full border border-navy/10 hover:border-navy hover:bg-navy"
              href="/products"
            >
              View Full Catalog
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCards.map((p, i) => {
            const CardWrapper = p.isExternal ? "a" : Link;
            const props = p.isExternal
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: p.href };

            return (
              <StaggerItem key={i}>
                <CardWrapper
                  {...props}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary flex flex-col cursor-pointer h-full"
                >
                  <div className="h-64 w-full bg-cover bg-center overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${p.img}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500"></div>
                  </div>

                  <div className="p-8 flex flex-col h-full relative">
                    <div className="absolute -top-6 right-8 size-12 bg-primary text-navy rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors font-display">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-navy font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More{" "}
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </div>
                </CardWrapper>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Products;
