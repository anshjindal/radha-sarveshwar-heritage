import Image from "next/image";
import { LotusDivider } from "./Ornament";

const festivals = [
  {
    title: "Janmashtami",
    season: "Krishna’s appearance",
    image: "/images/festival-janmashtami.jpg",
    alt: "Temple courtyard decorated for Janmashtami",
  },
  {
    title: "Diwali",
    season: "Festival of lights",
    image: "/images/festival-diwali.jpg",
    alt: "Rows of diyas lighting temple steps for Diwali",
  },
  {
    title: "Holi",
    season: "Festival of colours",
    image: "/images/festival-holi.jpg",
    alt: "Holi colours and marigolds in the temple garden",
  },
  {
    title: "Radhashtami",
    season: "Shri Radha’s appearance",
    image: "/images/diya-lotus.jpg",
    alt: "Lotus and lamps offered in devotion to Radha",
  },
  {
    title: "Navratri",
    season: "Nine nights of the Goddess",
    image: "/images/mandala.jpg",
    alt: "Sacred mandala in gold and saffron",
  },
  {
    title: "Sharad Purnima",
    season: "Autumn full moon",
    image: "/images/heritage-interior.jpg",
    alt: "Lamp-lit temple hall",
  },
];

export function Festivals() {
  return (
    <section id="festivals" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.28em] text-saffron uppercase">
            Utsav
          </p>
          <h2 className="font-serif mt-3 text-4xl text-maroon md:text-5xl">
            Festivals of the year
          </h2>
          <LotusDivider className="mx-auto my-6 max-w-xs" />
          <p className="text-ink/75">
            The Hindu calendar comes alive here — with kirtan, aarti, prasad, and
            a welcome for every family. Call ahead for the next utsav date.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {festivals.map((fest) => (
            <li
              key={fest.title}
              className="group overflow-hidden rounded-3xl bg-ivory shadow-[0_16px_40px_rgba(74,14,24,0.08)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={fest.image}
                  alt={fest.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-6 py-5">
                <p className="text-xs tracking-[0.22em] text-saffron uppercase">
                  {fest.season}
                </p>
                <h3 className="font-serif mt-1 text-2xl text-maroon">
                  {fest.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
