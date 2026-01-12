import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      icon: "verified",
      title: "Kualitas & Inovasi",
      desc: "Standar tinggi untuk pasar lokal dan global dengan pengujian yang ketat.",
    },
    {
      icon: "eco",
      title: "Ramah Lingkungan",
      desc: "Mendukung praktik bisnis berkelanjutan dan produk rendah VOC.",
    },
    {
      icon: "handshake",
      title: "Fokus Pelanggan",
      desc: "Solusi teknis yang disesuaikan dengan kebutuhan spesifik klien kami.",
    },
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
            Why Choose Us
          </span>
          <h2 className="text-navy text-3xl font-bold">
            Our Commitment Since 2007
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="size-16 rounded-full bg-navy/5 text-navy group-hover:bg-primary group-hover:text-navy flex items-center justify-center mb-6 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
