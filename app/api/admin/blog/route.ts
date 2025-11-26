import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/db";
import { blogPayloadSchema } from "@/lib/validators/blog";
import { generateUniqueSlug } from "@/lib/services/blog";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  try {
    const blogs = await prisma.blogPost.findMany({
      orderBy: { publishedAt: "desc" },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Blog list error", error);
    return NextResponse.json({ message: "Bloglar getirilemedi" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  try {
    const json = await request.json();
    const parsed = blogPayloadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ message: "Geçersiz veri", issues: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    const slug = await generateUniqueSlug(data.title);

    const created = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug,
        summary: data.summary,
        content: data.content,
        coverImage: data.coverImage || null,
        readTime: data.readTime ?? 2,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Blog create error", error);
    return NextResponse.json({ message: "Blog kaydedilemedi" }, { status: 500 });
  }
}
