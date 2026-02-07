import React from "react";
import FadeIn from "../animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

const Workflow: React.FC = () => {
  const steps = [
    {
      icon: "search",
      title: "Analisis Kebutuhan",
      desc: "Understanding specs & requirements",
    },
    {
      icon: "science",
      title: "R&D & Formulasi",
      desc: "Lab formulation & material selection",
    },
    {
      icon: "colorize",
      title: "Sample & Pengujian",
      desc: "Testing & client verification",
    },
    {
      icon: "factory",
      title: "Produksi Masal",
      desc: "Large scale manufacturing",
    },
    {
      icon: "shield",
      title: "Quality Control",
      desc: "Final inspection & validation",
    },
    {
      icon: "local_shipping",
      title: "Pengiriman & Support",
      desc: "Logistics & after-sales service",
    },
  ];

  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <FadeIn className="text-center mb-16" direction="down">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            Our Workflow
          </h2>
          <p className="text-white/60 text-lg">From Concept to Creation</p>
        </FadeIn>

        <div className="relative">
          <FadeIn
            delay={0.2}
            className="hidden lg:block absolute top-9 left-0 w-full h-1 bg-white/10 rounded-full overflow-hidden"
          >
            <div className="h-full w-full bg-linear-to-r from-primary/20 via-primary to-primary/20 shadow-[0_0_15px_rgba(253,182,18,0.5)] animate-pulse"></div>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="lg:hidden absolute left-8 top-0 h-full w-1 bg-white/10 rounded-full overflow-hidden"
          >
            <div className="w-full h-full bg-linear-to-b from-primary/20 via-primary to-primary/20"></div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-4">
            {steps.map((step, idx) => (
              <StaggerItem
                key={idx}
                className="relative flex lg:flex-col items-center gap-6 lg:gap-8 group"
              >
                <div className="relative z-10 bg-navy border-4 border-primary rounded-full p-4 shadow-[0_0_20px_rgba(253,182,18,0.3)] group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="material-symbols-outlined text-white text-2xl group-hover:animate-spin-slow">
                    {step.icon}
                  </span>
                </div>
                <div className="text-left lg:text-center">
                  <h4 className="text-primary font-bold text-lg mb-1">
                    {step.title}
                  </h4>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
