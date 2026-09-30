import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Contact & Directions",
  description: `Directions to our Hindu temple at ${site.address.line1}, Norval — minutes from Brampton and Georgetown. Open daily ${site.hours.time}. Call ${site.phones[0].display}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Contact & Directions", "/contact")} />
      <Contact />
    </main>
  );
}
