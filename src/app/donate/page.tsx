import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Donate to Our Hindu Temple",
  description: `Donate to our Hindu temple in Halton Hills near Brampton — support the mandir renovation, 22 murtis from Jaipur, daily puja and festivals.`,
  path: "/donate",
});

const cards = [
  { key: "construction", icon: "🛕" },
  { key: "murtis", icon: "🕉️" },
  { key: "dailyPuja", icon: "🪔" },
  { key: "festivals", icon: "🎉" },
] as const;

export default function DonatePage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Donate", "/donate")} />
      <InfoPage
        ns="donate"
        cards={cards}
        link={{ href: "/construction", labelKey: "nav.construction" }}
      />
    </main>
  );
}
