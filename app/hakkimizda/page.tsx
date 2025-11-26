import type { Metadata } from "next";
import About, { aboutContent } from "@/components/sections/About";
import Esthetic from "@/components/sections/Esthetic";
import FourFeatures from "@/components/sections/FourFeatures";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Hakkımızda - Ankara",
  description: aboutContent.description,
};

const AboutPage = () => {
  return (
    <main>
      <About />
      <Esthetic />
      <FourFeatures />
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default AboutPage;
