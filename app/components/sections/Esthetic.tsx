"use client";

import Link from "next/link";
import Image from "next/image"; // Performans için şart

export const estheticContent = {
  eyebrow: "ESTETİK YAKLAŞIM",
  title: "Doğallık, Sanatla Buluşuyor",
  description: "Gülüş tasarımı süreçlerimizde yapaylıktan uzak, yüz hatlarınıza en uygun formu arıyoruz. Dijital teknolojiyi sanatsal bir bakış açısıyla harmanlayarak, size en çok yakışan gülüşü tasarlıyoruz.",
  image: "/esthetic.webp"
};

const Esthetic = () => {
  return (
    // DÜZELTME: bg rengi değişkene bağlandı
    <section id="esthetic" className="bg-[var(--color-brand-gray)] section-spacing"> 
      {/* DÜZELTME: container-custom kullanıldı */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-1">
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-brand-navy)]">
              {estheticContent.eyebrow}
            </span>
            <h2 className="mb-6 font-heading text-3xl tracking-tight text-[var(--color-brand-navy)] sm:text-4xl md:text-5xl leading-tight">
              {estheticContent.title}
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
              {estheticContent.description}
            </p>
            
             <Link href="/hizmetler" className="text-sm font-bold text-[var(--color-brand-navy)] border-b-2 border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors">
                Tedavi detaylarını inceleyin →
             </Link>
          </div>

          <div className="order-2">
            {/* DÜZELTME: Next/Image kullanımı */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px] w-full bg-white border border-white/50">
              <Image 
                src={estheticContent.image} 
                alt="Estetik Diş Hekimliği" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Esthetic;
