import React from "react";

const Philosophy: React.FC = () => {
  const companies = [
    { name: "PT TRIMITRA WARNA ABADI", color: "bg-[#0f172a]" },
    { name: "PT MITRA ABADI SINAR SELARAS", color: "bg-primary" },
    { name: "PT MITRA ABADI SELARAS SEJAHTERA", color: "bg-gray-600" },
  ];

  return (
    <section className="bg-navy text-white py-24 px-4 sm:px-6 lg:px-40">
      <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
          Our Philosophy
        </span>
        <div className="relative mb-12">
          <span
            className="material-symbols-outlined absolute -top-10 -left-10 md:-left-16 text-6xl md:text-8xl text-primary opacity-30"
            style={{ fontSize: "10rem" }}
          >
            format_quote
          </span>
          <blockquote className="text-3xl md:text-5xl font-serif font-medium leading-tight relative z-10">
            "Quality is not an act, <br />
            it is a habit."
          </blockquote>
          <span
            className="material-symbols-outlined absolute -bottom-10 -right-10 md:-right-16 text-6xl md:text-8xl text-primary opacity-30 rotate-180"
            style={{ fontSize: "10rem" }}
          >
            format_quote
          </span>
        </div>
        <p className="text-white/60 max-w-2xl text-lg mb-16 leading-relaxed">
          Filosofi ini menjadi nadi dari setiap anak perusahaan di bawah naungan
          Mitra Abadi Group. Sinergi kami menciptakan kekuatan untuk memberikan
          solusi menyeluruh.
        </p>

        <div className="w-full bg-white rounded-2xl p-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 shadow-lg">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 opacity-80 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
            >
              <div
                className={`size-8 rounded ${company.color} flex-shrink-0`}
              ></div>
              <span className="text-navy font-bold text-xs md:text-sm uppercase leading-tight text-left">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
