// sections/FourFeatures.tsx
import { LuCpu, LuLeaf, LuShieldCheck, LuTimer } from "react-icons/lu";

const features = [
  {
    icon: <LuShieldCheck className="h-7 w-7" />,
    title: "Güvenilir Tedavi",
    desc: "Kanıtlanmış yöntemler ve garantili süreçler.",
  },
  {
    icon: <LuTimer className="h-7 w-7" />,
    title: "Hızlı Sonuçlar",
    desc: "Dijital iş akışı ile minimum koltuk süresi.",
  },
  {
    icon: <LuLeaf className="h-7 w-7" />,
    title: "Konfor Odaklı",
    desc: "Ağrı ve stresi minimize eden modern yaklaşım.",
  },
  {
    icon: <LuCpu className="h-7 w-7" />,
    title: "İleri Teknoloji",
    desc: "En son teknoloji teşhis ve tedavi cihazları.",
  },
];

const FourFeatures = () => {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* İkon Stili: Services ile eşleşti (Krem zemin + Lacivert İkon) */}
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5EFE6] text-3xl text-[#384B70] shadow-sm">
                  {item.icon}
              </span>
              {/* Başlık: Slate-900 */}
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              {/* Açıklama: Slate-600 ve leading-relaxed */}
              <p className="text-base leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourFeatures;
