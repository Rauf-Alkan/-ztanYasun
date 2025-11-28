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
      className={`absolute inset-0 transition-all duration-1000 ease-in-out
      ${isActive ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"}`}
    >
      {/* Container-Custom ile hizayı sabitledik */}
      <div className="container-custom h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 py-14 lg:py-0">
        
        {/* --- SOL: METİN ALANI --- */}
        <div className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 max-w-2xl transition-all duration-1000 delay-300 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          
          <span className="inline-block px-3 py-1 bg-blue-50 text-[var(--color-brand-navy)] text-xs font-bold tracking-[0.2em] uppercase rounded-md border border-blue-100">
            {slide.label}
          </span>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brand-navy)] leading-[1.05]">
            {slide.title}
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          <HeroButtons
            primary={slide.ctaPrimary}
            secondary={slide.ctaSecondary}
          />
        </div>

        {/* --- SAĞ: GÖRSEL ALANI --- */}
        <div className={`relative w-full max-w-[680px] aspect-[16/9] transition-all duration-1000 delay-100 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
           {/* Floating etkisi için hafif shadow ve border-radius */}
           <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-2xl shadow-blue-900/10 border border-white/40 ring-1 ring-[var(--color-brand-navy)]/10">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={isActive}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Resim üzerine hafif gradient overlay - metin okunabilirliği için değil estetik için */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)]/10 to-transparent pointer-events-none" />
           </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSlide;
