import React from "react";

const ContactMap: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] bg-gray-200 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center grayscale contrast-125"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-5xl drop-shadow-md">
            location_on
          </span>
          <div className="w-3 h-1 bg-black/30 rounded-full blur-[2px]"></div>
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pointer-events-auto bg-white p-5 rounded-lg shadow-xl max-w-[320px] border-l-4 border-primary">
          <h5 className="text-navy font-bold text-lg mb-1">Pabrik Utama</h5>
          <p className="text-xs text-gray-500 mb-3">
            Mitra Abadi Group, Legok, Tangerang
          </p>
          <a
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-navy transition-colors"
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg">
              directions
            </span>
            Dapatkan Petunjuk Arah
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
