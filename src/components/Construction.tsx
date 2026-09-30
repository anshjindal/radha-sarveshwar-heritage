"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Photo = { src: string; alt: string; width: number; height: number };

const milestones: { key: string; month: string; photos: Photo[] }[] = [
  {
    key: "renovationStart",
    month: "2026-01",
    photos: [
      {
        src: "/images/construction/renovation-interior.jpg",
        alt: "renovationPhotoAlt",
        width: 768,
        height: 1024,
      },
    ],
  },
  { key: "limitedOpening", month: "2026-03", photos: [] },
  {
    key: "murtiArrival",
    month: "2026-09",
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
];

export function Construction() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const monthYear = new Intl.DateTimeFormat(lang, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const formatMonth = (month: string) =>
    monthYear.format(new Date(`${month}-01T00:00:00Z`));
  const latest = milestones[milestones.length - 1];

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
          <p className="text-ink/75">{t("construction.body")}</p>
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
                  <time dateTime={m.month}>{formatMonth(m.month)}</time>
                  {m.key === latest.key ? (
                    <span className="rounded-full bg-maroon px-2 py-0.5 text-[0.65rem] tracking-[0.12em] text-cream">
                      {t("construction.latest")}
                    </span>
                  ) : null}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-maroon">
                  {t(`construction.milestones.${m.key}.title`)}
                </h3>
                <p className="mt-2 leading-7 text-ink/80">
                  {t(`construction.milestones.${m.key}.body`)}
                </p>
                {m.photos.length > 0 ? (
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {m.photos.map((photo) => (
                      <li
                        key={photo.src}
                        className="overflow-hidden rounded-2xl bg-white shadow-md"
                      >
                        <a
                          href={photo.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={photo.src}
                            alt={t(`construction.${photo.alt}`)}
                            width={photo.width}
                            height={photo.height}
                            className="h-auto w-full"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-maroon px-6 py-2.5 text-sm font-medium tracking-wide text-cream uppercase hover:bg-maroon-deep"
            >
              {t("construction.visitCta")}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
