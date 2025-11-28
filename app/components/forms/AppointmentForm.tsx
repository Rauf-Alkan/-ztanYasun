"use client";

import { FormEvent, useState } from "react";

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+ ]+$/;

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";
type FieldName = keyof typeof initialFormState;
type FieldErrors = Partial<Record<FieldName, string>>;

type AppointmentFormProps = {
  wrapperClassName?: string;
};

// YENİ INPUT STİLİ: Daha kurumsal, keskin hatlar, focus olunca Lacivert border.
const baseInputClasses =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-[var(--color-brand-navy)] placeholder:text-slate-400 shadow-sm transition-all duration-200 focus:border-[var(--color-brand-navy)] focus:ring-2 focus:ring-[var(--color-brand-navy)] outline-none";

const sanitizeInput = (value: string) => value.replace(/[<>]/g, "");

const AppointmentForm = ({ wrapperClassName }: AppointmentFormProps) => {
  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [botField, setBotField] = useState("");

  const handleFieldChange =
    (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = sanitizeInput(event.target.value);
      setFormData((previous) => ({ ...previous, [field]: value }));
      if (fieldErrors[field]) setFieldErrors((previous) => ({ ...previous, [field]: "" }));
      if (status === "error") setServerMessage("");
    };

  const validateForm = () => {
    const errors: FieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) errors.name = "Adınızı giriniz.";
    if (!trimmedPhone) errors.phone = "Telefon numarası zorunludur.";
    else if (!phoneRegex.test(trimmedPhone)) errors.phone = "Geçerli bir numara giriniz.";
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) errors.email = "Geçerli bir e-posta giriniz.";

    setFieldErrors(errors);
    return {
      isValid: Object.keys(errors).length === 0,
      trimmedName,
      trimmedPhone,
      trimmedEmail,
      trimmedMessage: formData.message.trim(),
    };
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setFieldErrors({});
    setServerMessage("");
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setServerMessage("");

    if (botField) { // Honeypot trap
      setStatus("error");
      return;
    }

    const { isValid, trimmedName, trimmedPhone, trimmedEmail, trimmedMessage } = validateForm();

    if (!isValid) {
      setStatus("error");
      setServerMessage("Lütfen işaretli alanları kontrol ediniz.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setServerMessage("Randevu talebiniz başarıyla alındı.");
      } else {
        setStatus("error");
        setServerMessage(data?.error || "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

  // SUCCESS STATE (BAŞARILI GÖNDERİM)
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-[var(--color-brand-navy)] mb-2">Talebiniz Alındı</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Ekibimiz en kısa sürede {formData.phone} numarasından size dönüş yapacaktır.
        </p>
        <button
          onClick={resetForm}
          className="text-sm font-bold text-[var(--color-brand-gold)] hover:underline"
        >
          Yeni Form Gönder
        </button>
      </div>
    );
  }

  // FORM RENDER
  return (
    <form className={`space-y-4 ${wrapperClassName || ""}`} onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input type="text" name="company" className="hidden" value={botField} onChange={(e) => setBotField(e.target.value)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Adınız Soyadınız *"
            className={`${baseInputClasses} ${fieldErrors.name ? "border-red-500 bg-red-50" : ""}`}
            value={formData.name}
            onChange={handleFieldChange("name")}
          />
          {fieldErrors.name && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.name}</span>}
        </div>
        <div>
           <input
            type="tel"
            placeholder="Telefon Numaranız *"
            className={`${baseInputClasses} ${fieldErrors.phone ? "border-red-500 bg-red-50" : ""}`}
            value={formData.phone}
            onChange={handleFieldChange("phone")}
          />
          {fieldErrors.phone && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.phone}</span>}
        </div>
      </div>

      <div>
        <input
          type="email"
          placeholder="E-posta Adresiniz"
          className={baseInputClasses}
          value={formData.email}
          onChange={handleFieldChange("email")}
        />
        {fieldErrors.email && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.email}</span>}
      </div>

      <div>
        <textarea
          rows={4}
          placeholder="Şikayetiniz veya Talebiniz..."
          className={baseInputClasses}
          value={formData.message}
          onChange={handleFieldChange("message")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto inline-flex justify-center rounded-xl bg-[var(--color-brand-navy)] px-6 py-3 text-white font-medium text-lg shadow-lg shadow-[var(--color-brand-navy)]/20 transition-all hover:bg-[var(--color-brand-navy-light)] hover:-translate-y-[2px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Gönderiliyor..." : "Randevu Talebi Oluştur"}
      </button>

      {serverMessage && status === "error" && (
        <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm text-center">
          {serverMessage}
        </div>
      )}
    </form>
  );
};

export default AppointmentForm;
