import React from "react";

const RetailSection: React.FC = () => {
  return (
    <section
      id="waterbase"
      className="w-full max-w-[1200px] flex flex-col gap-8 scroll-mt-32"
    >
      <div className="flex items-center gap-4">
        <span className="text-6xl font-black text-gray-200 select-none -mb-3">
          III.
        </span>
        <h2 className="text-navy text-2xl lg:text-3xl font-bold leading-tight pt-3">
          Retail & Safety Gear
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <div className="relative bg-[#f0f4f8] p-8 md:p-12 flex flex-col justify-center gap-6 min-h-[400px]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-navy text-xs font-bold mb-4 shadow-sm">
              <span className="material-symbols-outlined text-sm">
                format_paint
              </span>{" "}
              Consumer Line
            </div>
            <h3 className="text-3xl font-black text-navy mb-2">
              Catalya & Catapro
            </h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Premium waterbase and wall paints for enduring beauty and
              protection.
            </p>
            <div className="space-y-2">
              {[
                "Catalya (Premium, Satin, Weatherguard)",
                "Catapro 72",
                "Catashield",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">
                    check_circle
                  </span>
                  <span className="text-sm font-medium text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute right-0 bottom-0 w-1/2 h-full bg-contain bg-right-bottom bg-no-repeat opacity-20 md:opacity-100 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80')`,
            }}
          ></div>
        </div>

        <div className="relative bg-[#1e293b] p-8 md:p-12 flex flex-col justify-center gap-6 min-h-[400px] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-navy text-xs font-bold mb-4 shadow-sm">
              <span className="material-symbols-outlined text-sm">
                hardware
              </span>{" "}
              Safety Gear
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Cataboost</h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              Perlindungan maksimal untuk tenaga kerja Anda dengan desain rugged
              dan profesional.
            </p>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group cursor-pointer">
              Lihat Katalog Safety Boots{" "}
              <span className="material-symbols-outlined transition-all group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
          <div
            className="absolute right-0 bottom-0 w-2/3 h-2/3 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at bottom right, rgba(249, 181, 21, 0.2), transparent 70%)",
            }}
          >
            <div
              className="absolute right-0 bottom-0 w-full h-full bg-contain bg-right-bottom bg-no-repeat opacity-30"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80')`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailSection;
