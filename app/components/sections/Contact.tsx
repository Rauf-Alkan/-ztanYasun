import AppointmentForm from "@/components/forms/AppointmentForm";
import { LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";

export const dynamic = "force-dynamic";

const infoItems = [
  {
    label: "Klinik Adresi",
    value: "Sezenler Caddesi No: 4/3, Çankaya, Ankara",
    icon: <LuMapPin className="h-6 w-6" />,
  },
  {
    label: "Telefon & WhatsApp",
    value: "05324774391",
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
      {/* --- SAYFA BAŞLIK --- */}
      <section className="bg-white pt-24 pb-14">
        <div className="container-custom mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5EBDD] px-4 py-2 text-sm font-semibold text-[#0C1B33]">
            <span className="h-2 w-2 rounded-full bg-[#CFAE78]" />
            İletişim & Randevu
          </div>
          <h1 className="font-heading text-5xl font-semibold tracking-tight text-[var(--color-brand-navy)] leading-[1.05]">
            İletişim
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Hayalinizdeki gülüşe kavuşmak için ilk adımı atın. Hasta koordinatörümüz size kısa sürede dönüş sağlar.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section id="contact" className="section-spacing bg-white pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* SOL: İletişim Bilgileri */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F5EBDD] px-3 py-1 text-xs font-semibold text-[var(--color-brand-navy)]">
                  <span className="h-2 w-2 rounded-full bg-[#CFAE78]" />
                  Bize Ulaşın
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-1.5 w-10 rounded-full bg-[#CFAE78]" />
                  <h2 className="font-heading text-3xl text-[var(--color-brand-navy)]">
                    İletişim Bilgileri
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Sezenler Caddesi No: 4/3, Çankaya, Ankara adresindeki kliniğimizde hizmetinizdeyiz. 
                  Randevu ve bilgi için aşağıdaki kanalları kullanabilirsiniz.
                </p>
                <div className="h-1 w-12 rounded-full bg-[#CFAE78]/70 mt-5" />
              </div>

              <div className="space-y-6 bg-[#F9FAFB] rounded-2xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(12,27,51,0.05)]">
                {infoItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-[auto_1fr] items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-full bg-white text-[#CFAE78] flex items-center justify-center shadow-sm border border-[#F1E4CD] shrink-0">
                       {item.icon}
                    </div>
                    <div className="space-y-1 border-l border-[var(--color-brand-gold)]/40 pl-3">
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
               <div className="flex items-center gap-3 mb-6">
                 <span className="h-1.5 w-10 rounded-full bg-[#CFAE78]" />
                 <h3 className="font-heading text-2xl text-[var(--color-brand-navy)]">
                   Randevu Talebi
                 </h3>
               </div>
               <AppointmentForm wrapperClassName="space-y-5" />
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION (Full Width) --- */}
      <section className="h-[450px] w-full relative grayscale hover:grayscale-0 transition-all duration-500 mt-8 lg:mt-10">
         <iframe
            title="Dr. Öztan Yasun Kliniği Konum"
            src="https://maps.google.com/maps?q=Sezenler%20Caddesi%20No%204%2F3%20%C3%87ankaya%20Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed" // Geçici URL, kendi Google Maps Embed kodunu buraya koymalısın
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
