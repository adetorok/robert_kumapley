import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyHire } from "@/components/sticky-hire";
import { brand } from "@/content/content";
import { Analytics } from "@/components/analytics";
import { Schema } from "@/components/schema";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: `${brand.fullName} | ${brand.headline}`,
  description:
    "Global Infrastructure & Asset Management Executive | Enterprise Transformation Leader | Operational Excellence | Sustainability | CMMS | Smart Multimodal Transportation Infrastructure Strategy",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: `${brand.fullName} | ${brand.headline}`,
    description: brand.subheadline,
    siteName: brand.fullName,
    locale: "en_US",
    type: "website",
    images: ["/og.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-[#0b1020] via-[#0d1227] to-[#0b1020] text-white overflow-x-hidden">
        <Header />
        <ScrollToTop />
        <main className="pb-16 px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <StickyHire />
        <Analytics />
        <Schema />
      </body>
    </html>
  );
}
