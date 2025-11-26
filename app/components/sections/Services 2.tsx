import Link from "next/link";
export const dynamic = "force-dynamic";
export type Service = {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  slug: string;
};

export const services: Service[] = [
  {
    icon: "🦷",
    title: "İmplant Tedavisi",
    tagline: "Doğal görünüm ve uzun ömürlü çözüm",
    description:
      "Eksik dişlerinizi dijital planlama ve kişiye özel implantlarla tamamlıyoruz. Konforlu klinik ortamı ve hassas cerrahi tekniklerle iyileşme sürecinizin her adımını takip ediyoruz.",
    detailedDescription:
      "Eksik dişlerinizi doğal görünümde ve fonksiyonel implant çözümleriyle tamamlıyoruz. Her tedavi öncesi ayrıntılı muayene ve dijital planlama sayesinde sürecin her adımını şeffaf şekilde paylaşıyor, uzman hekimlerimizle kişiye özel planlar hazırlıyoruz. Konforlu klinik ortamımızda iyileşme sürecini yakından takip ederek hem estetik hem fonksiyonel sonuçlar sağlıyoruz.",
    slug: "implant",
  },
  {
    icon: "💎",
    title: "Gülüş Tasarımı",
    tagline: "Simetrik ve estetik bir gülüş",
    description:
      "Dijital gülüş tasarımı seanslarında yüz hatlarınıza ve beklentilerinize göre lamina, bonding ve porselen uygulamalarını planlıyoruz. Tedavi öncesi-sonrası tüm alternatifleri birlikte değerlendiriyoruz.",
    detailedDescription:
      "Lamina, zirkonyum ve bonding uygulamalarıyla gülüşünüzü yeniden tasarlıyoruz. Bilim ve sanatı bir araya getiren yaklaşımımızla estetik beklentilerinizi fonksiyonel ihtiyaçlarınızla dengeliyor, kişiye özel tasarımlar hazırlıyoruz. Dijital görüntüleme sistemleriyle tedavi sonrasını önceden görmenize imkan tanıyor, uzun ömürlü materyaller kullanıyoruz.",
    slug: "gulus-tasarimi",
  },
  {
    icon: "✨",
    title: "Diş Beyazlatma",
    tagline: "30 dakikalık ofis tipi işlem",
    description:
      "Ofis tipi veya ev tipi profesyonel beyazlatma yöntemleriyle doğal tonunuza uyumlu, eşit parlaklıkta bir gülüş sağlıyoruz. Hassasiyet riskini azaltmak için özel protokoller uyguluyoruz.",
    detailedDescription:
      "Ofis tipi veya ev tipi profesyonel beyazlatma yöntemleriyle daha beyaz ve estetik bir gülüş sunuyoruz. Modern ölçü teknikleri ve ileri tedavi yöntemleri sayesinde süreci hızlandırıyor, kullanılan ajanları kişiye özel seçiyoruz. Her adımda sakin ve anlaşılır bir iletişim sürdürerek işlem sonrası bakım önerilerini de sizinle paylaşıyoruz.",
    slug: "dis-beyazlatma",
  },
  {
    icon: "🪥",
    title: "Ortodonti (Diş Teli / Şeffaf Plak)",
    tagline: "Görünmez plaklarla konforlu hizalama",
    description:
      "Geleneksel diş telleri veya görünmez plaklarla çapraşıklıkları düzeltiyoruz. Dijital ölçümler ve düzenli kontrollerle süreci ayrıntılı şekilde takip ediyoruz.",
    detailedDescription:
      "Geleneksel diş telleri veya görünmez plaklarla çapraşıklıkları düzeltiyoruz. Dijital planlama ve uzman hekimlerimizin yakın takibi sayesinde her yaştaki hastamız için konforlu, öngörülebilir bir ortodonti süreci yürütüyoruz. Kontrollerde ağız hijyenini ve tedavi disiplinini korumak için rehberlik sağlıyoruz.",
    slug: "ortodonti",
  },
  {
    icon: "💠",
    title: "Zirkonyum / Porselen Kaplama",
    tagline: "Doğala en yakın estetik restorasyon",
    description:
      "Zirkonyum ve porselen kaplamalarla dişlerinizi güçlendirirken doğal ışık geçirgenliğini koruyoruz. Dijital ölçüyle uyumlu ve uzun ömürlü restorasyonlar üretiyoruz.",
    detailedDescription:
      "Dayanıklı materyaller ve dijital ölçü teknikleriyle gülüşünüzle uyumlu zirkonyum ve porselen kaplamalar hazırlıyoruz. Her kaplama için diş etiniz ve çiğneme yapınız dikkate alınarak ince işçilikle uygulama yapıyoruz.",
    slug: "zirkonyum-kaplama",
  },
  {
    icon: "🩺",
    title: "Dolgu & Kanal Tedavisi",
    tagline: "Ağrısız ve hızlı onarım",
    description:
      "Çürük ve enfekte dişleri hassas anestezi teknikleriyle ağrısız şekilde tedavi ediyor, modern dolgu materyalleriyle uzun ömürlü çözümler sağlıyoruz.",
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
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Öne Çıkan Tedaviler</p>
          <h2 className="mt-2 font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
            Kişiye özel premium hizmet seti
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-slate-800">
            Dijital planlama, uzman ekip ve hasta konforuna odaklanan tedavi yaklaşımı.
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            İmplanttan ortodontiye kadar tüm kritik tedavileri tek çatı altında toplayarak, Ankara Kızılay&apos;daki
            kliniğimizde güvenilir ve şeffaf bir tedavi deneyimi sunuyoruz.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#D7C3A3] hover:shadow-[0_35px_80px_rgba(15,23,42,0.12)]"
            >
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-2xl text-[#384B70]">
                  {service.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.tagline}</p>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-6">
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="text-sm font-semibold text-[#384B70] transition hover:text-[#1f2a3d]"
                >
                  Detayları İncele &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/hizmetler"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-[#384B70] shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:border-[#384B70] hover:bg-white"
          >
            Tüm Hizmetleri Gör &rarr;
          </Link>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          ⭐ 4.9 / 5 · 180+ yorum · 15+ yıllık deneyim · Dijital planlama
        </div>
      </div>
    </section>
  );
};

export default Services;
