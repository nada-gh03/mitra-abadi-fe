import React from "react";
import ScaleIn from "../animations/ScaleIn";
import FadeIn from "../animations/FadeIn";

const ProductCTA: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mb-8">
      <ScaleIn className="bg-navy rounded-2xl p-10 lg:p-16 text-center border-2 border-primary relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <FadeIn delay={0.3}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
              Butuh formulasi khusus atau pengadaan skala besar?
            </h2>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-gray-300 max-w-2xl">
              Tim teknis kami siap membantu Anda menemukan solusi cat dan kimia
              yang tepat untuk kebutuhan industri Anda.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <button className="bg-primary hover:bg-yellow-400 text-navy font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer group">
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
                forum
              </span>
              Konsultasi Dengan Tim Teknis Kami
            </button>
          </FadeIn>
        </div>
      </ScaleIn>
    </section>
  );
};

export default ProductCTA;
