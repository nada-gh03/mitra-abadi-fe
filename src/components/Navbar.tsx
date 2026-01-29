"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Process", href: "/process" },
  ];

  const getLinkClass = (href: string, isMobile = false) => {
    const baseClass = isMobile
      ? "text-lg font-medium py-3 border-b border-gray-100 w-full text-center transition-colors"
      : "text-sm font-medium transition-colors";

    const isActive =
      href === "/" ? pathname === href : pathname.startsWith(href);

    if (isActive) {
      return `${baseClass} text-primary font-bold`;
    }
    return `${baseClass} text-navy hover:text-primary`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb] shadow-sm transition-all duration-300">
      <div
        className={`px-4 md:px-10 flex items-center justify-between max-w-7xl mx-auto transition-all duration-300 ease-in-out ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-4 text-navy group z-50 relative"
        >
          <div
            className={`relative transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            }`}
          >
            <Image
              src="/assets/logo/mass-logo.png"
              alt="Mitra Abadi Group Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h2
              className={`text-navy font-bold leading-tight tracking-tight transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              Mitra Abadi Group
            </h2>
            <div
              className={`flex gap-2 text-[10px] text-gray-500 font-medium tracking-wide uppercase mt-0.5 transition-all duration-300 ${
                isScrolled
                  ? "opacity-0 h-0 overflow-hidden"
                  : "opacity-100 h-auto"
              }`}
            >
              {/* <span>Trimitra</span>
              <span className="text-primary">•</span> */}
              <span>PT Mitra Abadi Sinar Selaras</span>
              {/* <span className="text-primary">•</span>
              <span>MASS</span> */}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary hover:bg-yellow-400 transition-all text-navy text-sm font-bold shadow-md ${
              isScrolled ? "h-9 px-5" : "h-10 px-6"
            }`}
          >
            <span>Contact Us</span>
          </Link>

          <button
            className="lg:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 cursor-pointer focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2 bg-primary" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0 translate-x-3" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2 bg-primary" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={getLinkClass(link.href, true)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-primary text-navy font-bold py-3 rounded-full mt-6 text-center hover:bg-yellow-400 transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
