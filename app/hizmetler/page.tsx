import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Tedaviler - Ankara",
  description: "Dr. Öztan Yasun'un implant, estetik diş hekimliği, ortodonti ve güncel tedavi protokollerini inceleyin.",
};

const ServicesPage = () => {
  return (
    <main>
      <Services />
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default ServicesPage;
