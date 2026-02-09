"use client";

import React, { useState } from "react";
import FadeIn from "../animations/FadeIn";
import ScaleIn from "../animations/ScaleIn";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "6289526543505";

    const textMessage = `
Halo Mitra Abadi Group,
Saya ingin berkonsultasi mengenai produk Anda.

Berikut data diri saya:
------------------------------------------------
Nama: ${formData.name}
Perusahaan: ${formData.company || "-"}
Email: ${formData.email}
No. HP: ${formData.phone}
Kategori: ${formData.subject}
------------------------------------------------

Pesan:
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(textMessage);

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="py-16 px-6 lg:px-10 flex justify-center bg-background-light overflow-hidden">
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <FadeIn
            direction="right"
            className="lg:w-1/3 flex flex-col gap-6 pt-4"
          >
            <div className="w-12 h-1 bg-primary mb-2"></div>
            <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
              Kirim Pesan atau Permintaan Sampel
            </h2>
            <p className="text-[#4a5568] text-base leading-relaxed">
              Apakah Anda memerlukan formulasi cat khusus untuk industri Anda?
              Atau ingin mengetahui lebih lanjut tentang kapasitas produksi
              kami?
            </p>
            <p className="text-[#4a5568] text-base leading-relaxed">
              Isi formulir di samping dan tim ahli kami akan segera menghubungi
              Anda via WhatsApp untuk respon yang lebih cepat.
            </p>

            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-100 hidden lg:block shadow-sm">
              <h4 className="text-navy font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  schedule
                </span>{" "}
                Jam Operasional
              </h4>
              <ul className="text-sm text-[#4a5568] space-y-2">
                <li className="flex justify-between">
                  <span>Senin - Jumat</span>{" "}
                  <span className="font-medium">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu</span>{" "}
                  <span className="font-medium">08:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Minggu</span>{" "}
                  <span className="font-medium text-red-500">Tutup</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <div className="lg:w-2/3">
            <ScaleIn
              delay={0.2}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-bold text-navy"
                      htmlFor="name"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-navy placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-bold text-navy"
                      htmlFor="company"
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-navy placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="PT Contoh Maju Jaya"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-bold text-navy"
                      htmlFor="email"
                    >
                      Alamat Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-navy placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@perusahaan.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-bold text-navy"
                      htmlFor="phone"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-navy placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62..."
                      type="tel"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-bold text-navy"
                    htmlFor="subject"
                  >
                    Subjek Permintaan
                  </label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-navy focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all cursor-pointer"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Pilih Kategori
                      </option>
                      <option value="industrial">Industrial Coating</option>
                      <option value="chemical">Chemical Solutions</option>
                      <option value="retail">Retail Partnership</option>
                      <option value="others">Lainnya</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-bold text-navy"
                    htmlFor="message"
                  >
                    Pesan
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-navy placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all resize-y"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tuliskan detail kebutuhan atau spesifikasi yang Anda inginkan..."
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  className="mt-2 w-full cursor-pointer rounded-lg bg-primary px-8 py-4 text-center text-base font-bold text-navy shadow-md transition-all hover:bg-[#e5a00d] hover:shadow-lg active:scale-[0.99] group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="size-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></span>
                      <span>Mengalihkan ke WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        send
                      </span>
                    </>
                  )}
                </button>
              </form>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
