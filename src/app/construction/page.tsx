import { Construction } from "@/components/Construction";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Mandir Development",
  description: `Building a home for Radha Sarveshwar in Halton Hills, near Brampton: our journey from 2022 to puja beginning in March 2026, 22 murtis arriving from Jaipur and new parking for devotees.`,
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
