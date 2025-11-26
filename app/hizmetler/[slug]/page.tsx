import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/components/sections/Services";

// --- VERİ YAPISI ---

const servicesMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  (typeof services)[number]
>;

type ServiceDetail = {
  slug: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  content: {
    intro: string;
    sections: { title?: string; text: string }[];
    listTitle?: string;
    listItems?: string[];
  };
  faqs: { question: string; answer: string }[];
  cta: { title: string; text: string; buttonText: string };
};

// --- İÇERİK DATASI (Aynı Veriler Korundu) ---
const detailContent: Record<string, ServiceDetail> = {
  implant: {
    slug: "implant",
    title: "İmplant Tedavisi",
    heroTitle: "İmplant Tedavisi",
    heroDescription: "Eksik dişlerin yerine doğal görünümlü ve fonksiyonel dişler kazandıran modern diş hekimliğinin en etkili çözümüdür. Sağlam çene kemiği yapısını koruyarak ömür boyu kullanım sunar.",
    heroImage: "/services/implant-hero.webp",
    content: {
      intro: "İmplant tedavisi, tek diş eksikliğinden tam dişsizlik durumuna kadar fonksiyonel ve estetik bir çözüm sunar. Sağlam çene kemiği olan, sistemik hastalığı kontrol altında olan ve ağız hijyenine özen gösteren yetişkin hastalar için planlanır.",
      sections: [
        {
          title: "İmplant Tedavisi Nedir?",
          text: "Diş implantı, eksik dişin kökünü taklit eden titanyum vidaların çene kemiğine yerleştirilmesi ve üzerine porselen ya da zirkonyum protezlerin uygulanmasıdır. Doğal diş kökünü taklit ettiği için hem çiğneme kuvvetini hem de estetik görünümü geri kazandırır.",
        },
        {
          title: "Kimler İçin Uygundur?",
          text: "Yeterli kemik hacmine sahip, diş eti hastalığı kontrol altında olan, sistemik hastalıkları hekim onayıyla uygun görülen yetişkinler için tercih edilir. Sigara kullanımı, kontrolsüz diyabet veya ileri osteoporoz gibi durumlar tedavi planlamasını değiştirebilir.",
        },
        {
          title: "Tedavi Süreci",
          text: "Çene kemiği ve diş eti değerlendirmesi, dijital görüntüleme ve ölçüyle başlar. Lokal anestezi altında implant yerleştirilir, iyileşme sürecinde (osseointegrasyon) geçici dişler kullanılır. Ortalama 2-6 ay sonra kalıcı porselen veya zirkonyum dişler hazırlanır.",
        },
        {
          title: "İmplant Çeşitleri ve Teknikler",
          text: "Standart implantlar tek diş eksikliği için idealdir. Mini implantlar dar kemik alanlarında veya geçici protezleri sabitlemek için kullanılır. All-on-4/All-on-6 gibi konseptlerde tam dişsizlik durumunda 4 veya 6 implant üzerine sabit protezler yapılır, kemik grefti ihtiyacını azaltır.",
        }
      ],
      listTitle: "İmplant Tedavisinin Avantajları",
      listItems: [
        "Doğal diş görünümü ve fonksiyonu sağlar",
        "Çene kemiğinin erimesini önler",
        "Uzun ömürlüdür ve dayanıklıdır",
        "Komşu dişlere zarar vermez",
        "Çiğneme fonksiyonunu tam olarak yerine getirir",
        "Yüz estetiğini korur ve yaşlanma belirtilerini azaltır"
      ]
    },
    faqs: [
      {
        question: "İmplant tedavisi ağrılı bir işlem midir?",
        answer: "Lokal anestezi altında yapılır, işlem sırasında ağrı hissedilmez. Sonrasında hafif sızı veya şişlik normaldir ve ağrı kesicilerle kontrol altına alınır."
      },
      {
        question: "İmplant herkese uygulanabilir mi?",
        answer: "Kemik gelişimi tamamlanmış, sistemik durumu uygun olan yetişkinlere uygulanır. Yetersiz kemik hacmi varsa kemik grefti veya sinüs lifting ile desteklenebilir."
      },
      {
        question: "İmplant tedavisi ne kadar sürer?",
        answer: "Cerrahi işlem genellikle tek seansta tamamlanır. İmplantın kemikle kaynaşması 2-6 ay sürer, bu sürede geçici dişler kullanılabilir."
      },
      {
        question: "İmplantın ömrü ne kadardır?",
        answer: "Düzenli kontrol ve iyi ağız bakımıyla implantlar çok uzun yıllar, doğru bakımda ömür boyu kullanılabilir."
      }
    ],
    cta: {
      title: "Randevu Alın",
      text: "İmplant tedavisi hakkında detaylı bilgi almak ve hekimlerimizle görüşmek için hemen randevu alın.",
      buttonText: "RANDEVU TALEBİ OLUŞTUR"
    }
  },
  "gulus-tasarimi": {
     slug: "gulus-tasarimi",
     title: "Gülüş Tasarımı",
     heroTitle: "Gülüş Tasarımı",
     heroDescription: "Yüz hatlarınıza en uygun, estetik ve doğal gülüşü dijital yöntemlerle tasarlıyoruz.",
     heroImage: "/services/gulus-hero.webp",
     content: {
       intro: "Gülüş tasarımı; yüz oranları, dudak hattı, diş eti seviyesi ve dişlerin formunu birlikte değerlendirerek kişiye özel estetik bir plan oluşturur. Amaç, hem doğal hem de fonksiyonel bir gülüş elde etmektir.",
       sections: [
        {title: "Süreç Nasıl İşler?", text: "Fotoğraf analizi, dijital gülüş simülasyonu ve yüz oranlarının değerlendirilmesiyle başlar. Dijital mock-up ve prova dişlerle, tedavi öncesi olası sonucu birlikte görürüz."},
        {title: "Kullanılan Yöntemler", text: "Porselen veya zirkonyum kaplamalar, laminate veneer (yaprak porselen), bonding, diş beyazlatma ve diş eti seviyeleme gibi işlemler kombine edilir."},
        {title: "Tedavi Planı ve Prova", text: "Geçici materyallerle prova yapılır, dudak uyumu ve konuşma sırasında dişlerin görünürlüğü test edilir. Ardından kalıcı restorasyonlara geçilir."},
        {title: "Doğallık ve Kalıcılık", text: "Materyal seçimi, renk tonlaması ve yüz şekline uygun diş formu, uzun ömürlü ve doğal bir sonuç sağlar. Düzenli kontrollerle kalıcılık desteklenir."}
       ],
       listTitle: "Kimler İçin Uygundur?",
       listItems: ["Diş renginden memnun olmayanlar", "Kırık veya aşınmış dişleri olanlar", "Diş boyu veya formundan rahatsız olanlar", "Diş eti gülümsemesi (gummy smile) yaşayanlar"]
     },
     faqs: [
      {question: "Gülüş tasarımı kaç seansta biter?", answer: "Planlamaya göre değişir ancak genellikle 2-3 prova ve 1-2 son randevuyla 1-3 hafta içinde tamamlanır."},
      {question: "Yaprak porselenler doğal durur mu?", answer: "Doğru renk seçimi, translusens ayarı ve diş eti uyumuyla yaprak porselenler doğal diş görünümü verir."},
      {question: "İşlem sonrası hassasiyet olur mu?", answer: "Geçici hassasiyet görülebilir, genellikle kısa sürede kaybolur. Hassasiyet giderici ürünlerle desteklenir."},
      {question: "Sonuç ne kadar kalıcı?", answer: "Doğru bakım ve düzenli kontrollerle porselen/restorasyonlar uzun ömürlüdür; bruksizm varsa gece plağı tavsiye edilir."}
     ],
     cta: {title: "Randevu Alın", text: "Hayalinizdeki gülüş için ilk adımı atın.", buttonText: "RANDEVU AL"}
  },
   "dis-beyazlatma": {
     slug: "dis-beyazlatma",
     title: "Diş Beyazlatma",
     heroTitle: "Profesyonel Diş Beyazlatma",
     heroDescription: "Daha parlak ve beyaz dişlere sahip olmak için güvenli ve hızlı çözümler.",
     heroImage: "/services/beyazlatma-hero.webp",
     content: {
       intro: "Zamanla gıda, kahve-çay tüketimi veya sigara nedeniyle renklenen dişlerin yüzey ve iç lekelerini, hekim kontrollü beyazlatma ajanlarıyla güvenle açıyoruz.",
       sections: [
        {title: "Ofis Tipi ve Ev Tipi Beyazlatma", text: "Ofis tipi beyazlatma klinikte güçlü ama kontrollü ajanlarla tek seansta yapılır. Ev tipi beyazlatmada kişiye özel plaklara yerleştirilen ajanlar hekim önerdiği sürelerde kullanılır."},
        {title: "Kimler İçin Uygundur?", text: "Mine yapısı sağlıklı, aktif çürüğü veya ileri diş eti hastalığı olmayan, hamilelik veya emzirme döneminde bulunmayan hastalar için uygundur."},
        {title: "İşlem Sonrası Dikkat Edilecekler", text: "İlk 48 saat renkli gıdalardan kaçınmak, hassasiyet giderici ürünler kullanmak ve sigarayı azaltmak sonuçları korur."},
        {title: "Kullanılan Ajanlar Güvenli mi?", text: "Hekim gözetiminde uygulanan hidrojen veya karbamid peroksit içerikli ajanlar mine yapısına zarar vermez; doğru doz ve süre ile güvenli sonuç verir."}
       ],
       listTitle: "Avantajları",
       listItems: ["Hızlı ve gözle görülür sonuç", "Mine dokusuna zarar vermeyen güvenli ajanlar", "Kişiye özel uygulama seçenekleri", "Uzun süre kalıcılık için bakım önerileri"]
     },
     faqs: [
      {question: "Beyazlatma sonrası hassasiyet normal mi?", answer: "İlk 24-48 saatte geçici hassasiyet olabilir; hassasiyet giderici macun ve gerekirse flor uygulamasıyla rahatlar."},
      {question: "Kaç ton açılma sağlanır?", answer: "Başlangıç rengine bağlı olarak genellikle 2-6 ton arası açılma elde edilir."},
      {question: "Sonuçlar ne kadar kalıcı?", answer: "Beslenme alışkanlıklarına bağlıdır; düzenli bakım ve renkli gıdalardan kaçınma ile 1-3 yıl kalıcılık mümkündür."},
      {question: "Dolgu veya kaplamalar da beyazlar mı?", answer: "Hayır, dolgu ve kaplamaların rengi değişmez. Gerekirse beyazlatma sonrası ton eşitlemek için yenilenebilir."}
     ],
     cta: {title: "Randevu Alın", text: "Parlak bir gülüş için randevu oluşturun.", buttonText: "RANDEVU AL"}
  },
  ortodonti: {
     slug: "ortodonti",
     title: "Ortodonti",
     heroTitle: "Ortodonti Tedavisi",
     heroDescription: "Çapraşık dişleri düzeltmek ve ideal kapanışı sağlamak için modern çözümler.",
     heroImage: "/services/ortodonti-hero.webp",
     content: {
       intro: "Ortodonti, diş ve çene ilişkisini düzelterek hem estetik hem fonksiyonel bir kapanış sağlar. Tel tedavisi, şeffaf plaklar ve modern biyomekanik yöntemlerle planlanır.",
       sections: [
        {title: "Hangi Problemler Tedavi Edilir?", text: "Çapraşıklık, dişler arası boşluklar, derin kapanış, açık kapanış, sınıf II/III çene ilişkileri ve çene darlıkları ortodontik yöntemlerle düzeltilir."},
        {title: "Tedavi Seçenekleri", text: "Metal braketler dayanıklıdır, porcelen/şeffaf braketler estetik alternatif sunar. Şeffaf plak tedavisi (aligner) tel kullanmadan, çıkarılabilir plaklarla ilerler."},
        {title: "Tedavi Süresi ve Kontroller", text: "Vakaya göre 6 ay ile 24+ ay arası sürebilir. Düzenli 4-8 haftalık kontroller hareketin kontrollü olmasını sağlar."},
        {title: "Erişkin Ortodontisi", text: "Yetişkinlerde de ortodonti güvenle uygulanabilir. Estetik braketler veya şeffaf plaklar ile sosyal yaşama uyum kolaydır."}
       ],
       listTitle: "Tedavi Seçenekleri",
       listItems: ["Metal braketler", "Porselen/estetik braketler", "Şeffaf plaklar (telsiz)", "Mini vidalarla destekli tedaviler"]
     },
     faqs: [
      {question: "Ortodonti tedavisi için yaş sınırı var mı?", answer: "Çene gelişimi devam eden çocuklarda erken dönemde başlamak avantajlıdır, ancak yetişkinlerde de estetik seçeneklerle güvenle uygulanabilir."},
      {question: "Şeffaf plak tedavisi etkili mi?", answer: "Uygun vakalarda şeffaf plaklar dişleri kontrollü şekilde hareket ettirir; hasta uyumu ve düzenli kullanım önemlidir."},
      {question: "Ağrı veya rahatsızlık olur mu?", answer: "İlk günlerde hafif baskı ve batmalar normaldir, kısa sürede alışılır. Mum ve küçük düzeltmelerle konfor artırılır."},
      {question: "Tedavi bittikten sonra dişler geri döner mi?", answer: "Pekiştirme (retention) plakları düzenli kullanılırsa dişler stabil kalır."}
     ],
     cta: {title: "Randevu Alın", text: "Ücretsiz muayene için randevu alın.", buttonText: "RANDEVU AL"}
  },
  "zirkonyum-kaplama": {
     slug: "zirkonyum-kaplama",
     title: "Zirkonyum Kaplama",
     heroTitle: "Zirkonyum Diş Kaplama",
     heroDescription: "Metal desteksiz, ışık geçirgenliği yüksek ve doğal görünümlü kaplamalar.",
     heroImage: "/services/zirkonyum-hero.webp",
     content: {
       intro: "Zirkonyum kaplamalar, metal altyapı gerektirmeden doğal ışık geçirgenliği sağlar ve diş eti dostudur. Hem estetik hem dayanıklılık sunar.",
       sections: [
        {title: "Neden Zirkonyum?", text: "Metal yansıması olmadığı için diş eti kenarında grileşme yapmaz, doğal diş gibi ışığı yansıtır. Alerji riski düşüktür ve biyouyumlu bir materyaldir."},
        {title: "Hazırlık ve Ölçü Alma", text: "Dişler minimal aşındırılır, hassas ölçü alınarak laboratuvarda kişiye özel zirkonyum altyapı ve porselen üst yapı hazırlanır."},
        {title: "Ömür ve Bakım", text: "Yüksek dayanıklılığı sayesinde posterior bölgede de güvenle kullanılır. Düzenli fırçalama, diş ipi ve hekim kontrolleriyle uzun ömürlüdür."},
        {title: "Renk ve Doğallık", text: "Çevre dişlerle uyumlu renk ve translusens seçimi yapılır, doğal diş formu ve yüz hatlarına göre şekillendirilir."}
       ],
       listTitle: "Kullanım Alanları",
       listItems: ["Ön diş estetiği", "Kanal tedavili dişlerin restorasyonu", "Koyu renkli veya metal destekli kaplamaların yenilenmesi", "Kırık veya aşınmış dişlerin güçlendirilmesi"]
     },
     faqs: [
      {question: "Zirkonyum kaplamalar dayanıklı mı?", answer: "Yüksek kırılma direncine sahiptir, arka bölge çiğneme kuvvetlerine karşı dayanıklıdır."},
      {question: "Diş eti uyumu nasıldır?", answer: "Biyouyumlu olduğu için diş eti kenarında renk değişimi yapmaz, düzgün kenar uyumuyla diş eti sağlığını destekler."},
      {question: "Renk zamanla değişir mi?", answer: "Kaplama kendi rengini korur, yüzey pürüzsüzlüğü sayesinde leke tutma direnci yüksektir."},
      {question: "Ne kadar sürede tamamlanır?", answer: "Ölçü ve prova seanslarıyla birlikte genellikle 5-10 gün içinde teslim edilir."}
     ],
     cta: {title: "Randevu Alın", text: "Doğal görünümlü dişler için bizi arayın.", buttonText: "RANDEVU AL"}
  },
  "dolgu-kanal": {
     slug: "dolgu-kanal",
     title: "Dolgu ve Kanal Tedavisi",
     heroTitle: "Dolgu ve Kanal Tedavisi",
     heroDescription: "Ağrıyan veya çürüyen dişlerinizi çekimden kurtaran koruyucu tedaviler.",
     heroImage: "/services/dolgu-hero.webp",
     content: {
       intro: "Dolgu ve kanal tedavisi, çürük veya enfeksiyon nedeniyle zarar gören dişleri çekmeden kurtarmayı hedefler; dişin işlevini ve estetiğini geri kazandırır.",
       sections: [
        {title: "Dolgu Nedir?", text: "Çürük veya kırık nedeniyle mine-dentin kaybı olan diş, temizlenip kompozit veya porselen inley/onley dolgularla restore edilir."},
        {title: "Kanal Tedavisi Süreci", text: "İlerlemiş çürüklerde pulpa temizlenir, kök kanalları şekillendirilip dezenfekte edilir ve biyouyumlu dolgu materyaliyle kapatılır. Sonrasında dolgu veya kaplama ile güçlendirilir."},
        {title: "Ağrısız Tedavi", text: "Lokal anestezi altında uygulanır; modern cihazlarla işlem süresi kısalır ve konfor artar."},
        {title: "Tedavi Sonrası Bakım", text: "İlk 24 saat sert gıdalardan kaçınmak, düzenli fırçalama ve diş ipi kullanmak, kontrolleri aksatmamak tedavi ömrünü uzatır."}
       ],
       listTitle: "Belirtiler",
       listItems: ["Sıcak-soğuk hassasiyeti", "Gece başlayan zonklayıcı ağrı", "Diş renginde koyulaşma", "Çiğneme sırasında sızı"]
     },
     faqs: [
      {question: "Dolgu veya kanal tedavisi ağrılı mı?", answer: "Lokal anesteziyle ağrısızdır, işlem sonrası hafif hassasiyet normaldir ve kısa sürede geçer."},
      {question: "Tedavi tek seansta biter mi?", answer: "Basit dolgular tek seansta biter. Kanal tedavisi enfeksiyon durumuna göre 1-2 seans sürebilir."},
      {question: "Kanal tedavili diş kırılır mı?", answer: "Nemi azaldığı için kırılganlık artabilir; porselen onley veya kaplama ile güçlendirmek uzun ömür sağlar."},
      {question: "Tedavi başarısı neye bağlı?", answer: "Doğru teşhis, iyi izolasyon, dezenfeksiyon ve düzenli kontrol ile başarı oranı yüksektir; gece plağı ve iyi ağız bakımı destekler."}
     ],
     cta: {title: "Randevu Alın", text: "Diş ağrınızı ertelemeyin.", buttonText: "RANDEVU AL"}
  },
};

