import AppointmentForm from "@/components/forms/AppointmentForm";

const FastAppointment = () => {
  return (
    <section
      id="fast-appointment"
      className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-[#F3EBDF] px-4 py-1 text-sm font-semibold tracking-[0.3em] text-[#384B70]">
            Hızlı Randevu
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
              İlk ziyareti planlayın, ekibimiz hemen sizi arasın.
            </h2>
            <span className="accent-line" />
          </div>
          <p className="text-lg leading-relaxed text-slate-600">
            Premium kliniğimizde randevu almak için formu doldurun. Tüm talepleri dakikalar içinde yanıtlıyor ve
            size en uygun zaman dilimini birlikte belirliyoruz.
          </p>
          <div className="rounded-3xl border border-slate-100/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="text-sm uppercase tracking-wider text-slate-500">Yardım mı gerekiyor?</p>
            <a
              href="tel:+905455555050"
              className="mt-2 inline-flex text-3xl font-semibold text-slate-900 transition hover:text-[#384B70]"
            >
              +90 545 555 50 50
            </a>
            <p className="mt-1 text-sm text-slate-500">Hafta içi 09:00 – 20:00 arası yanıt veriyoruz.</p>
          </div>
        </div>

        <AppointmentForm />
      </div>
    </section>
  );
};

export default FastAppointment;
