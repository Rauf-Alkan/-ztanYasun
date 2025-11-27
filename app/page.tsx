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
import { LuArrowRight, LuCheck, LuCalendar } from "react-icons/lu";

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
              <p className="mx-auto max-w-2xl text-slate-600 text-lg leading-relaxed">
                Estetik ve fonksiyonu birleştiren dijital diş hekimliği çözümleriyle, 
                gülüşünüzü bilimin ve sanatın ışığında yeniden tasarlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="group relative flex flex-col p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[var(--color-brand-gold)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] text-3xl group-hover:bg-[var(--color-brand-navy)] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[var(--color-brand-navy)]">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">{service.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-[var(--color-brand-navy)] font-bold text-sm group-hover:gap-2 transition-all">
                    İncele <LuArrowRight className="ml-2 w-4 h-4" />
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
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white">
                     <Image 
                        src="/doctor1.webp" 
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

                  <Link 
                     href="/ekibimiz" 
                     className="inline-flex px-8 py-3 bg-[var(--color-brand-navy)] text-white rounded-lg font-bold shadow-lg hover:bg-[var(--color-brand-navy-light)] transition-all"
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
                    Hekimden Tavsiyeler
                  </h2>
               </div>
               <Link href="/blog" className="text-[var(--color-brand-navy)] font-bold border-b border-transparent hover:border-[var(--color-brand-navy)] transition-all">
                  Tüm Yazıları Gör
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-[var(--color-brand-gold)]/50 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.coverImage || "/hero.webp"}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-brand-gold)] uppercase tracking-wider mb-3">
                       <LuCalendar className="w-3 h-3" />
                       {formatDate(post.publishedAt)}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-brand-navy)] leading-snug line-clamp-2 group-hover:text-[var(--color-brand-navy-light)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-slate-600 line-clamp-3 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-navy)]">
                       Devamını Oku <LuArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </section>

      {/* --- 5. BÖLÜM: İLETİŞİM & FORM --- */}
      <section className="py-20 bg-[var(--color-brand-navy)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-[var(--color-brand-navy)] to-[var(--color-brand-navy)]"></div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div>
                <h2 className="font-heading text-3xl md:text-5xl mb-6 leading-tight">
                   Gülüşünüzü Ertelemeyin,<br/>
                   <span className="text-[var(--color-brand-gold)]">Bugün Harekete Geçin.</span>
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Ankara&apos;nın merkezinde, en ileri teknoloji ve uzman dokunuşlarla ağrısız bir diş hekimliği deneyimi sizi bekliyor.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/5">
                     <div className="w-10 h-10 rounded-full bg-white text-[var(--color-brand-navy)] flex items-center justify-center shrink-0">📍</div>
                     <div>
                        <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">Adres</p>
                        <p className="font-medium">Meşrutiyet Mah. Atatürk Bulvarı, Çankaya / Ankara</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/5">
                     <div className="w-10 h-10 rounded-full bg-white text-[var(--color-brand-navy)] flex items-center justify-center shrink-0">📞</div>
                     <div>
                        <p className="text-xs text-[var(--color-brand-gold)] font-bold uppercase tracking-wider">Hemen Arayın</p>
                        <p className="font-medium">0312 000 00 00</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl shadow-black/20">
                 <h3 className="text-xl font-bold text-[var(--color-brand-navy)] mb-2">Hızlı Randevu Oluştur</h3>
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
