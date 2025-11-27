"use client";

import Link from "next/link";
import Image from "next/image";

const footerServices = [
  { label: "İmplant Tedavisi", href: "/hizmetler/implant" },
  { label: "Gülüş Tasarımı", href: "/hizmetler/gulus-tasarimi" },
  { label: "Ortodonti (Şeffaf Plak)", href: "/hizmetler/ortodonti" },
  { label: "Zirkonyum Kaplama", href: "/hizmetler/zirkonyum-kaplama" },
  { label: "Diş Beyazlatma", href: "/hizmetler/dis-beyazlatma" },
  { label: "Kanal Tedavisi", href: "/hizmetler/dolgu-kanal" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // DEĞİŞİKLİK: Arka planı Kurumsal Lacivert yaptık. Yazılar açık gri.
    <footer className="bg-[var(--color-brand-navy)] text-slate-300 py-16 md:py-24 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. SÜTUN: MARKA & HAKKINDA */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                 {/* Logo beyaz zeminli değilse brightness filter ile beyaz yapıyoruz */}
                 <div className="relative w-12 h-12 bg-white/10 rounded-full p-2 flex items-center justify-center">
                    <Image
                        src="/logo.png"
                        alt="Dr. Öztan Yasun"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                 </div>
                 <div>
                    <h2 className="text-2xl font-heading font-bold text-white leading-none">
                        Dr. Öztan Yasun
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mt-1">
                        Estetik Diş Kliniği
                    </p>
                 </div>
              </div>
            </Link>
            
            <p className="max-w-md text-slate-400 leading-relaxed text-sm">
              Dijital diş hekimliği ve estetik uygulamalarda güncel teknolojileri kullanarak, 
              Ankara&apos;nın kalbinde kişiye özel, ağrısız ve konforlu tedavi süreçleri sunuyoruz.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-4 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                <div className="flex gap-1 text-[var(--color-brand-gold)]">
                    {[1,2,3,4,5].map(i => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
                <div className="text-sm font-medium text-white">
                    4.9/5 <span className="text-slate-500 text-xs ml-1">(180+ Yorum)</span>
                </div>
            </div>
          </div>

          {/* 2. SÜTUN: HIZLI LİNKLER */}
          <div>
            <h3 className="text-white font-heading text-lg font-semibold mb-6">Tedaviler</h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[var(--color-brand-gold)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"/>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SÜTUN: İLETİŞİM */}
          <div>
            <h3 className="text-white font-heading text-lg font-semibold mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-brand-gold)] text-lg mt-[-2px]">📍</span>
                <span>
                  Meşrutiyet Mah. Atatürk Bulvarı<br/>
                  Çankaya / Ankara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--color-brand-gold)] text-lg">📞</span>
                <a href="tel:+903120000000" className="hover:text-white transition-colors font-medium">
                  0312 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--color-brand-gold)] text-lg">✉️</span>
                <a href="mailto:info@droztanyasun.com" className="hover:text-white transition-colors">
                  info@droztanyasun.com
                </a>
              </li>
              <li className="pt-4">
                 <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Çalışma Saatleri</p>
                 <div className="flex justify-between text-xs">
                    <span>Pzt - Cmt:</span>
                    <span className="text-white">09:00 - 19:00</span>
                 </div>
                 <div className="flex justify-between text-xs mt-1">
                    <span>Pazar:</span>
                    <span className="text-[var(--color-brand-gold)]">Kapalı</span>
                 </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT BAR */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {currentYear} Dr. Öztan Yasun Kliniği. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="#" className="hover:text-white transition-colors">Aydınlatma Metni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
