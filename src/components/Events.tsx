"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";
import {
  formatEventDate,
  splitEvents,
  todayInToronto,
  type TempleEvent,
} from "@/lib/events";

const subscribe = () => () => {};

function EventCard({
  event,
  formatDate,
  past,
}: {
  event: TempleEvent;
  formatDate: (e: TempleEvent) => string;
  past?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <li
      className={`flex flex-col overflow-hidden rounded-2xl bg-cream shadow-md ${past ? "opacity-80" : ""}`}
    >
      <a
        href={event.poster.src}
        target="_blank"
        rel="noopener"
        className="block bg-maroon-deep"
        aria-label={`${t("events.viewPoster")}: ${event.title}`}
      >
        <Image
          src={event.poster.src}
          alt={event.poster.alt}
          width={event.poster.width}
          height={event.poster.height}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[2/3] w-full object-contain transition hover:scale-[1.02]"
        />
      </a>
      <div className="flex flex-1 flex-col px-5 py-4">
        <p className="text-xs tracking-[0.18em] text-gold uppercase">
          <time dateTime={event.startDate}>{formatDate(event)}</time>
        </p>
        <h3 className="mt-1 text-xl font-semibold text-maroon">
          {event.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-maroon/80">{event.time}</p>
        <p className="mt-3 text-sm text-ink/75">{event.description}</p>
        <a
          href={event.poster.src}
          target="_blank"
          rel="noopener"
          className="mt-4 self-start text-sm font-semibold text-maroon underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
        >
          {t("events.viewPoster")}
        </a>
      </div>
    </li>
  );
}

export function Events({
  as: Heading = "h2",
  upcomingOnly = false,
}: {
  as?: "h1" | "h2";
  upcomingOnly?: boolean;
}) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const today = useSyncExternalStore(subscribe, todayInToronto, () => null);
  const { upcoming, past } = splitEvents(today);

  const formatDate = (e: TempleEvent) => formatEventDate(e, lang);

  if (upcomingOnly && upcoming.length === 0) return null;

  return (
    <section
      id="events"
      className="bg-ivory py-16 md:py-24"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          {t("events.eyebrow")}
        </p>
        <Heading
          id="events-heading"
          className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl"
        >
          {upcomingOnly ? t("events.upcoming") : t("events.title")}
        </Heading>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          {t("events.body")}
        </p>

        {!upcomingOnly ? (
          <h2 className="mt-12 text-2xl font-semibold text-maroon">
            {t("events.upcoming")}
          </h2>
        ) : null}
        {upcoming.length > 0 ? (
          <ul
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${upcomingOnly ? "mt-12" : "mt-6"}`}
          >
            {upcoming.map((event) => (
              <EventCard
                key={event.slug}
                event={event}
                formatDate={formatDate}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-ink/75">{t("events.none")}</p>
        )}

        {upcomingOnly ? (
          <p className="mt-10 text-center">
            <Link
              href="/events"
              className="inline-flex items-center rounded-full border border-maroon/25 px-5 py-2 text-sm font-medium text-maroon hover:border-gold hover:text-gold"
            >
              {t("events.seeAll")}
            </Link>
          </p>
        ) : past.length > 0 ? (
          <>
            <h2 className="mt-16 text-2xl font-semibold text-maroon">
              {t("events.past")}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <EventCard
                  key={event.slug}
                  event={event}
                  formatDate={formatDate}
                  past
                />
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
}
