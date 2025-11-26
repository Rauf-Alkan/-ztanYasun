// sections/Team.tsx
import Link from "next/link";

export const dynamic = "force-dynamic";

export const teamMembers = [
  {
    name: "Uzm. Dt. Elif Yılmaz",
    title: "İmplant ve Cerrahi",
    photo: "/doctor1.webp",
    summary:
      "Uludağ Üniversitesi Diş Hekimliği Fakültesi’nden mezun olan Dt. Elif, ileri implantoloji ve rehberli cerrahi üzerine uzmanlaşmıştır. Dijital planlama ve minimal invaziv tekniklere odaklanarak hastalarına en konforlu tedavi süreçlerini sunar.",
  },
  {
    name: "Uzm. Dt. Zeynep Demir",
    title: "Estetik Diş Hekimi",
    photo: "/doctor2.webp",
    summary:
      "Hacettepe Üniversitesi mezunu olan Dt. Zeynep, estetik restorasyonlar ve gülüş tasarımında 10 yılı aşkın deneyime sahiptir. Dijital mock-up ve kişiye özel renk planlama teknikleriyle doğala en yakın sonuçları hedefler.",
  },
  {
    name: "Uzm. Dt. Deniz Akman",
    title: "Ortodonti ve Pedodonti",
    photo: "/doctor3.webp",
    summary:
      "Ankara Üniversitesi mezunu Dt. Deniz, şeffaf plak tedavilerini dijital ölçülerle planlar. Özellikle çocuk hastalarda davranış odaklı yaklaşımı ve koruyucu hekimlik uygulamalarıyla tanınır.",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-white py-24 md:py-32 border-t border-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center space-y-4 md:space-y-5 mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">
            EKİBİMİZ
          </p>
          <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl md:leading-relaxed">
            Alanında uzman hekimlerimizle tanışın
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:leading-loose">
            Modern klinik altyapımızı deneyimli hekimlerimizle birleştirerek her hastamıza kişiye özel, şeffaf ve güvenilir çözümler sunuyoruz.
          </p>
        </div>

        {/* GRID YAPISI */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((doctor) => (
            <article
              key={doctor.name}
              // DÜZELTME 1: Kart Yapısı (Border + Bg + Shadow)
              // Artık 'blok' değil, net bir 'kart' görünümünde.
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* FOTOĞRAF ALANI */}
              <div className="mb-6 overflow-hidden rounded-xl bg-neutral-100 shadow-inner">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* İÇERİK ALANI */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {doctor.name}
                </h3>
                
                <p className="mt-1 text-sm font-medium text-[#384B70]">
                  {doctor.title}
                </p>
                
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {doctor.summary}
                </p>
              </div>

              {/* DÜZELTME 2 & 3: "Hekim" silindi, CTA Hizalandı */}
              {/* mt-auto sayesinde içerik kısa da olsa buton hep en altta hizalı kalır */}
              <div className="mt-auto pt-6">
                <div className="border-t border-neutral-100 pt-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#384B70] transition-all group-hover:gap-3 group-hover:text-[#D7C3A3]"
                  >
                    Randevu Oluştur
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
