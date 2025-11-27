export const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment:
      "İmplant tedavisi düşündüğümden çok daha konforlu geçti. Dr. Öztan Yasun ve ekibi her adımı önceden anlattı; sakin atmosfer ve dijital planlama sayesinde süreç boyunca güvende hissettim.",
    role: "İmplant Tedavisi",
    initials: "AY",
  },
  {
    name: "Zeynep Demir",
    comment:
      "Kanal tedavisi sırasında hiçbir ağrı hissetmedim. Tüm ekip çok ilgili ve güler yüzlüydü, randevu öncesinden başlayarak her aşamada beni bilgilendirdiler. Tedavi sonrası bakım önerileri sayesinde ağrısız ve hızlı bir iyileşme süreci yaşadım.",
    role: "Kanal Tedavisi",
    initials: "ZD",
  },
  {
    name: "Murat Can",
    comment:
      "Çocuğumun diş hekimi korkusu burada tamamen sona erdi. Pedodonti uzmanı harikaydı ve tüm ekip çocuğumla çok sabırlı, sakin bir iletişim kurdu. Kontrolleri oyun havasında geçirerek düzenli bakım alışkanlığı edinmesine yardımcı oldular.",
    role: "Çocuk Diş Hekimliği",
    initials: "MC",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-white to-slate-50 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Değişim Hikayeleri
          </p>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
            Dr. Öztan Yasun&apos;a güvenen hastaların gülüşleri
            </h2>
            <div className="mx-auto accent-line" />
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Dr. Öztan Yasun&apos;un planladığı tedaviler sonrasında deneyimlerini paylaşan hastalarımızdan seçtiğimiz yorumları keşfedin.
          </p>
        </div>
        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-[32px] border border-slate-100 bg-white/95 p-8 text-[15px] shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_110px_rgba(15,23,42,0.18)] animate-fade-up"
              style={{ animationDelay: `${0.12 + index * 0.05}s` }}
            >
              <div className="mb-6 text-4xl text-[#D7C3A3] font-heading">“</div>
              <p className="mb-6 leading-relaxed text-slate-600">{testimonial.comment}</p>
              <div className="mt-auto flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-sm font-semibold uppercase text-[#384B70]">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
