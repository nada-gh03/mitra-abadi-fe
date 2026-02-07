import React from "react";
import FadeIn from "../animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const VisionMission: React.FC = () => {
  const missions = [
    {
      icon: "verified",
      title: "Quality First",
      desc: "Menjaga standar kualitas tertinggi dalam setiap batch produksi tanpa kompromi.",
    },
    {
      icon: "science",
      title: "Continuous Innovation",
      desc: "Mengembangkan formula baru yang lebih efisien dan ramah lingkungan.",
    },
    {
      icon: "handshake",
      title: "Customer Partnership",
      desc: "Membangun hubungan jangka panjang yang saling menguntungkan dengan klien.",
    },
    {
      icon: "eco",
      title: "Sustainability",
      desc: "Bertanggung jawab terhadap dampak lingkungan melalui proses produksi yang bersih.",
    },
    {
      icon: "groups",
      title: "Team Empowerment",
      desc: "Mendorong pertumbuhan profesional dan kesejahteraan setiap anggota tim kami.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-40 bg-background-light">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        <FadeIn className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden group hover:shadow-lg transition-shadow duration-500"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[200px] text-primary">
              visibility
            </span>
          </div>
          <div className="shrink-0 size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl">
              lightbulb
            </span>
          </div>
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold text-navy mb-3">Our Vision</h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl italic">
              "Menjadi penyedia solusi kimia terdepan di kawasan regional,
              memberikan produk yang berkelanjutan, inovatif, dan menjadi
              standar kualitas industri masa depan."
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((m, idx) => (
            <StaggerItem
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform origin-left">
                <span className="material-symbols-outlined text-4xl">
                  {m.icon}
                </span>
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">{m.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default VisionMission;
