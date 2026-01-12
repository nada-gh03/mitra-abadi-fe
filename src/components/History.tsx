import React from "react";

const History: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-40 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-[2rem] z-0 hidden lg:block"></div>
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <div
              className="w-full aspect-[4/3] bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093458791-9f302e6d8169?auto=format&fit=crop&q=80')",
              }}
            ></div>
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="absolute -top-20 -right-10 lg:-right-20 text-[180px] font-black text-primary/10 select-none z-0 pointer-events-none leading-none">
            2007
          </div>
          <div className="relative z-10">
            <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight mb-6">
              Membangun Kepercayaan <br />
              <span className="text-primary">Sejak 2007</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-body">
              <p>
                Kami adalah perusahaan manufaktur pelapis dan kimia terkemuka
                yang berdedikasi pada inovasi dan kualitas. Berawal dari sebuah
                laboratorium kecil, kami telah tumbuh menjadi pemimpin industri
                yang dipercaya oleh berbagai sektor manufaktur di Indonesia.
              </p>
              <p>
                Komitmen kami tidak hanya pada hasil akhir produk, tetapi pada
                proses R&D yang berkelanjutan. Setiap formula yang kami ciptakan
                adalah hasil dari ribuan jam penelitian untuk memastikan
                ketahanan, efisiensi, dan keamanan lingkungan.
              </p>
            </div>
            <div className="mt-8 flex gap-8 items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-navy">15+</span>
                <span className="text-sm text-gray-500">Tahun Pengalaman</span>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-navy">500+</span>
                <span className="text-sm text-gray-500">Klien Korporat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
