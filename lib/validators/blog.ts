import { z } from "zod";

export const blogPayloadSchema = z.object({
  title: z.string().min(5).max(120),
  summary: z.string().min(20).max(320),
  content: z.string().min(50),
  coverImage: z.string().url().optional().or(z.literal("")),
  readTime: z.number().optional(),
});

export type BlogPayload = z.infer<typeof blogPayloadSchema>;
