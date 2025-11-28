"use client";

import Link from "next/link";

type HeroButtonsProps = {
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
};

const isExternal = (href: string) => href.startsWith("http");

const HeroButtons = ({ primary, secondary }: HeroButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {/* Primary: Gold Buton (Satış Odaklı) */}
      <Link
        href={primary.href}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand-gold)] px-10 py-4 text-base font-semibold text-[var(--color-brand-navy)] shadow-xl shadow-orange-100/60 transition-all hover:bg-[var(--color-brand-gold-hover)] hover:-translate-y-1"
      >
        {primary.text}
      </Link>

      {/* Secondary: Navy Border (Bilgi Odaklı) */}
      {isExternal(secondary.href) ? (
        <a
          href={secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-brand-navy)] px-10 py-4 text-base font-semibold text-[var(--color-brand-navy)] bg-white/70 backdrop-blur transition-all hover:bg-[var(--color-brand-navy)] hover:text-white hover:-translate-y-1"
        >
          {secondary.text}
        </a>
      ) : (
        <Link
          href={secondary.href}
          className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-brand-navy)] px-10 py-4 text-base font-semibold text-[var(--color-brand-navy)] bg-white/70 backdrop-blur transition-all hover:bg-[var(--color-brand-navy)] hover:text-white hover:-translate-y-1"
        >
          {secondary.text}
        </Link>
      )}
    </div>
  );
};

export default HeroButtons;
