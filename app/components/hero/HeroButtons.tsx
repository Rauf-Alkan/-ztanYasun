"use client";

import Link from "next/link";

type HeroButtonsProps = {
  primary: {
    text: string;
    href: string;
  };
  secondary: {
    text: string;
    href: string;
  };
};

const isExternal = (href: string) => href.startsWith("http");

const HeroButtons = ({ primary, secondary }: HeroButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href={primary.href}
        className="inline-flex items-center justify-center rounded-full bg-[#384B70] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2c3754] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
      >
        {primary.text}
      </Link>
      {isExternal(secondary.href) ? (
        <a
          href={secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#D7C3A3] px-7 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF]"
        >
          {secondary.text}
        </a>
      ) : (
        <Link
          href={secondary.href}
          className="inline-flex items-center justify-center rounded-full border border-[#D7C3A3] px-7 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF]"
        >
          {secondary.text}
        </Link>
      )}
    </div>
  );
};

export default HeroButtons;
