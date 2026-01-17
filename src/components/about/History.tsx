import React from "react";
import FadeIn from "../animations/FadeIn";
import ScaleIn from "../animations/ScaleIn";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const History: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-40 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <FadeIn
            delay={0.2}
            className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-[2rem] z-0 hidden lg:block"
          />
          <ScaleIn className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <div
              className="w-full aspect-[4/3] bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093458791-9f302e6d8169?auto=format&fit=crop&q=80')",
              }}
            ></div>
          </ScaleIn>
        </div>

        <div className="relative flex flex-col gap-6">
          <FadeIn
            direction="down"
            className="absolute -top-20 -right-10 lg:-right-20 text-[180px] font-black text-primary/10 select-none z-0 pointer-events-none leading-none"
          >
            2007
          </FadeIn>

          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight mb-6">
                Membangun Kepercayaan <br />
                <span className="text-primary">Sejak 2007</span>
              </h2>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="space-y-4 text-gray-600 text-lg leading-relaxed font-body"
            >
              <p>
                PT Mitra Abadi Group didirikan pada tahun 2006 sebagai
                perusahaan manufaktur cat dan coating milik swasta Indonesia.
                Sejak awal berdiri, MASS Chemical berkomitmen untuk menghadirkan
                produk-produk berkualitas tinggi yang inovatif dan andal untuk
                memenuhi kebutuhan di berbagai sektor industri.
              </p>
              <p>
                Kami memproduksi beragam jenis cat dan pelapis (coating) yang
                dirancang untuk memberikan perlindungan optimal, daya tahan
                tinggi, serta performa yang konsisten dalam berbagai kondisi
                aplikasi. Produk kami dapat menyesuaikan dengan kebutuhan &
                keinginan konsumen.
              </p>
              <p>
                Berlokasi di Tangerang, Banten – Indonesia, MASS Chemical terus
                berkembang sebagai mitra terpercaya bagi pelanggan dengan
                mengedepankan kualitas produk, pengembangan teknologi, serta
                layanan yang profesional dan berorientasi pada kepuasan
                pelanggan.
              </p>
            </FadeIn>

            <StaggerContainer
              className="mt-8 flex gap-8 items-center"
              delay={0.4}
            >
              <StaggerItem className="flex flex-col">
                <span className="text-3xl font-bold text-navy">15+</span>
                <span className="text-sm text-gray-500">Tahun Pengalaman</span>
              </StaggerItem>
              <StaggerItem className="w-px h-12 bg-gray-300"></StaggerItem>
              <StaggerItem className="flex flex-col">
                <span className="text-3xl font-bold text-navy">100+</span>
                <span className="text-sm text-gray-500">Klien Korporat</span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
