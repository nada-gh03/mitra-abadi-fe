"use client";

import React from "react";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";
import { motion } from "framer-motion";

const ContactCard: React.FC<{
  icon: string;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex flex-col gap-4 rounded-xl border border-[#e7e3da] bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full group"
  >
    <div className="flex items-center justify-center size-12 rounded-full bg-navy/5 text-primary mb-2 group-hover:bg-primary group-hover:text-navy transition-colors duration-300">
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-navy text-lg font-bold group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="text-[#4a5568] text-sm leading-relaxed">{children}</div>
    </div>
  </motion.div>
);

const ContactInfo: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-10 flex justify-center bg-white">
      <div className="w-full max-w-[1280px]">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggerItem>
            <ContactCard icon="location_on" title="Lokasi Kantor & Pabrik">
              <p>
                Kp. Kebon baru no 88, Babat, Legok, Kabupaten Tangerang, Banten.
              </p>
            </ContactCard>
          </StaggerItem>

          <StaggerItem>
            <ContactCard icon="call" title="Telepon & WhatsApp">
              <p className="mb-2">Layanan Pelanggan (09:00 - 17:00)</p>
              <div className="flex flex-col gap-1">
                <a
                  className="text-navy font-medium hover:text-primary transition-colors text-lg"
                  href="tel:6289526543505"
                >
                  0895-2654-3505
                </a>
              </div>
            </ContactCard>
          </StaggerItem>

          <StaggerItem>
            <ContactCard icon="mail" title="Email Resmi">
              <p className="mb-2">
                Kirim penawaran atau pertanyaan resmi ke alamat email kami.
              </p>
              <div className="flex flex-col gap-1 wrap-break-word">
                <a
                  className="text-navy font-medium hover:text-primary transition-colors text-sm"
                  href="mailto:info@mitraabadi-group.com"
                >
                  info@mitraabadi-group.com
                </a>
                <a
                  className="text-navy font-medium hover:text-primary transition-colors text-sm"
                  href="mailto:mitraabadiselarassejahtera@yahoo.com"
                >
                  mitraabadiselarassejahtera@yahoo.com
                </a>
              </div>
            </ContactCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ContactInfo;
