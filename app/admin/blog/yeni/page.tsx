import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import BlogForm from "../_components/BlogForm";
import { authOptions } from "@/lib/auth";

const NewBlogPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Yeni Blog Yazısı</h1>
        <p className="text-sm text-slate-500">Başlık, kısa özet ve içeriği doldurarak yeni bir blog ekleyin.</p>

        <div className="mt-8">
          <BlogForm />
        </div>
      </div>
    </main>
  );
};

export default NewBlogPage;
