"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      setIsSubmitting(true);
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        setError("Geçersiz bilgiler");
        return;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Giriş sırasında bir hata oluştu");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-slate-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-semibold text-slate-700"
        >
          Şifre
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
        />
      </div>
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[#384B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E3D63] disabled:opacity-60"
      >
        {isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>
    </form>
  );
};

export default LoginForm;
