"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// Eğer veritabanı tiplerin farklıysa burayı güncelle veya any geçici çözüm olabilir
import type { BlogPost } from "@prisma/client"; 

type BlogFormProps = {
  initialData?: BlogPost;
};

const BlogForm = ({ initialData }: BlogFormProps) => {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [summary, setSummary] = useState(initialData?.summary ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");
  const [readTime, setReadTime] = useState(initialData?.readTime ?? 2);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resim önizlemesi için basit bir kontrol
  // URL geçerli bir resim uzantısıyla bitiyor mu veya unsplash linki mi?
  const isValidImageUrl = (url: string) => {
    if (!url) return false;
    return url.match(/^https?:\/\/.+/) ? true : false;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      const payload = {
        title,
        summary,
        content,
        coverImage,
        readTime,
      };

      const response = await fetch(initialData ? `/api/admin/blog/${initialData.id}` : "/api/admin/blog", {
        method: initialData ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("İstek başarısız");
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Kaydetme sırasında bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Başlık Alanı */}
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-semibold text-slate-700">
          Başlık
        </label>
        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
          placeholder="Blog yazısının başlığı..."
        />
      </div>

      {/* Özet Alanı */}
      <div className="space-y-2">
        <label htmlFor="summary" className="text-sm font-semibold text-slate-700">
          Kısa Özet
        </label>
        <textarea
          id="summary"
          required
          rows={3}
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
          placeholder="Listeleme sayfasında görünecek kısa açıklama..."
        />
      </div>

      {/* İçerik Alanı */}
      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-semibold text-slate-700">
          İçerik (Markdown desteklenir)
        </label>
        <textarea
          id="content"
          required
          rows={10}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="w-full font-mono rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
          placeholder="# Başlık\n\nBuraya içeriğinizi yazın..."
        />
      </div>

      {/* Görsel URL ve Önizleme Alanı */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="coverImage" className="text-sm font-semibold text-slate-700">
              Kapak Görsel URL
            </label>
            <input
              id="coverImage"
              type="url"
              value={coverImage}
              onChange={(event) => setCoverImage(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          {/* --- BURASI YENİ: CANLI ÖNİZLEME --- */}
          {isValidImageUrl(coverImage) ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img
                src={coverImage}
                alt="Önizleme"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Eğer resim yüklenemezse burası çalışır
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute bottom-2 right-2 rounded-md bg-black/50 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
                Önizleme
              </div>
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400">
              Görsel önizlemesi burada görünecek
            </div>
          )}
        </div>

        {/* Okuma Süresi */}
        <div className="space-y-2">
          <label htmlFor="readTime" className="text-sm font-semibold text-slate-700">
            Okuma Süresi (dk)
          </label>
          <input
            id="readTime"
            type="number"
            min={1}
            max={60}
            value={readTime}
            onChange={(event) => {
              const parsed = Number(event.target.value);
              setReadTime(Number.isNaN(parsed) || parsed < 1 ? 1 : parsed);
            }}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[#384B70] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#384B70]/20 transition hover:bg-[#2E3D63] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            İşleniyor...
          </span>
        ) : initialData ? (
          "Blog Yazısını Güncelle"
        ) : (
          "Blog Yazısını Oluştur"
        )}
      </button>
    </form>
  );
};

export default BlogForm;