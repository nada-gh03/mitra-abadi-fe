"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb] shadow-sm">
      <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-navy">
          <div className="size-8 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-navy text-xl font-bold leading-tight tracking-tight">
              Mitra Abadi Group
            </h2>
            <div className="flex gap-2 text-[10px] text-gray-500 font-medium tracking-wide uppercase mt-0.5">
              <span>Trimitra</span>
              <span className="text-primary">•</span>
              <span>MASS Chemical</span>
              <span className="text-primary">•</span>
              <span>MASS</span>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            className="text-navy hover:text-primary transition-colors text-sm font-medium"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-navy hover:text-primary transition-colors text-sm font-medium"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-navy hover:text-primary transition-colors text-sm font-medium"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="text-navy hover:text-primary transition-colors text-sm font-medium"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-yellow-400 transition-colors text-navy text-sm font-bold shadow-md">
            <span>Get a Quote</span>
          </button>
          <button
            className="lg:hidden text-navy cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <Link
              className="text-navy text-lg font-medium p-2"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-navy text-lg font-medium p-2"
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="text-navy text-lg font-medium p-2"
              href="/products"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              className="text-navy text-lg font-medium p-2"
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full bg-primary text-navy font-bold py-3 rounded-full mt-2 cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
