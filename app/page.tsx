import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/hero/HeroSlider";
import PatientTestimonials from "@/components/sections/PatientTestimonials";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { services } from "@/components/sections/Services";
import { teamMembers } from "@/components/sections/Team";
import { prisma } from "@/lib/db";

// ÖZTAN YASUN MARKALAMASI - SEO
export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Estetik Diş Hekimi - Ankara",
  description:
    "Dr. Öztan Yasun ile Ankara'da modern diş hekimliği. İmplant, zirkonyum ve gülüş tasarımında kişiye özel, ağrısız ve estetik çözümler.",
};

export const dynamic = "force-dynamic";

const formatBlogDate = (date: Date) => {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return date.toISOString().split("T")[0];
  }
};

const Home = async () => {
  const featuredServices = services.slice(0, 6);
  const featuredTeam = teamMembers.slice(0, 2);

  // Tip uyuşmazlığı yaşanmaması için any[] ile başlatıyoruz
  let latestPosts: any[] = [];

  try {
    latestPosts = await prisma.blogPost.findMany({
      orderBy: { publishedAt: "desc" },
      take: 3,
    });
  } catch (error) {
    console.error("Blog postları çekilemedi:", error);
  }

  return (
    <main>
      <HeroSlider />
      
      {/* HİZMETLER - DR. ÖZTAN YASUN VURGUSU */}
      <section className="bg-gradient-to-b from-[#FFF7EF] via-white to-[#F2F7FF] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
                Dr. Öztan Yasun Klinik
              </p>
              <div className="mb-12 space-y-4">
                <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
                  Kişiye Özel Tedavi Protokolleri
                </h2>
                <div className="mx-auto accent-line" />
                <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
                  Dr. Öztan Yasun ve ekibi, estetik ve fonksiyonu birleştiren dijital diş hekimliği çözümleriyle gülüşünüzü yeniden tasarlıyor.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <Link
                  key={service.title}
                  href={`/hizmetler/${service.slug}`}
                  className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7C3A3]"
                >
                  <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/95 p-7 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)]">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-2xl text-[#384B70]">
                      {service.icon}
                    </span>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-base leading-relaxed text-slate-600">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#384B70] transition group-hover:gap-3">
                      İncele
                      <span aria-hidden="true">→</span>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-8 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(56,75,112,0.25)] transition hover:bg-opacity-90"
              >
                Tüm Tedaviler
              </Link>
            </div>
          </div>
      </section>

      {/* BLOG - HEKİMDEN TAVSİYELER */}
      <section className="bg-gradient-to-b from-[#EEF3FF] via-white to-[#F7F9FF] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">Akademik Bakış</p>
              <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
                Dr. Öztan Yasun'un Kaleminden
              </h2>
              <div className="mx-auto accent-line" />
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                Diş sağlığınız, implant teknolojileri ve gülüş estetiği hakkında doğru bilinen yanlışlar ve uzman tavsiyeleri.
              </p>
            </div>

            {latestPosts.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7C3A3]"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={post.coverImage || "/hero.webp"}
                          alt={post.title}
                          fill
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <time className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6B5A45]">
                          {formatBlogDate(post.publishedAt)}
                        </time>
                        <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
                        <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600 line-clamp-3">{post.summary}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#384B70] transition group-hover:gap-3">
                          Oku
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white/70 p-10 text-center">
                <p className="text-slate-500">Dr. Öztan Yasun'un makaleleri yakında burada yayınlanacak.</p>
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-[#384B70] px-8 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(56,75,112,0.3)] transition hover:bg-[#2F3D61]"
              >
                Tüm Yazılar
              </Link>
            </div>
          </div>
      </section>

      <PatientTestimonials />

      {/* EKİP - DR ODAKLI */}
      <section className="bg-gradient-to-b from-white via-[#F6F7FB] to-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">Kadro</p>
              <div className="space-y-4">
                <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
                  Dr. Öztan Yasun ve Ekibi
                </h2>
                <div className="mx-auto accent-line" />
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Tecrübe ve dinamizmin birleştiği uzman kadromuzla tanışın.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 justify-center">
              {featuredTeam.map((doctor) => (
                <div
                  key={doctor.name}
                  className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white/95 p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                >
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="mb-5 h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-[0_10px_25px_rgba(15,23,42,0.15)]"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">{doctor.title}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{doctor.summary}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/ekibimiz"
                className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-7 py-3 font-semibold text-white transition hover:bg-opacity-90"
              >
                Ekibimizi Tanıyın
              </Link>
            </div>
          </div>
      </section>

      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#F7F7F9] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
              
              {/* HARİTA */}
              <div className="relative flex h-full min-h-[360px] w-full overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:order-1">
                <iframe
                  title="Dr. Öztan Yasun Klinik Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.452211571933!2d32.852980676336005!3d39.920915483507386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f836b4cd7b7%3A0xbc8a761c0a0ce873!2sAtat%C3%BCrk%20Bulvar%C4%B1%2C%20K%C4%B1z%C4%B1lay%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1714944912345!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* İLETİŞİM FORMU */}
              <div className="flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:order-2">
                <h3 className="text-2xl font-semibold text-neutral-900">Randevu Planlayın</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                  Dr. Öztan Yasun ile ön görüşme veya muayene randevusu almak için formu doldurun.
                </p>
                <AppointmentForm withFrame wrapperClassName="mt-6" />
              </div>

            </div>
          </div>
      </section>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default Home;
