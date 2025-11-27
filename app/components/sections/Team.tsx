"use client";

import Link from "next/link";
import Image from "next/image";
import { LuGraduationCap, LuAward, LuStethoscope, LuQuote } from "react-icons/lu";

export const dynamic = "force-dynamic";

// TEK DOKTOR VERİSİ
const doctor = {
  name: "Dr. Öztan Yasun",
  title: "Diş Hekimi & Kurucu",
  bio: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi'nden onur derecesiyle mezun olan Dr. Öztan Yasun, meslek hayatını estetik diş hekimliği ve implantoloji üzerine derinleştirmiştir. 'Az müdahale, çok estetik' felsefesiyle, dijital teknolojileri kullanarak hastalarına ağrısız ve öngörülebilir tedavi süreçleri sunar.",
  education: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi",
  experience: "15+ Yıl Deneyim",
  image: "/doctor1.webp" // Buraya doktorun en karizmatik fotoğrafı gelecek
};

// YETKİNLİK KARTLARI (Ekip yoksa, yetkinlikleri dizeriz)
const expertise = [
  {
    icon: <LuStethoscope className="w-6 h-6" />,
    title: "İmplant Cerrahisi",
    desc: "İleri cerrahi teknikler ve kemik ogmentasyonu."
  },
  {
    icon: <LuAward className="w-6 h-6" />,
    title: "Gülüş Tasarımı",
    desc: "Dijital (CAD/CAM) estetik planlama."
  },
  {
    icon: <LuGraduationCap className="w-6 h-6" />,
    title: "Şeffaf Plak",
    desc: "Telsiz ortodonti sertifikalı uygulayıcı."
  }
];

const Team = () => {
  return (
    <section id="team" className="section-spacing bg-white">
      <div className="container-custom">
        
        {/* --- DOKTOR PROFİLİ (SPLIT LAYOUT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* SOL: FOTOĞRAF (Büyük ve Etkileyici) */}
          <div className="relative order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
               <Image
                 src={doctor.image}
                 alt={doctor.name}
                 fill
                 className="object-cover"
                 priority
               />
               {/* İsim Etiketi (Overlay) */}
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-brand-navy)] to-transparent p-6 pt-24 text-white">
                  <h3 className="font-heading text-2xl font-bold">{doctor.name}</h3>
                  <p className="text-[var(--color-brand-gold)] text-sm font-bold uppercase tracking-wider">
                    {doctor.title}
                  </p>
               </div>
            </div>
            {/* Dekoratif Arka Plan */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-[var(--color-brand-gold)] rounded-2xl -z-10 hidden lg:block opacity-30" />
          </div>

          {/* SAĞ: BİYOGRAFİ & FELSEFE */}
          <div className="order-2 space-y-8 text-center lg:text-left">
            <div>
               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mb-3 block">
                 Klinik Kurucusu
               </span>
               <h2 className="font-heading text-4xl lg:text-5xl text-[var(--color-brand-navy)] leading-tight">
                 Estetik ve Güvenin <br/>
                 <span className="text-slate-400">Tek Adresi</span>
               </h2>
            </div>

            <div className="relative p-6 bg-[var(--color-brand-gray)] rounded-xl border-l-4 border-[var(--color-brand-navy)] text-left">
               <LuQuote className="text-[var(--color-brand-gold)] w-8 h-8 mb-2 opacity-50" />
               <p className="text-slate-700 italic text-lg leading-relaxed">
                 &ldquo;Hastalarımın koltuğa oturduğunda hissettiği güven duygusu, benim için en büyük başarıdır. Her vaka, kişiye özel bir sanat eseridir.&rdquo;
               </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
               {doctor.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
               <Link 
                 href="/iletisim" 
                 className="px-8 py-3.5 bg-[var(--color-brand-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-brand-navy-light)] transition-all shadow-lg shadow-blue-900/20"
               >
                 Randevu Oluştur
               </Link>
               <a 
                 href="https://www.instagram.com/" // Varsa linki koy
                 target="_blank"
                 className="px-8 py-3.5 border border-slate-200 text-slate-600 font-bold rounded-lg hover:border-[var(--color-brand-navy)] hover:text-[var(--color-brand-navy)] transition-all flex items-center justify-center gap-2"
               >
                 Instagram&apos;da Takip Et
               </a>
            </div>
          </div>
        </div>

        {/* --- UZMANLIK ALANLARI (Ekip yerine Yetkinlikler) --- */}
        <div className="border-t border-slate-100 pt-20">
           <div className="text-center mb-12">
              <h3 className="font-heading text-2xl text-[var(--color-brand-navy)]">
                 Uzmanlık Alanları
              </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertise.map((item, idx) => (
                 <div key={idx} className="group bg-white p-6 rounded-xl border border-slate-100 hover:border-[var(--color-brand-gold)] shadow-sm hover:shadow-md transition-all text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="w-12 h-12 bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-brand-navy)] group-hover:text-white transition-colors">
                       {item.icon}
                    </div>
                    <h4 className="font-bold text-lg text-[var(--color-brand-navy)] mb-2">
                       {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm">
                       {item.desc}
                    </p>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
