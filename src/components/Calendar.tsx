"use client";

import { useTranslation } from "react-i18next";
import {
  calendarContact,
  calendarGroups,
  calendarPoster,
  calendarYear,
} from "@/lib/calendar";

function toUtcDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`);
}

export function Calendar({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const useHindi = lang === "hi";

  const dayMonth = new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
  const weekday = new Intl.DateTimeFormat(lang, {
    weekday: "long",
    timeZone: "UTC",
  });

  return (
    <section
      id="calendar"
      className="bg-ivory py-16 md:py-24"
      aria-labelledby="calendar-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          {t("calendar.eyebrow")}
        </p>
        <Heading
          id="calendar-heading"
          className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl"
        >
          {t("calendar.title", { year: calendarYear })}
        </Heading>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          {t("calendar.body")}
        </p>
        <p className="mt-6 text-center">
          <a
            href={calendarPoster}
            download={`radha-sarveshwar-calendar-${calendarYear}.png`}
            className="inline-flex items-center rounded-full border border-maroon/25 px-5 py-2 text-sm font-medium text-maroon hover:border-gold hover:text-gold"
          >
            {t("calendar.downloadPoster")}
          </a>
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {calendarGroups.map((group) => {
            const first = toUtcDate(group.events[0].date);
            const last = toUtcDate(group.events[group.events.length - 1].date);
            const headingId = `calendar-${group.key}`;

            return (
              <article
                key={group.key}
                className="overflow-hidden rounded-2xl bg-cream shadow-md"
                aria-labelledby={headingId}
              >
                <header className="flex flex-wrap items-baseline justify-between gap-2 bg-maroon px-5 py-3 text-cream">
                  <h3 id={headingId} className="text-xl font-semibold">
                    {t(`calendar.groups.${group.key}`)}
                  </h3>
                  <p className="text-sm text-gold-light">
                    {dayMonth.format(first)} – {dayMonth.format(last)}
                  </p>
                </header>
                <table className="w-full text-left text-sm">
                  <thead className="text-xs tracking-[0.14em] text-maroon/70 uppercase">
                    <tr className="border-b border-gold/30">
                      <th scope="col" className="px-5 py-2 font-medium">
                        {t("calendar.date")}
                      </th>
                      <th scope="col" className="px-2 py-2 font-medium">
                        {t("calendar.day")}
                      </th>
                      <th scope="col" className="px-5 py-2 font-medium">
                        {t("calendar.occasion")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.events.map((event) => {
                      const date = toUtcDate(event.date);
                      return (
                        <tr
                          key={event.date}
                          className="border-b border-gold/15 last:border-0"
                        >
                          <td className="px-5 py-2 font-semibold whitespace-nowrap text-maroon">
                            <time dateTime={event.date}>
                              {dayMonth.format(date)}
                            </time>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-ink/70">
                            {weekday.format(date)}
                          </td>
                          <td className="px-5 py-2 text-ink">
                            {useHindi ? event.hi : event.en}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-ink/80">
          {t("calendar.contact")}{" "}
          <span className="font-semibold text-maroon">
            {useHindi ? calendarContact.hi : calendarContact.en}
          </span>
        </p>
      </div>
    </section>
  );
}
