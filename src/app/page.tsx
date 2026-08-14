import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Worship } from "@/components/Worship";
import { Festivals } from "@/components/Festivals";
import { Visit } from "@/components/Visit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HinduTemple",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: "CA",
    },
    openingHours: "Mo-Su 07:00-21:00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Worship />
        <Festivals />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
