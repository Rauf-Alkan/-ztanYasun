"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MessageCircle, Send, X } from "lucide-react";
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
        text: "**Merhaba!** 👋 \n\nBen Dr. Öztan Yasun'un dijital asistanıyım. İmplant, estetik gülüş tasarımı veya randevu hakkında merak ettiklerinizi bana sorabilirsiniz.",
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
    // requestAnimationFrame render bitimini bekler, daha pürüzsüz kaydırır
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

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
          history: historyPayload.map((m) => ({
            role: m.role,
            parts: m.parts,
          })),
        }),
      });

      const data = await response.json();
      const replyText =
        typeof data?.reply === "string"
          ? data.reply
          : "Bağlantı hatası oluştu. Lütfen tekrar deneyin.";

      if (!response.ok) {
        throw new Error(data?.error || "Chat request failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: replyText }] },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [
            { text: "Bağlantı hatası oluştu. Lütfen tekrar deneyin." },
          ],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-5 bottom-24 z-[9999] flex flex-col items-end font-sans transition-all duration-300 md:bottom-6 md:right-28">
      <div
        className={`mb-4 flex h-[500px] max-h-[80vh] w-[90vw] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 origin-bottom-right transform sm:w-[380px] ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] p-4 text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <h3 className="text-base font-bold tracking-wide">
                Dr. Öztan Yasun Asistanı
              </h3>
              <p className="flex items-center gap-1.5 text-xs text-blue-50/90">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                Çevrimiçi | Yapay Zeka
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 transition-colors hover:bg-white/20"
            aria-label="Sohbeti kapat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mesaj Alanı */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-[#f8fafc] p-4">
          {messages.map((msg, index) => (
            <div
              key={`${msg.role}-${index}`}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "rounded-br-none bg-[#0ea5e9] text-white"
                    : "rounded-bl-none border border-gray-100 bg-white text-gray-700"
                }`}
              >
                {msg.role === "model" ? (
                  /* DÜZELTME BURADA: ReactMarkdown'ı saran bir div oluşturduk ve classları ona verdik */
                  <div className="markdown-content text-sm leading-relaxed [&_*]:text-inherit [&_a]:text-sky-600 [&_a]:underline [&_li]:my-0.5 [&_ol]:my-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-1 [&_strong]:text-gray-900 [&_strong]:font-semibold [&_ul]:my-1 [&_ul]:list-disc [&_ul]:pl-4">
                    <ReactMarkdown
                      components={{
                        a: (props) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                      }}
                    >
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
              <div className="flex items-center gap-2 rounded-2xl rounded-bl-none border border-gray-100 bg-white p-4 shadow-sm">
                <Loader2 className="h-4 w-4 animate-spin text-[#0ea5e9]" />
                <span className="text-xs font-medium text-gray-400">
                  Dr. Öztan'ın asistanı yazıyor...
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Alanı */}
        <div className="border-t border-gray-100 bg-white p-4">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 shadow-inner transition-all focus-within:border-[#0ea5e9] focus-within:ring-2 focus-within:ring-blue-100">
            <input
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              placeholder="Bir soru sorun..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="rounded-full bg-[#0ea5e9] p-2 text-white shadow-md transition-all hover:bg-[#0284c7] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Mesaj gönder"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Butonu */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-16 w-16 items-center justify-center rounded-full shadow-[0_4px_14px_rgba(14,165,233,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen
            ? "rotate-90 bg-gray-100 text-gray-600"
            : "bg-gradient-to-tr from-[#0ea5e9] to-[#0284c7] text-white"
        }`}
        aria-label={isOpen ? "Sohbeti kapat" : "Sohbeti aç"}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
      </button>
    </div>
  );
};

export default ChatWidget;
