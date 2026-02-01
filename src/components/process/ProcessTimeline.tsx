"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

const STEPS = [
  {
    id: "01",
    number: "01",
    title: "Analisis Kebutuhan",
    description:
      "Konsultasi teknis mendalam untuk menerjemahkan kebutuhan bisnis Anda menjadi parameter kimia yang presisi.",
    icon: "assignment",
    imageUrl: "/assets/img/process-1.avif",
  },
  {
    id: "02",
    number: "02",
    title: "R&D dan Formulasi",
    description:
      "Peracikan formula khusus di laboratorium modern dengan bahan baku premium dan uji stabilitas ekstrem.",
    icon: "biotech",
    imageUrl: "/assets/img/process-2.avif",
  },
  {
    id: "03",
    number: "03",
    title: "Sample & Pengujian",
    description:
      "Validasi lapangan (field test) melalui prototipe hingga mencapai 100% kesesuaian operasional.",
    icon: "science",
    imageUrl: "/assets/img/process-3.avif",
  },
  {
    id: "04",
    number: "04",
    title: "Produksi Masal",
    description:
      "Manufaktur terotomatisasi menjamin konsistensi kualitas batch-to-batch dengan efisiensi tinggi.",
    icon: "precision_manufacturing",
    imageUrl: "/assets/img/process-4.avif",
  },
  {
    id: "05",
    number: "05",
    title: "Quality Control (QC)",
    description:
      "Kebijakan 'Zero Defect' melalui uji viskositas, densitas, dan daya rekat sebelum pengiriman.",
    icon: "verified_user",
    imageUrl: "/assets/img/process-5.avif",
  },
  {
    id: "06",
    number: "06",
    title: "Pengiriman & Support",
    description:
      "Logistik aman dan dukungan teknis 24/7 untuk troubleshooting aplikasi di lapangan.",
    icon: "local_shipping",
    imageUrl: "/assets/img/process-6.avif",
  },
];

const TimelineItem = ({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) => {
  const isEven = index % 2 !== 0;
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center mb-24 md:mb-32 last:mb-0`}
    >
      <div className="absolute left-6 md:left-1/2 top-0 md:top-8 h-12 w-12 -translate-x-[22px] md:-translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full h-full flex items-center justify-center rounded-full bg-navy border-4 border-white shadow-xl"
        >
          <span className="material-symbols-outlined text-primary text-xl font-bold">
            {step.icon}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 30 : -30 }
        }
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className={`pl-16 md:pl-0 ${
          !isEven ? "md:text-right order-2 md:order-1" : "order-2"
        }`}
      >
        <div className={`flex flex-col gap-3 ${!isEven ? "md:items-end" : ""}`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-navy font-display">
            {step.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
            {step.description}
          </p>
        </div>
      </motion.div>

      <div
        className={`pl-16 md:pl-0 relative ${
          !isEven ? "order-1 md:order-2" : "order-1"
        }`}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className={`absolute -top-10 md:-top-16 ${
            !isEven ? "-left-6 md:-left-20" : "-right-6 md:-right-20"
          } text-8xl md:text-9xl font-black text-navy/5 font-display select-none z-0`}
        >
          {step.number}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group"
        >
          {/* Parallax Wrapper */}
          <motion.div
            style={{ y: yParallax, scale: 1.1 }}
            className="w-full h-full relative will-change-transform"
          >
            <Image
              src={step.imageUrl}
              alt={step.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          <div
            className={`absolute bottom-0 ${
              !isEven ? "left-0" : "right-0"
            } w-1/3 h-1.5 bg-primary group-hover:w-full transition-all duration-700 z-20`}
          />
        </motion.div>
      </div>
    </div>
  );
};

const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothHeight = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const heightStyle = useTransform(smoothHeight, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center mb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-navy text-xl md:text-2xl font-normal leading-relaxed border-l-4 border-primary pl-6 text-left md:text-center md:pl-0 md:border-l-0 md:border-b-4 md:pb-6 md:inline-block italic">
            "Di Mitra Abadi Group, setiap solusi kimia yang kami hasilkan
            melewati siklus pengembangan yang ketat. Kami memastikan setiap
            tetes cat dan bahan kimia memenuhi standar industri internasional."
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="mx-auto max-w-[1200px] px-6 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 md:-translate-x-1/2 h-full z-0" />

        <motion.div
          style={{ height: heightStyle }}
          className="absolute left-6 md:left-1/2 top-0 w-[4px] bg-linear-to-b from-primary via-yellow-300 to-primary shadow-[0_0_20px_rgba(253,184,19,0.6)] md:-translate-x-1/2 z-10 rounded-full origin-top will-change-[height]"
        />

        <div className="flex flex-col relative z-10 pt-10">
          {STEPS.map((step, idx) => (
            <TimelineItem key={step.id} step={step} index={idx} />
          ))}
        </div>

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]) }}
          className="absolute bottom-0 left-6 md:left-1/2 w-4 h-4 bg-navy rounded-full md:-translate-x-1/2 translate-y-2 z-20 border-2 border-primary"
        />
      </div>
    </section>
  );
};

export default ProcessTimeline;