export const generateStaticParams = () => {
  return Object.keys(detailContent).map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const detail = detailContent[slug];
  if (!detail) {
    return {
      title: "Hizmet Bulunamadı | Dr. Öztan Yasun",
    };
  }
  return {
    title: `${detail.title} | Dr. Öztan Yasun`,
    description: detail.heroDescription,
  };
};

const whatsappUrl = "https://wa.me/905455555050";

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const detail = detailContent[slug];

  if (!detail) {
    notFound();
  }

  return (
    <main className="bg-white pb-14">
        
        {/* --- YENİ HERO SECTION (About.tsx Stilinde) --- */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* GÖRSEL (About.tsx'teki container yapısı kullanıldı) */}
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.05)] bg-slate-50 h-[350px] lg:h-[420px] w-full border border-slate-100">
                   <img 
                     src={detail.heroImage} 
                     alt={detail.heroTitle} 
                     className="h-full w-full object-cover"
                   />
                </div>
              </div>

              {/* İÇERİK (About.tsx'teki tipografi kullanıldı) */}
              <div className="order-1 lg:order-2">
                {/* Eyebrow */}
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">
                  Hizmetlerimiz / {detail.title}
                </span>

                {/* Başlık */}
                <h1 className="mb-6 font-heading text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  {detail.heroTitle}
                </h1>

                {/* Açıklama */}
                <p className="mb-10 text-lg leading-relaxed text-slate-600">
                  {detail.heroDescription}
                </p>

                {/* Butonlar (mobilde gizli) */}
                <div className="hidden flex-wrap items-center gap-4 md:flex">
                  <Link
                    href="/iletisim"
                    className="rounded-full bg-[#384B70] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2a3a5a] shadow-[0_10px_20px_rgba(56,75,112,0.2)]"
                  >
                    Randevu Oluştur
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-200 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
                  >
                    WhatsApp İletişim
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- ANA ICERIK GRID (Eski düzen korundu, sadece stil uyumu) --- */}
        <div className="mx-auto mt-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            
            {/* SOL KOLON (Makale / İçerik) */}
            <div className="space-y-10 max-w-3xl mx-auto lg:mx-0">
              
              {/* Mavi Kutucuklu Giriş */}
              <div className="relative rounded-2xl border-l-4 border-[#384B70] bg-[#F8FAFC] p-6 shadow-sm">
                 <p className="text-lg leading-relaxed text-slate-700 md:text-xl italic">
                   {detail.content.intro}
                 </p>
              </div>

              {/* Dinamik Bölümler */}
              <div className="space-y-10">
                {detail.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 first:mt-0 mt-12">
                    {section.title && (
                      <h3 className="font-heading text-2xl font-semibold leading-tight text-[#384B70] md:text-3xl">
                        {section.title}
                      </h3>
                    )}
                    <p className="text-base leading-relaxed text-slate-600 md:text-lg md:leading-loose">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Liste Alanı */}
              {detail.content.listItems && (
                <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgba(56,75,112,0.08)] border border-slate-100">
                  {detail.content.listTitle && (
                    <h3 className="mb-6 font-heading text-2xl font-semibold leading-tight text-[#384B70] md:text-3xl">
                      {detail.content.listTitle}
                    </h3>
                  )}
                  <ul className="space-y-4">
                    {detail.content.listItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EDF7]">
                          <svg className="h-3.5 w-3.5 text-[#384B70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base font-medium leading-relaxed text-slate-700 md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* SAĞ KOLON (Sticky Sidebar) */}
            <div className="relative h-full">
              <div className="sticky top-28 space-y-8">
                
                {/* Sık Sorulan Sorular */}
                <div>
                  <h3 className="mb-5 font-heading text-xl font-bold leading-tight text-slate-900">Sık Sorulan Sorular</h3>
                  <div className="space-y-3">
                    {detail.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-[#384B70]/30 open:shadow-md"
                      >
                        <summary className="flex w-full cursor-pointer list-none items-center justify-between p-4 text-left font-medium text-slate-800 focus:outline-none">
                          <span className="pr-4 text-base font-semibold leading-tight text-slate-800">{faq.question}</span>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition group-open:rotate-180 group-open:bg-[#384B70] group-open:text-white">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="border-t border-slate-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-slate-600 animate-in fade-in slide-in-from-top-1">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Randevu Kartı */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/50 text-center border border-slate-100">
                 <div className="bg-white p-8 pb-6">
                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#384B70] text-white shadow-lg shadow-[#384B70]/20">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </div>
                     <h3 className="font-heading text-2xl font-bold text-slate-900">{detail.cta.title}</h3>
                     <p className="mt-3 text-sm leading-relaxed text-slate-500 px-2">
                        {detail.cta.text}
                     </p>
                  </div>

                  <div className="bg-[#F8FAFC] p-6 pt-0">
                     <Link
                        href="/iletisim"
                        className="flex w-full items-center justify-center rounded-xl bg-[#384B70] py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#384B70]/30 transition-transform hover:scale-[1.02] hover:shadow-[#384B70]/40 active:scale-[0.98]"
                     >
                        {detail.cta.buttonText}
                     </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

    </main>
  );
};

export default ServiceDetailPage;
