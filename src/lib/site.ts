export const site = {
  name: "Radha Sarveshwar Heritage Centre",
  shortName: "RSHC",
  blessing: "राधे राधे",
  devanagari: "राधा सर्वेश्वर हेरिटेज सेन्टर",
  tagline: "A sacred home for Sanatan Dharma in Norval",
  description:
    "Radha Sarveshwar Heritage Centre is a Hindu temple and cultural centre in Norval, Ontario — a place of darshan, seva, and heritage for devotees across the Greater Toronto Area.",
  url: "https://radha-sarveshwar-heritage.vercel.app",
  address: {
    line1: "9386 Tenth Line North",
    line2: "Norval, ON L0P 1K0",
    city: "Norval",
    region: "Ontario",
    postal: "L0P 1K0",
    country: "Canada",
    mapsQuery: "9386 Tenth Line North, Norval, ON L0P 1K0",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=9386+Tenth+Line+North,+Norval,+ON+L0P+1K0",
    embedUrl:
      "https://www.google.com/maps?q=9386+Tenth+Line+North,+Norval,+ON+L0P+1K0&output=embed",
  },
  phones: [
    {
      id: "main",
      label: "Main",
      display: "647-448-4975",
      tel: "+16474484975",
      href: "tel:+16474484975",
      sms: "sms:+16474484975",
    },
    {
      id: "temple",
      label: "Temple",
      display: "647-710-9584",
      tel: "+16477109584",
      href: "tel:+16477109584",
      sms: "sms:+16477109584",
    },
  ],
  hours: [
    { label: "Temple open", time: "7:00 AM – 9:00 PM" },
    { label: "Morning aarti", time: "7:00 AM" },
    { label: "Evening aarti", time: "7:00 PM" },
  ],
  hoursNote: "Timings may change on festival days. Please call to confirm.",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#worship", label: "Worship" },
  { href: "#festivals", label: "Festivals" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
] as const;
