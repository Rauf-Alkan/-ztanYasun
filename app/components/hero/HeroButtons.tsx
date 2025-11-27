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
        className="inline-flex items-center justify-center rounded-lg bg-[var(--color-brand-gold)] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-100 transition-all hover:bg-[var(--color-brand-gold-hover)] hover:-translate-y-1"
      >
        {primary.text}
      </Link>

      {/* Secondary: Navy Border (Bilgi Odaklı) */}
      {isExternal(secondary.href) ? (
        <a
          href={secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--color-brand-navy)] px-8 py-3.5 text-sm font-bold text-[var(--color-brand-navy)] transition-all hover:bg-[var(--color-brand-navy)] hover:text-white"
        >
          {secondary.text}
        </a>
      ) : (
        <Link
          href={secondary.href}
          className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--color-brand-navy)] px-8 py-3.5 text-sm font-bold text-[var(--color-brand-navy)] transition-all hover:bg-[var(--color-brand-navy)] hover:text-white"
        >
          {secondary.text}
        </Link>
      )}
    </div>
  );
};

export default HeroButtons;