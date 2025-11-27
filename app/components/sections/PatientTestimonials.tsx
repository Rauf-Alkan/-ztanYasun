"use client";

import { useState, type TouchEvent } from "react";
import { LuStar, LuUser, LuArrowLeft, LuArrowRight } from "react-icons/lu";

const googleMapsUrl = "https://maps.google.com/?q=Dr.+Öztan+Yasun+Klinik";

const patientReviews = [
  {
    name: "Nuray Çağla Dere",
    treatment: "Porselen Lamina",
    comment: "Gülüş tasarımı sürecinde her adımı anlattılar, prova seanslarında bile konforumu düşündüler. Laminalarımın doğallığına çevremdekiler hayran kaldı.",
  },
  {
    name: "Kaan Erdoğdu",
    treatment: "İmplant Cerrahisi",
    comment: "Kaybettiğim dişler için implant kararı almak zordu ama işlem hem hızlı hem de ağrısızdı. Operasyon sonrası ilgileri sayesinde iyileşme çok rahattı.",
  },
  {
    name: "Simay Taneli",
    treatment: "Şeffaf Plak",
    comment: "Şeffaf plak tedavisi boyunca her kontrol randevusu planlı ve dakikti. Plaklarımı teslim aldığım gün kullanım eğitimi verildi, sonuçtan çok memnunum.",
  },
  {
    name: "Melisa Sarı",
    treatment: "Gülüş Tasarımı",
    comment: "Fotoğraf çekimlerinden dijital tasarıma kadar tüm süreç planlıydı. Taslak gülüşü onaylamadan tedaviye başlamadılar, sonuç tam istediğim gibi.",
  },
];

const PatientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const totalReviews = patientReviews.length;
  const swipeThreshold = 50;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => setTouchCurrentX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) return;
    const deltaX = touchCurrentX - touchStartX;
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-[var(--color-brand-gray)] overflow-hidden">
      <div className="container-custom">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mb-3 block">
             Mutlu Hastalar
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-brand-navy)] mb-6">
             Güven Dolu Gülüşler
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
             Tedavi süreçlerini bizimle tamamlayan hastalarımızın gerçek Google yorumları.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          
          {/* Desktop Oklar */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-[-60px] z-10 w-full pointer-events-none">
             <button 
               onClick={handlePrev} 
               className="pointer-events-auto w-12 h-12 rounded-full bg-white text-[var(--color-brand-navy)] shadow-lg flex items-center justify-center hover:bg-[var(--color-brand-navy)] hover:text-white transition-all -ml-16"
             >
                <LuArrowLeft className="w-5 h-5" />
             </button>
             <button 
               onClick={handleNext} 
               className="pointer-events-auto w-12 h-12 rounded-full bg-white text-[var(--color-brand-navy)] shadow-lg flex items-center justify-center hover:bg-[var(--color-brand-navy)] hover:text-white transition-all -mr-16"
             >
                <LuArrowRight className="w-5 h-5" />
             </button>
          </div>

          <div 
             className="overflow-hidden cursor-grab active:cursor-grabbing"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
          >
             <div 
               className="flex transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
                {patientReviews.map((review, idx) => (
                   <div key={idx} className="w-full flex-shrink-0 px-2 md:px-4">
                      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center relative">
                         
                         <div className="flex flex-col items-center gap-3 mb-8">
                            <div className="flex items-center gap-1">
                               {[...Array(5)].map((_, i) => (
                                  <LuStar key={i} className="w-5 h-5 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
                               ))}
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                               <span className="text-xs font-bold text-slate-500">Google Review</span>
                            </div>
                         </div>

                         {/* DÜZELTME: Güvenli tırnak işaretleri (&ldquo; &rdquo;) */}
                         <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic mb-8">
                            &ldquo;{review.comment}&rdquo;
                         </p>

                         <div className="flex flex-col items-center gap-1">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-2">
                               <LuUser className="w-6 h-6" />
                            </div>
                            <h4 className="font-heading font-bold text-[var(--color-brand-navy)] text-lg">
                               {review.name}
                            </h4>
                            <p className="text-xs font-bold text-[var(--color-brand-gold)] uppercase tracking-wider">
                               {review.treatment}
                            </p>
                         </div>

                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
             {patientReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-[var(--color-brand-navy)]" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Yorum ${idx + 1}`}
                />
             ))}
          </div>

          <div className="text-center mt-12">
             <a 
               href={googleMapsUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold border-b border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors"
             >
                Google Haritalar&apos;daki Tüm Yorumları Oku <LuArrowRight />
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
