import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(_: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const updated = await prisma.blogPost.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
      select: {
        views: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("View increment failed", error);
    return NextResponse.json({ message: "Güncellenemedi" }, { status: 500 });
  }
}
