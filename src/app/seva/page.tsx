import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { Samagri } from "@/components/Samagri";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Puja Booking & Pandit Services near Brampton",
  description: `Book Rudra Abhishek, havan, Satyanarayan Katha, shradh, griha pravesh and sanskar pujas with our pandit in Halton Hills near Brampton. Pooja samagri lists included.`,
  path: "/seva",
});

const cards = [
  { key: "rudraAbhishek", icon: "🔱" },
  { key: "havan", icon: "🔥" },
  { key: "satyanarayan", icon: "🌼" },
  { key: "shradh", icon: "🙏" },
  { key: "grihaPravesh", icon: "🏠" },
  { key: "sanskar", icon: "👶" },
] as const;

export default function SevaPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Puja & Seva", "/seva")} />
      <InfoPage
        ns="seva"
        cards={cards}
        link={{ href: "#samagri", labelKey: "nav.samagri" }}
      >
        <Samagri tone="ivory" />
      </InfoPage>
    </main>
  );
}
