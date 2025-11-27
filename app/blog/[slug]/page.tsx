import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { prisma } from "@/lib/db";
import ViewTracker from "./ViewTracker";
import { LuClock, LuCalendar, LuArrowLeft } from "react-icons/lu";

const BASE_URL = "https://www.raufdent.com"; // Burayı kendi domaininle değiştirirsin

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const getBlogBySlug = async (rawSlug: string) => {
  if (!rawSlug || rawSlug === "undefined") return null;
  try {
    const decodedSlug = decodeURIComponent(rawSlug);
    return await prisma.blogPost.findUnique({ where: { slug: decodedSlug } });
  } catch (error) {
    console.error("Blog fetch failed:", error);
    return null;
  }
};

const formatDate = (dateInput: string | Date) => {
  try {
    return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(typeof dateInput === "string" ? new Date(dateInput) : dateInput);
  } catch { return dateInput instanceof Date ? dateInput.toISOString() : dateInput; }
};

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: BlogPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog bulunamadı" };
  const url = `${BASE_URL}/blog/${blog.slug}`;
  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: "article",
      url,
      images: blog.coverImage ? [blog.coverImage] : undefined,
    },
    alternates: { canonical: url },
  };
};

const BlogDetailPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
    return null;
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      <ViewTracker slug={blog.slug} />

      {/* --- HERO / BAŞLIK ALANI --- */}
      <div className="bg-[var(--color-brand-gray)] pt-32 pb-16 border-b border-slate-200">
         <div className="container-custom max-w-4xl mx-auto">
            
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[var(--color-brand-navy)] transition-colors mb-8">
               <LuArrowLeft className="w-4 h-4" /> Tüm Yazılara Dön
            </Link>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[var(--color-brand-navy)] leading-tight mb-6">
               {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
               <div className="flex items-center gap-2">
                  <LuCalendar className="w-4 h-4 text-[var(--color-brand-gold)]" />
                  {formatDate(blog.publishedAt)}
               </div>
               <div className="flex items-center gap-2">
                  <LuClock className="w-4 h-4 text-[var(--color-brand-gold)]" />
                  {blog.readTime} dakika okuma
               </div>
            </div>
         </div>
      </div>

      {/* --- İÇERİK ALANI --- */}
      <div className="container-custom max-w-4xl mx-auto -mt-10 relative z-10">
         
         {/* Kapak Görseli */}
         {blog.coverImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl mb-12 bg-slate-100">
               <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
               />
            </div>
         )}

         {/* Markdown İçerik */}
         <article className="markdown-content bg-white p-0 md:p-0">
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
               {blog.content}
            </ReactMarkdown>
         </article>

         {/* Yazar Bilgisi / CTA Altı */}
         <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-[var(--color-brand-navy)] rounded-full text-white flex items-center justify-center font-heading font-bold text-xl">
                  ÖY
               </div>
               <div>
                  <p className="font-bold text-[var(--color-brand-navy)]">Dr. Öztan Yasun</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Diş Hekimi & Yazar</p>
               </div>
            </div>
            
            <Link href="/iletisim" className="px-6 py-3 bg-[var(--color-brand-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-brand-navy-light)] transition-colors shadow-lg shadow-blue-900/10">
               Randevu Al
            </Link>
         </div>

      </div>
    </main>
  );
};

export default BlogDetailPage;
