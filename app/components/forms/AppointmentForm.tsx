"use client";

import { FormEvent, useState } from "react";

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
  withFrame?: boolean;
};

const baseInputClasses =
  "w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-[inset_0_1px_0_rgba(15,23,42,0.08)] transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-[0_20px_40px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2";

const sanitizeInput = (value: string) => value.replace(/[<>]/g, "");

const AppointmentForm = ({ wrapperClassName, withFrame = true }: AppointmentFormProps) => {
  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [botField, setBotField] = useState("");

  const handleFieldChange =
    (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = sanitizeInput(event.target.value);
      setFormData((previous) => ({ ...previous, [field]: value }));
      if (fieldErrors[field]) {
        setFieldErrors((previous) => ({ ...previous, [field]: "" }));
      }
      if (status === "error") {
        setServerMessage("");
      }
    };

  const validateForm = () => {
    const errors: FieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      errors.name = "Lütfen adınızı girin.";
    }
    if (!trimmedPhone) {
      errors.phone = "Telefon numarası zorunludur.";
    } else if (!phoneRegex.test(trimmedPhone)) {
      errors.phone = "Lütfen geçerli bir telefon numarası girin.";
    }
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      errors.email = "Lütfen geçerli bir e-posta adresi girin.";
    }

    setFieldErrors(errors);
    return {
      isValid: Object.keys(errors).length === 0,
      trimmedName,
      trimmedPhone,
      trimmedEmail,
      trimmedMessage: formData.message.trim(),
    };
  };

  const resetForm = (resetStatus = true) => {
    setFormData(initialFormState);
    setFieldErrors({});
    setServerMessage("");
    if (resetStatus) {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    setServerMessage("");

    if (botField) {
      setStatus("error");
      setServerMessage("Gönderim gerçekleştirilemedi. Lütfen tekrar deneyin.");
      return;
    }

    const { isValid, trimmedName, trimmedPhone, trimmedEmail, trimmedMessage } = validateForm();

    if (!isValid) {
      setStatus("error");
      setServerMessage("Lütfen bilgilerinizi kontrol edin.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        setServerMessage("Teşekkürler! Randevu talebiniz bize ulaştı.");
        resetForm(false);
      } else {
        setStatus("error");
        setServerMessage(
          typeof data?.error === "string"
            ? data.error
            : "Sunucuya bağlanırken bir sorun oluştu. Lütfen tekrar deneyin.",
        );
      }
    } catch {
      setStatus("error");
      setServerMessage("Bir hata oluştu. Lütfen internet bağlantınızı kontrol edin.");
    }
  };

  const showSuccessState = status === "success";
  const serverMessageColor =
    status === "success" ? "text-green-600" : status === "error" ? "text-red-600" : "text-slate-600";
  const containerClasses = withFrame
    ? `rounded-[32px] border border-white/60 bg-white/90 p-5 shadow-[0_35px_120px_rgba(15,23,42,0.18)] backdrop-blur-lg md:p-8 ${wrapperClassName ?? ""}`
    : wrapperClassName ?? "";

  return (
    <div className={containerClasses}>
      {showSuccessState ? (
        <div
          className="space-y-6 text-center animate-success-alert"
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-900">Talebiniz Alındı</h3>
            <p className="text-base text-slate-600">
              Ekibimiz en kısa sürede sizinle iletişime geçecek. İsterseniz WhatsApp üzerinden de yazabilirsiniz.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#384B70] px-6 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF]"
            onClick={() => resetForm()}
          >
            Başka Talep Gönder
          </button>
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            value={botField}
            onChange={(event) => setBotField(event.target.value)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className={baseInputClasses}
                value={formData.name}
                onChange={handleFieldChange("name")}
              />
              {fieldErrors.name ? <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p> : null}
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className={baseInputClasses}
                value={formData.email}
                onChange={handleFieldChange("email")}
              />
              {fieldErrors.email ? <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p> : null}
            </div>
          </div>
          <div>
            <input
              type="tel"
              placeholder="Telefon Numaranız"
              className={baseInputClasses}
              value={formData.phone}
              onChange={handleFieldChange("phone")}
            />
            {fieldErrors.phone ? <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p> : null}
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Mesajınız"
              className={baseInputClasses}
              value={formData.message}
              onChange={handleFieldChange("message")}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Gönderiliyor..." : "Gönder"}
          </button>
          {serverMessage ? <p className={`text-sm ${serverMessageColor}`}>{serverMessage}</p> : null}
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
