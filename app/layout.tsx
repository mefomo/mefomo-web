import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://me-fomo.com"),
  title: {
    default: "me fomo — streetwear limitado",
    template: "%s | me fomo",
  },
  description: "Marca creada en Zaragoza. Lanyards, camisetas y sudaderas exclusivas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://me-fomo.com",
    siteName: "me fomo",
    title: "me fomo — streetwear limitado",
    description:
      "Marca creada en Zaragoza. Lanyards, camisetas y sudaderas exclusivas.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "me fomo — drop #001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "me fomo — streetwear limitado",
    description:
      "Marca creada en Zaragoza. Lanyards, camisetas y sudaderas exclusivas.",
    images: ["/og.jpg"],
    // site: "@vuestroUsuario", // <- si más adelante creáis Twitter/X, añadidlo
  },
  // (Opcional) colores del navegador móvil
  themeColor: "#000000",
  // (Opcional) iconos extra para iOS
  icons: {
    apple: "/apple-touch-icon.png", // si añadís este archivo a /public
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}