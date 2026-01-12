import React from "react";

const ProductHero: React.FC = () => {
  return (
    <section className="relative w-full bg-navy py-16 lg:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')`,
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-[960px] mx-auto text-center flex flex-col gap-4">
        <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
          Solusi Cat & Kimia Terintegrasi
        </h1>
        <h2 className="text-primary text-lg lg:text-xl font-medium leading-normal max-w-2xl mx-auto">
          Menghadirkan perlindungan dan warna melalui teknologi mutakhir.
        </h2>
      </div>
    </section>
  );
};

export default ProductHero;
