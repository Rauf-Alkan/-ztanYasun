"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuSearch, LuClock, LuEye, LuArrowRight } from "react-icons/lu";

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
    if (!debouncedQuery.trim()) return blogs;
    const search = debouncedQuery.toLowerCase();
    return blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(search) || blog.summary.toLowerCase().includes(search);
    });
  }, [debouncedQuery, blogs]);

  return (
    <>
      {/* --- ÜST BİLGİ ALANI --- */}
      <section className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[var(--color-brand-gold)] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Klinik Kütüphanesi
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-[var(--color-brand-navy)] mb-6">
            Diş Hekimliği Rehberi
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Ağız ve diş sağlığı hakkında merak ettiğiniz her şey, güncel tedavi yöntemleri ve uzman tavsiyeleri.
          </p>

          {/* Arama Çubuğu */}
          <div className="mt-8 relative max-w-lg mx-auto">
             <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                <LuSearch className="w-5 h-5" />
             </div>
             <input
                type="text"
                placeholder="Tedavi veya konu ara..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-sm focus:border-[var(--color-brand-navy)] focus:ring-1 focus:ring-[var(--color-brand-navy)] outline-none transition-all placeholder:text-slate-400 text-slate-700 bg-white"
             />
          </div>
      </section>

      {/* --- BLOG LİSTESİ --- */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
               <p className="text-slate-500 text-lg">Aradığınız kriterlere uygun yazı bulunamadı.</p>
               <button onClick={() => setQuery("")} className="mt-4 text-[var(--color-brand-navy)] font-bold hover:underline">
                  Tüm yazıları göster
               </button>
            </div>
          ) : (
            filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-[var(--color-brand-gold)]/50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Görsel */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                   <Image
                      src={blog.coverImage || "/hero.webp"}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[var(--color-brand-navy)] uppercase tracking-wider shadow-sm">
                      {formatDate(blog.publishedAt)}
                   </div>
                </div>

                {/* İçerik */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                   <h2 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-3 leading-tight group-hover:text-[var(--color-brand-navy-light)] transition-colors">
                      {blog.title}
                   </h2>
                   <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {blog.summary}
                   </p>
                   
                   {/* Alt Bilgi */}
                   <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                         <span className="flex items-center gap-1">
                            <LuClock className="w-3 h-3" /> {blog.readTime} dk
                         </span>
                         <span className="flex items-center gap-1">
                            <LuEye className="w-3 h-3" /> {blog.views}
                         </span>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] flex items-center justify-center group-hover:bg-[var(--color-brand-navy)] group-hover:text-white transition-all">
                         <LuArrowRight className="w-4 h-4" />
                      </span>
                   </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default BlogGrid;