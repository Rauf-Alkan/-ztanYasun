import type { Metadata } from "next";
import BlogGrid from "./_components/BlogGrid";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Blog | Dr. Öztan Yasun",
  description: "Estetik diş hekimliği, implant ve ağız sağlığı hakkında uzman makaleleri.",
};

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  // Tüm postları çek
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  // Veriyi serileştir
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
    <main className="bg-white py-20 lg:py-28">
      <div className="container-custom">
        <BlogGrid blogs={blogs} />
      </div>
    </main>
  );
};

export default BlogPage;