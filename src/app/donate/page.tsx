import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Donate",
  description: `Support Radha Sarveshwar Heritage Centre, a non-profit promoting Sanatan Dharma — spiritual programs, pujas, festivals and community seva across the GTA.`,
  path: "/donate",
});

const cards = [
  { key: "construction", icon: "📿" },
  { key: "murtis", icon: "🤝" },
  { key: "dailyPuja", icon: "🪔" },
  { key: "festivals", icon: "🎉" },
] as const;

export default function DonatePage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Donate", "/donate")} />
      <InfoPage ns="donate" cards={cards} />
    </main>
  );
}
