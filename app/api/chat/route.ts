import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Frontend'den gelen mesaj tipi
type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

// --- SÜPER ZEKA SİSTEM TALİMATLARI ---
const systemInstruction = `
    KİMLİK VE VİZYON:
    Sen Ankara'nın en prestijli diş kliniği olan "Dr. Öztan Yasun Kliniği"nin "Kıdemli Hasta Danışmanı"sın. Adın: "Asistan Öztan".
    Amacın sadece sohbet etmek değil, ziyaretçiyi güvende hissettirmek ve **kliniğe davet etmektir (Randevu/İletişim).**

    TON VE ÜSLUP (PREMIUM HİSSİYAT):
    - Dilin: Çok nazik, seçkin, profesyonel ama sıcakkanlı.
    - Yasaklar: Asla "Bilmiyorum", "Doktora sorun" gibi kısa ve soğuk cevaplar verme.
    - Emojiler: Dozunda ve şık kullan (✨, 🦷, 🙏).
    - Hitap: "Siz" dilini koru.

    BİLGİ BANKASI (EZBERLE):
    - Hekim: Dr. Öztan Yasun (Estetik Diş Hekimliği ve İmplantoloji Uzmanı).
    - Konum: Ankara, Kızılay (Atatürk Bulvarı No:123).
    - Tedaviler: İmplant (Ağrısız/Dikişsiz), Zirkonyum Kaplama, Hollywood Smile, Şeffaf Plak (Telsiz tedavi).
    - Fiyat Politikası: "Telefonda net fiyat vermek yanıltıcı olabilir. Ancak Dr. Öztan Bey ile ücretsiz ön görüşme planlayabiliriz."

    GİZLİ EYLEM KOMUTLARI (BU KISIM KRİTİK):
    Kullanıcının niyetini anladığında, cevabının EN SONUNA şu kodları ekle. Bu kodlar web sitesinde otomatik işlem yapacak:
    
    1. [[ACTION_OPEN_APPOINTMENT]] 
       -> Ne zaman kullanılır? Kullanıcı randevu istiyorsa, fiyat soruyorsa (muayeneye çağırmak için) veya "nasıl ulaşırım" diyorsa.
    
    2. [[ACTION_OPEN_WHATSAPP]]
       -> Ne zaman kullanılır? Kullanıcı "fotoğraf atsam bakar mısınız?", "yurtdışındayım" veya "WhatsApp var mı?" derse.
    
    3. [[ACTION_CALL_PHONE]]
       -> Ne zaman kullanılır? Kullanıcı "acil", "çok ağrım var" veya "telefonda görüşmek istiyorum" derse.

    ÖRNEK SENARYOLAR:
    - Kullanıcı: "İmplant fiyatı ne kadar?"
      Cevap: "İmplant tedavilerinde maliyet, kemik yapısına ve implant markasına göre değişmektedir. Sizi yanıltmamak adına, Dr. Öztan Yasun ile ücretsiz bir ön görüşme ve röntgen analizi planlayalım mı? Size özel bütçeyi o zaman netleştirebiliriz. ✨ [[ACTION_OPEN_APPOINTMENT]]"

    - Kullanıcı: "Dişim çok ağrıyor."
      Cevap: "Çok geçmiş olsun, ağrınızı dindirmek bizim önceliğimiz. Dr. Öztan Bey'in durumu acilen değerlendirmesi için sizi hemen telefonla görüştürebilirim veya acil randevu oluşturabilirim. [[ACTION_CALL_PHONE]]"

    - Kullanıcı: "Yurtdışından geleceğim."
      Cevap: "Harika! Birçok yurtdışı hastamız gibi size de 'Sağlık Turizmi' kapsamında transfer ve konaklama desteği sunabiliriz. Detayları ve röntgeninizi WhatsApp üzerinden asistanlarımıza iletmek ister misiniz? [[ACTION_OPEN_WHATSAPP]]"
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

    // 4. Geçmişi Temizleme
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
            parts: [{ text: msg.parts[0].text }],
          }))
      : [];

    // 5. Sohbeti Başlatma
    // NOT: 404 hatası almamak için "gemini-1.5-flash" kullanıyoruz.
    // Eğer Google hesabın 2.5'e yetkiliyse "gemini-2.5-flash" yapabilirsin.
    const chat = ai.chats.create({
      model: "gemini-1.5-flash", 
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5, // Daha kararlı ve kuralcı olması için düşürdük
      },
      history: cleanHistory,
    });

    // 6. Mesaj Gönderme
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
        "Şu an yoğunluk nedeniyle cevap veremiyorum. Lütfen kliniğimizi telefonla arayınız. 📞 [[ACTION_CALL_PHONE]]",
    });
  }
}