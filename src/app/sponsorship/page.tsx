import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Sponsor a Puja or Festival",
  description: `Sponsor a festival, bhog, bhandara or murti shringar at our Hindu temple in Halton Hills near Brampton, in your family's name or a loved one's memory.`,
  path: "/sponsorship",
});

const cards = [
  { key: "festival", icon: "🎊" },
  { key: "bhog", icon: "🍯" },
  { key: "bhandara", icon: "🍛" },
  { key: "murtiSeva", icon: "🌺" },
  { key: "inKind", icon: "📦" },
  { key: "events", icon: "🎶" },
] as const;

export default function SponsorshipPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Sponsorship", "/sponsorship")} />
      <InfoPage ns="sponsorship" cards={cards} />
    </main>
  );
}
