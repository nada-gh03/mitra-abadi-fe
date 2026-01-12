import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#f0f4f8] -skew-x-12 translate-x-32 hidden lg:block opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-navy text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Your Trusted Partner for{" "}
                <span className="relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-3 after:bg-primary/30 after:-z-10">
                  Advanced Coatings
                </span>{" "}
                & Chemical Solutions
              </h1>
              <h2 className="text-gray-600 text-lg lg:text-xl font-body leading-relaxed max-w-xl">
                Menyediakan solusi inovatif cat, pelapis, dan kimia kualitas
                tinggi untuk kebutuhan industri dan ritel sejak 2007.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-yellow-400 transition-colors text-navy text-base font-bold shadow-lg shadow-yellow-200 cursor-pointer">
                <span>Discover Our Solutions</span>
                <span className="material-symbols-outlined ml-2 text-xl">
                  arrow_downward
                </span>
              </button>
              <button className="flex items-center justify-center rounded-full h-12 px-8 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all text-base font-bold cursor-pointer">
                <span>View Products</span>
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] flex items-center justify-center">
            <div className="absolute top-10 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-navy/10 rounded-full blur-3xl"></div>

            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent z-10 mix-blend-multiply"></div>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')`,
                }}
              ></div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg z-20 max-w-[200px] border-l-4 border-primary">
                <p className="text-navy font-bold text-lg leading-none">17+</p>
                <p className="text-gray-600 text-xs mt-1 font-medium">
                  Years of Industrial Excellence
                </p>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary rounded-xl rotate-12"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-navy rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
