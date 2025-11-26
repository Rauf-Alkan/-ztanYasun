"use client";

import { useState, type TouchEvent } from "react";

const patientReviews = [
  {
    name: "Nuray Çağla Dere",
    treatment: "Porselen Lamina",
    comment:
      "Gülüş tasarımı sürecinde her adımı anlattılar, prova seanslarında bile konforumu düşündüler. Laminalarımın doğallığına çevremdekiler hayran kaldı.",
  },
  {
    name: "Kaan Erdoğdu",
    treatment: "İmplant",
    comment:
      "Kaybettiğim dişler için implant kararı almak zordu ama işlem hem hızlı hem de ağrısızdı. Operasyon sonrası ilgileri sayesinde iyileşme çok rahattı.",
  },
  {
    name: "Simay Taneli",
    treatment: "Şeffaf Plak",
    comment:
      "Şeffaf plak tedavisi boyunca her kontrol randevusu planlı ve dakikti. Plaklarımı teslim aldığım gün kullanım eğitimi verildi, sonuçtan çok memnunum.",
  },
  {
    name: "Hakan Aksoy",
    treatment: "Kanal Tedavisi",
    comment:
      "İlk muayeneden itibaren ağrısız bir süreç yaşadım. Klinik ortamı sakin, ekip ise son derece profesyonel ve güler yüzlüydü.",
  },
  {
    name: "Melisa Sarı",
    treatment: "Gülüş Tasarımı",
    comment:
      "Fotoğraf çekimlerinden dijital tasarıma kadar tüm süreç planlıydı. Taslak gülüşü onaylamadan tedaviye başlamadılar, sonuç tam istediğim gibi.",
  },
  {
    name: "Baran Kuşcu",
    treatment: "Diş Beyazlatma",
    comment:
      "Tek seansta belirgin bir beyazlık elde ettik. İşlem boyunca hassasiyetim kontrol edildi ve sonrasında bakım önerileriyle memnun kaldım.",
  },
];

const googleMapsUrl = "https://www.google.com/maps";

const PatientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const totalReviews = patientReviews.length;
  const swipeThreshold = 50;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const openGoogleReviews = () => {
    window.open(googleMapsUrl, "_blank");
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouchCurrentX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) {
      setTouchStartX(null);
      setTouchCurrentX(null);
      return;
    }

    const deltaX = touchCurrentX - touchStartX;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={`star-${index}`}
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="h-4 w-4 fill-current text-amber-400"
      >
        <path d="m9.049 2.927 1.902 3.864 4.265.62-3.083 3.004.728 4.247-3.812-2.005-3.812 2.005.728-4.247-3.083-3.004 4.265-.62 1.902-3.864Z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gradient-to-b from-[#FFF7EF] via-white to-[#FFF7EF] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#384B70]">DEĞİŞİM HİKAYELERİ</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">Dr. Öztan Yasun hakkında ne dediler?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Dr. Öztan Yasun'un planladığı tedaviler sonrası deneyimlerini paylaşan hastalarımızdan seçilmiş yorumlar.
          </p>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Önceki yorum"
            className="pointer-events-auto absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-lg transition hover:border-[#384B70] hover:text-[#384B70] sm:-left-2"
            onClick={handlePrev}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12 5-4 5 4 5"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Sonraki yorum"
            className="pointer-events-auto absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-lg transition hover:border-[#384B70] hover:text-[#384B70] sm:-right-2"
            onClick={handleNext}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8 5 4 5-4 5"
              />
            </svg>
          </button>

          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {patientReviews.map((review) => (
                <article
                  key={review.name}
                  className="w-full flex-shrink-0 px-1 sm:px-4"
                >
                  <div className="mx-auto max-w-4xl rounded-2xl border border-slate-100 bg-white p-10 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-base font-semibold text-[#384B70]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          className="h-6 w-6"
                        >
                          <circle
                            cx="10"
                            cy="7"
                            r="3"
                          />
                          <path d="M4 16c.8-2.4 3-4 6-4s5.2 1.6 6 4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900">{review.name}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{review.treatment}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-1">{renderStars()}</div>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{review.comment}</p>
                    <div className="mt-6 flex justify-end text-xs font-semibold uppercase tracking-[0.45em] text-slate-400">
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-100 px-4 py-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                          <svg
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="h-4 w-4"
                          >
                            <path
                              d="M18 10.2c0-.7-.1-1.4-.2-2.1H10v3.9h4.5c-.2 1-.8 1.9-1.6 2.5v2h2.6c1.5-1.4 2.5-3.5 2.5-6.3Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M10 18c2.3 0 4.2-.8 5.6-2.3l-2.6-2c-.7.5-1.6.9-3 .9-2.3 0-4.1-1.5-4.7-3.6H2.5v2.2A8 8 0 0 0 10 18Z"
                              fill="#34A853"
                            />
                            <path
                              d="M5.3 11c-.1-.5-.2-1-.2-1.5s.1-1 .2-1.5V5.8H2.5a8 8 0 0 0 0 7.4L5.3 11Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M10 4.7c1.2 0 2.3.4 3.1 1.1l2.3-2.3C14.1 2 12.3 1.2 10 1.2A8 8 0 0 0 2.5 5.8L5.3 8C5.9 5.8 7.7 4.7 10 4.7Z"
                              fill="#EA4335"
                            />
                          </svg>
                        </span>
                        Google
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {patientReviews.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`${index + 1}. yorumu göster`}
              className={`h-2 w-2 rounded-full transition ${index === currentIndex ? "w-6 bg-[#384B70]" : "bg-slate-200"}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-6 py-3 text-primary text-[#384B70] font-medium transition hover:bg-gray-50"
            onClick={openGoogleReviews}
          >
            Tüm Yorumları Google’da Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
