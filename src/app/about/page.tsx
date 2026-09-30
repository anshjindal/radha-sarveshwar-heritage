import { About } from "@/components/About";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "About Our Hindu Temple in Halton Hills",
  description: `Hindu temple in Norval, Halton Hills, minutes from Brampton — dedicated to Shri Radha Sarveshwar and Sanatan Dharma, with resident pandit ${site.pandit.name}.`,
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
