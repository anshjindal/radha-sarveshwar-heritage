export type CalendarEvent = {
  date: string;
  en: string;
  hi: string;
  featured?: boolean;
};

export type CalendarGroup = {
  key: "pitruPaksha" | "navratri" | "kartik" | "december";
  events: CalendarEvent[];
};

export const calendarYear = 2026;

export const calendarContact = {
  en: "Mahesh Kumar Acharya",
  hi: "महेश कुमार आचार्य",
};

export const calendarPoster = "/images/calendar-2026.png";

export const calendarGroups: CalendarGroup[] = [
  {
    key: "pitruPaksha",
    events: [
      { date: "2026-09-29", en: "Chaturthi Shradh & 4th Shradh", hi: "चतुर्थी श्राद्ध एवं चौथा श्राद्ध" },
      { date: "2026-09-30", en: "Panchami Shradh & 5th Shradh", hi: "पंचमी श्राद्ध एवं पाँचवाँ श्राद्ध" },
      { date: "2026-10-01", en: "Shashthi Shradh & 6th Shradh", hi: "षष्ठी श्राद्ध एवं छठा श्राद्ध" },
      { date: "2026-10-02", en: "Saptami Shradh & Mahalaxmi Vrat", hi: "सप्तमी श्राद्ध एवं महालक्ष्मी व्रत" },
      { date: "2026-10-03", en: "Ashtami Shradh", hi: "अष्टमी श्राद्ध" },
      { date: "2026-10-04", en: "Navami Shradh", hi: "नवमी श्राद्ध" },
      { date: "2026-10-05", en: "Dashami Shradh", hi: "दशमी श्राद्ध" },
      { date: "2026-10-06", en: "Ekadashi & Dwadashi Shradh", hi: "एकादशी एवं द्वादशी श्राद्ध" },
      { date: "2026-10-07", en: "Dwadashi Shradh", hi: "द्वादशी श्राद्ध" },
      { date: "2026-10-08", en: "Chaturdashi Shradh", hi: "चतुर्दशी श्राद्ध" },
      { date: "2026-10-09", en: "Pitri Visarjan", hi: "पितृ विसर्जन" },
      { date: "2026-10-10", en: "Amavasya", hi: "अमावस्या" },
    ],
  },
  {
    key: "navratri",
    events: [
      { date: "2026-10-11", en: "Pratipada Shradh & Navratri Begins", hi: "प्रतिपदा श्राद्ध एवं नवरात्रि प्रारंभ", featured: true },
      { date: "2026-10-12", en: "Dwitiya", hi: "द्वितीया" },
      { date: "2026-10-13", en: "Tritiya", hi: "तृतीया" },
      { date: "2026-10-14", en: "Chaturthi", hi: "चतुर्थी" },
      { date: "2026-10-15", en: "Panchami", hi: "पंचमी" },
      { date: "2026-10-16", en: "Shashthi", hi: "षष्ठी" },
      { date: "2026-10-17", en: "Saptami", hi: "सप्तमी" },
      { date: "2026-10-18", en: "Ashtami", hi: "अष्टमी" },
      { date: "2026-10-19", en: "Navami", hi: "नवमी" },
      { date: "2026-10-20", en: "Dashami & Vijay Dashami", hi: "दशमी एवं विजय दशमी", featured: true },
      { date: "2026-10-21", en: "Ekadashi", hi: "एकादशी" },
      { date: "2026-10-25", en: "Sharad Purnima", hi: "शरद पूर्णिमा", featured: true },
    ],
  },
  {
    key: "kartik",
    events: [
      { date: "2026-10-28", en: "Karva Chauth", hi: "करवा चौथ", featured: true },
      { date: "2026-11-01", en: "Ahoi Ashtami", hi: "अहोई अष्टमी" },
      { date: "2026-11-04", en: "Rama Ekadashi", hi: "रमा एकादशी" },
      { date: "2026-11-06", en: "Dhanteras", hi: "धनतेरस", featured: true },
      { date: "2026-11-07", en: "Choti Diwali", hi: "छोटी दीपावली" },
      { date: "2026-11-08", en: "Diwali & Mahalaxmi Puja", hi: "दीपावली एवं महालक्ष्मी पूजा", featured: true },
      { date: "2026-11-10", en: "Bhai Dooj", hi: "भाई दूज", featured: true },
      { date: "2026-11-17", en: "Gopashtami", hi: "गोपाष्टमी" },
      { date: "2026-11-20", en: "Devutthan Ekadashi", hi: "देवोत्थान एकादशी" },
      { date: "2026-11-21", en: "Tulsi Vivah", hi: "तुलसी विवाह", featured: true },
      { date: "2026-11-24", en: "Purnima", hi: "पूर्णिमा" },
    ],
  },
  {
    key: "december",
    events: [
      { date: "2026-12-04", en: "Ekadashi", hi: "एकादशी" },
      { date: "2026-12-08", en: "Amavasya", hi: "अमावस्या" },
      { date: "2026-12-15", en: "Paush Sankranti", hi: "पौष संक्रांति", featured: true },
      { date: "2026-12-23", en: "Purnima", hi: "पूर्णिमा" },
    ],
  },
];
