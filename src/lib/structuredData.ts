import { calendarGroups } from "./calendar";
import { site } from "./site";

const templeId = `${site.url}/#temple`;
const websiteId = `${site.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.line1,
  addressLocality: site.address.city,
  addressRegion: site.address.regionCode,
  postalCode: site.address.postal,
  addressCountry: site.address.countryCode,
};

export function templeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HinduTemple", "PlaceOfWorship", "LocalBusiness"],
        "@id": templeId,
        name: site.name,
        alternateName: [
          "Radha Sarveshvar Heritage Centre",
          "Radha Sarveshwar Mandir",
          "RSHC Norval",
        ],
        description: site.description,
        slogan: site.slogan,
        url: site.url,
        image: [
          `${site.url}/images/mandir-exterior.jpg`,
          `${site.url}/og.jpg`,
          `${site.url}/images/logo.png`,
        ],
        logo: `${site.url}/images/logo.png`,
        email: site.email,
        telephone: site.phones.map((p) => p.tel),
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        hasMap: site.address.googleListingUrl,
        sameAs: [
          site.address.googleListingUrl,
          `https://www.google.com/search?kgmid=${encodeURIComponent(site.address.googleKnowledgeGraphId)}&q=${encodeURIComponent(site.name)}`,
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
        areaServed: [
          ...site.serviceArea.cities.map((name) => ({ "@type": "City", name })),
          ...site.serviceArea.regions.map((name) => ({
            "@type": "AdministrativeArea",
            name,
          })),
        ],
        keywords: site.keywords.join(", "),
        employee: {
          "@type": "Person",
          name: site.pandit.name,
          jobTitle: site.pandit.jobTitle,
          image: `${site.url}${site.pandit.image}`,
        },
        isAccessibleForFree: true,
        publicAccess: true,
        currenciesAccepted: "CAD",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phones[0].tel,
            contactType: "customer service",
            email: site.email,
            areaServed: "CA",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        inLanguage: ["en-CA", "hi", "fr", "pa", "ta", "te", "gu", "mr"],
        publisher: { "@id": templeId },
      },
    ],
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

export function festivalEventsJsonLd() {
  const location = {
    "@type": "HinduTemple",
    name: site.name,
    address: postalAddress,
  };
  const events = calendarGroups
    .flatMap((group) => group.events)
    .filter((event) => event.featured)
    .map((event) => ({
      "@type": "Event",
      name: `${event.en} at ${site.name}`,
      startDate: event.date,
      endDate: event.date,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      description: `${event.en} celebration at ${site.name}, a Hindu temple in Norval, Halton Hills near Brampton, Ontario. All devotees are welcome.`,
      image: [`${site.url}/images/calendar-2026.png`],
      isAccessibleForFree: true,
      location,
      organizer: { "@type": "Organization", name: site.name, url: site.url },
    }));
  return { "@context": "https://schema.org", "@graph": events };
}
