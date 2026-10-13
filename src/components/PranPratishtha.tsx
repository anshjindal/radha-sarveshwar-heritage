"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";
import {
  formatEventDate,
  lastDay,
  todayInToronto,
  type TempleEvent,
} from "@/lib/events";
import { site } from "@/lib/site";

const subscribe = () => () => {};

const shriji = {
  name: "Jagadguru Nimbarkacharya Shri Shyamsharandevacharya Shri “Shriji” Maharaj",
  image: "/images/shriji-maharaj.png",
  width: 430,
  height: 842,
};

export function PranPratishtha({ event }: { event: TempleEvent }) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const today = useSyncExternalStore(subscribe, todayInToronto, () => null);

  if (today !== null && lastDay(event) < today) return null;

  const dates = formatEventDate(event, lang);

  return (
    <section
      className="sunburst py-16 text-cream md:py-20"
      aria-labelledby="pran-pratishtha-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[minmax(0,320px)_1fr] md:px-8">
        <div className="mx-auto w-56 overflow-hidden rounded-[2rem] border-4 border-gold/70 shadow-2xl shadow-black/40 md:w-full">
          <Image
            src={shriji.image}
            alt={t("pranPratishtha.photoAlt", { name: shriji.name })}
            width={shriji.width}
            height={shriji.height}
            sizes="(min-width: 768px) 320px, 224px"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm tracking-[0.3em] text-gold-light uppercase">
            {t("pranPratishtha.eyebrow")}
          </p>
          <h2
            id="pran-pratishtha-heading"
            className="mt-3 text-3xl font-semibold leading-tight md:text-5xl"
          >
            {t("pranPratishtha.title")}
          </h2>
          <div className="gold-rule mx-auto my-6 max-w-xs md:mx-0" />
          <p className="text-sm tracking-[0.18em] text-cream/75 uppercase">
            {t("pranPratishtha.presence")}
          </p>
          <p className="mt-2 text-xl font-semibold text-gold-light md:text-2xl">
            {shriji.name}
          </p>
          <dl className="mt-6 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 px-5 py-3">
              <dt className="text-xs tracking-[0.18em] text-cream/70 uppercase">
                {t("pranPratishtha.datesLabel")}
              </dt>
              <dd className="mt-1 text-lg font-semibold">
                <time dateTime={event.startDate}>{dates}</time>
              </dd>
            </div>
            <div className="rounded-2xl bg-white/10 px-5 py-3">
              <dt className="text-xs tracking-[0.18em] text-cream/70 uppercase">
                {t("pranPratishtha.timingsLabel")}
              </dt>
              <dd className="mt-1 font-semibold">{event.time}</dd>
            </div>
          </dl>
          <p className="mt-6 max-w-2xl text-cream/90">
            {t("pranPratishtha.body")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/events"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-maroon-deep uppercase hover:bg-gold-light"
            >
              {t("pranPratishtha.postersCta")}
            </Link>
            <a
              href={site.address.directionsUrl}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-cream/50 px-6 py-3 text-sm font-semibold tracking-wide text-cream uppercase hover:border-gold hover:text-gold-light"
            >
              {t("pranPratishtha.directionsCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
