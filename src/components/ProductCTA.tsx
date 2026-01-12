import React from "react";

const ProductCTA: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mb-8">
      <div className="bg-navy rounded-2xl p-10 lg:p-16 text-center border-2 border-primary relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
            Butuh formulasi khusus atau pengadaan skala besar?
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Tim teknis kami siap membantu Anda menemukan solusi cat dan kimia
            yang tepat untuk kebutuhan industri Anda.
          </p>
          <button className="bg-primary hover:bg-yellow-400 text-navy font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined">forum</span>
            Konsultasi Dengan Tim Teknis Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
