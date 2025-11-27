"use client";

import { useEffect, useState } from "react";
import heroSlides from "@/data/heroSlides";
import HeroSlide from "./HeroSlide";

const AUTO_INTERVAL = 4000;

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (direction: "next" | "prev") => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % heroSlides.length;
      }
      return (prev - 1 + heroSlides.length) % heroSlides.length;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToSlide("next");
    }, AUTO_INTERVAL);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    // Mobilde padding'i azalttık (pt-2) ve yüksekliği ayarladık
    <section className="bg-gradient-to-b from-[#FFF4E6] via-white to-[#ECF2FF] pb-8 pt-2 md:pb-20 md:pt-8">
      <div className="mx-auto w-full max-w-[1700px] px-2 sm:px-4">
        <div className="relative overflow-hidden bg-white/60 shadow-[0_15px_40px_rgba(15,23,42,0.05)] rounded-[32px] sm:rounded-[40px] border border-white/50 backdrop-blur-sm">
          
          {/* YÜKSEKLİK AYARI: Mobilde "min-h-[650px]" yaparak resim+metin sığmasını sağladık */}
          <div className="relative min-h-[680px] sm:min-h-[700px] lg:min-h-[800px]">
            {heroSlides.map((slide, index) => (
              <HeroSlide
                key={slide.title}
                slide={slide}
                isActive={currentIndex === index}
              />
            ))}
          </div>

          {/* OKLAR: Mobilde gizledik (Resmin üstüne binmesin diye), Desktopta gösterdik */}
          <div className="pointer-events-none absolute inset-0 z-40 hidden sm:flex items-center justify-between px-6">
            <button
              type="button"
              className="pointer-events-auto rounded-full border border-white/80 bg-white/80 p-3 text-[#384B70] shadow-sm transition hover:scale-110 hover:bg-white active:scale-95"
              onClick={() => goToSlide("prev")}
              aria-label="Önceki"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              className="pointer-events-auto rounded-full border border-white/80 bg-white/80 p-3 text-[#384B70] shadow-sm transition hover:scale-110 hover:bg-white active:scale-95"
              onClick={() => goToSlide("next")}
              aria-label="Sonraki"
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* DOTS (Pagination) */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                  ? "w-6 bg-[#384B70]" 
                  : "w-1.5 bg-[#384B70]/30 hover:bg-[#384B70]/50"
                }`}
                aria-label={`Slide ${index + 1}`}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;