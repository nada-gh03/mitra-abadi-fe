import React from "react";

const ProcessHero: React.FC = () => {
  return (
    <section className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-navy pb-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#002D44]/60 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#002D44]/40 z-10"></div>
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')`,
          }}
        />
      </div>

      <div
        className="absolute bottom-0 right-0 w-32 h-32 bg-primary z-20"
        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
      />
      <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-primary z-20 opacity-50" />

      <div className="relative z-20 flex max-w-[960px] flex-col items-center gap-6 px-6 py-16 text-center">
        <div className="relative">
          <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl font-display">
            Standar Operasional & Kualitas
          </h1>
          <div className="absolute -bottom-4 right-0 h-2 w-24 bg-primary skew-x-12" />
        </div>
        <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl font-body mt-4">
          Proses sistematis dari riset hingga dukungan purna jual untuk hasil
          yang presisi.
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-12 bg-white z-20"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      ></div>
    </section>
  );
};

export default ProcessHero;
