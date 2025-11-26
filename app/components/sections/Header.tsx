// components/sections/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "Ekibimiz", href: "/ekibimiz" },
  { label: "İletişim", href: "/iletisim" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  const clinicName = "Dr. Öztan Yasun";

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/hizmetler") {
      return pathname === "/hizmetler" || pathname.startsWith("/hizmetler/");
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-3 text-xl font-semibold text-[#384B70]"
        >
          <Image
            src="/logo.png"
            alt={clinicName}
            width={40}
            height={40}
            className="h-10 w-10 object-contain opacity-95"
            priority
          />
          <span className="font-heading tracking-tight">{clinicName}</span>
        </Link>

        <nav className="ml-auto hidden flex-1 items-center justify-end gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative inline-flex flex-col items-center gap-1 px-1 py-1 text-sm transition ${isLinkActive(link.href) ? "text-[#384B70]" : ""}`}
            >
              <span className="transition duration-200 group-hover:-translate-y-0.5">{link.label}</span>
              <span
                className={`h-0.5 w-full origin-left rounded-full bg-[#384B70] transition-transform duration-200 ${isLinkActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex flex-col items-center justify-center gap-1 rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-[#D7C3A3] hover:text-[#384B70] lg:hidden"
          aria-label="Menüyü Aç"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="block h-0.5 w-5 rounded bg-current" />
          <span className="block h-0.5 w-5 rounded bg-current" />
          <span className="block h-0.5 w-5 rounded bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="flex flex-col px-4 pt-3 text-base text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 transition hover:bg-[#F3EBDF] hover:text-[#384B70] ${isLinkActive(link.href) ? "text-[#384B70]" : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
