import React from "react";
import Link from "next/link";

const Products: React.FC = () => {
  const productCards = [
    {
      title: "Industrial & Protective Coatings",
      desc: "Wood, Plastic, Metal, Concrete & Rubber Solutions tailored for durability.",
      img: "https://images.unsplash.com/photo-1565610057868-b7161ac952b6?auto=format&fit=crop&q=80",
    },
    {
      title: "Chemicals & Solvents",
      desc: "High-purity CYC, MC, Thinners, and more for demanding industrial use.",
      img: "https://images.unsplash.com/photo-1605557202138-097824c3f550?auto=format&fit=crop&q=80",
    },
    {
      title: "Retail Paint & Safety Gear",
      desc: "Featuring our trusted Catalya wall paint and durable Cataboost safety boots.",
      img: "https://images.unsplash.com/photo-1615818442388-662f281d8509?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="bg-[#f4f6f8] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold mb-4">
              Our Diverse Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Comprehensive solutions for industrial manufacturing to commercial
              retail needs.
            </p>
          </div>
          <Link
            className="text-navy font-bold flex items-center gap-2 hover:text-primary transition-colors group"
            href="/products"
          >
            View Full Catalog
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCards.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary"
            >
              <div
                className="h-56 w-full bg-cover bg-center overflow-hidden relative"
                style={{ backgroundImage: `url('${p.img}')` }}
              >
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{p.desc}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-navy font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                    Learn More{" "}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
