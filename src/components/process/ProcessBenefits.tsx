import React from "react";

const ProcessBenefits: React.FC = () => {
  return (
    <section className="bg-[#f8f7f5] py-20 relative border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 bg-white p-8 md:p-10 border-4 border-navy shadow-none hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0 group-hover:scale-150 transition-transform duration-500" />
            <div className="z-10 flex flex-col h-full">
              <div className="h-16 w-16 mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary drop-shadow-sm font-bold">
                  health_and_safety
                </span>
              </div>
              <h3 className="text-navy text-2xl font-bold mb-4 uppercase tracking-wide">
                Keselamatan & Kesehatan Kerja (K3)
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Kami menjunjung tinggi standar K3 di setiap lini produksi.
                Prosedur penanganan bahan kimia yang ketat dan penggunaan APD
                lengkap menjamin keamanan tim kami dan integritas produk yang
                Anda terima.
              </p>
              <div className="w-full h-1 bg-gray-100 mt-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-primary group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-white p-8 md:p-10 border-4 border-navy shadow-none hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0 group-hover:scale-150 transition-transform duration-500" />
            <div className="z-10 flex flex-col h-full">
              <div className="h-16 w-16 mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary drop-shadow-sm font-bold">
                  eco
                </span>
              </div>
              <h3 className="text-navy text-2xl font-bold mb-4 uppercase tracking-wide">
                Perlindungan Lingkungan
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Komitmen kami terhadap keberlanjutan diwujudkan melalui sistem
                pengolahan limbah terpadu dan formulasi ramah lingkungan (Low
                VOC). Kami berusaha meminimalkan jejak karbon industri demi masa
                depan yang lebih hijau.
              </p>
              <div className="w-full h-1 bg-gray-100 mt-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-primary group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBenefits;
