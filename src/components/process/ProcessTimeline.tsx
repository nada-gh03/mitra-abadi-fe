import React from "react";

const STEPS = [
  {
    id: "01",
    number: "01",
    title: "Analisis Kebutuhan Pelanggan",
    description:
      "Tahap awal dimulai dengan konsultasi mendalam untuk memahami spesifikasi teknis, lingkungan aplikasi, dan target performa yang diinginkan. Tim teknis kami menerjemahkan kebutuhan bisnis Anda menjadi parameter kimia yang presisi.",
    icon: "assignment",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
  },
  {
    id: "02",
    number: "02",
    title: "R&D dan Formulasi",
    description:
      "Tim R&D kami meracik formula khusus di laboratorium modern. Pemilihan bahan baku premium dan uji kompatibilitas dilakukan untuk memastikan stabilitas kimia serta daya tahan produk terhadap kondisi ekstrem.",
    icon: "biotech",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
  },
  {
    id: "03",
    number: "03",
    title: "Sample & Pengujian",
    description:
      "Prototipe dikirimkan kepada Anda untuk validasi lapangan (field test). Kami melakukan iterasi perbaikan berdasarkan feedback hingga sampel 100% sesuai dengan ekspektasi operasional dan standar kualitas.",
    icon: "science",
    imageUrl:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
  },
  {
    id: "04",
    number: "04",
    title: "Produksi Masal",
    description:
      "Setelah persetujuan sampel, formula dikunci dan masuk ke tahap produksi skala besar. Fasilitas manufaktur kami yang terotomatisasi menjamin konsistensi kualitas batch-to-batch dengan efisiensi tinggi.",
    icon: "precision_manufacturing",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    id: "05",
    number: "05",
    title: "Quality Control (QC)",
    description:
      "Sebelum pengiriman, setiap produk melewati serangkaian uji QC ketat (viskositas, densitas, daya rekat, warna). Kami menerapkan kebijakan 'Zero Defect' untuk menjamin keamanan dan kepuasan Anda.",
    icon: "verified_user",
    imageUrl:
      "https://images.unsplash.com/photo-1581093588401-fbb07365f991?auto=format&fit=crop&q=80",
  },
  {
    id: "06",
    number: "06",
    title: "Pengiriman & After Sales",
    description:
      "Logistik kami memastikan pengiriman tepat waktu dengan handling yang aman. Dukungan purna jual teknis tersedia 24/7 untuk troubleshooting dan konsultasi aplikasi di lapangan.",
    icon: "local_shipping",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
  },
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center mb-20 px-6">
        <p className="text-navy text-xl md:text-2xl font-normal leading-relaxed border-l-4 border-primary pl-6 text-left md:text-center md:pl-0 md:border-l-0 md:border-b-4 md:pb-6 md:inline-block italic">
          "Di Mitra Abadi Group, setiap solusi kimia yang kami hasilkan melewati
          siklus pengembangan yang ketat. Kami memastikan setiap tetes cat dan
          bahan kimia memenuhi standar industri internasional."
        </p>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-gray-100 md:-translate-x-1/2 h-full z-0" />
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-primary shadow-[0_0_15px_rgba(253,184,19,0.5)] md:-translate-x-1/2 h-full z-0" />

        <div className="flex flex-col gap-24 relative z-10">
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div
                key={step.id}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center group"
              >
                <div className="absolute left-6 md:left-1/2 top-0 h-10 w-10 -translate-x-[18px] md:-translate-x-1/2 rounded-full border-4 border-white bg-navy text-primary flex items-center justify-center shadow-lg z-10 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-sm font-bold">
                    {step.icon}
                  </span>
                </div>

                <div
                  className={`pl-16 md:pl-0 ${
                    !isEven ? "md:text-right order-2 md:order-1" : "order-2"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-3 ${
                      !isEven ? "md:items-end" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-navy font-display">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`pl-16 md:pl-0 relative ${
                    !isEven ? "order-1 md:order-2" : "order-1"
                  }`}
                >
                  <span
                    className={`absolute -top-10 ${
                      !isEven ? "-left-6 md:-left-12" : "-right-6 md:-right-12"
                    } text-8xl font-bold text-navy/10 font-display select-none z-0`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`relative z-10 h-64 w-full rounded-none border-2 border-navy overflow-hidden shadow-xl bg-white transition-transform duration-500 ${
                      !isEven
                        ? "group-hover:translate-x-2"
                        : "group-hover:-translate-x-2"
                    }`}
                  >
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${step.imageUrl}')` }}
                    />
                    <div
                      className={`absolute bottom-0 ${
                        !isEven ? "left-0" : "right-0"
                      } w-16 h-1 bg-primary`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
