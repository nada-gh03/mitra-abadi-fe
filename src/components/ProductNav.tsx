"use client";

import React, { useState, useEffect } from "react";

const ProductNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("industrial");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["industrial", "protective", "waterbase"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "industrial", label: "Industrial" },
    { id: "protective", label: "Protective & Chemicals" },
    { id: "waterbase", label: "Retail & Safety" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-navy w-full border-b border-navy-light shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 overflow-x-auto">
        <div className="flex items-center min-w-max gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group flex flex-col items-center justify-center border-b-[3px] py-4 px-2 transition-all ${
                activeTab === item.id
                  ? "border-b-primary"
                  : "border-b-transparent hover:border-b-white/20"
              }`}
            >
              <span
                className={`${
                  activeTab === item.id
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                } text-sm font-bold tracking-[0.015em] transition-colors`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProductNav;
