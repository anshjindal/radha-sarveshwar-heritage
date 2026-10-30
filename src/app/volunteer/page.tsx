import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Volunteer With Us",
  description: `Volunteer with Radha Sarveshwar Heritage Centre — program seva, festivals, prasad and langar, youth and culture programs and outreach across the GTA.`,
  path: "/volunteer",
});

const cards = [
  { key: "templeSeva", icon: "🪔" },
  { key: "festivals", icon: "🎉" },
  { key: "kitchen", icon: "🍛" },
  { key: "construction", icon: "🛠️" },
  { key: "youth", icon: "📚" },
  { key: "outreach", icon: "📣" },
] as const;

export default function VolunteerPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Volunteer", "/volunteer")} />
      <InfoPage ns="volunteer" cards={cards} />
    </main>
  );
}
