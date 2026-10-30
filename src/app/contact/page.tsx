import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact Radha Sarveshwar Heritage Centre to book a puja, volunteer or support our work. Call ${site.phones[0].display}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Contact Us", "/contact")} />
      <Contact />
    </main>
  );
}
