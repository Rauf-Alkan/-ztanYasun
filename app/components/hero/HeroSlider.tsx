"use client";

import { useEffect, useState } from "react";
import heroSlides from "@/data/heroSlides";
import HeroSlide from "./HeroSlide";

const AUTO_INTERVAL = 6000; // Biraz daha yavaşlattım, okunabilsin.

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
    // Gradient kaldırıldı. Temiz beyaz/gri geçişli arka plan.
    <section className="relative w-full overflow-hidden bg-[var(--color-brand-gray)]">
      
      {/* Yükseklik mobilde ve desktopta ayarlandı */}
      <div className="relative min-h-[85vh] lg:min-h-[700px] flex items-center">
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={slide.title}
            slide={slide}
            isActive={currentIndex === index}
          />
        ))}
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
              ? "w-8 bg-[var(--color-brand-navy)]" 
              : "w-2 bg-[var(--color-brand-navy)]/20 hover:bg-[var(--color-brand-navy)]/40"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;