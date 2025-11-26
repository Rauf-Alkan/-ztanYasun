import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import LoginForm from "./LoginForm";

const AdminLoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/admin/blog");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-16">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Kontrol Paneline Giriş</h1>
        <p className="text-sm text-slate-500">Yetkili email ve şifre bilgilerinizi kullanın.</p>

        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default AdminLoginPage;
