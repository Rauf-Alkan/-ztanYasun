import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LuMicroscope, LuHeartHandshake, LuShieldCheck } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Hakkımızda | Dr. Öztan Yasun",
  description: "Dr. Öztan Yasun'un akademik geçmişi, klinik vizyonu ve estetik diş hekimliği yaklaşımı hakkında detaylı bilgi.",
};

export const dynamic = "force-dynamic";

// --- VERİLER ---
const stats = [
  { label: "Yıllık Deneyim", value: "15+" },
  { label: "Mutlu Hasta", value: "5.000+" },
  { label: "Başarılı İmplant", value: "10k+" },
  { label: "Google Puanı", value: "4.9" },
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
    icon: <LuShieldCheck className="w-8 h-8" />,
    title: "Güvenilir Tedavi",
    desc: "Kanıtlanmış yöntemler ve garantili süreçlerle sağlığınız güvende."
  },
  {
    icon: <LuMicroscope className="w-8 h-8" />,
    title: "Modern Teknoloji",
    desc: "Dijital ölçü (CAD/CAM) ve 3D tomografi ile hatasız teşhis."
  },
  {
    icon: <LuHeartHandshake className="w-8 h-8" />,
    title: "Konfor Odaklı",
    desc: "Ankara Kızılay'da, ağrı ve stresi minimize eden butik klinik deneyimi."
  }
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      
      {/* --- 1. HERO BÖLÜMÜ (Kurumsal Lacivert) --- */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 lg:py-32 overflow-hidden">
        {/* Dekoratif Arka Plan Deseni */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
           </svg>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-6 border border-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-gold)] text-xs font-bold tracking-[0.25em] uppercase bg-[var(--color-brand-navy)]/50 backdrop-blur-sm">
            Klinik & Vizyon
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
            Estetik ve Fonksiyonun <br/>
            <span className="text-[var(--color-brand-gold)]">Mükemmel Uyumu</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Dr. Öztan Yasun liderliğinde, modern diş hekimliğinin tüm imkanlarını estetik bakış açısıyla buluşturuyoruz.
          </p>
        </div>
      </section>

      {/* --- 2. BİYOGRAFİ & HİKAYE (Grid Yapısı) --- */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* SOL: Fotoğraf Alanı */}
            <div className="relative order-2 lg:order-1">
              {/* Resim Çerçevesi */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                <Image
                  src="/doctor1.webp" // Mevcut görselin
                  alt="Dr. Öztan Yasun"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Dekoratif Altın Kutu (Alperen Özcan tarzı detay) */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-[3px] border-[var(--color-brand-gold)] rounded-2xl -z-10 hidden lg:block opacity-30" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[var(--color-brand-navy)]/5 rounded-full -z-10 hidden lg:block" />
            </div>

            {/* SAĞ: Metin Alanı */}
            <div className="space-y-8 order-1 lg:order-2">
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
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                 <div className="w-12 h-12 bg-[var(--color-brand-navy)] text-white flex items-center justify-center rounded-full text-xl font-heading font-bold">
                    ÖY
                 </div>
                 <div>
                    <p className="text-[var(--color-brand-navy)] font-bold text-lg">Dr. Öztan Yasun</p>
                    <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">Kurucu Hekim</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. İSTATİSTİK ŞERİDİ (Güven Sinyalleri) --- */}
      <section className="py-16 bg-[var(--color-brand-gray)] border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <p className="text-4xl lg:text-5xl font-heading font-bold text-[var(--color-brand-navy)] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. AKADEMİK ZAMAN ÇİZELGESİ (Timeline) --- */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] block mb-3">
              Kariyer Yolculuğu
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-brand-navy)]">
              Eğitim ve Uzmanlık
            </h2>
          </div>

          <div className="relative space-y-12 pl-8 md:pl-0 border-l-2 border-slate-100 md:border-none">
             {/* Mobilde solda çizgi, desktopta ortada hayali çizgi */}
             {education.map((item, index) => (
               <div key={index} className="md:flex items-center justify-between group">
                  
                  {/* Yıl - Desktopta (Sol/Sağ Değişmeli) */}
                  <div className="hidden md:block w-[45%] text-right group-odd:order-1 group-even:order-3">
                     <span className={`text-5xl font-heading font-bold text-slate-100 group-hover:text-[var(--color-brand-gold)] transition-colors duration-500 ${index % 2 === 1 ? "text-left block" : ""}`}>
                        {item.year}
                     </span>
                  </div>

                  {/* Orta Nokta */}
                  <div className="absolute left-[-9px] md:relative md:left-auto w-4 h-4 rounded-full bg-[var(--color-brand-navy)] border-4 border-white shadow-md z-10 md:group-odd:order-2 md:group-even:order-2"></div>

                  {/* İçerik Kartı */}
                  <div className="md:w-[45%] group-odd:order-3 group-even:order-1 ml-6 md:ml-0">
                     <div className="bg-[var(--color-brand-gray)] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[var(--color-brand-gold)]/20">
                        <span className="md:hidden text-2xl font-heading font-bold text-[var(--color-brand-navy)] mb-2 block">
                           {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-[var(--color-brand-navy)] mb-1">
                           {item.school}
                        </h3>
                        <p className="text-sm font-semibold text-[var(--color-brand-gold)] mb-3">
                           {item.degree}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                           {item.desc}
                        </p>
                     </div>
                  </div>

               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 5. NEDEN BİZ? (Features Grid) --- */}
      <section className="section-spacing bg-[var(--color-brand-navy)] text-white">
        <div className="container-custom">
           <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                 Sizi Neler Bekliyor?
              </h2>
              <p className="text-blue-200 max-w-2xl mx-auto">
                 Kliniğimizde sadece diş tedavisi değil, kendinizi özel hissedeceğiniz bir deneyim sunuyoruz.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)] mb-6 group-hover:scale-110 transition-transform">
                       {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                       {feature.desc}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 6. ALT CTA --- */}
      <section className="py-24 bg-white text-center">
         <div className="container-custom max-w-2xl">
            <h2 className="font-heading text-3xl text-[var(--color-brand-navy)] mb-6">
               Hayalinizdeki Gülüşe Bir Adım Kaldı
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/iletisim" className="inline-flex justify-center items-center px-8 py-4 bg-[var(--color-brand-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-brand-navy-light)] hover:shadow-lg transition-all">
                  Randevu Oluştur
               </Link>
               <Link href="/hizmetler" className="inline-flex justify-center items-center px-8 py-4 border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] font-bold rounded-lg hover:bg-[var(--color-brand-navy)] hover:text-white transition-all">
                  Tedavileri İncele
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
};

export default AboutPage;
