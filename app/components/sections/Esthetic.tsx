// sections/Esthetic.tsx
import Link from "next/link";

export const estheticContent = {
  eyebrow: "ESTETİK YAKLAŞIM",
  title: "Doğallık, Sanatla Buluşuyor",
  description: "Gülüş tasarımı süreçlerimizde yapaylıktan uzak, yüz hatlarınıza en uygun formu arıyoruz. Dijital teknolojiyi sanatsal bir bakış açısıyla harmanlayarak, size en çok yakışan gülüşü tasarlıyoruz.",
  image: "/esthetic.webp"
};

const Esthetic = () => {
  return (
    <section id="esthetic" className="bg-[#F8F9FA] py-24 lg:py-32"> 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-1">
            {/* Eyebrow: Services stili */}
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">
              {estheticContent.eyebrow}
            </span>
            {/* Başlık: font-heading ve slate-900 */}
            <h2 className="mb-6 font-heading text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {estheticContent.title}
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
              {estheticContent.description}
            </p>
            
             <Link href="/hizmetler" className="text-sm font-semibold text-slate-900 border-b border-slate-300 pb-0.5 hover:border-[#384B70] hover:text-[#384B70] transition-colors">
                Tedavi detaylarını inceleyin →
             </Link>
          </div>

          <div className="order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-sm h-[400px] w-full bg-white border border-slate-100">
              <img 
                src={estheticContent.image} 
                alt="Estetik Diş Hekimliği" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Esthetic;