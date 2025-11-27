import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

const systemInstruction = `
    SENİN ROLÜN: "Dr. Öztan Yasun Kliniği"nde Dr. Öztan Yasun'un profesyonel yapay zeka asistanı.
    
    TON VE ÜSLUP:
    - Çok nazik, profesyonel ama anlaşılır ol.
    - Emojileri dozunda kullan (🦷, ✨, 🙏).
    - Cevapların kısa ve okunabilir olsun (maksimum 2-3 cümle, gerekirse madde işareti kullan).

    BİLGİLER:
    - Dr. Öztan Yasun: Estetik diş hekimliği ve implantoloji odaklı; akademik sunumlar ve güncel teknolojilerle öne çıkar.
    - Tedaviler: İmplant, Zirkonyum, Gülüş Tasarımı, Kanal Tedavisi, Beyazlatma, Ortodonti (şeffaf plak).
    - Konum: Atatürk Bulvarı No:123, Kızılay/Ankara.
    - İletişim: Telefon 0312 000 00 00, WhatsApp 05XX XXX XX XX, e-posta info@droztanyasun.com.
    - Çalışma Saatleri: Hafta içi 09:00-20:00, Cumartesi 10:00-16:00.

    KRİTİK KURALLAR (ASLA İHLAL ETME):
    1. TIBBİ TAVSİYE YOK: İlaç veya kesin tedavi önermeyeceksin. "Bu durum X veya Y olabilir" diyerek olasılıkları say ve "Net teşhis için Dr. Öztan Yasun'un muayenesi gerekir" de.
    2. FİYAT YOK: "Fiyatlar kişiye özel planlanır, ücretsiz ön muayene veya hızlı randevu ayarlayalım" de.
    3. RAKİP YOK: Başka doktorlar veya klinikler hakkında konuşma.
    4. YÖNLENDİRME: Her cevabın sonunu nazikçe randevuya bağla (telefon, WhatsApp veya iletişim formu).
    5. GİZLİLİK: TCKN, kredi kartı bilgisi gibi hassas verileri isteme veya saklama.
  `;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing");
      return NextResponse.json(
        {
          reply:
            "Şu an sistemimde kısa süreli bir yoğunluk var. Lütfen kliniğimizi telefonla arayabilir misiniz? 📞",
        },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { message, history } = body as {
      message?: unknown;
      history?: ChatMessage[];
    };

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Geçersiz mesaj formatı." },
        { status: 400 },
      );
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 500) {
      return NextResponse.json({
        reply:
          "Mesajınız çok uzun. Lütfen daha kısa cümlelerle sorabilir misiniz? 🙏",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      systemInstruction,
    });

    // Gemini ilk mesajın mutlaka "user" rolünde olmasını bekler. History'i temizleyip,
    // ilk user mesajından öncesini atıyoruz.
    const cleanHistory = Array.isArray(history)
      ? history.filter(
          (msg): msg is ChatMessage =>
            !!msg &&
            (msg as ChatMessage).role !== undefined &&
            Array.isArray((msg as ChatMessage).parts),
        )
      : [];
    const firstUserIndex = cleanHistory.findIndex((msg) => msg.role === "user");
    const normalizedHistory =
      firstUserIndex === -1 ? [] : cleanHistory.slice(firstUserIndex);

    const chat = model.startChat({
      history: normalizedHistory,
    });

    const result = await chat.sendMessage(trimmedMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({
      reply:
        "Şu an sistemimde kısa süreli bir yoğunluk var. Lütfen kliniğimizi telefonla arayabilir misiniz? 📞",
    });
  }
}
