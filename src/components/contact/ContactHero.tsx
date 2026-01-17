import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full bg-navy overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative flex justify-center py-16 lg:py-24 px-6 lg:px-10">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col items-start gap-4 max-w-[800px]">
            <div className="flex gap-4 border-l-4 border-primary pl-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Hubungi Kami
                </h1>
                <p className="text-white/90 text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
                  Tim kami siap membantu memberikan solusi cat dan kimia terbaik
                  untuk bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
