"use client";

import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function ServiceArea() {
  const { t } = useTranslation();

  return (
    <section className="bg-cream py-16 md:py-20" aria-labelledby="service-area-heading">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="text-sm tracking-[0.28em] text-gold uppercase">
          {t("serviceArea.eyebrow")}
        </p>
        <h2
          id="service-area-heading"
          className="mt-2 text-2xl font-semibold text-maroon md:text-4xl"
        >
          {t("serviceArea.title")}
        </h2>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="leading-7 text-ink/80">{t("serviceArea.body")}</p>
        <a
          href={site.address.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-maroon px-6 py-2.5 text-sm font-medium tracking-wide text-cream uppercase hover:bg-maroon-deep"
        >
          {t("serviceArea.directionsCta")}
        </a>
      </div>
    </section>
  );
}
