import type { Metadata } from "next";
import BlogGrid from "./_components/BlogGrid";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Dr. Öztan Yasun | Hekimden Tavsiyeler - Ankara",
  description: "Estetik diş hekimliği ve implantoloji alanında Dr. Öztan Yasun'un makaleleri ve güncel yaklaşımları.",
  openGraph: {
    title: "Dr. Öztan Yasun | Hekimden Tavsiyeler",
    description: "Estetik diş hekimliği ve implantoloji alanında Dr. Öztan Yasun'un makaleleri ve güncel yaklaşımları.",
    type: "website",
    url: "https://www.droztanyasun.com/blog",
  },
};

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  const blogs = posts.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    summary: post.summary,
    content: post.content,
    coverImage: post.coverImage,
    readTime: post.readTime,
    views: post.views,
    publishedAt: post.publishedAt.toISOString(),
  }));

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <BlogGrid blogs={blogs} />
      </div>
    </main>
  );
};

export default BlogPage;
