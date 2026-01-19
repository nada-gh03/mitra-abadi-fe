"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import ScaleIn from "../animations/ScaleIn";
import TextReveal from "../animations/TextReveal";
import CountUp from "../animations/CountUp";

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <FadeIn
        delay={0.5}
        direction="left"
        className="absolute right-0 top-0 h-full w-1/2 pointer-events-none z-0"
      >
        <div className="h-full w-full bg-[#f0f4f8] -skew-x-12 translate-x-32 hidden lg:block opacity-50"></div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <TextReveal
                  text="Your Trusted Partner for"
                  className="text-navy text-4xl lg:text-6xl font-black leading-tight tracking-tight"
                />
                <div className="relative inline-block w-fit">
                  <TextReveal
                    text="Advanced Coatings"
                    className="text-navy text-4xl lg:text-6xl font-black leading-tight tracking-tight"
                    delay={0.3}
                  />
                  <FadeIn
                    delay={1.2}
                    direction="right"
                    className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-10"
                  />
                </div>
                <TextReveal
                  text="& Chemical Solutions"
                  className="text-navy text-4xl lg:text-6xl font-black leading-tight tracking-tight"
                  delay={0.6}
                />
              </div>

              <FadeIn delay={0.8} className="max-w-xl">
                <h2 className="text-gray-600 text-lg lg:text-xl font-body leading-relaxed">
                  Menyediakan solusi inovatif cat, pelapis, dan kimia kualitas
                  tinggi untuk kebutuhan industri dan ritel sejak 2007.
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={1} className="flex flex-wrap gap-4">
              <button
                onClick={scrollToFeatures}
                className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-yellow-400 transition-colors text-navy text-base font-bold shadow-lg shadow-yellow-200 cursor-pointer hover:scale-105 active:scale-95 duration-300"
              >
                <span>Discover Our Solutions</span>
                <span className="material-symbols-outlined ml-2 text-xl">
                  arrow_downward
                </span>
              </button>

              <Link
                href="/products"
                className="flex items-center justify-center rounded-full h-12 px-8 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all text-base font-bold cursor-pointer hover:scale-105 active:scale-95 duration-300"
              >
                <span>View Products</span>
              </Link>
            </FadeIn>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] flex items-center justify-center">
            <FadeIn
              delay={0.5}
              className="absolute top-10 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
            />
            <FadeIn
              delay={0.7}
              className="absolute bottom-10 left-10 w-64 h-64 bg-navy/10 rounded-full blur-3xl"
            />

            <ScaleIn delay={0.2} className="relative w-full h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/assets/img/main-hero.avif"
                  alt="Pabrik Cat Mitra Abadi Group"
                  fill
                  priority={true}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <FadeIn
                  delay={1.2}
                  direction="up"
                  className="absolute bottom-6 right-6 z-20"
                >
                  <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg max-w-[200px] border-l-4 border-primary">
                    <p className="text-navy font-bold text-lg leading-none">
                      <CountUp to={15} duration={2.0} delay={1} />
                      <span>+</span>
                    </p>
                    <p className="text-gray-600 text-xs mt-1 font-medium">
                      Years of Industrial Excellence
                    </p>
                  </div>
                </FadeIn>
              </div>
            </ScaleIn>

            <FadeIn
              delay={1.4}
              direction="left"
              className="absolute -z-10 -bottom-6 -right-6"
            >
              <div className="w-32 h-32 bg-primary rounded-xl rotate-12"></div>
            </FadeIn>
            <FadeIn
              delay={1.4}
              direction="right"
              className="absolute -z-10 -top-6 -left-6"
            >
              <div className="w-32 h-32 bg-navy rounded-full"></div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
