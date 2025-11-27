import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image"; // Image importunu ekledim, resimler için lazım

// Type Tanımları
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

// --- TAM İÇERİK VERİSİ (Eksiksiz) ---
const detailContent: Record<string, ServiceDetail> = {
  implant: {
    slug: "implant",
    title: "İmplant Tedavisi",
    heroTitle: "İmplant Tedavisi",
    heroDescription: "Eksik dişlerin yerine doğal görünümlü ve fonksiyonel dişler kazandıran modern diş hekimliğinin en etkili çözümüdür. Sağlam çene kemiği yapısını koruyarak ömür boyu kullanım sunar.",
    heroImage: "/hero.webp", // Varsayılan görseli kullandım, varsa /services/implant.webp yapabilirsin
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
        }
      ],
      listTitle: "İmplant Tedavisinin Avantajları",
      listItems: [
        "Doğal diş görünümü ve fonksiyonu sağlar",
        "Çene kemiğinin erimesini önler",
        "Uzun ömürlüdür ve dayanıklıdır",
        "Komşu dişlere zarar vermez",
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
     heroImage: "/esthetic.webp", 
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
      {question: "İşlem sonrası hassasiyet olur mu?", answer: "Geçici hassasiyet görülebilir, genellikle kısa sürede kaybolur. Hassasiyet giderici ürünlerle desteklenir."}
     ],
     cta: {title: "Randevu Alın", text: "Hayalinizdeki gülüş için ilk adımı atın.", buttonText: "RANDEVU AL"}
  },
   "dis-beyazlatma": {
     slug: "dis-beyazlatma",
     title: "Diş Beyazlatma",
     heroTitle: "Profesyonel Diş Beyazlatma",
     heroDescription: "Daha parlak ve beyaz dişlere sahip olmak için güvenli ve hızlı çözümler.",
     heroImage: "/hero.webp",
     content: {
       intro: "Zamanla gıda, kahve-çay tüketimi veya sigara nedeniyle renklenen dişlerin yüzey ve iç lekelerini, hekim kontrollü beyazlatma ajanlarıyla güvenle açıyoruz.",
       sections: [
        {title: "Ofis Tipi ve Ev Tipi Beyazlatma", text: "Ofis tipi beyazlatma klinikte güçlü ama kontrollü ajanlarla tek seansta yapılır. Ev tipi beyazlatmada kişiye özel plaklara yerleştirilen ajanlar hekim önerdiği sürelerde kullanılır."},
        {title: "Kimler İçin Uygundur?", text: "Mine yapısı sağlıklı, aktif çürüğü veya ileri diş eti hastalığı olmayan, hamilelik veya emzirme döneminde bulunmayan hastalar için uygundur."},
        {title: "Kullanılan Ajanlar Güvenli mi?", text: "Hekim gözetiminde uygulanan hidrojen veya karbamid peroksit içerikli ajanlar mine yapısına zarar vermez; doğru doz ve süre ile güvenli sonuç verir."}
       ],
       listTitle: "Avantajları",
       listItems: ["Hızlı ve gözle görülür sonuç", "Mine dokusuna zarar vermeyen güvenli ajanlar", "Kişiye özel uygulama seçenekleri", "Uzun süre kalıcılık için bakım önerileri"]
     },
     faqs: [
      {question: "Beyazlatma sonrası hassasiyet normal mi?", answer: "İlk 24-48 saatte geçici hassasiyet olabilir; hassasiyet giderici macun ve gerekirse flor uygulamasıyla rahatlar."},
      {question: "Kaç ton açılma sağlanır?", answer: "Başlangıç rengine bağlı olarak genellikle 2-6 ton arası açılma elde edilir."},
      {question: "Sonuçlar ne kadar kalıcı?", answer: "Beslenme alışkanlıklarına bağlıdır; düzenli bakım ve renkli gıdalardan kaçınma ile 1-3 yıl kalıcılık mümkündür."}
     ],
     cta: {title: "Randevu Alın", text: "Parlak bir gülüş için randevu oluşturun.", buttonText: "RANDEVU AL"}
  },
  ortodonti: {
     slug: "ortodonti",
     title: "Ortodonti",
     heroTitle: "Ortodonti Tedavisi",
     heroDescription: "Çapraşık dişleri düzeltmek ve ideal kapanışı sağlamak için modern çözümler.",
     heroImage: "/about.webp",
     content: {
       intro: "Ortodonti, diş ve çene ilişkisini düzelterek hem estetik hem fonksiyonel bir kapanış sağlar. Tel tedavisi, şeffaf plaklar ve modern biyomekanik yöntemlerle planlanır.",
       sections: [
        {title: "Hangi Problemler Tedavi Edilir?", text: "Çapraşıklık, dişler arası boşluklar, derin kapanış, açık kapanış, sınıf II/III çene ilişkileri ve çene darlıkları ortodontik yöntemlerle düzeltilir."},
        {title: "Tedavi Seçenekleri", text: "Metal braketler dayanıklıdır, porcelen/şeffaf braketler estetik alternatif sunar. Şeffaf plak tedavisi (aligner) tel kullanmadan, çıkarılabilir plaklarla ilerler."},
        {title: "Tedavi Süresi", text: "Vakaya göre 6 ay ile 24+ ay arası sürebilir. Düzenli 4-8 haftalık kontroller hareketin kontrollü olmasını sağlar."}
       ],
       listTitle: "Tedavi Seçenekleri",
       listItems: ["Metal braketler", "Porselen/estetik braketler", "Şeffaf plaklar (telsiz)", "Mini vidalarla destekli tedaviler"]
     },
     faqs: [
      {question: "Ortodonti tedavisi için yaş sınırı var mı?", answer: "Çene gelişimi devam eden çocuklarda erken dönemde başlamak avantajlıdır, ancak yetişkinlerde de estetik seçeneklerle güvenle uygulanabilir."},
      {question: "Şeffaf plak tedavisi etkili mi?", answer: "Uygun vakalarda şeffaf plaklar dişleri kontrollü şekilde hareket ettirir; hasta uyumu ve düzenli kullanım önemlidir."},
      {question: "Ağrı veya rahatsızlık olur mu?", answer: "İlk günlerde hafif baskı ve batmalar normaldir, kısa sürede alışılır."}
     ],
     cta: {title: "Randevu Alın", text: "Ücretsiz muayene için randevu alın.", buttonText: "RANDEVU AL"}
  },
  "zirkonyum-kaplama": {
     slug: "zirkonyum-kaplama",
     title: "Zirkonyum Kaplama",
     heroTitle: "Zirkonyum Diş Kaplama",
     heroDescription: "Metal desteksiz, ışık geçirgenliği yüksek ve doğal görünümlü kaplamalar.",
     heroImage: "/esthetic.webp",
     content: {
       intro: "Zirkonyum kaplamalar, metal altyapı gerektirmeden doğal ışık geçirgenliği sağlar ve diş eti dostudur. Hem estetik hem dayanıklılık sunar.",
       sections: [
        {title: "Neden Zirkonyum?", text: "Metal yansıması olmadığı için diş eti kenarında grileşme yapmaz, doğal diş gibi ışığı yansıtır. Alerji riski düşüktür ve biyouyumlu bir materyaldir."},
        {title: "Hazırlık ve Ölçü Alma", text: "Dişler minimal aşındırılır, hassas ölçü alınarak laboratuvarda kişiye özel zirkonyum altyapı ve porselen üst yapı hazırlanır."},
        {title: "Ömür ve Bakım", text: "Yüksek dayanıklılığı sayesinde posterior bölgede de güvenle kullanılır. Düzenli fırçalama, diş ipi ve hekim kontrolleriyle uzun ömürlüdür."}
       ],
       listTitle: "Kullanım Alanları",
       listItems: ["Ön diş estetiği", "Kanal tedavili dişlerin restorasyonu", "Koyu renkli veya metal destekli kaplamaların yenilenmesi"]
     },
     faqs: [
      {question: "Zirkonyum kaplamalar dayanıklı mı?", answer: "Yüksek kırılma direncine sahiptir, arka bölge çiğneme kuvvetlerine karşı dayanıklıdır."},
      {question: "Diş eti uyumu nasıldır?", answer: "Biyouyumlu olduğu için diş eti kenarında renk değişimi yapmaz, düzgün kenar uyumuyla diş eti sağlığını destekler."},
      {question: "Renk zamanla değişir mi?", answer: "Kaplama kendi rengini korur, yüzey pürüzsüzlüğü sayesinde leke tutma direnci yüksektir."}
     ],
     cta: {title: "Randevu Alın", text: "Doğal görünümlü dişler için bizi arayın.", buttonText: "RANDEVU AL"}
  },
  "dolgu-kanal": {
     slug: "dolgu-kanal",
     title: "Dolgu ve Kanal Tedavisi",
     heroTitle: "Dolgu ve Kanal Tedavisi",
     heroDescription: "Ağrıyan veya çürüyen dişlerinizi çekimden kurtaran koruyucu tedaviler.",
     heroImage: "/hero.webp",
     content: {
       intro: "Dolgu ve kanal tedavisi, çürük veya enfeksiyon nedeniyle zarar gören dişleri çekmeden kurtarmayı hedefler; dişin işlevini ve estetiğini geri kazandırır.",
       sections: [
        {title: "Dolgu Nedir?", text: "Çürük veya kırık nedeniyle mine-dentin kaybı olan diş, temizlenip kompozit veya porselen inley/onley dolgularla restore edilir."},
        {title: "Kanal Tedavisi Süreci", text: "İlerlemiş çürüklerde pulpa temizlenir, kök kanalları şekillendirilip dezenfekte edilir ve biyouyumlu dolgu materyaliyle kapatılır. Sonrasında dolgu veya kaplama ile güçlendirilir."},
        {title: "Ağrısız Tedavi", text: "Lokal anestezi altında uygulanır; modern cihazlarla işlem süresi kısalır ve konfor artar."}
       ],
       listTitle: "Belirtiler",
       listItems: ["Sıcak-soğuk hassasiyeti", "Gece başlayan zonklayıcı ağrı", "Diş renginde koyulaşma", "Çiğneme sırasında sızı"]
     },
     faqs: [
      {question: "Dolgu veya kanal tedavisi ağrılı mı?", answer: "Lokal anesteziyle ağrısızdır, işlem sonrası hafif hassasiyet normaldir ve kısa sürede geçer."},
      {question: "Tedavi tek seansta biter mi?", answer: "Basit dolgular tek seansta biter. Kanal tedavisi enfeksiyon durumuna göre 1-2 seans sürebilir."},
      {question: "Kanal tedavili diş kırılır mı?", answer: "Nemi azaldığı için kırılganlık artabilir; porselen onley veya kaplama ile güçlendirmek uzun ömür sağlar."}
     ],
     cta: {title: "Randevu Alın", text: "Diş ağrınızı ertelemeyin.", buttonText: "RANDEVU AL"}
  },
};

