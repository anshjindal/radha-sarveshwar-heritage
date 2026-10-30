import { About } from "@/components/About";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "About Us",
  description: `A non-profit organization dedicated to Shri Radha Sarveshwar and the promotion of Sanatan Dharma across the GTA, with ${site.pandit.name}.`,
  path: "/about",
  image: { url: "/images/mandir-exterior.jpg", width: 683, height: 512 },
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("About Us", "/about")} />
      <About />
    </main>
  );
}
