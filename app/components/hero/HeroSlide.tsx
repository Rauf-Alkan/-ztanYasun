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
      className={`absolute inset-0 px-6 py-12 sm:px-10 lg:px-16 transition-all duration-700 
      ${isActive ? "opacity-100 translate-x-0 z-20" : "pointer-events-none translate-x-6 opacity-0 z-10"}`}
    >
      <div className="grid h-full grid-rows-[auto_1fr_auto] items-center gap-6 pb-16 lg:pb-0 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-1 lg:gap-14">
        {/* SOL TARAF: METİN */}
        <div className="relative z-10 flex flex-col justify-center gap-6 text-center lg:text-left pt-8 lg:pt-0">
          <div>
            <span className="inline-flex items-center justify-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#384B70] backdrop-blur-sm shadow-sm">
              {slide.label}
            </span>
          </div>
          
          <h1 className="font-heading text-3xl font-medium leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
            {slide.title}
          </h1>
          
          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            {slide.subtitle}
          </p>

          <div className="mt-2 flex justify-center lg:justify-start">
            <HeroButtons
              primary={slide.ctaPrimary}
              secondary={slide.ctaSecondary}
            />
          </div>
        </div>

        {/* SAĞ TARAF: GÖRSEL (Desktop) */}
        <div className="relative h-full w-full hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center py-8">
             <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/60 bg-white/50 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="rounded-[24px] object-cover"
                  priority={isActive}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
             </div>
          </div>
        </div>

        {/* Mobilde görseli gizli tutarak metin ve CTA'ya odaklanıyoruz */}
      </div>
    </div>
  );
};

export default HeroSlide;
