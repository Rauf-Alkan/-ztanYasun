import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "İletişim & Randevu | Dr. Öztan Yasun",
  description: "Ankara Kızılay'da Dr. Öztan Yasun kliniği için randevu oluşturun. Telefon, WhatsApp veya form üzerinden hızlı iletişim.",
};

const ContactPage = () => {
  return (
    <main className="bg-white">
      <Contact />
    </main>
  );
};

export default ContactPage;