// --- SAYFA FONKSİYONLARI ---

export const generateStaticParams = () => {
  return Object.keys(detailContent).map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const detail = detailContent[slug];
  if (!detail) return { title: "Hizmet Bulunamadı | Dr. Öztan Yasun" };
  return { title: `${detail.title} | Dr. Öztan Yasun`, description: detail.heroDescription };
};

const whatsappUrl = "https://wa.me/905455555050";

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const detail = detailContent[slug];

  if (!detail) notFound();

  return (
    <main className="bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[var(--color-brand-gray)] overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Sol: Metin */}
              <div>
                <Link href="/hizmetler" className="inline-flex items-center text-sm font-bold text-[var(--color-brand-gold)] mb-6 hover:underline">
                  ← Tüm Tedaviler
                </Link>
                <h1 className="font-heading text-4xl lg:text-6xl text-[var(--color-brand-navy)] mb-6 leading-tight">
                  {detail.heroTitle}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  {detail.heroDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="px-8 py-3.5 bg-[var(--color-brand-navy)] text-white rounded-lg font-bold shadow-lg hover:bg-[var(--color-brand-navy-light)] transition-all">
                    Hemen Randevu Al
                  </Link>
                  <a href={whatsappUrl} target="_blank" className="px-8 py-3.5 border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] rounded-lg font-bold hover:bg-[var(--color-brand-navy)] hover:text-white transition-all">
                    WhatsApp Bilgi
                  </a>
                </div>
              </div>

              {/* Sağ: Görsel */}
              <div className="relative h-[300px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
                 <Image 
                   src={detail.heroImage} 
                   alt={detail.heroTitle} 
                   fill
                   className="object-cover transform hover:scale-105 transition-duration-700"
                   sizes="(max-width: 768px) 100vw, 50vw"
                   priority
                 />
              </div>

            </div>
          </div>
        </section>

        {/* --- İÇERİK & SIDEBAR --- */}
        <div className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16">
              
              {/* SOL KOLON: Detaylı İçerik */}
              <article className="prose prose-lg max-w-none text-slate-600">
                {/* Intro Kutusu */}
                <div className="bg-blue-50/50 border-l-4 border-[var(--color-brand-navy)] p-6 rounded-r-xl mb-10">
                   <p className="text-xl font-medium text-[var(--color-brand-navy)] italic m-0">
                     {detail.content.intro}
                   </p>
                </div>

                {/* Dinamik Bölümler */}
                <div className="space-y-12">
                  {detail.content.sections.map((section, idx) => (
                    <div key={idx}>
                      {section.title && (
                        <h2 className="font-heading text-2xl md:text-3xl text-[var(--color-brand-navy)] font-bold mb-4">
                          {section.title}
                        </h2>
                      )}
                      <p className="leading-relaxed text-slate-600">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Liste (Avantajlar vs) */}
                {detail.content.listItems && (
                  <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    {detail.content.listTitle && (
                      <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-6">
                        {detail.content.listTitle}
                      </h3>
                    )}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                      {detail.content.listItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-slate-700 m-0">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>

              {/* SAĞ KOLON: Sticky Sidebar (Satış Kapatıcı) */}
              <aside className="relative h-full">
                <div className="sticky top-28 space-y-8">
                  
                  {/* Randevu Kartı (CTA) */}
                  <div className="bg-[var(--color-brand-navy)] rounded-2xl p-8 text-center text-white shadow-xl shadow-blue-900/20">
                     <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        📅
                     </div>
                     <h3 className="font-heading text-2xl font-bold mb-2">Randevu Planlayın</h3>
                     <p className="text-blue-100 text-sm mb-6">
                        {detail.cta.text}
                     </p>
                     <Link
                        href="/iletisim"
                        className="block w-full py-4 bg-[var(--color-brand-gold)] text-white font-bold rounded-lg hover:bg-white hover:text-[var(--color-brand-navy)] transition-all shadow-md"
                     >
                        {detail.cta.buttonText}
                     </Link>
                     <p className="mt-4 text-xs text-blue-200">
                        *Hızlı randevu ile beklemeden muayene olun.
                     </p>
                  </div>

                  {/* Sık Sorulan Sorular (Accordion) */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[var(--color-brand-navy)] mb-4">Sık Sorulan Sorular</h3>
                    <div className="space-y-2">
                      {detail.faqs.map((faq, i) => (
                        <details
                          key={i}
                          className="group border-b border-slate-100 last:border-0 pb-2 last:pb-0"
                        >
                          <summary className="cursor-pointer list-none flex justify-between items-center py-2 font-medium text-slate-700 hover:text-[var(--color-brand-navy)]">
                            <span className="text-sm">{faq.question}</span>
                            <span className="text-[var(--color-brand-gold)] transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed pl-1">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </div>
    </main>
  );
};

export default ServiceDetailPage;