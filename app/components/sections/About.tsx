import Link from "next/link";
import Image from "next/image";
import { LuCpu, LuDiamond, LuHandshake, LuUsers } from "react-icons/lu";

export const dynamic = "force-dynamic";

export const aboutContent = {
  eyebrow: "KLİNİK VİZYONU",
  title: "Estetik ve Fonksiyonun Uyumu",
  description: "Ankara Kızılay'da Dr. Öztan Yasun liderliğinde, modern diş hekimliğinin tüm imkanlarını estetik bakış açısıyla buluşturuyoruz. Kişiye özel tedavi planları ve şeffaf süreç yönetimi.",
  image: {
    src: "/hero.webp", // service2.webp yoksa hero kullan
    alt: "Dr. Öztan Yasun Kliniği",
  },
  features: [
    {
      icon: <LuDiamond className="h-7 w-7" />,
      title: "Premium Materyal",
      desc: "Sertifikalı ve biyouyumlu ürünler.",
    },
    {
      icon: <LuCpu className="h-7 w-7" />,
      title: "Dijital Altyapı",
      desc: "3D tarama ve hassas ölçüm.",
    },
    {
      icon: <LuUsers className="h-7 w-7" />,
      title: "Butik Hizmet",
      desc: "Kişiye özel randevu yönetimi.",
    },
    {
      icon: <LuHandshake className="h-7 w-7" />,
      title: "Şeffaf İletişim",
      desc: "Sürprizsiz tedavi planlaması.",
    }
  ],
  cta: {
    primary: "Randevu Oluştur",
    secondary: "Tedavileri İncele"
  }
};

const About = () => {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_auto] lg:items-center lg:gap-16">
          
          <div className="order-1 space-y-4 text-center lg:col-start-1 lg:row-start-1 lg:space-y-6 lg:text-left">
            {/* DÜZELTME: Renk değişkeni */}
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-brand-gold)]">
              {aboutContent.eyebrow}
            </span>
            <h2 className="font-heading text-3xl tracking-tight text-[var(--color-brand-navy)] sm:text-4xl md:text-5xl leading-tight">
              {aboutContent.title}
            </h2>
          </div>

          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-2xl lg:h-[480px]">
              <Image
                src={aboutContent.image.src}
                alt={aboutContent.image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="order-3 space-y-8 text-center lg:col-start-1 lg:row-start-2 lg:max-w-2xl lg:space-y-10 lg:text-left">
            <p className="text-lg leading-relaxed text-slate-600">
              {aboutContent.description}
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-left sm:grid-cols-2">
              {aboutContent.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  {/* DÜZELTME: İkon rengi Navy */}
                  <span className="mb-1 text-2xl text-[var(--color-brand-navy)] drop-shadow-sm">{feature.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--color-brand-navy)]">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-normal text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/iletisim"
                className="rounded-full bg-[var(--color-brand-navy)] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[var(--color-brand-navy-light)] hover:-translate-y-1"
              >
                {aboutContent.cta.primary}
              </Link>
              <Link
                href="/hizmetler"
                className="rounded-full border-2 border-[var(--color-brand-navy)] px-8 py-3.5 text-sm font-bold text-[var(--color-brand-navy)] transition hover:bg-[var(--color-brand-navy)] hover:text-white"
              >
                {aboutContent.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
