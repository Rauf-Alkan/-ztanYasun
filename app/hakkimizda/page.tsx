import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  LuMicroscope, 
  LuHeartHandshake, 
  LuShieldCheck, 
  LuAward, 
  LuStar, 
  LuGem, 
  LuSmile, 
  LuActivity 
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Hakkımızda | Dr. Öztan Yasun",
  description: "Dr. Öztan Yasun'un akademik geçmişi, klinik vizyonu ve estetik diş hekimliği yaklaşımı hakkında detaylı bilgi.",
};

export const dynamic = "force-dynamic";

// --- VERİLER ---
const stats = [
  { label: "Yıllık Deneyim", value: "15+", icon: <LuAward className="w-5 h-5" /> },
  { label: "Mutlu Hasta", value: "5.000+", icon: <LuSmile className="w-5 h-5" /> },
  { label: "Tamamlanan İmplant", value: "10.000+", icon: <LuShieldCheck className="w-5 h-5" /> },
  { label: "Google Puanı", value: "4.9", icon: <LuStar className="w-5 h-5" /> },
];

const education = [
  {
    year: "2008",
    school: "Hacettepe Üniversitesi",
    degree: "Diş Hekimliği Fakültesi (Mezuniyet)",
    desc: "Şeref öğrencisi olarak tamamlanan lisans eğitimi.",
  },
  {
    year: "2012",
    school: "Ankara Üniversitesi",
    degree: "Ağız, Diş ve Çene Cerrahisi (Uzmanlık)",
    desc: "İmplant cerrahisi ve ileri kemik ogmentasyonları üzerine tez çalışması.",
  },
  {
    year: "2015",
    school: "ICOI (USA)",
    degree: "Fellowship Programı",
    desc: "Uluslararası Oral İmplantologlar Kongresi yetkinlik sertifikası.",
  },
];

