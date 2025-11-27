"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MessageCircle, Send, X, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

const initialMessages: ChatMessage[] = [
  {
    role: "model",
    parts: [
      {
        text: "**Merhaba!** 👋 \n\nBen Dr. Öztan Yasun'un asistanıyım. Size özel gülüş tasarımı, implant tedavileri veya randevu planlaması hakkında nasıl yardımcı olabilirim?",
      },
    ],
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // --- EYLEM İŞLEYİCİSİ (ACTION HANDLER) ---
  const handleServerAction = (text: string) => {
    // 1. Randevu Formunu Açma
    if (text.includes("[[ACTION_OPEN_APPOINTMENT]]")) {
      // Randevu formunun olduğu yere yumuşak kaydır
      // (Formun olduğu section'a id="appointment-form" vermeyi unutma!)
      const formElement = document.getElementById("appointment-form");
      if (formElement) {
        setIsOpen(false); // Sohbeti kapat
        setTimeout(() => {
            formElement.scrollIntoView({ behavior: "smooth", block: "center" });
            // Dikkat çekmek için formu vurgula (opsiyonel)
            formElement.classList.add("ring-4", "ring-[#D7C3A3]");
            setTimeout(() => formElement.classList.remove("ring-4", "ring-[#D7C3A3]"), 2000);
        }, 300);
      } else {
        // Eğer ID bulunamazsa iletişim sayfasına git
        window.location.href = "/iletisim";
      }
      return text.replace("[[ACTION_OPEN_APPOINTMENT]]", ""); // Kodu metinden sil
    }

    // 2. WhatsApp Açma
    if (text.includes("[[ACTION_OPEN_WHATSAPP]]")) {
        window.open("https://wa.me/905000000000", "_blank"); // Numaranı buraya yaz
        return text.replace("[[ACTION_OPEN_WHATSAPP]]", "");
    }

    // 3. Telefon Arama
    if (text.includes("[[ACTION_CALL_PHONE]]")) {
        window.location.href = "tel:+903120000000"; // Numaranı buraya yaz
        return text.replace("[[ACTION_CALL_PHONE]]", "");
    }

    return text;
  };

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      parts: [{ text: trimmedInput }],
    };

    setInput("");
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const historyPayload = [...messages, userMessage];
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedInput,
          history: historyPayload.map((m) => ({ role: m.role, parts: m.parts })),
        }),
      });

      const data = await response.json();
      let replyText = typeof data?.reply === "string" ? data.reply : "Bağlantı hatası.";

      // Gelen cevabı analiz et (Aksiyon var mı?)
      replyText = handleServerAction(replyText);

      setMessages((prev) => [...prev, { role: "model", parts: [{ text: replyText }] }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: "Hat oluştu. Lütfen arayınız." }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-5 bottom-24 z-[9999] flex flex-col items-end font-sans transition-all duration-300 md:bottom-6 md:right-28 pointer-events-none">
      
      {/* SOHBET KUTUSU */}
      <div
        className={`mb-4 flex h-[550px] max-h-[80vh] w-[90vw] flex-col overflow-hidden rounded-2xl border border-[#384B70]/10 bg-white shadow-[0_20px_50px_-12px_rgba(56,75,112,0.5)] transition-all duration-300 origin-bottom-right transform sm:w-[380px] pointer-events-auto ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "pointer-events-none scale-95 opacity-0 translate-y-10"
        }`}
      >
        {/* PREMIUM HEADER */}
        <div className="relative flex items-center justify-between bg-[#384B70] p-5 text-white overflow-hidden">
          {/* Arka plan efekti */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[#D7C3A3] opacity-20 blur-xl"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D7C3A3]/50 bg-white/10 backdrop-blur-md">
                   <Sparkles className="h-6 w-6 text-[#D7C3A3]" />
                </div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#384B70]"></span>
            </div>
            <div>
              <h3 className="text-base font-bold tracking-wide text-white">
                Dr. Öztan Yasun
              </h3>
              <p className="text-[10px] text-[#D7C3A3] font-medium tracking-widest uppercase">
                AI Asistan
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="relative z-10 rounded-full p-2 transition-colors hover:bg-white/10 text-[#D7C3A3]"
          >
            <X size={20} />
          </button>
        </div>

        {/* MESAJ ALANI */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-[#F9FAFB] p-5 scrollbar-thin scrollbar-thumb-slate-200">
          {messages.map((msg, index) => (
            <div
              key={`${msg.role}-${index}`}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "rounded-br-none bg-[#384B70] text-white" // Kullanıcı: Lacivert
                    : "rounded-bl-none border border-[#E2E8F0] bg-white text-slate-700" // Bot: Beyaz
                }`}
              >
                {msg.role === "model" ? (
                  <div className="markdown-content text-sm leading-relaxed [&_*]:text-inherit [&_a]:text-[#384B70] [&_a]:font-bold [&_a]:underline [&_p]:my-1 [&_strong]:text-slate-900 [&_strong]:font-bold">
                    <ReactMarkdown components={{ a: (props) => <a {...props} target="_blank" /> }}>
                      {msg.parts[0]?.text || ""}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.parts[0]?.text
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="flex items-center gap-2 rounded-2xl rounded-bl-none border border-[#E2E8F0] bg-white p-3 shadow-sm">
                <Loader2 className="h-4 w-4 animate-spin text-[#384B70]" />
                <span className="text-xs font-medium text-slate-400">Yanıt hazırlanıyor...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT ALANI */}
        <div className="border-t border-[#E2E8F0] bg-white p-4">
          <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-slate-50 px-4 py-3 shadow-inner focus-within:border-[#384B70] focus-within:ring-1 focus-within:ring-[#384B70]/20 transition-all">
            <input
              className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
              placeholder="Sorunuzu yazın..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="rounded-full bg-[#384B70] p-2 text-white shadow-md transition-all hover:bg-[#2c3a57] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="mt-2 text-center opacity-40">
             <span className="text-[10px] text-slate-500 font-medium">Dr. Öztan Yasun AI Technology</span>
          </div>
        </div>
      </div>

      {/* FAB (AÇMA BUTONU) - PREMIUM GÖRÜNÜM */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full shadow-[0_10px_30px_-5px_rgba(56,75,112,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white ${
          isOpen
            ? "rotate-90 bg-slate-100 text-slate-600"
            : "bg-gradient-to-tr from-[#384B70] to-[#2c3a57] text-[#D7C3A3]" // Lacivert Gradient + Gold İkon
        }`}
        aria-label={isOpen ? "Sohbeti kapat" : "Sohbeti aç"}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} strokeWidth={2.5} />}
      </button>
    </div>
  );
};

export default ChatWidget;