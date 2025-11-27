import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Frontend'den gelen mesaj tipi
type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

// Sistem Talimatları (Dr. Öztan Yasun Kimliği)
const systemInstruction = `
    SENİN ROLÜN: "Dr. Öztan Yasun Kliniği"nde Dr. Öztan Yasun'un profesyonel yapay zeka asistanı.
    
    TON VE ÜSLUP:
    - Çok nazik, profesyonel ama anlaşılır ol.
    - Emojileri dozunda kullan (🦷, ✨, 🙏).
    - Cevapların kısa ve okunabilir olsun (maksimum 2-3 cümle).

    BİLGİLER:
    - Dr. Öztan Yasun: Estetik diş hekimliği ve implantoloji odaklı.
    - Tedaviler: İmplant, Zirkonyum, Gülüş Tasarımı, Kanal Tedavisi, Beyazlatma.
    - Konum: Atatürk Bulvarı No:123, Kızılay/Ankara.
    - Çalışma Saatleri: Hafta içi 09:00-20:00, Cumartesi 10:00-16:00.

    KRİTİK KURALLAR:
    1. TIBBİ TAVSİYE YOK: "Bu durum X olabilir" de ama kesin tanı koyma. "Muayene gerekir" de.
    2. FİYAT YOK: "Fiyatlar kişiye özel planlanır, ücretsiz ön muayene ayarlayalım" de.
    3. YÖNLENDİRME: Her cevabı randevuya bağla.
  `;

export async function POST(req: Request) {
  try {
    // 1. API Key Kontrolü
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "Sistem bağlantı hatası. Lütfen telefonla ulaşınız." },
        { status: 500 }
      );
    }

    // 2. Body Parse
    const body = await req.json();
    const { message, history } = body as {
      message?: unknown;
      history?: ChatMessage[];
    };

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Geçersiz mesaj." },
        { status: 400 }
      );
    }

    // 3. Yeni SDK Başlatma
    const ai = new GoogleGenAI({ apiKey });

    // 4. Geçmişi Temizleme (Formatlama)
    // Yeni SDK { role: string, parts: [{ text: string }] } formatını kabul eder.
    const cleanHistory = Array.isArray(history)
      ? history
          .filter(
            (msg) =>
              msg &&
              (msg.role === "user" || msg.role === "model") &&
              Array.isArray(msg.parts)
          )
          .map((msg) => ({
            role: msg.role,
            parts: [{ text: msg.parts[0].text }], // Tek parça metin garantisi
          }))
      : [];

    // 5. Sohbeti Başlatma (Yeni Yöntem)
    // Dökümana göre 'gemini-2.5-flash' kullanılabilir ama 404 alırsan 'gemini-1.5-flash' yap.
    const chat = ai.chats.create({
      model: "gemini-2.5-flash", // Garantili çalışan model (Erişimin varsa 2.5 yap)
      config: {
        systemInstruction: systemInstruction, // Sistem talimatı buraya (config içine)
        temperature: 0.7,
      },
      history: cleanHistory,
    });

    // 6. Mesaj Gönderme (Yeni Yöntem: sendMessage)
    // Dokümanda: await chat.sendMessage({ message: "..." })
    const result = await chat.sendMessage({
      message: message.trim(),
    });

    // 7. Cevabı Alma
    const responseText = result.text;

    if (!responseText) {
      throw new Error("Boş cevap döndü.");
    }

    return NextResponse.json({ reply: responseText });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({
      reply:
        "Şu an yoğunluk nedeniyle cevap veremiyorum. Lütfen kliniğimizi telefonla arayınız. 📞",
    });
  }
}