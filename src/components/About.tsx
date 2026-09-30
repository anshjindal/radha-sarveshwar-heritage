"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-ivory py-16 md:py-24" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-sm tracking-[0.28em] text-gold uppercase">
              {t("about.eyebrow")}
            </p>
            <h1
              id="about-heading"
              className="mt-2 text-3xl font-semibold text-maroon md:text-5xl"
            >
              {t("about.title")}
            </h1>
            <div className="gold-rule my-6 max-w-xs" />
            <p className="text-base leading-8 text-ink/80">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-8 text-ink/80">{t("about.p2")}</p>
            <p className="mt-6 text-sm font-semibold tracking-wide text-maroon uppercase">
              {t("common.hoursLabel")}: {site.hours.time}
            </p>
            <p className="mt-2 text-sm text-ink/70">
              {site.address.line1}, {site.address.line2}
            </p>
          </div>
          <Image
            src="/images/mandir-exterior.jpg"
            alt={t("about.imageAlt")}
            width={683}
            height={512}
            className="h-[380px] w-full rounded-2xl object-cover shadow-lg md:h-[460px]"
          />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24" aria-labelledby="pandit-heading">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[2fr_3fr] md:px-8">
          <Image
            src="/images/pandit-mahesh-kumar-acharya.jpg"
            alt={t("about.pandit.imageAlt")}
            width={377}
            height={583}
            className="mx-auto h-auto w-full max-w-xs rounded-2xl shadow-lg"
          />
          <div>
            <p className="text-sm tracking-[0.28em] text-gold uppercase">
              {t("about.pandit.eyebrow")}
            </p>
            <h2
              id="pandit-heading"
              className="mt-2 text-2xl font-semibold text-maroon md:text-4xl"
            >
              {t("about.pandit.name")}
            </h2>
            <div className="gold-rule my-6 max-w-xs" />
            <p className="text-base leading-8 text-ink/80">
              {t("about.pandit.body")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
