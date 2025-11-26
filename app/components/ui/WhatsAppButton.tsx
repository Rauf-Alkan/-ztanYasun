"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/905000000000?text=Merhaba%2C%20Dr.%20%C3%96ztan%20Yasun%20i%C3%A7in%20h%C4%B1zl%C4%B1%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişim kurun"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-xl animate-wpp-pulse"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
