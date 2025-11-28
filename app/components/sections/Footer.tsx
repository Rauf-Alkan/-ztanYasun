"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-brand-navy)] text-slate-300 py-16 md:py-20 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-16">
          
          {/* 1. SÜTUN: MARKA & AÇIKLAMA */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-11 h-11 bg-white/10 rounded-xl p-2 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Dr. Öztan Yasun"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-2xl font-semibold text-white leading-none">
                Dr. Öztan Yasun
              </span>
            </Link>
            
            <p className="max-w-md text-slate-400 leading-relaxed text-sm">
              Ankara&apos;da dijital destekli estetik diş hekimliği ve implant cerrahisini, kişiye özel protokollerle sunuyoruz.
            </p>
          </div>

          {/* 2. SÜTUN: LİNKLER */}
          <div>
            <h3 className="text-white font-heading text-lg font-semibold mb-5">Bağlantılar</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-4 bg-[var(--color-brand-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SÜTUN: ÇALIŞMA SAATLERİ & İLETİŞİM */}
          <div className="space-y-4">
            <h3 className="text-white font-heading text-lg font-semibold">Çalışma Saatleri</h3>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 space-y-2">
              <div className="flex justify-between">
                <span>Pazartesi - Cumartesi</span>
                <span className="font-semibold text-white">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Pazar</span>
                <span className="text-[var(--color-brand-gold)] font-medium">Kapalı</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-brand-gold)] text-lg">📍</span>
                <span>Meşrutiyet Mah. Atatürk Bulvarı, Çankaya / Ankara</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-brand-gold)] text-lg">📞</span>
                <a href="tel:+903120000000" className="hover:text-white transition-colors font-medium">
                  0312 000 00 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-brand-gold)] text-lg">✉️</span>
                <a href="mailto:info@droztanyasun.com" className="hover:text-white transition-colors">
                  info@droztanyasun.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ALT BAR */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="#" className="hover:text-white transition-colors">Aydınlatma Metni</Link>
          </div>
          <p className="text-center md:text-right w-full md:w-auto">© {currentYear} Dr. Öztan Yasun Kliniği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
