// sections/About.tsx
import Link from "next/link";
import { LuCpu, LuDiamond, LuHandshake, LuUsers } from "react-icons/lu";

export const dynamic = "force-dynamic";

export const aboutContent = {
  eyebrow: "HAKKIMIZDA",
  title: "Dr. Öztan Yasun ile estetik ve fonksiyonun uyumu",
  description: "Ankara Kızılay'da Dr. Öztan Yasun liderliğinde, modern diş hekimliğinin tüm imkanlarını estetik bakış açısıyla buluşturuyoruz. Kişiye özel tedavi planları, dijital ölçümler ve konfor odaklı yaklaşımla güven veren bir deneyim sunuyoruz.",
  image: {
    src: "/service2.webp",
    alt: "Dr. Öztan Yasun Kliniği",
  },
  features: [
    {
      icon: <LuDiamond className="h-7 w-7" />,
      title: "Premium Materyal",
      desc: "Dünya standartlarında sertifikalı ürünler.",
    },
    {
      icon: <LuCpu className="h-7 w-7" />,
      title: "Modern Teknoloji",
      desc: "Dijital ölçü ve 3D görüntüleme sistemleri.",
    },
    {
      icon: <LuUsers className="h-7 w-7" />,
      title: "Uzman Hekim Kadrosu",
      desc: "Deneyimli ve sürekli gelişen ekip.",
    },
    {
      icon: <LuHandshake className="h-7 w-7" />,
      title: "Hasta Memnuniyeti",
      desc: "Şeffaf süreç ve konforlu deneyim.",
    }
  ],
  cta: {
    primary: "Randevu Oluştur",
    secondary: "Hizmetlerimizi İncele"
  }
};

const About = () => {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_auto] lg:items-center lg:gap-16">
          {/* Başlık */}
          <div className="order-1 space-y-4 text-center lg:col-start-1 lg:row-start-1 lg:space-y-6 lg:text-left">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">
              {aboutContent.eyebrow}
            </span>
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {aboutContent.title}
            </h2>
          </div>

          {/* Görsel */}
          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-[0_20px_50px_rgba(15,23,42,0.05)] lg:h-[420px]">
              <img
                src={aboutContent.image.src}
                alt={aboutContent.image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* İçerik + CTA */}
          <div className="order-3 space-y-8 text-center lg:col-start-1 lg:row-start-2 lg:max-w-2xl lg:space-y-10 lg:text-left">
            <p className="text-lg leading-relaxed text-slate-600">
              {aboutContent.description}
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-left sm:grid-cols-2">
              {aboutContent.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="mb-1 text-2xl text-[#384B70] drop-shadow-sm">{feature.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-normal text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#"
                className="rounded-full bg-[#384B70] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(56,75,112,0.2)] transition hover:bg-[#2a3a5a]"
              >
                {aboutContent.cta.primary}
              </a>
              <Link
                href="/hizmetler"
                className="rounded-full border border-slate-200 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
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
