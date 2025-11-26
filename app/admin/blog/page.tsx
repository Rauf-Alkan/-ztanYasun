import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import BlogActions from "./_components/BlogActions";

const AdminBlogPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Admin</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Blog Yönetimi</h1>
            <p className="text-sm text-slate-500">Yeni blog yazıları ekleyin, düzenleyin ya da silin.</p>
          </div>
          <Link
            href="/admin/blog/yeni"
            className="inline-flex items-center justify-center rounded-full bg-[#384B70] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3D63]"
          >
            + Yeni Blog Ekle
          </Link>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">Kapak</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">Başlık</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">Tarih</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">Okuma</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">Görüntülenme</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-600">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-4 py-3">
                    <div className="h-12 w-16 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={64}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400">Yok</div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-800">{post.title}</td>
                  <td className="px-4 py-3 text-slate-500">{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</td>
                  <td className="px-4 py-3 text-slate-500">{post.readTime} dk</td>
                  <td className="px-4 py-3 text-slate-500">{post.views}</td>
                  <td className="px-4 py-3 text-right">
                    <BlogActions blogId={post.id} />
                  </td>
                </tr>
              ))}
              {posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-10 text-center text-sm text-slate-500"
                  >
                    Henüz blog yazısı bulunmuyor.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AdminBlogPage;
