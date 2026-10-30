import { Calendar } from "@/components/Calendar";
import { JsonLd } from "@/components/JsonLd";
import { calendarPoster, calendarYear } from "@/lib/calendar";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = pageMetadata({
  title: `Hindu Festival Calendar ${calendarYear}`,
  description: `${calendarYear} Shradh, Navratri, Dussehra, Karva Chauth, Diwali and Tulsi Vivah dates for Hindu families in Brampton, the GTA and Ontario.`,
  path: "/calendar",
  image: { url: calendarPoster, width: 682, height: 1024 },
});

export default function CalendarPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(`Festival Calendar ${calendarYear}`, "/calendar")} />
      <Calendar as="h1" />
    </main>
  );
}
