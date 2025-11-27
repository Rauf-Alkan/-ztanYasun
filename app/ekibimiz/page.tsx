import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Hekimimiz | Dr. Öztan Yasun",
  description: "Dr. Öztan Yasun ile tanışın. 15 yıllık tecrübe, Hacettepe Üniversitesi mezunu, estetik diş hekimliği ve implantoloji uzmanı.",
};

const TeamPage = () => {
  return (
    <main className="bg-white">
      {/* Üstte küçük bir breadcrumb veya başlık alanı olabilir ama Team.tsx içinde zaten Hero var gibi tasarladık. 
          Eğer Team.tsx içinde Hero yoksa (yukarıdaki kodda section-spacing ile başlıyor), buraya bir başlık atabiliriz.
          Ancak yukarıdaki tasarımda "Doctor Profile" zaten Hero görevi görüyor. Temiz kalsın. */}
      
      {/* Sayfa Başlığı Alanı (Opsiyonel - Tasarım bütünlüğü için) */}
      <section className="bg-[var(--color-brand-navy)] py-16 text-center">
         <div className="container-custom">
            <h1 className="font-heading text-4xl text-white">Hekimimiz</h1>
            <p className="text-blue-100 mt-2">Dr. Öztan Yasun Hakkında</p>
         </div>
      </section>

      <Team />
      
      <div className="mx-auto w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default TeamPage;