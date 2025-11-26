import { prisma } from "../prisma";
import slugify from "../utils/slugify";

export const generateUniqueSlug = async (title: string, excludeId?: number) => {
  const base = slugify(title);
  let slug = base;
  let counter = 1;

  while (true) {
    const existing = await prisma.blogPost.findFirst({
      where: excludeId
        ? {
            slug,
            NOT: {
              id: excludeId,
            },
          }
        : { slug },
      select: { id: true },
    });

    if (!existing) {
      return slug;
    }

    slug = `${base}-${counter}`;
    counter += 1;
  }
};
