import React from "react";
import Link from "next/link";
import ScaleIn from "./animations/ScaleIn";

const CTA: React.FC = () => {
  return (
    <section className="bg-[#f2f0ed] py-16 px-4 sm:px-6">
      <ScaleIn className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl transition-shadow duration-500">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-navy">
            Ingin tahu lebih dalam tentang solusi produk kami?
          </h3>
          <p className="text-gray-500">
            Temukan inovasi terbaru kami yang sesuai dengan kebutuhan industri
            Anda.
          </p>
        </div>
        <Link
          href="/products"
          className="shrink-0 bg-primary hover:bg-yellow-400 text-navy font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
        >
          <span>Lihat Katalog Produk</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </ScaleIn>
    </section>
  );
};

export default CTA;
