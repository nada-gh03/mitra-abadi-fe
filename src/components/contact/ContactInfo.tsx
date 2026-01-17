import React from "react";

const ContactCard: React.FC<{
  icon: string;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-[#e7e3da] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center size-12 rounded-full bg-navy/5 text-primary mb-2">
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-navy text-lg font-bold">{title}</h3>
      <div className="text-[#4a5568] text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

const ContactInfo: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-10 flex justify-center bg-white">
      <div className="w-full max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactCard icon="location_on" title="Lokasi Kantor & Pabrik">
            <p>
              Kp. Kebon Baru No.88, RT.001/RW.01, Babat, Kec. Legok, Kabupaten
              Tangerang, Banten 15820.
            </p>
          </ContactCard>

          <ContactCard icon="call" title="Telepon & WhatsApp">
            <p className="mb-2">Layanan Pelanggan (09:00 - 17:00)</p>
            <div className="flex flex-col gap-1">
              <a
                className="text-navy font-medium hover:text-primary transition-colors"
                href="tel:089526543505"
              >
                0895-2654-3505
              </a>
              <a
                className="text-navy font-medium hover:text-primary transition-colors"
                href="tel:08129057775"
              >
                0812-9057-775
              </a>
            </div>
          </ContactCard>

          <ContactCard icon="mail" title="Email Resmi">
            <p className="mb-2">
              Kirim penawaran atau pertanyaan resmi ke alamat email kami.
            </p>
            <div className="flex flex-col gap-1 break-words">
              <a
                className="text-navy font-medium hover:text-primary transition-colors text-sm"
                href="mailto:mass_chemical@yahoo.com"
              >
                mass_chemical@yahoo.com
              </a>
              <a
                className="text-navy font-medium hover:text-primary transition-colors text-sm"
                href="mailto:mitraabadiselarassejahtera@yahoo.com"
              >
                mitraabadiselarassejahtera@yahoo.com
              </a>
            </div>
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
