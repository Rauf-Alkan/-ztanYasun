import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/db";
import { blogPayloadSchema } from "@/lib/validators/blog";
import { generateUniqueSlug } from "@/lib/services/blog";
import { authOptions } from "@/lib/auth";

type BlogRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(request: NextRequest, context: BlogRouteContext) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  const { id } = await context.params;
  const blogId = Number(id);

  if (Number.isNaN(blogId)) {
    return NextResponse.json({ message: "Geçersiz blog ID" }, { status: 400 });
  }

  try {
    const json = await request.json();
    const parsed = blogPayloadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ message: "Geçersiz veri", issues: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;
    const slug = await generateUniqueSlug(data.title, blogId);

    const updated = await prisma.blogPost.update({
      where: { id: blogId },
      data: {
        title: data.title,
        slug,
        summary: data.summary,
        content: data.content,
        coverImage: data.coverImage || null,
        readTime: data.readTime ?? 2,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Blog update error", error);
    return NextResponse.json({ message: "Blog güncellenemedi" }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, context: BlogRouteContext) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  const { id } = await context.params;
  const blogId = Number(id);

  if (Number.isNaN(blogId)) {
    return NextResponse.json({ message: "Geçersiz blog ID" }, { status: 400 });
  }

  try {
    await prisma.blogPost.delete({
      where: { id: blogId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blog delete error", error);
    return NextResponse.json({ message: "Blog silinemedi" }, { status: 500 });
  }
}