const features = [
  {
    icon: <LuMicroscope className="w-7 h-7" />,
    title: "Dijital Cerrahi",
    desc: "3D tomografi ve rehberli implant ile milimetrik planlama, öngörülebilir sonuç."
  },
  {
    icon: <LuHeartHandshake className="w-7 h-7" />,
    title: "Butik Takip",
    desc: "Her vaka için kişiye özel plan, yakın takip ve rahatlatan iletişim."
  },
  {
    icon: <LuGem className="w-7 h-7" />,
    title: "Estetik Zarafet",
    desc: "Yüz oranlarına uygun tasarım, doğal ışık geçirgenliği ve premium materyaller."
  }
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      
      {/* --- 1. HERO BÖLÜMÜ (Açık Gri & Premium) --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-brand-gold)]/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[var(--color-brand-navy)]/5 blur-3xl" />
        </div>
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--color-brand-gold)]/60 text-[var(--color-brand-navy)] text-xs font-bold tracking-[0.25em] uppercase">
              Klinik & Vizyon
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-[var(--color-brand-navy)] leading-[1.05]">
              Estetik ve Fonksiyonun <br />
              <span className="text-[var(--color-brand-gold)]">Mükemmel Uyumu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Dr. Öztan Yasun liderliğinde, modern diş hekimliğinin tüm imkanlarını estetik bakış açısıyla buluşturuyor; her gülüşe kurumsal bir imza atıyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/iletisim" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[var(--color-brand-navy)] text-white font-semibold shadow-lg hover:bg-[var(--color-brand-navy-light)] transition-all">
                Randevu Planla
              </Link>
              <Link href="/hizmetler" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] font-semibold hover:bg-[var(--color-brand-navy)] hover:text-white transition-all">
                Klinik Protokoller
              </Link>
            </div>
          </div>

            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-[520px] ml-auto overflow-hidden rounded-[28px] shadow-2xl shadow-slate-300/40 border border-white ring-1 ring-[var(--color-brand-navy)]/10">
                <Image
                  src="/doctor-hero-unsplash.jpg"
                  alt="Dr. Öztan Yasun"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>
            </div>
        </div>
      </section>

      {/* --- 2. BİYOGRAFİ & HİKAYE (Fotoğraf Sol, Metin Sağ) --- */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-16 items-center">
            
            {/* SOL: Fotoğraf Alanı */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl shadow-slate-200 border border-white ring-1 ring-[var(--color-brand-navy)]/10">
                <Image
                  src="/doctor-bio-unsplash.jpg"
                  alt="Dr. Öztan Yasun"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-10 w-48 h-48 border-[3px] border-[var(--color-brand-gold)] rounded-3xl -z-10 hidden lg:block opacity-30" />
            </div>

            {/* SAĞ: Metin Alanı */}
            <div 
              className="relative space-y-8 bg-[#F8FAFC] rounded-[28px] p-10 shadow-lg shadow-slate-200/50 border border-slate-100"
              style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(12,27,51,0.04) 0, transparent 35%), radial-gradient(circle at 80% 0%, rgba(197,165,114,0.08) 0, transparent 30%)" }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-brand-navy)] leading-tight">
                &ldquo;Her hasta kendi hikayesiyle gelir, biz o hikayeye en güzel gülüşü ekleriz.&rdquo;
              </h2>
              
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  Merhaba, ben <strong>Dr. Öztan Yasun</strong>. Meslek hayatım boyunca diş hekimliğinin sadece bir tedavi değil, aynı zamanda bir sanat olduğuna inandım.
                </p>
                <p>
                  Ankara Kızılay&apos;daki kliniğimizi kurarken tek bir hayalim vardı: Hastalarımızın koltuğa oturduğunda hissettiği endişeyi, güven ve konfora dönüştürmek. Bugün, <strong>dijital gülüş tasarımı</strong> ve <strong>ileri implant teknolojileri</strong> sayesinde, sonuçlarını önceden görebildiğiniz şeffaf bir tedavi süreci sunuyoruz.
                </p>
                <p>
                  Ekibimle birlikte, yapaylıktan uzak, yüz hatlarınıza en uygun ve fonksiyonel dişleri tasarlamak için buradayız.
                </p>
              </div>

              {/* İmza / Unvan */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                 <div className="w-14 h-14 bg-white border border-[var(--color-brand-gold)]/50 shadow-sm flex items-center justify-center rounded-full">
                    <svg viewBox="0 0 120 60" aria-hidden="true" className="w-12 h-6 text-[var(--color-brand-navy)]">
                      <path
                        d="M10 40c15-10 25-12 34-8 5 2 9 7 13 14 12-30 25-38 46-28-11-4-19 10-24 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                 </div>
                 <div>
                    <p className="text-[var(--color-brand-navy)] font-semibold text-lg">Dr. Öztan Yasun</p>
                    <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">Kurucu Hekim</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. İSTATİSTİK ŞERİDİ (Kompakt Band) --- */}
      <section className="py-12 bg-[var(--color-brand-gray)] border-y border-slate-200/80">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3 hover:shadow-lg transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold)]">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg font-heading font-semibold text-[var(--color-brand-navy)] leading-tight">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. AKADEMİK ZAMAN ÇİZELGESİ (Dikey Çizgi) --- */}
      <section className="section-spacing bg-[#F7F8FA]">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] block mb-3">
              Kariyer Yolculuğu
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-brand-navy)]">
              Eğitim ve Uzmanlık
            </h2>
          </div>

          <div className="relative pl-6 md:pl-12">
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-[2px] bg-slate-200" />
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 mt-1 flex items-center justify-center h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm">
                    <span className="text-sm font-semibold text-[var(--color-brand-navy)]">{item.year}</span>
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 h-full w-[2px] bg-slate-200 hidden last:block" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[var(--color-brand-navy)]">{item.school}</h3>
                      <p className="text-sm font-semibold text-[var(--color-brand-gold)] mb-3">{item.degree}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. NEDEN BİZ? (Premium Kartlar) --- */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
           <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-[var(--color-brand-navy)]">
                 Sizi Neler Bekliyor?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                 Kliniğimizde sadece diş tedavisi değil, kendinizi özel hissedeceğiniz bir deneyim sunuyoruz.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                 <div key={idx} className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 mb-5">
                       {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-brand-navy)] mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       {feature.desc}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 6. ALT CTA --- */}
      <section className="py-24 bg-[#F2EDE7] text-[var(--color-brand-navy)]">
         <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-10">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">Son Adım</p>
              <h2 className="font-heading text-3xl md:text-4xl leading-tight">
                 Dr. Öztan Yasun ile kişiye özel, bilimsel ve estetik bir tedavi deneyimi için ilk adımı atın.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                 Sizi tanıdığımız anda, ihtiyaçlarınıza göre şekillenen premium bir tedavi planı oluşturuyoruz.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end w-full">
               <Link href="/iletisim" className="inline-flex justify-center items-center px-10 py-4 bg-[var(--color-brand-navy)] text-white font-semibold rounded-full hover:bg-[var(--color-brand-navy-light)] hover:shadow-lg transition-all">
                  Randevu Oluştur
               </Link>
               <Link href="/hizmetler" className="inline-flex justify-center items-center px-10 py-4 border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] font-semibold rounded-full hover:bg-[var(--color-brand-navy)] hover:text-white transition-all">
                  Tedavileri İncele
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
};

export default AboutPage;
