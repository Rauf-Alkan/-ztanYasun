"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  treatment: string;
  comment: string;
  initials?: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("all");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        if (!response.ok) {
          throw new Error("Yorumlar alınamadı");
        }
        const data: Review[] = await response.json();
        setReviews(data);
      } catch {
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const uniqueTreatments = Array.from(new Set(reviews.map((review) => review.treatment)));
  const filteredReviews =
    selectedTreatment === "all"
      ? reviews
      : reviews.filter((review) => review.treatment === selectedTreatment);

  const renderReviews = () => {
    if (isLoading) {
      return (
        <div className="space-y-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="mx-auto max-w-4xl animate-pulse rounded-3xl border border-slate-100 bg-white/70 p-6"
            >
              <div className="mb-4 h-6 w-24 rounded-full bg-slate-200" />
              <div className="h-4 w-full rounded-full bg-slate-200" />
              <div className="mt-2 h-4 w-5/6 rounded-full bg-slate-200" />
              <div className="mt-2 h-4 w-2/3 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      );
    }

    if (!reviews.length) {
      return (
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white/80 p-8 text-center text-slate-500">
          Henüz yorum bulunmuyor.
        </div>
      );
    }

    return (
      <div className="space-y-8">
        {filteredReviews.map((review) => (
          <article
            key={`${review.name}-${review.treatment}`}
            className="mx-auto flex max-w-4xl flex-row items-stretch gap-6 rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-[0_6px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:flex-col md:p-10"
          >
            <div className="flex w-1/3 flex-col items-start justify-between border-r border-slate-100 pr-4 md:w-full md:border-r-0 md:border-b md:pr-0 md:pb-4">
              <div className="text-4xl text-[#D7C3A3] font-heading md:text-5xl">“</div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-sm font-semibold uppercase text-[#384B70]">
                  {review.initials ?? review.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{review.treatment}</p>
                </div>
              </div>
            </div>
            <p className="flex-1 text-base leading-relaxed text-slate-600 md:text-lg">{review.comment}</p>
          </article>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Hasta Yorumları</p>
          <h1 className="mt-3 font-heading text-3xl tracking-tight text-slate-900 md:text-5xl">
            Hastalarımızın gülüşlerine değer katıyoruz
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Modern tedavi yaklaşımlarımız, şeffaf iletişimimiz ve konforlu klinik ortamımızla yüzlerce hastamıza güven
            veren deneyimler sunuyoruz.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#384B70]">⭐ 4.9 / 5 — 180+ Google yorumu</p>
        </div>

        <div className="mt-8 grid gap-4 rounded-3xl bg-white/80 p-5 text-sm text-[#384B70] shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
            <p className="text-3xl font-semibold">4.9 / 5</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Genel puan</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
            <p className="text-3xl font-semibold">180+</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Google yorumu</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
            <p className="text-3xl font-semibold">30 dk</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Ortalama dönüş</p>
          </div>
        </div>

        {uniqueTreatments.length > 1 ? (
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedTreatment("all")}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selectedTreatment === "all" ? "border-[#384B70] bg-[#384B70] text-white" : "border-slate-200 text-slate-600 hover:border-[#384B70]/40 hover:text-[#384B70]"}`}
            >
              Tüm Yorumlar
            </button>
            {uniqueTreatments.map((treatment) => (
              <button
                key={treatment}
                type="button"
                onClick={() => setSelectedTreatment(treatment)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selectedTreatment === treatment ? "border-[#384B70] bg-[#384B70] text-white" : "border-slate-200 text-slate-600 hover:border-[#384B70]/40 hover:text-[#384B70]"}`}
              >
                {treatment}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-16">{renderReviews()}</div>
      </div>
    </section>
  );
};

export default Reviews;
