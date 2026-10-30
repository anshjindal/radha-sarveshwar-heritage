import { calendarGroups } from "./calendar";
import { events, lastDay } from "./events";
import { site } from "./site";

const templeId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  addressRegion: site.address.regionCode,
  addressCountry: site.address.countryCode,
};

export function templeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NGO", "Organization"],
        "@id": templeId,
        name: site.name,
        alternateName: [
          "Radha Sarveshvar Heritage Centre",
        ],
        description: site.description,
        slogan: site.slogan,
        url: site.url,
        image: [
          `${site.url}/og.jpg`,
          `${site.url}/images/logo.png`,
        ],
        logo: `${site.url}/images/logo.png`,
        email: site.email,
        telephone: site.phones.map((p) => p.tel),
        address: postalAddress,
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
        nonprofitStatus: "NonprofitType",
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
    "@type": "Place",
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
      description: `${event.en} celebration at ${site.name}, a non-profit for Sanatan Dharma in Ontario.`,
      image: [`${site.url}/images/calendar-2026.png`],
      isAccessibleForFree: true,
      location,
      organizer: { "@type": "Organization", name: site.name, url: site.url },
    }));
  return { "@context": "https://schema.org", "@graph": events };
}

export function templeEventsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": events.map((event) => ({
      "@type": "Event",
      name: `${event.title} at ${site.name}`,
      startDate: event.startDate,
      endDate: lastDay(event),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      description: `${event.description} ${event.time}.`,
      image: [`${site.url}${event.poster.src}`],
      isAccessibleForFree: true,
      location: {
        "@type": "Place",
        name: site.name,
        address: postalAddress,
      },
      organizer: { "@type": "Organization", name: site.name, url: site.url },
    })),
  };
}
