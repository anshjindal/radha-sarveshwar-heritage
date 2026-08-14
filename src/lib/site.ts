export const site = {
  name: "Radha Sarveshwar Heritage Centre",
  shortName: "RSHC",
  slogan: "The world is one family",
  tagline: "Hindu temple and heritage centre in Norval, Ontario",
  description:
    "Radha Sarveshwar Heritage Centre is a Hindu temple and cultural centre in Norval, Ontario. Open daily 7:00 AM – 8:00 PM.",
  url: "https://radha-sarveshwar-heritage.vercel.app",
  email: "radhasarveshwarheritage@outlook.com",
  hours: {
    label: "Open daily",
    time: "7:00 AM – 8:00 PM",
    schema: "Mo-Su 07:00-20:00",
  },
  address: {
    line1: "9386 Tenth Line North",
    line2: "Norval, ON L0P 1K0",
    city: "Norval",
    region: "Ontario",
    postal: "L0P 1K0",
    country: "Canada",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=9386+Tenth+Line+North,+Norval,+ON+L0P+1K0",
    embedUrl:
      "https://www.google.com/maps?q=9386+Tenth+Line+North,+Norval,+ON+L0P+1K0&output=embed",
  },
  phones: [
    {
      id: "main",
      display: "647-448-4975",
      tel: "+16474484975",
      href: "tel:+16474484975",
    },
    {
      id: "temple",
      display: "647-710-9584",
      tel: "+16477109584",
      href: "tel:+16477109584",
    },
  ],
} as const;

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#festivals", label: "Festivals" },
  { href: "#contact", label: "Contact" },
] as const;
