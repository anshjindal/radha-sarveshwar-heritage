export type TempleEvent = {
  slug: string;
  title: string;
  /** ISO dates (YYYY-MM-DD), Toronto local time; endDate only for multi-day events */
  startDate: string;
  endDate?: string;
  time: string;
  description: string;
  poster: { src: string; width: number; height: number; alt: string };
};

export const events: TempleEvent[] = [
  {
    slug: "inauguration-2026",
    title: "Radha Sarveshwar Heritage Centre Inauguration",
    startDate: "2026-10-14",
    endDate: "2026-10-19",
    time: "Daily 9:00 AM – 12:00 PM · Sandhya Aarti 6:00 PM",
    description:
      "Akhil Bhartiya Jagadguru Nimbarkacharya Peeth cordially invites you to the inauguration of the centre, in the gracious presence of Jagadguru Nimbarkacharya Shri Shyamsharandevacharya Shri “Shriji” Maharaj.",
    poster: {
      src: "/images/events/inauguration-2026-invitation.png",
      width: 818,
      height: 1024,
      alt: "Invitation poster for the Radha Sarveshwar Heritage Centre inauguration, 14–19 October 2026",
    },
  },
  {
    slug: "pran-pratishtha-2026",
    title: "Pran Pratishtha of the Deities",
    startDate: "2026-10-14",
    endDate: "2026-10-19",
    time: "Daily 9:00 AM – 12:00 PM · Sandhya Aarti 6:00 PM",
    description:
      "Our devoted jajmaans perform the Pran Pratishtha of Ganesh ji, Radha Krishna, Lakshmi Narayan, Ram Darbar, Durga Mata, Shiv Parivaar, Hanuman ji and more during the inauguration week.",
    poster: {
      src: "/images/events/inauguration-2026-jajmaans.png",
      width: 682,
      height: 1024,
      alt: "Poster listing the jajmaans for the Pran Pratishtha of each deity at the inauguration",
    },
  },
  {
    slug: "kalash-yatra-2026",
    title: "Kalash Yatra",
    startDate: "2026-10-14",
    time: "9:00 AM",
    description:
      "A Kalash Yatra procession opens the inauguration, in the presence of Jagadguru Nimbarkacharya Shri Shyamsharandevacharya Shri “Shriji” Maharaj and Pandit Mahesh Acharya.",
    poster: {
      src: "/images/events/kalash-yatra-2026.png",
      width: 682,
      height: 1024,
      alt: "Kalash Yatra poster, 14 October 9:00 AM at Radha Sarveshwar Heritage Centre",
    },
  },
  {
    slug: "jagran-2026",
    title: "Jagran",
    startDate: "2026-10-17",
    time: "10:00 PM – 4:00 AM",
    description:
      "An all-night Jagran in the presence of Shri “Shriji” Maharaj. Jajmaan: Anshveer, Sarika & Jasvinder Family.",
    poster: {
      src: "/images/events/jagran-2026.png",
      width: 682,
      height: 1024,
      alt: "Jagran poster, 17 October 10:00 PM to 4:00 AM at Radha Sarveshwar Heritage Centre",
    },
  },
  {
    slug: "janmashtami-2026",
    title: "Janmashtami Celebration",
    startDate: "2026-09-03",
    time: "10:00 PM – 1:00 AM",
    description:
      "An enchanting evening of festivities celebrating the birth of Lord Krishna.",
    poster: {
      src: "/images/events/janmashtami-2026.png",
      width: 682,
      height: 1024,
      alt: "Janmashtami celebration poster, 3 September, 10 PM to 1 AM",
    },
  },
];

export function todayInToronto() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
  }).format(new Date());
}

export const lastDay = (e: TempleEvent) => e.endDate ?? e.startDate;

/** Avoids Intl.formatRange, whose separator spacing differs between Node and browsers (hydration mismatch). */
export function formatEventDate(e: TempleEvent, lang: string) {
  const options = { timeZone: "UTC" } as const;
  const dayMonth = new Intl.DateTimeFormat(lang, {
    ...options,
    day: "numeric",
    month: "long",
  });
  const full = new Intl.DateTimeFormat(lang, {
    ...options,
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const start = new Date(`${e.startDate}T00:00:00Z`);
  if (!e.endDate) return full.format(start);
  return `${dayMonth.format(start)} – ${full.format(new Date(`${e.endDate}T00:00:00Z`))}`;
}

export function splitEvents(today: string | null) {
  const upcoming = events
    .filter((e) => today === null || lastDay(e) >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const past = events
    .filter((e) => today !== null && lastDay(e) < today)
    .sort((a, b) => b.startDate.localeCompare(a.startDate));
  return { upcoming, past };
}
