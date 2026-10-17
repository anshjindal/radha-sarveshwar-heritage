import { Hero } from "@/components/Hero";
import { Events } from "@/components/Events";
import { Calendar } from "@/components/Calendar";
import { JsonLd } from "@/components/JsonLd";
import { PranPratishtha } from "@/components/PranPratishtha";
import { ServiceArea } from "@/components/ServiceArea";
import { events } from "@/lib/events";
import { templeJsonLd } from "@/lib/structuredData";

const pranPratishtha = events.find(
  (e) => e.slug === "grand-pran-pratishtha-2026",
);

export default function Home() {
  return (
    <>
      <JsonLd data={templeJsonLd()} />
      <main>
        <Hero />
        {pranPratishtha ? <PranPratishtha event={pranPratishtha} /> : null}
        <Events upcomingOnly />
        <Calendar />
        <ServiceArea />
      </main>
    </>
  );
}
