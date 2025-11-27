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
    if (href === "/") return pathname === "/";
    if (href === "/hizmetler") return pathname === "/hizmetler" || pathname.startsWith("/hizmetler/");
    return pathname === href;
  };

  return (
    // DÜZELTME 1: z-30 yerine z-[999] yapıldı. Artık Slider'ın (z-40) altında kalmayacak.
    <header className="sticky top-0 z-[999] border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8 relative">
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

        {/* Desktop Nav */}
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

        {/* Mobil Menü Butonu */}
        {/* DÜZELTME 2: relative ve z-[1000] eklendi. Garanti tıklanır. */}
        <button
          type="button"
          className="ml-auto inline-flex flex-col items-center justify-center gap-1 rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-[#D7C3A3] hover:text-[#384B70] lg:hidden relative z-[1000]"
          aria-label="Menüyü Aç"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={`block h-0.5 w-5 rounded bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-5 rounded bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 rounded bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col px-4 pt-3 pb-6 text-base text-slate-700 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 transition hover:bg-[#F3EBDF] hover:text-[#384B70] font-medium ${isLinkActive(link.href) ? "bg-[#F3EBDF] text-[#384B70]" : ""}`}
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