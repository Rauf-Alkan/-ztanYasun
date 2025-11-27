"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  LuAlignHorizontalJustifyCenter,
  LuBone,
  LuLayers,
  LuSmile,
  LuSparkles,
  LuStethoscope,
} from "react-icons/lu";

export type Service = {
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  slug: string;
};

export const services: Service[] = [
  {
    icon: <LuBone className="h-8 w-8" />,
    title: "İmplant Tedavisi",
    tagline: "Eksik dişlere kalıcı çözüm",
    description: "Eksik dişleri dijital planlama ve hassas cerrahiyle konforlu implantlarla tamamlıyoruz.",
    slug: "implant",
  },
  {
    icon: <LuSmile className="h-8 w-8" />,
    title: "Gülüş Tasarımı",
    tagline: "Estetik ve doğal görünüm",
    description: "Yüz hatlarınıza uygun dijital gülüş tasarımıyla lamina ve bonding seçeneklerini planlıyoruz.",
    slug: "gulus-tasarimi",
  },
  {
    icon: <LuSparkles className="h-8 w-8" />,
    title: "Diş Beyazlatma",
    tagline: "Işıltılı bir gülüş",
    description: "Ofis tipi veya ev tipi profesyonel beyazlatmayla doğal tona uyumlu parlaklık sağlıyoruz.",
    slug: "dis-beyazlatma",
  },
  {
    icon: <LuAlignHorizontalJustifyCenter className="h-8 w-8" />,
    title: "Ortodonti",
    tagline: "Telsiz şeffaf plaklar",
    description: "Geleneksel teller veya görünmez plaklarla (Invisalign) çapraşıklıkları düzeltiyoruz.",
    slug: "ortodonti",
  },
  {
    icon: <LuLayers className="h-8 w-8" />,
    title: "Zirkonyum Kaplama",
    tagline: "Metal desteksiz estetik",
    description: "Zirkonyum ve porselen kaplamalarla dişlerinizi güçlendirip doğal ışık geçirgenliğini koruyoruz.",
    slug: "zirkonyum-kaplama",
  },
  {
    icon: <LuStethoscope className="h-8 w-8" />,
    title: "Dolgu & Kanal",
    tagline: "Diş kurtarma tedavileri",
    description: "Çürük ve enfekte dişleri hassas anesteziyle ağrısız tedavi edip modern dolgularla güçlendiriyoruz.",
    slug: "dolgu-kanal",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Başlık Alanı */}
        <div className="text-center space-y-4 md:space-y-6 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">
            Klinik Protokolleri
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-brand-navy)]">
            Premium Tedavi Seçenekleri
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Dijital diş hekimliği, cerrahi ve estetik uygulamalarda bütüncül bir yaklaşımla, 
            Dr. Öztan Yasun kalitesiyle hizmet veriyoruz.
          </p>
        </div>

        {/* Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-[var(--color-brand-gold)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* İkon */}
              <div className="w-16 h-16 rounded-xl bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-navy)] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* İçerik */}
              <h3 className="text-xl font-bold text-[var(--color-brand-navy)] mb-2">
                {service.title}
              </h3>
              <p className="text-xs font-bold text-[var(--color-brand-gold)] uppercase tracking-wider mb-4">
                {service.tagline}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center text-[var(--color-brand-navy)] font-bold text-sm mt-auto group-hover:gap-2 transition-all">
                Detayları İncele
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;