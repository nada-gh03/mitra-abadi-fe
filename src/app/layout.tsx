import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mitra Abadi Group | Advanced Coatings & Chemical Solutions",
  description:
    "Menyediakan solusi inovatif cat, pelapis, dan kimia kualitas tinggi untuk kebutuhan industri dan ritel sejak 2006.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-navy">
        <NextTopLoader
          color="#fdb612"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          showSpinner={false}
          shadow="0 0 10px #fdb612,0 0 5px #fdb612"
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
