"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
type BlogListItem = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string | null;
  readTime: number;
  views: number;
  publishedAt: string;
};

type BlogGridProps = {
  blogs: BlogListItem[];
};

const formatDate = (dateInput: string | Date) => {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(typeof dateInput === "string" ? new Date(dateInput) : dateInput);
  } catch {
    return dateInput instanceof Date ? dateInput.toISOString() : dateInput;
  }
};

const BlogGrid = ({ blogs }: BlogGridProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  const filteredBlogs = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return blogs;
    }

    const search = debouncedQuery.toLowerCase();
    return blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(search) || blog.summary.toLowerCase().includes(search);
    });
  }, [debouncedQuery, blogs]);

  return (
    <>
      <section className="px-4 py-16 text-slate-900">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#6B5A45]">Klinik Blog</p>
          <h1 className="font-heading text-4xl tracking-tight text-slate-900 md:text-5xl">Diş Sağlığı Blogu</h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Diş sağlığınız için faydalı bilgiler, tecrübeli tavsiyeler ve güncel gelişmeleri keşfedin. Makalelerimiz
            kliniğimizin uzmanları tarafından hazırlanır.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <label
            htmlFor="blog-search"
            className="sr-only"
          >
            Bloglarda ara
          </label>
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg shadow-black/5 sm:flex-row sm:items-center sm:gap-2 sm:rounded-[999px] sm:bg-white/90 sm:p-2.5">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m0-6.65a6.65 6.65 0 1 1-13.3 0 6.65 6.65 0 0 1 13.3 0Z"
                  />
                </svg>
              </span>
              <input
                id="blog-search"
                type="search"
                placeholder="Blog yazılarında ara..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-xl border border-slate-100 bg-white py-3 pl-11 pr-4 text-base text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/15 sm:border-none sm:bg-transparent sm:py-4 sm:pl-12 sm:pr-4 sm:focus:ring-0 sm:rounded-[999px]"
              />
            </div>
            <button
              type="button"
              onClick={() => setDebouncedQuery(query)}
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#384B70] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2E3D63] sm:w-auto sm:rounded-[999px] sm:px-8 sm:py-3"
            >
              Ara
            </button>
          </div>
        </div>
      </section>

      <section className="-mt-10 rounded-[36px] border border-slate-100 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] sm:p-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-200 bg-white/60 p-10 text-center text-slate-500">
              Aramanızla eşleşen sonuç bulunamadı.
            </div>
          ) : (
            filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7C3A3]"
                aria-label={`${blog.title} yazısını aç`}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_30px_110px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:shadow-[0_36px_140px_rgba(15,23,42,0.16)]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={blog.coverImage || "/hero.webp"}
                      alt={blog.title}
                      fill
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#384B70] shadow">
                      {formatDate(blog.publishedAt)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="text-xl font-semibold text-slate-900 leading-snug">{blog.title}</h2>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600 line-clamp-4">{blog.summary}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      <span className="inline-flex items-center gap-2 text-slate-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.512 10.193c.325-.37.325-1.016 0-1.386C15.98 7.318 12.616 4 10 4 7.384 4 4.02 7.318 2.488 8.807c-.325.37-.325 1.016 0 1.386C4.02 12.682 7.384 16 10 16c2.616 0 5.98-3.318 7.512-4.807Z"
                          />
                          <circle
                            cx="10"
                            cy="10"
                            r="2"
                          />
                        </svg>
                        {blog.views ?? 0}
                      </span>
                      <span className="text-slate-500">{blog.readTime || 2} dk</span>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#384B70] transition group-hover:gap-3">
                        Devamını Oku
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
