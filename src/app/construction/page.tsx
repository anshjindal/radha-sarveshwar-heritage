import { Construction } from "@/components/Construction";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Mandir Development",
  description: `The journey of Radha Sarveshwar Heritage Centre.`,
  path: "/construction",
  image: {
    url: "/images/construction/murti-arrival-1.png",
    width: 1024,
    height: 768,
  },
});

export default function ConstructionPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Mandir Development", "/construction")} />
      <Construction />
    </main>
  );
}
