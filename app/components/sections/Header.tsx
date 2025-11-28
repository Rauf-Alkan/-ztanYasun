"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Scroll efekti: Aşağı kaydırınca navbar biraz küçülür ve gölgesi artar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/hizmetler") return pathname === "/hizmetler" || pathname.startsWith("/hizmetler/");
    return pathname === href;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 border-b border-transparent
      ${scrolled ? "bg-[var(--color-brand-navy)]/95 backdrop-blur-xl shadow-lg py-3" : "bg-[var(--color-brand-navy)] py-4"}`}
    >
      {/* Container Custom ile tam hizalama sağlandı */}
      <div className="container-custom flex items-center gap-6">
        {/* LOGO ALANI */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo boyutlandırması optimize edildi */}
          <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-white/10 p-2">
             <Image
              src="/logo.png"
              alt="Dr. Öztan Yasun"
              width={80}
              height={80}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="font-heading text-xl font-semibold text-white leading-tight">
            Dr. Öztan Yasun
          </span>
        </Link>

        {/* NAV + CTA + MOBİL BUTON */}
        <div className="flex items-center gap-4 ml-auto">
          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-semibold transition-colors duration-200 
                ${isLinkActive(link.href) 
                  ? "text-white" 
                  : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[var(--color-brand-gold)] transition-transform duration-300
                  group-hover:scale-x-100 ${isLinkActive(link.href) ? "scale-x-100" : ""}`}
                />
              </Link>
            ))}
          </nav>

          {/* SAĞ TARAF: CTA BUTTON (SATIŞ KAPATICI) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/iletisim"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 
              bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)] text-sm font-semibold rounded-xl 
              transition-all duration-300 hover:bg-[var(--color-brand-gold-hover)] 
              hover:shadow-lg hover:-translate-y-0.5 ring-offset-2 focus:ring-2 ring-[var(--color-brand-gold)]"
            >
              Randevu Al
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Menüyü Aç"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-brand-navy)] text-white border-b border-white/10 shadow-xl lg:hidden animate-fade-up">
          <nav className="flex flex-col p-4 space-y-2 container-custom">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${isLinkActive(link.href)
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link
                href="/iletisim"
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-4 py-3 
                bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)] font-semibold rounded-lg text-sm"
              >
                Hemen Randevu Al
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
