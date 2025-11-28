import AppointmentForm from "@/components/forms/AppointmentForm";
import { LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";

export const dynamic = "force-dynamic";

const infoItems = [
  {
    label: "Klinik Adresi",
    value: "Meşrutiyet Mah., Atatürk Bulvarı\nNo: XX, Kat: X, Kızılay, Çankaya/Ankara",
    icon: <LuMapPin className="h-6 w-6" />,
  },
  {
    label: "Telefon & WhatsApp",
    value: ["0312 000 00 00", "0500 000 00 00"], // Array olabilir
    icon: <LuPhone className="h-6 w-6" />,
    isLink: true,
  },
  {
    label: "E-posta",
    value: "info@droztanyasun.com",
    icon: <LuMail className="h-6 w-6" />,
    isLink: true,
    isMail: true,
  },
  {
    label: "Çalışma Saatleri",
    value: "Hafta İçi: 09:00 – 19:00\nCumartesi: 09:00 – 15:00",
    icon: <LuClock className="h-6 w-6" />,
  },
];

const Contact = () => {
  return (
    <>
      {/* --- HERO SECTION (Minimal) --- */}
      <section className="py-16">
        <div className="container-custom text-center space-y-4">
          <h1 className="font-heading text-5xl font-semibold tracking-tight text-[var(--color-brand-navy)]">
            İletişim & Randevu
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Hayalinizdeki gülüşe kavuşmak için ilk adımı atın. Hasta koordinatörümüz size kısa sürede dönüş sağlar.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section id="contact" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* SOL: İletişim Bilgileri */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-[var(--color-brand-navy)] mb-4">
                  İletişim Bilgileri
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Ankara&apos;nın merkezi Kızılay&apos;da, ulaşımı kolay lokasyonumuzda hizmetinizdeyiz. 
                  Randevu ve bilgi için aşağıdaki kanalları kullanabilirsiniz.
                </p>
              </div>

              <div className="space-y-6 bg-[#F9FAFB] rounded-2xl p-8 border border-slate-100">
                {infoItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-[auto_1fr] items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-full bg-white text-[var(--color-brand-navy)] flex items-center justify-center shadow-sm border border-slate-100 shrink-0 hover:text-[var(--color-brand-gold)] transition-colors">
                       {item.icon}
                    </div>
                    <div className="space-y-1">
                       <h3 className="text-sm font-semibold text-[var(--color-brand-navy)]">
                         {item.label}
                       </h3>
                       
                       {Array.isArray(item.value) ? (
                          <div className="flex flex-col gap-1">
                             {item.value.map((val, i) => (
                                <a key={i} href={`tel:${val.replace(/\s/g, "")}`} className="text-slate-700 hover:text-[var(--color-brand-gold)] font-medium transition-colors">
                                   {val}
                                </a>
                             ))}
                          </div>
                       ) : item.isLink ? (
                          <a 
                            href={item.isMail ? `mailto:${item.value}` : `tel:${item.value.replace(/\s/g, "")}`}
                            className="text-slate-700 hover:text-[var(--color-brand-gold)] font-medium transition-colors"
                          >
                            {item.value}
                          </a>
                       ) : (
                          <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                             {item.value}
                          </p>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SAĞ: Form */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 lg:p-10">
               <h3 className="font-heading text-2xl text-[var(--color-brand-navy)] mb-4">
                 Randevu Talebi
               </h3>
               <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION (Full Width) --- */}
      <section className="h-[450px] w-full relative grayscale hover:grayscale-0 transition-all duration-500 mt-16 lg:mt-20">
         <iframe
            title="Dr. Öztan Yasun Kliniği Konum"
            src="https://maps.google.com/maps?q=Ankara%20Kızılay&t=&z=15&ie=UTF8&iwloc=&output=embed" // Geçici URL, kendi Google Maps Embed kodunu buraya koymalısın
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
         />
      </section>
    </>
  );
};

export default Contact;
