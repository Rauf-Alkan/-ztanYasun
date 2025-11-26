"use client";

import Link from "next/link";

const footerServices = [
  { label: "İmplant Tedavisi", href: "/hizmetler/implant" },
  { label: "Gülüş Tasarımı", href: "/hizmetler/gulus-tasarimi" },
  { label: "Ortodonti (Şeffaf Plak)", href: "/hizmetler/ortodonti" },
  { label: "Zirkonyum / Porselen Kaplama", href: "/hizmetler/zirkonyum-kaplama" },
  { label: "Diş Beyazlatma", href: "/hizmetler/dis-beyazlatma" },
  { label: "Dolgu & Kanal Tedavisi", href: "/hizmetler/dolgu-kanal" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const clinicName = "Dr. Öztan Yasun";
  const clinicFullName = "Dr. Öztan Yasun Kliniği";

  return (
    <footer className="bg-[#F8F4EF] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={clinicFullName}
                className="h-10 w-auto opacity-95"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">{clinicFullName}</p>
              </div>
            </div>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#D7C3A3]" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Dijital planlama, ileri görüntüleme ve konfor odaklı yaklaşımımızla implanttan ortodontiye uzanan tüm
              tedavilerde kişiye özel çözümler sunuyoruz. Kliniğimiz, hasta deneyimini şeffaf iletişim ve hızlı dönüşlerle güçlendirir.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#384B70]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="M11.387 2.17 13.5 6l4.174.608a.75.75 0 0 1 .416 1.277l-3.02 2.944.714 4.158a.75.75 0 0 1-1.088.791L10 13.943l-3.716 1.835a.75.75 0 0 1-1.088-.79l.714-4.16-3.02-2.943a.75.75 0 0 1 .416-1.277L7.5 6 9.613 2.17a.75.75 0 0 1 1.774 0Z"
                />
              </svg>
              4.9 / 5 Google değerlendirmesi · 180+ yorum
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Hizmetlerimiz</h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-[#D7C3A3]" />
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 transition hover:text-[#384B70]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#384B70] group-hover:scale-125 transition" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">İletişim Bilgileri</h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-[#D7C3A3]" />
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 text-[#384B70]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M17 8.5c0 4.418-7 9-7 9s-7-4.582-7-9a7 7 0 1 1 14 0Z"
                  />
                </svg>
                Meşrutiyet Mah. Atatürk Bulvarı No:XX, Kat:X, Çankaya / Ankara
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 text-[#384B70]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M4 6h12M4 10h12M4 14h12"
                  />
                </svg>
                Kızılay Meydanı'na 2 dakika yürüme mesafesi, [Referans Bina] karşısı.
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 text-[#384B70]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M3 5h14v10H3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M3 7.5 10 11l7-3.5"
                  />
                </svg>
                info@droztanyasun.com
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-[#384B70]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.25 5.25c0 7.593 6.157 13.75 13.75 13.75.69 0 1.25-.56 1.25-1.25v-2.514c0-.61-.44-1.13-1.043-1.22l-2.453-.37c-.45-.07-.91.12-1.182.5l-.7.98c-2.093-1.04-3.783-2.73-4.823-4.823l.98-.7c.38-.272.57-.732.5-1.182l-.37-2.453c-.09-.603-.61-1.043-1.22-1.043H3.5c-.69 0-1.25.56-1.25 1.25Z"
                  />
                </svg>
                <a
                  href="tel:+903120000000"
                  className="transition hover:text-[#384B70]"
                >
                  0312 000 00 00 (Randevu Hattı)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-[#384B70]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M10 4.5v5l3.5 2"
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="6"
                    strokeWidth="1.4"
                  />
                </svg>
                Pzt-Cuma 09:00-19:00 · Cumartesi 09:00-15:00 · Pazar Kapalı
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {currentYear} {clinicFullName} — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
