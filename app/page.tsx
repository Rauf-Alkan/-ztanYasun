import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";

// Bileşen İmportları
import HeroSlider from "@/components/hero/HeroSlider";
import PatientTestimonials from "@/components/sections/PatientTestimonials";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { services } from "@/components/sections/Services";

// İkonlar
import { LuArrowRight, LuCheck, LuCalendar, LuMicroscope, LuShieldCheck, LuSparkles } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Estetik Diş Hekimi - Ankara",
  description: "Ankara estetik diş hekimliği, implant ve gülüş tasarımı. Dr. Öztan Yasun ile kişiye özel, dijital destekli diş tedavileri.",
};

export const dynamic = "force-dynamic";

// Yardımcı Fonksiyon
const formatDate = (date: Date) => {
  try {
    return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(date);
  } catch { return date.toISOString().split("T")[0]; }
};

// DÜZELTME 1: id: string yerine id: number yapıldı (Prisma uyumu için)
type BlogPostSummary = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  coverImage: string | null;
  publishedAt: Date;
};

const Home = async () => {
  const featuredServices = services.slice(0, 6);
  const serviceImages: Record<string, string> = {
    implant: "/services/implant-hero.webp",
    "gulus-tasarimi": "/services/gulus-hero.webp",
    "dis-beyazlatma": "/services/beyazlatma-hero.webp",
    ortodonti: "/services/ortodonti-hero.webp",
    "zirkonyum-kaplama": "/services/zirkonyum-hero.webp",
    "dolgu-kanal": "/services/dolgu-hero.webp",
  };
  const doctorHighlights = [
    { icon: <LuShieldCheck className="w-5 h-5" />, text: "15+ Yıllık Deneyim" },
    { icon: <LuMicroscope className="w-5 h-5" />, text: "Dijital Cerrahi" },
    { icon: <LuSparkles className="w-5 h-5" />, text: "Estetik Gülüş Tasarımı" },
  ];
  
  let latestPosts: BlogPostSummary[] = [];
  
  try {
    const posts = await prisma.blogPost.findMany({ 
      orderBy: { publishedAt: "desc" }, 
      take: 3,
      select: { id: true, title: true, slug: true, summary: true, coverImage: true, publishedAt: true } 
    });
    // Tip dönüşümü
    latestPosts = posts as BlogPostSummary[];
  } catch (error) { 
    console.error("Blog fetch error:", error); 
  }

  return (
    <main className="bg-white">
      
      <HeroSlider />
      
      {/* --- 1. BÖLÜM: HİZMETLER --- */}
      <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mb-3 block">
                Klinik Protokolleri
              </span>
              <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-brand-navy)] mb-6">
                Kişiye Özel Tedavi Çözümleri
              </h2>
              <p className="mx-auto max-w-3xl text-slate-600 text-lg leading-relaxed">
                Dr. Öztan Yasun&apos;un imzasını taşıyan protokoller; cerrahi hassasiyet, estetik bakış ve dijital planlamanın birleşimiyle her vaka için premium sonuçlar üretir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-[var(--color-brand-gold)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={serviceImages[service.slug] || "/service1.webp"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)]/55 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-[var(--color-brand-navy)] text-2xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-gold)] mb-2">
                      Klinik Protokol
                    </p>
                    <h3 className="mb-3 text-xl font-semibold text-[var(--color-brand-navy)]">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">{service.description}</p>
                    
                    <span className="mt-auto inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-semibold text-sm relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-brand-gold)] after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:gap-3">
                      İncele <LuArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <Link href="/hizmetler" className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold border-b-2 border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors">
                  Tüm Tedavileri Görüntüle <LuArrowRight />
               </Link>
            </div>
          </div>
      </section>

      {/* --- 2. BÖLÜM: DOKTOR TANITIMI --- */}
      <section className="py-20 bg-[var(--color-brand-gray)] relative overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               
               <div className="relative order-2 lg:order-1">
                  <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border border-white/60 ring-1 ring-[var(--color-brand-navy)]/10">
                     <Image 
                        src="/doctor-hero-unsplash.jpg" 
                        alt="Dr. Öztan Yasun" 
                        fill 
                        className="object-cover"
                     />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border-l-4 border-[var(--color-brand-gold)]">
                     <p className="font-heading text-2xl font-bold text-[var(--color-brand-navy)]">15+</p>
                     <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Yıllık Tecrübe</p>
                  </div>
               </div>

               <div className="order-1 lg:order-2 space-y-8">
                  <div>
                     <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mb-3 block">
                        Hekimimiz
                     </span>
                     <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-brand-navy)] mb-4">
                        Dr. Öztan Yasun
                     </h2>
                     <p className="text-lg text-slate-600 leading-relaxed">
                        &ldquo;Diş hekimliği sadece bir tedavi değil, kişinin özgüvenini inşa eden bir sanattır. Kliniğimizde her vakaya butik bir yaklaşımla, kendi ailemize uygular gibi özenle yaklaşıyoruz.&rdquo;
                     </p>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-slate-700">
                        <LuCheck className="w-5 h-5 text-[var(--color-brand-gold)]" />
                        <span>Hacettepe Üniversitesi Diş Hekimliği Fakültesi Mezunu</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-700">
                        <LuCheck className="w-5 h-5 text-[var(--color-brand-gold)]" />
                        <span>İleri İmplant Cerrahisi Uzmanlığı</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-700">
                        <LuCheck className="w-5 h-5 text-[var(--color-brand-gold)]" />
                        <span>Dijital Gülüş Tasarımı Sertifikalı Hekim</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {doctorHighlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-2xl bg-white shadow-md border border-slate-100 px-4 py-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)]">
                          {item.icon}
                        </div>
                        <span className="text-sm font-semibold text-[var(--color-brand-navy)] leading-tight">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                     href="/ekibimiz" 
                     className="inline-flex px-9 py-3.5 bg-[var(--color-brand-navy)] text-white rounded-full font-semibold shadow-lg hover:bg-[var(--color-brand-navy-light)] transition-all"
                  >
                     Hekimimizi Tanıyın
                  </Link>
               </div>

            </div>
         </div>
      </section>

      {/* --- 3. BÖLÜM: HASTA YORUMLARI --- */}
      <PatientTestimonials />

      {/* --- 4. BÖLÜM: BLOG ÖZETİ --- */}
      <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
               <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mb-3 block">
                    Akademik Bakış
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-brand-navy)]">
                    Hekimden Yazılar
                  </h2>
               </div>
               <Link href="/blog" className="text-[var(--color-brand-navy)] font-bold border-b border-transparent hover:border-[var(--color-brand-navy)] transition-all">
                  Tüm Yazıları Gör
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:border-[var(--color-brand-gold)]/60 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={post.coverImage || "/hero.webp"}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3">
                       <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-brand-gray)] px-3 py-1 text-[var(--color-brand-navy)] border border-slate-100">
                          <LuCalendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                       </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-brand-navy)] leading-snug line-clamp-2 group-hover:text-[var(--color-brand-navy-light)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-slate-600 line-clamp-3 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-navy)] relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[var(--color-brand-gold)] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                       Devamını Oku <LuArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </section>

      {/* --- 5. BÖLÜM: İLETİŞİM & FORM --- */}
      <section className="py-20 bg-[#F8FAFC] text-[var(--color-brand-navy)] relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="space-y-6">
                <h2 className="font-heading text-3xl md:text-5xl mb-2 leading-tight">
                   Gülüşünüzü Ertelemeyin,<br/>
                   <span className="text-[var(--color-brand-gold)]">Bugün Harekete Geçin.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Ankara&apos;nın merkezinde, en ileri teknoloji ve uzman dokunuşlarla ağrısız bir diş hekimliği deneyimi sizi bekliyor.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
                     <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gray)] text-[var(--color-brand-navy)] flex items-center justify-center shrink-0 text-xl">📍</div>
                     <div>
                        <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">Adres</p>
                        <p className="font-medium text-slate-700 leading-relaxed">Meşrutiyet Mah. Atatürk Bulvarı, Çankaya / Ankara</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
                     <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gray)] text-[var(--color-brand-navy)] flex items-center justify-center shrink-0 text-xl">📞</div>
                     <div>
                        <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">Hemen Arayın</p>
                        <p className="font-medium text-slate-700 leading-relaxed">0312 000 00 00</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
                     <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gray)] text-[var(--color-brand-navy)] flex items-center justify-center shrink-0 text-xl">✉️</div>
                     <div>
                        <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">E-Posta</p>
                        <p className="font-medium text-slate-700 leading-relaxed">info@droztanyasun.com</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-10 text-slate-800 shadow-2xl shadow-slate-200 border border-slate-100">
                 <h3 className="text-xl font-semibold text-[var(--color-brand-navy)] mb-2">Hızlı Randevu Oluştur</h3>
                 <p className="text-sm text-slate-500 mb-6">Formu doldurun, asistanımız 30 dk içinde size dönüş yapsın.</p>
                 <AppointmentForm />
              </div>

            </div>
          </div>
      </section>

    </main>
  );
};

export default Home;
