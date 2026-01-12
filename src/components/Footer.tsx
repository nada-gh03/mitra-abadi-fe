import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 text-white mb-6">
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
              <h2 className="text-xl font-bold">Mitra Abadi Group</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Leading the industry in protective coatings, chemicals, and
              sustainable manufacturing solutions since 2007.
            </p>
            <div className="flex gap-4">
              {["FB", "LI", "IG"].map((social) => (
                <a
                  key={social}
                  className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-navy transition-colors cursor-pointer"
                  href="#"
                >
                  <span className="font-bold text-xs">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              {["About Us", "Our History", "Certifications", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                      href="#"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Products</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Industrial Coatings",
                "Chemical Solvents",
                "Catalya Paint",
                "Safety Gear",
              ].map((item) => (
                <li key={item}>
                  <Link
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  location_on
                </span>
                <span>
                  Jl. Industri Raya No. 45
                  <br />
                  Jakarta Barat, Indonesia 11000
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  call
                </span>
                <span>+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
                <span>info@mitraabadi.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2024 Mitra Abadi Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-white/40 hover:text-white text-xs" href="#">
              Privacy Policy
            </a>
            <a className="text-white/40 hover:text-white text-xs" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
