"use client";

import Image from "next/image";
import HeroButtons from "./HeroButtons";
import type { HeroSlideContent } from "@/data/heroSlides";

type HeroSlideProps = {
  slide: HeroSlideContent;
  isActive: boolean;
};

const HeroSlide = ({ slide, isActive }: HeroSlideProps) => {
  return (
    <div
      className={`absolute inset-0 px-4 py-8 sm:px-10 lg:px-16 transition-all duration-700 
      ${isActive ? "opacity-100 translate-x-0 z-20" : "pointer-events-none translate-x-6 opacity-0 z-10"}`}
    >
      {/* LAYOUT MANTIĞI:
         - Mobile: flex-col (Dikey sıralama: Resim -> Yazı)
         - Desktop (lg): grid (Yatay sıralama: Yazı -> Resim)
      */}
      <div className="flex flex-col h-full lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 justify-center">
        
        {/* --- MOBİL İÇİN GÖRSEL (Sadece Mobilde Görünür) --- */}
        <div className="relative w-full h-[260px] sm:h-[320px] mb-6 flex-shrink-0 lg:hidden block">
            <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/60 bg-white/50 p-2 shadow-lg">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="rounded-[18px] object-cover"
                  priority={isActive}
                  sizes="100vw"
                />
            </div>
        </div>

        {/* --- METİN ALANI --- */}
        <div className="relative z-10 flex flex-col justify-center gap-4 sm:gap-6 text-center lg:text-left">
          <div>
            <span className="inline-flex items-center justify-center rounded-full bg-white/80 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#384B70] backdrop-blur-sm shadow-sm">
              {slide.label}
            </span>
          </div>
          
          <h1 className="font-heading text-[1.75rem] leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
            {slide.title}
          </h1>
          
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            {slide.subtitle}
          </p>

          <div className="mt-2 flex justify-center lg:justify-start pb-4 lg:pb-0">
            <HeroButtons
              primary={slide.ctaPrimary}
              secondary={slide.ctaSecondary}
            />
          </div>
        </div>

        {/* --- DESKTOP İÇİN GÖRSEL (Sadece Desktopta Görünür - Eski Halini Koruduk) --- */}
        <div className="relative h-full w-full hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center py-8">
             <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/60 bg-white/50 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="rounded-[24px] object-cover"
                  priority={isActive}
                  sizes="50vw"
                />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSlide;