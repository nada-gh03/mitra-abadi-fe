import type { Metadata, Viewport } from "next";
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

// Konfigurasi Metadata SEO Lengkap
export const metadata: Metadata = {
  metadataBase: new URL("https://mitraabadi-group.com"),
  title: {
    default: "Mitra Abadi Group | Advanced Coatings & Chemical Solutions",
    template: "%s | Mitra Abadi Group",
  },
  description:
    "Solusi cat, pelapis industri (wood, plastic, metal), dan bahan kimia berkualitas tinggi sejak 2006. Produsen brand Catalya dan supplier kimia terpercaya.",
  keywords: [
    "cat industri",
    "coatings indonesia",
    "bahan kimia industri",
    "cat kayu",
    "cat plastik",
    "supplier thinner",
    "Catalya paint",
  ],
  authors: [{ name: "Mitra Abadi Group" }],
  creator: "Mitra Abadi Group",
  publisher: "Mitra Abadi Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mitra Abadi Group | Advanced Coatings & Chemical Solutions",
    description:
      "Solusi inovatif cat, pelapis, dan kimia industri berkualitas tinggi.",
    url: "https://mitraabadi-group.com",
    siteName: "Mitra Abadi Group",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mitra Abadi Group Industrial Solutions",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitra Abadi Group | Industrial Coatings & Chemicals",
    description: "Solusi inovatif cat dan kimia industri sejak 2006.",
    images: ["/assets/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#002d44",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mitra Abadi Group",
              url: "https://mitraabadi-group.com",
              logo: "https://mitraabadi-group.com/assets/logo/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-812-9057-775",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
              sameAs: ["https://www.instagram.com/mitraabadigroup.id"],
            }),
          }}
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-navy">
        <NextTopLoader color="#fdb612" showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
