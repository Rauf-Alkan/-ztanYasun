import Link from "next/link";
import type { ReactNode } from "react";
import {
  LuAlignHorizontalJustifyCenter,
  LuBone,
  LuLayers,
  LuSmile,
  LuSparkles,
  LuStethoscope,
} from "react-icons/lu";

export const dynamic = "force-dynamic";

export type Service = {
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  detail: string;
  detailedDescription?: string;
  slug: string;
};

export const services: Service[] = [
  {
    icon: <LuBone className="h-7 w-7" />,
    title: "İmplant Tedavisi",
    tagline: "Doğal görünüm ve uzun ömürlü çözüm",
    description:
      "Eksik dişleri dijital planlama ve hassas cerrahiyle konforlu implantlarla tamamlıyoruz.",
    detail: "Dijital planlama ve yüksek başarı oranıyla konforlu implant uygulamaları sunuyoruz.",
    detailedDescription:
      "Eksik dişlerinizi doğal görünümde ve fonksiyonel implant çözümleriyle tamamlıyoruz. Her tedavi öncesi ayrıntılı muayene ve dijital planlama sayesinde sürecin her adımını şeffaf şekilde paylaşıyor, uzman hekimlerimizle kişiye özel planlar hazırlıyoruz. Konforlu klinik ortamımızda iyileşme sürecini yakından takip ederek hem estetik hem fonksiyonel sonuçlar sağlıyoruz.",
    slug: "implant",
  },
  {
    icon: <LuSmile className="h-7 w-7" />,
    title: "Gülüş Tasarımı",
    tagline: "Simetrik ve estetik bir gülüş",
    description:
      "Yüz hatlarınıza uygun dijital gülüş tasarımıyla lamina, bonding ve porselen seçeneklerini birlikte planlıyoruz.",
    detail: "Mock-up ve prova süreçleriyle tasarımı ağızda deneyimleyip onayınızla ilerliyoruz.",
    detailedDescription:
      "Lamina, zirkonyum ve bonding uygulamalarıyla gülüşünüzü yeniden tasarlıyoruz. Bilim ve sanatı bir araya getiren yaklaşımımızla estetik beklentilerinizi fonksiyonel ihtiyaçlarınızla dengeliyor, kişiye özel tasarımlar hazırlıyoruz. Dijital görüntüleme sistemleriyle tedavi sonrasını önceden görmenize imkan tanıyor, uzun ömürlü materyaller kullanıyoruz.",
    slug: "gulus-tasarimi",
  },
  {
    icon: <LuSparkles className="h-7 w-7" />,
    title: "Diş Beyazlatma",
    tagline: "30 dakikalık ofis tipi işlem",
    description:
      "Ofis tipi veya ev tipi profesyonel beyazlatmayla doğal tona uyumlu, eşit parlaklık sağlıyoruz.",
    detail: "Ofis tipi LED destekli uygulamayı ev tipi kitlerle destekleyerek tonu koruyoruz.",
    detailedDescription:
      "Ofis tipi veya ev tipi profesyonel beyazlatma yöntemleriyle daha beyaz ve estetik bir gülüş sunuyoruz. Modern ölçü teknikleri ve ileri tedavi yöntemleri sayesinde süreci hızlandırıyor, kullanılan ajanları kişiye özel seçiyoruz. Her adımda sakin ve anlaşılır bir iletişim sürdürerek işlem sonrası bakım önerilerini de sizinle paylaşıyoruz.",
    slug: "dis-beyazlatma",
  },
  {
    icon: <LuAlignHorizontalJustifyCenter className="h-7 w-7" />,
    title: "Ortodonti (Diş Teli / Şeffaf Plak)",
    tagline: "Görünmez plaklarla konforlu hizalama",
    description:
      "Geleneksel teller veya görünmez plaklarla çapraşıklıkları dijital ölçüm ve düzenli kontrollerle düzeltiyoruz.",
    detail: "3D tarama, simülasyon ve sıkı retainer takibiyle kalıcı hizalama sağlıyoruz.",
    detailedDescription:
      "Geleneksel diş telleri veya görünmez plaklarla çapraşıklıkları düzeltiyoruz. Dijital planlama ve uzman hekimlerimizin yakın takibi sayesinde her yaştaki hastamız için konforlu, öngörülebilir bir ortodonti süreci yürütüyoruz. Kontrollerde ağız hijyenini ve tedavi disiplinini korumak için rehberlik sağlıyoruz.",
    slug: "ortodonti",
  },
  {
    icon: <LuLayers className="h-7 w-7" />,
    title: "Zirkonyum / Porselen Kaplama",
    tagline: "Doğala en yakın estetik restorasyon",
    description:
      "Zirkonyum ve porselen kaplamalarla dişlerinizi güçlendirip doğal ışık geçirgenliğini koruyoruz.",
    detail: "Geçici kaplamalarla prova yapıp kalıcı kaplamaları kişiye özel renkte teslim ediyoruz.",
    detailedDescription:
      "Dayanıklı materyaller ve dijital ölçü teknikleriyle gülüşünüzle uyumlu zirkonyum ve porselen kaplamalar hazırlıyoruz. Her kaplama için diş etiniz ve çiğneme yapınız dikkate alınarak ince işçilikle uygulama yapıyoruz.",
    slug: "zirkonyum-kaplama",
  },
  {
    icon: <LuStethoscope className="h-7 w-7" />,
    title: "Dolgu & Kanal Tedavisi",
    tagline: "Ağrısız ve hızlı onarım",
    description:
      "Çürük ve enfekte dişleri hassas anesteziyle ağrısız tedavi edip modern dolgularla güçlendiriyoruz.",
    detail: "Mikroskobik kanal temizliği ve nano hibrit dolgularla dişinizi çekimden koruyoruz.",
    detailedDescription:
      "Enfekte olmuş dişleri modern tekniklerle tedavi ederek ağrıyı kalıcı olarak gideriyoruz. İleri teknoloji cihazlarımız ve şeffaf süreç yönetimimiz sayesinde tedavi boyunca ne yapılacağını adım adım paylaşıyoruz. Konforlu ortam ve hassas anestezi teknikleriyle işlem sırasında rahat etmenizi sağlıyoruz.",
    slug: "dolgu-kanal",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Tedavi Protokolleri</p>
          <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl md:leading-relaxed">
            Dr. Öztan Yasun'un uyguladığı başlıca tedaviler
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 leading-relaxed">
            Dijital planlama, akademik tecrübe ve hasta konforu odaklı yaklaşımlar.
          </h3>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:leading-loose">
            İmplantoloji, estetik diş hekimliği ve ortodontide güncel teknolojileri kullanan Dr. Öztan Yasun; her vakada kişiye özel, ölçülebilir ve öngörülebilir sonuçlar hedefler.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7C3A3]"
              aria-label={`${service.title} tedavi detayına git`}
            >
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[#D7C3A3] hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
                <div className="flex flex-1 flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5EFE6] text-2xl text-[#384B70] shadow-inner">
                    {service.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#384B70]">{service.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <p className="mt-2 flex-1 text-sm font-medium text-slate-500">{service.detail}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-[#384B70]">
                  <span className="inline-flex items-center gap-2 transition group-hover:gap-3">
                    Tedavi detayını gör
                    <span aria-hidden="true">→</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Tedavi</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-slate-50 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          ⭐ 4.9 / 5 · 180+ yorum · 15+ yıllık deneyim · Dijital planlama
        </div>
      </div>
    </section>
  );
};

export default Services;
