import { Construction } from "@/components/Construction";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Mandir Renovation Updates",
  description: `Converting a farmhouse on Tenth Line in Halton Hills, near Brampton, into a Hindu temple. Open with limited capacity since March 2026; 22 murtis arrived from Jaipur.`,
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
      <JsonLd data={breadcrumbJsonLd("Mandir Renovation", "/construction")} />
      <Construction />
    </main>
  );
}
