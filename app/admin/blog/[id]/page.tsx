import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import BlogForm from "../_components/BlogForm";

// 1. DÜZELTME: params bir Promise olarak tanımlanmalı
type AdminBlogDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

const safeGetBlog = async (blogId: number) => {
  try {
    return await prisma.blogPost.findUnique({
      where: { id: blogId },
    });
  } catch (error) {
    console.error("Blog fetch failed", error);
    return null;
  }
};

const EditBlogPage = async ({ params }: AdminBlogDetailProps) => {
  // 2. DÜZELTME: params await edilerek id alınmalı
  const { id } = await params;

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const blogId = Number(id);

  if (Number.isNaN(blogId)) {
    notFound();
  }

  const blog = await safeGetBlog(blogId);

  if (!blog) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-10 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Admin</p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">Blog bulunamadı</h1>
          <p className="mt-2 text-sm text-slate-500">Kayıt erişilemedi veya veritabanına bağlanılamadı.</p>
          <div className="mt-6 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#384B70] transition hover:border-[#384B70]">
            <Link href="/admin/blog">Blog listesine dön</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Blogu Düzenle</h1>
        <p className="text-sm text-slate-500">{blog.title}</p>

        <div className="mt-8">
          <BlogForm initialData={blog} />
        </div>
      </div>
    </main>
  );
};

export default EditBlogPage;
