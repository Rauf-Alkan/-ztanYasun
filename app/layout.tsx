import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Suspense } from "react";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import ChatWidget from "./components/ui/ChatWidget";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Estetik Diş Hekimliği - Ankara",
  description:
    "Dr. Öztan Yasun'un estetik diş hekimliği ve implantoloji yaklaşımıyla butik, konforlu ve teknoloji odaklı tedavi deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {/* 2. Header'ı Suspense içine al */}
        <Suspense fallback={<div className="h-20 bg-white" />}>
          <Header />
        </Suspense>

        {children}

        {/* 3. Footer'ı Suspense içine al */}
        <Suspense fallback={<div className="h-20 bg-[#0F172A]" />}>
          <Footer />
        </Suspense>

        {/* 4. Butonu da garanti olsun diye al */}
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>

        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      </body>
    </html>
  );
}
