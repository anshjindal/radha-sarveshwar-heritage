"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

type Photo = { src: string; alt: string; width: number; height: number };

/** `date` is YYYY, YYYY-MM, or YYYY-MM-DD to show the exact day. */
const milestones: { key: string; date: string; photos: Photo[] }[] = [
  { key: "visionBegins", date: "2022", photos: [] },
  {
    key: "siteVisit",
    date: "2025-07-14",
    photos: [
      {
        src: "/images/construction/site-visit.jpg",
        alt: "siteVisitPhotoAlt",
        width: 472,
        height: 837,
      },
    ],
  },
  {
    key: "renovationStart",
    date: "2026-01",
    photos: [
      {
        src: "/images/construction/renovation-interior.jpg",
        alt: "renovationPhotoAlt",
        width: 768,
        height: 1024,
      },
    ],
  },
  {
    key: "limitedOpening",
    date: "2026-03",
    photos: [
      {
        src: "/images/construction/puja-begins.jpg",
        alt: "pujaPhotoAlt",
        width: 587,
        height: 1024,
      },
    ],
  },
  {
    key: "murtiArrival",
    date: "2026-09-22",
    photos: [
      {
        src: "/images/construction/murti-arrival-1.png",
        alt: "photo1Alt",
        width: 1024,
        height: 768,
      },
      {
        src: "/images/construction/murti-arrival-2.png",
        alt: "photo2Alt",
        width: 1024,
        height: 768,
      },
    ],
  },
  {
    key: "parkingWork",
    date: "2026-10-01",
    photos: [
      {
        src: "/images/construction/parking-work-1.jpg",
        alt: "parkingPhoto1Alt",
        width: 1024,
        height: 768,
      },
      {
        src: "/images/construction/parking-work-2.jpg",
        alt: "parkingPhoto2Alt",
        width: 1024,
        height: 768,
      },
    ],
  },
];

export function Construction() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const monthYear = new Intl.DateTimeFormat(lang, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const dayMonthYear = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const formatDate = (date: string) =>
    date.length === 4
      ? date
      : date.length > 7
        ? dayMonthYear.format(new Date(`${date}T00:00:00Z`))
        : monthYear.format(new Date(`${date}-01T00:00:00Z`));
  const paragraphs = (key: string) => t(key).split("\n\n");
  const latest = milestones[milestones.length - 1];
  const [enlarged, setEnlarged] = useState<Photo | null>(null);

  useEffect(() => {
    if (!enlarged) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEnlarged(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [enlarged]);

  return (
    <>
      <section
        className="bg-ivory pt-16 pb-12 md:pt-24"
        aria-labelledby="construction-heading"
      >
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-sm tracking-[0.28em] text-gold uppercase">
            {t("construction.eyebrow")}
          </p>
          <h1
            id="construction-heading"
            className="mt-2 text-3xl font-semibold text-maroon md:text-5xl"
          >
            {t("construction.title")}
          </h1>
          <div className="gold-rule mx-auto my-6 max-w-xs" />
          <div className="space-y-4 text-ink/75">
            {paragraphs("construction.body").map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-ivory pb-16 md:pb-24"
        aria-labelledby="construction-timeline-heading"
      >
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2
            id="construction-timeline-heading"
            className="text-2xl font-semibold text-maroon md:text-3xl"
          >
            {t("construction.timelineTitle")}
          </h2>
          <ol className="mt-8 border-l-2 border-gold/40">
            {milestones.map((m) => (
              <li key={m.key} className="relative pb-10 pl-8 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute top-1.5 -left-[9px] h-4 w-4 rounded-full border-2 border-ivory ${m.key === latest.key ? "bg-maroon" : "bg-gold"}`}
                />
                <p className="flex flex-wrap items-center gap-2 text-sm tracking-[0.18em] text-gold uppercase">
                  <time dateTime={m.date}>{formatDate(m.date)}</time>
                  {m.key === latest.key ? (
                    <span className="rounded-full bg-maroon px-2 py-0.5 text-[0.65rem] tracking-[0.12em] text-cream">
                      {t("construction.latest")}
                    </span>
                  ) : null}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-maroon">
                  {t(`construction.milestones.${m.key}.title`)}
                </h3>
                <div className="mt-2 space-y-3 leading-7 text-ink/80">
                  {paragraphs(`construction.milestones.${m.key}.body`).map(
                    (text) => (
                      <p key={text}>{text}</p>
                    ),
                  )}
                </div>
                {m.photos.length > 0 ? (
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {m.photos.map((photo) => (
                      <li
                        key={photo.src}
                        className="overflow-hidden rounded-2xl bg-white shadow-md"
                      >
                        <a
                          href={photo.src}
                          onClick={(e) => {
                            e.preventDefault();
                            setEnlarged(photo);
                          }}
                          className="group relative block aspect-square cursor-zoom-in"
                        >
                          <Image
                            src={photo.src}
                            alt={t(`construction.${photo.alt}`)}
                            fill
                            sizes="(min-width: 768px) 360px, (min-width: 640px) 45vw, 90vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="bg-cream py-16 md:py-20"
        aria-labelledby="construction-closing-heading"
      >
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2
            id="construction-closing-heading"
            className="text-2xl font-semibold text-maroon md:text-3xl"
          >
            {t("construction.closingTitle")}
          </h2>
          <div className="gold-rule mx-auto my-6 max-w-xs" />
          <div className="space-y-4 leading-7 text-ink/80">
            <p>{t("construction.closingP1")}</p>
            <p>
              <Trans
                i18nKey="construction.closingP2"
                components={{ b: <strong className="text-maroon" /> }}
              />
            </p>
          </div>
          <p className="mt-6 text-xl font-semibold text-maroon">
            {t("construction.closingTagline")}
          </p>
          <p className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-maroon px-6 py-2.5 text-sm font-medium tracking-wide text-cream uppercase hover:bg-maroon-deep"
            >
              {t("construction.visitCta")}
            </Link>
          </p>
        </div>
      </section>

      {enlarged ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(`construction.${enlarged.alt}`)}
          onClick={() => setEnlarged(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4"
        >
          <Image
            src={enlarged.src}
            alt={t(`construction.${enlarged.alt}`)}
            width={enlarged.width}
            height={enlarged.height}
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
          />
          <button
            type="button"
            onClick={() => setEnlarged(null)}
            aria-label="Close"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white hover:bg-white/30"
          >
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
