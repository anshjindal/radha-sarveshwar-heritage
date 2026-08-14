import { site } from "@/lib/site";
import { LotusDivider } from "./Ornament";

const services = [
  {
    title: "Daily aarti",
    body: "Morning and evening aarti, bhajan, and darshan for all who wish to come.",
  },
  {
    title: "Puja & havan",
    body: "Personal and family pujas by arrangement. Call the temple to book.",
  },
  {
    title: "Festivals",
    body: "Janmashtami, Radhashtami, Diwali, Holi, Navratri, and the sacred calendar.",
  },
  {
    title: "Satsang",
    body: "Kirtan, katha, and discourses that keep the path of bhakti close to daily life.",
  },
  {
    title: "Prasad & seva",
    body: "Offerings, volunteer seva, and community meals on special days.",
  },
  {
    title: "Sanskar",
    body: "Guidance for naming, weddings, and other samskaras — please enquire.",
  },
];

export function Worship() {
  return (
    <section id="worship" className="relative overflow-hidden bg-maroon-deep py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/images/mandala.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.28em] text-gold uppercase">
            Worship
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Daily darshan &amp; temple rhythm
          </h2>
          <LotusDivider className="my-6 max-w-xs" />
          <p className="text-cream/80">
            The mandir keeps a simple daily rhythm of aarti and open darshan.
            Festival days follow a fuller schedule — {site.hoursNote.toLowerCase()}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {site.hours.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-gold/25 bg-maroon/50 px-6 py-6 backdrop-blur-sm"
            >
              <p className="text-sm tracking-widest text-gold-light uppercase">
                {row.label}
              </p>
              <p className="font-serif mt-2 text-3xl text-cream">{row.time}</p>
            </div>
          ))}
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-gold/15 bg-ivory/5 p-6"
            >
              <h3 className="font-serif text-2xl text-gold-light">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-cream/75">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
