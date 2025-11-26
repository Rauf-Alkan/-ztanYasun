import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Ekip - Ankara",
  description:
    "Dr. Öztan Yasun ve uzman ekibi; dijital diş hekimliği altyapısı ve kişiye özel yaklaşımıyla güven veren sonuçlar üretir.",
};

const TeamPage = () => {
  return (
    <main>
      <Team />
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default TeamPage;
