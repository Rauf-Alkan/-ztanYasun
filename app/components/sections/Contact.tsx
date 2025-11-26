import AppointmentForm from "@/components/forms/AppointmentForm";

export const dynamic = "force-dynamic";

const infoItems = [
  {
    label: "Adres",
    value: "Meşrutiyet Mah., Atatürk Bulvarı No: XX, Kat: X\nKızılay, Çankaya/Ankara",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Telefon",
    value: ["0312 000 00 00", "0312 000 00 01"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.087c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.46-.115-.944.018-1.282.332l-.908.848c-.436.406-1.09.453-1.58.11a12.035 12.035 0 0 1-5.14-5.139c-.344-.49-.297-1.144.109-1.58l.848-.909c.314-.338.447-.822.332-1.282L6.678 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"
        />
      </svg>
    ),
  },
  {
    label: "E-posta",
    value: "info@droztanyasun.com\nrandevu@droztanyasun.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.026 1.898l-7.5 4.875a2.25 2.25 0 0 1-2.448 0L3.276 8.89a2.25 2.25 0 0 1-1.026-1.898V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Çalışma Saatleri",
    value: "Pazartesi - Cuma 09:00 – 19:00\nCumartesi 09:00 – 15:00\nPazar Kapalı",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l3 1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-white to-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">İletişim</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">Dr. Öztan Yasun ile bağlantı kurun</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Telefon, WhatsApp veya form üzerinden ekibimize ulaşabilirsiniz. Hafta içi ortalama 30 dakika içinde dönüş sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            <h3 className="text-xl font-semibold text-[#384B70]">İletişim Bilgileri</h3>
            <p className="mt-2 text-sm text-slate-500">Sorularınız veya randevu talepleriniz için bize buradan ulaşabilirsiniz.</p>
            <div className="mt-8 space-y-5 text-sm text-slate-600">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                >
                  <span className="text-[#384B70]">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                    {Array.isArray(item.value) ? (
                      <div className="space-y-1 text-sm text-slate-700">
                        {item.value.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/[^+0-9]/g, "")}`}
                            className="block text-[#384B70] transition hover:text-[#2F3D61]"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="whitespace-pre-line text-sm text-slate-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            <h3 className="text-xl font-semibold text-[#384B70]">Randevu Formu</h3>
            <p className="mt-2 text-sm text-slate-500">Formu kullanarak Dr. Öztan Yasun ile muayene talebi oluşturabilir veya hızlıca WhatsApp üzerinden haber verebilirsiniz.</p>
            <AppointmentForm
              withFrame={true}
              wrapperClassName="mt-6"
            />
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-100 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
          <iframe
            title="Dr. Öztan Yasun Kliniği Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.452211571933!2d32.852980676336005!3d39.920915483507386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f836b4cd7b7%3A0xbc8a761c0a0ce873!2sAtat%C3%BCrk%20Bulvar%C4%B1%2C%20K%C4%B1z%C4%B1lay%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1714944912345!5m2!1str!2str"
            width="100%"
            height="400"
            className="h-72 w-full rounded-[28px] md:h-96"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
