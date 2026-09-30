import { Hero } from "@/components/Hero";
import { Festivals } from "@/components/Festivals";
import { Calendar } from "@/components/Calendar";
import { JsonLd } from "@/components/JsonLd";
import { ServiceArea } from "@/components/ServiceArea";
import { templeJsonLd } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <JsonLd data={templeJsonLd()} />
      <main>
        <Hero />
        <Festivals />
        <Calendar />
        <ServiceArea />
      </main>
    </>
  );
}
