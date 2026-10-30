import { Hero } from "@/components/Hero";
import { Calendar } from "@/components/Calendar";
import { JsonLd } from "@/components/JsonLd";
import { ServiceArea } from "@/components/ServiceArea";
import { templeJsonLd } from "@/lib/structuredData";

// Hidden for now: the <PranPratishtha /> and <Events upcomingOnly /> sections
// and templeEventsJsonLd. Restore from git history to bring them back.
export default function Home() {
  return (
    <>
      <JsonLd data={templeJsonLd()} />
      <main>
        <Hero />
        <Calendar />
        <ServiceArea />
      </main>
    </>
  );
}
