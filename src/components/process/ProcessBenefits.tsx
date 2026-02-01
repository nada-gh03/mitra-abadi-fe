"use client";

import React from "react";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";
import ScaleIn from "../animations/ScaleIn";
import FadeIn from "../animations/FadeIn";
import { motion } from "framer-motion";

const ProcessBenefits: React.FC = () => {
  return (
    <section className="bg-background-light py-24 relative border-t border-gray-200 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#002D44 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col gap-6 bg-white p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden group h-full rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] z-0 group-hover:scale-[1.5] group-hover:bg-primary/10 transition-all duration-700 ease-out origin-top-right" />

              <div className="z-10 flex flex-col h-full">
                <ScaleIn
                  delay={0.2}
                  className="h-20 w-20 mb-8 flex items-center justify-center bg-navy/5 rounded-2xl group-hover:bg-primary group-hover:text-navy transition-colors duration-500"
                >
                  <span className="material-symbols-outlined text-5xl text-navy group-hover:text-navy transition-colors duration-300">
                    health_and_safety
                  </span>
                </ScaleIn>

                <div className="mb-4">
                  <FadeIn delay={0.3}>
                    <h3 className="text-navy text-2xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                      Keselamatan Kerja (K3)
                    </h3>
                  </FadeIn>
                </div>

                <FadeIn delay={0.4} className="grow">
                  <p className="text-gray-500 leading-relaxed text-lg">
                    Kami menjunjung tinggi standar K3 di setiap lini produksi.
                    Prosedur penanganan bahan kimia yang ketat dan penggunaan
                    APD lengkap menjamin keamanan tim dan integritas produk.
                  </p>
                </FadeIn>

                <div className="w-full h-[2px] bg-gray-100 mt-10 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-primary"
                    initial={{ width: "30%" }}
                    whileInView={{ width: "30%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col gap-6 bg-white p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden group h-full rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] z-0 group-hover:scale-[1.5] group-hover:bg-primary/10 transition-all duration-700 ease-out origin-top-right" />

              <div className="z-10 flex flex-col h-full">
                <ScaleIn
                  delay={0.3}
                  className="h-20 w-20 mb-8 flex items-center justify-center bg-navy/5 rounded-2xl group-hover:bg-primary group-hover:text-navy transition-colors duration-500"
                >
                  <span className="material-symbols-outlined text-5xl text-navy group-hover:text-navy transition-colors duration-300">
                    eco
                  </span>
                </ScaleIn>

                <div className="mb-4">
                  <FadeIn delay={0.4}>
                    <h3 className="text-navy text-2xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                      Perlindungan Lingkungan
                    </h3>
                  </FadeIn>
                </div>

                <FadeIn delay={0.5} className="grow">
                  <p className="text-gray-500 leading-relaxed text-lg">
                    Komitmen keberlanjutan melalui sistem pengolahan limbah
                    terpadu dan formulasi ramah lingkungan (Low VOC). Kami
                    meminimalkan jejak karbon demi masa depan yang lebih hijau.
                  </p>
                </FadeIn>

                <div className="w-full h-[2px] bg-gray-100 mt-10 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-primary"
                    initial={{ width: "30%" }}
                    whileInView={{ width: "30%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProcessBenefits;
