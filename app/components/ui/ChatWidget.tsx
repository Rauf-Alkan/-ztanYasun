"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MessageSquare, Send, X, Sparkles, User, Bot } from "lucide-react";
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

  // --- EYLEM İŞLEYİCİSİ ---
  const handleServerAction = (text: string) => {
    if (text.includes("[[ACTION_OPEN_APPOINTMENT]]")) {
      const formElement = document.getElementById("appointment-form");
      if (formElement) {
        setIsOpen(false);
        setTimeout(() => {
            formElement.scrollIntoView({ behavior: "smooth", block: "center" });
            formElement.classList.add("ring-4", "ring-[#D7C3A3]");
            setTimeout(() => formElement.classList.remove("ring-4", "ring-[#D7C3A3]"), 2000);
        }, 300);
      } else {
        window.location.href = "/iletisim";
      }
      return text.replace("[[ACTION_OPEN_APPOINTMENT]]", "");
    }
    if (text.includes("[[ACTION_OPEN_WHATSAPP]]")) {
        window.open("https://wa.me/905000000000", "_blank");
        return text.replace("[[ACTION_OPEN_WHATSAPP]]", "");
    }
    if (text.includes("[[ACTION_CALL_PHONE]]")) {
        window.location.href = "tel:+903120000000";
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
      replyText = handleServerAction(replyText);
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: replyText }] }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: "Hat oluştu. Lütfen kliniğimizi arayınız." }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Pointer-events-none: Kapalıyken arkadaki butonlara tıklanabilsin diye
    <div className="fixed right-6 bottom-24 z-[9999] flex flex-col items-end font-sans pointer-events-none md:bottom-10 md:right-8">
      
      {/* --- SOHBET PENCERESİ (BALON) --- */}
      <div
        className={`pointer-events-auto mb-6 flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] origin-bottom-right transform 
        ${isOpen 
            ? "scale-100 opacity-100 translate-y-0 w-[90vw] h-[600px] sm:w-[420px] sm:h-[650px]" // AÇIKKEN: Büyük ve Ferah
            : "scale-0 opacity-0 translate-y-20 w-0 h-0" // KAPALIYKEN: Yok
        }`}
      >
        {/* HEADER */}
        <div className="relative flex items-center justify-between bg-[var(--color-brand-navy)] p-5 text-white shadow-md z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-inner">
                   <Bot className="h-7 w-7 text-[var(--color-brand-gold)]" />
                </div>
                {/* Online Işığı */}
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-[var(--color-brand-navy)] animate-pulse"></span>
            </div>
            <div>
              <h3 className="text-base font-bold tracking-wide text-white leading-tight">
                Dr. Öztan Yasun
              </h3>
              <p className="text-[10px] text-[var(--color-brand-gold)] font-bold tracking-widest uppercase opacity-90">
                AI Asistan
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* MESAJ LİSTESİ */}
        <div className="flex-1 space-y-6 overflow-y-auto bg-[#F8FAFC] p-5 scrollbar-thin scrollbar-thumb-slate-300">
          {messages.map((msg, index) => (
            <div key={`${msg.role}-${index}`} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "model" && (
                 <div className="w-8 h-8 rounded-full bg-[var(--color-brand-navy)] flex items-center justify-center text-white mr-3 shrink-0 shadow-sm mt-auto mb-1">
                    <Sparkles size={14} />
                 </div>
              )}
              <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "bg-[var(--color-brand-navy)] text-white rounded-br-none shadow-blue-900/10" 
                    : "bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-slate-200/50"
                }`}>
                {msg.role === "model" ? (
                  <div className="markdown-content text-sm [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-inherit [&_a]:text-[var(--color-brand-gold)] [&_a]:underline [&_a]:font-bold">
                    <ReactMarkdown components={{ a: (props) => <a {...props} target="_blank" /> }}>{msg.parts[0]?.text || ""}</ReactMarkdown>
                  </div>
                ) : (
                  msg.parts[0]?.text
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="w-8 h-8 rounded-full bg-[var(--color-brand-navy)] flex items-center justify-center text-white mr-3 shrink-0 shadow-sm mt-auto mb-1">
                  <Sparkles size={14} />
               </div>
               <div className="flex items-center gap-2 rounded-2xl rounded-bl-none border border-slate-100 bg-white px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT ALANI */}
        <div className="border-t border-slate-100 bg-white p-4 pb-5">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/50 px-2 py-2 pr-2 shadow-inner focus-within:border-[var(--color-brand-navy)] focus-within:ring-1 focus-within:ring-[var(--color-brand-navy)]/20 transition-all">
            <input
              className="flex-1 bg-transparent px-4 text-sm text-slate-800 placeholder-slate-400 outline-none"
              placeholder="Bir soru sorun..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--color-brand-navy)] text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-[var(--color-brand-navy-light)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} className="ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- AÇMA BUTONU (FAB) - BOYUT SABİT --- */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`pointer-events-auto group flex items-center justify-center rounded-full shadow-[0_8px_40px_rgba(15,23,42,0.4)] transition-all duration-500 transform hover:scale-105 active:scale-95 border-2 border-white w-14 h-14
          ${isOpen 
            ? "bg-slate-100 text-slate-500 rotate-90 shadow-none" 
            : "bg-gradient-to-tr from-[var(--color-brand-navy)] to-[#2c3a57] text-[var(--color-brand-gold)]"
          }`}
        aria-label={isOpen ? "Sohbeti kapat" : "Asistanla konuş"}
      >
        {isOpen ? (
           <X size={28} />
        ) : (
           <div className="relative">
              <MessageSquare size={34} strokeWidth={2} className="fill-[var(--color-brand-navy)] stroke-[var(--color-brand-gold)]" />
              {/* Animasyonlu Yıldız (Sadece Kapalıyken Dikkat Çekmek İçin) */}
              <Sparkles size={16} className="absolute -top-1 -right-2 text-white animate-pulse" />
           </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
