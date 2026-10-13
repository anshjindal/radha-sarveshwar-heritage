import { Events } from "@/components/Events";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, templeEventsJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Events & Programs",
  description:
    "Upcoming events, pujas and celebrations at Radha Sarveshwar Heritage Centre, a Hindu temple in Norval, Halton Hills near Brampton, Ontario — including the October 2026 inauguration and Pran Pratishtha.",
  path: "/events",
  image: {
    url: "/images/events/inauguration-2026-invitation.png",
    width: 818,
    height: 1024,
  },
});

export default function EventsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Events & Programs", "/events")} />
      <JsonLd data={templeEventsJsonLd()} />
      <Events as="h1" />
    </main>
  );
}
