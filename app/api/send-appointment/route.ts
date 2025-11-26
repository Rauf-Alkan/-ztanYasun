import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitize = (value: unknown) => {
  if (typeof value !== "string") return "-";
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });
};

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const mailFrom = process.env.RESEND_MAIL_FROM;
    const mailTo = process.env.RESEND_MAIL_TO;

    if (!resendApiKey) {
      return NextResponse.json(
        { success: false, error: "E-posta servisi yapılandırılmadı." },
        { status: 500 },
      );
    }

    if (!mailFrom || !mailTo) {
      return NextResponse.json(
        { success: false, error: "E-posta gönderim bilgileri eksik." },
        { status: 500 },
      );
    }

    const { name = "", email = "", phone = "", message = "" } = await request.json();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone) {
      return NextResponse.json(
        { success: false, error: "Lütfen zorunlu alanları doldurun." },
        { status: 400 },
      );
    }

    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Lütfen geçerli bir e-posta adresi girin." },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);
    const recipients = mailTo
      .split(",")
      .map((address) => address.trim())
      .filter(Boolean);

    if (recipients.length === 0) {
      return NextResponse.json(
        { success: false, error: "E-posta alıcıları tanımlanmadı." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: mailFrom,
      to: recipients,
      subject: "Yeni Hızlı Randevu Talebi",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2 style="color: #1d4ed8;">Yeni Hızlı Randevu Talebi</h2>
          <table style="border-collapse: collapse; width: 100%; margin-top: 12px;">
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Ad Soyad</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${sanitize(trimmedName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Email</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${sanitize(trimmedEmail)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Telefon</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${sanitize(trimmedPhone)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Mesaj</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${sanitize(message)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Randevu talebi gönderilirken bir hata oluştu.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
