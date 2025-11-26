import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | İletişim - Ankara",
  description:
    "Dr. Öztan Yasun ile telefon, WhatsApp veya form üzerinden hızlıca iletişim kurun; hafta içi ortalama 30 dakikada dönüş sağlanır.",
};

const whatsappUrl = "https://wa.me/905000000000?text=Merhaba%2C%20Dr.%20%C3%96ztan%20Yasun%20i%C3%A7in%20randevu%20planlamak%20istiyorum.";

const ContactPage = () => {
  return (
    <main>
      <Contact />
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default ContactPage;
