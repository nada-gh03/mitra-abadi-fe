"use client";

import React from "react";
import { motion } from "framer-motion";
import ScaleIn from "../animations/ScaleIn";

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
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
          >
            <span className="material-symbols-outlined text-primary text-6xl drop-shadow-xl">
              location_on
            </span>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-4 h-1.5 bg-black/30 rounded-full blur-[2px] mt-1"
          />
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pointer-events-auto">
          <ScaleIn
            delay={0.5}
            className="bg-white p-6 rounded-xl shadow-2xl max-w-[320px] border-l-4 border-primary"
          >
            <h5 className="text-navy font-bold text-lg mb-1">Pabrik Utama</h5>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Kp. Kebon baru no 88, Babat, Legok, Tangerang
            </p>
            <a
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-navy px-4 py-2 rounded-full hover:bg-primary hover:text-navy transition-all shadow-md group"
              href="https://maps.google.com/?q=Kp.+Kebon+baru+no+88,+Babat,+Legok,+Kabupaten+Tangerang,+Banten"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-lg">
                directions
              </span>
              Dapatkan Petunjuk Arah
            </a>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
