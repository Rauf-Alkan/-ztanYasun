import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Next.js'in kendi font yükleyicisi
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Suspense } from "react";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import ChatWidget from "./components/ui/ChatWidget";

// FONT AYARLARI (PREMIUM GÖRÜNÜM İÇİN KRİTİK)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Estetik Diş Hekimi - Ankara",
  description: "Ankara estetik diş hekimliği, implant ve gülüş tasarımı. Dr. Öztan Yasun ile kişiye özel, dijital destekli diş tedavileri.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-white text-slate-900 font-sans">
        
        <Suspense fallback={<div className="h-20 bg-white" />}>
          <Header />
        </Suspense>

        {children}

        <Suspense fallback={<div className="h-20 bg-[var(--color-brand-navy)]" />}>
          <Footer />
        </Suspense>

        {/* Floating Elements */}
        <div className="fixed bottom-6 right-6 z-[9990] flex flex-col gap-4 pointer-events-none">
           <div className="pointer-events-auto">
             <Suspense fallback={null}>
               <WhatsAppButton />
             </Suspense>
           </div>
        </div>
        
        <Suspense fallback={null}>
            <ChatWidget />
        </Suspense>

      </body>
    </html>
  );
}
