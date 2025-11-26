export type HeroSlideContent = {
  label: string;
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
};

const heroSlides: HeroSlideContent[] = [
  {
    label: "Dr. Öztan Yasun'un Protokolleri",
    title: "Gülüşünüz, Dr. Öztan Yasun imzası taşısın.",
    subtitle:
      "Estetik diş hekimliği ve implantolojide dijital cerrahi rehberler, sedasyon seçenekleri ve butik takip ile öngörülebilir sonuçlar.",
    image: "/hero.webp",
    ctaPrimary: {
      text: "Muayene Planla",
      href: "/iletisim#fast-appointment",
    },
    ctaSecondary: {
      text: "WhatsApp'tan Sor",
      href: "https://wa.me/905000000000?text=Merhaba%2C%20Dr.%20%C3%96ztan%20Yasun%20i%C3%A7in%20muayene%20planlamak%20istiyorum.",
    },
  },
  {
    label: "Estetik Diş Hekimliği",
    title: "Dr. Öztan Yasun'un estetik bakış açısıyla gülüş tasarımı.",
    subtitle:
      "Lamina, bonding ve zirkonyum uygulamalarında dijital mock-up ve prova dişlerle sonucu önceden görün, hekiminizle birlikte karar verin.",
    image: "/esthetic.webp",
    ctaPrimary: {
      text: "Muayene Planla",
      href: "/iletisim#fast-appointment",
    },
    ctaSecondary: {
      text: "WhatsApp'tan Sor",
      href: "https://wa.me/905000000000?text=Merhaba%2C%20g%C3%BCl%C3%BC%C5%9F%20tasar%C4%B1m%C4%B1%20i%C3%A7in%20Dr.%20%C3%96ztan%20Yasun%27a%20dan%C4%B1%C5%9Fmak%20istiyorum.",
    },
  },
  {
    label: "Ortodonti & Şeffaf Plak",
    title: "Şeffaf plaklarla konforlu hizalama, Dr. Öztan Yasun kontrolünde.",
    subtitle:
      "3D planlama, düzenli takip ve pekiştirme protokolleri ile hem çocuklar hem yetişkinler için öngörülebilir sonuçlar sağlanır.",
    image: "/about.webp",
    ctaPrimary: {
      text: "Muayene Planla",
      href: "/iletisim#fast-appointment",
    },
    ctaSecondary: {
      text: "WhatsApp'tan Sor",
      href: "https://wa.me/905000000000?text=Merhaba%2C%20%C5%9Feffaf%20plak%20tedavisi%20i%C3%A7in%20Dr.%20%C3%96ztan%20Yasun%27dan%20bilgi%20almak%20istiyorum.",
    },
  },
];

export default heroSlides;
