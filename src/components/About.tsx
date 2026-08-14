import Image from "next/image";
import { site } from "@/lib/site";
import { LotusDivider } from "./Ornament";

const pillars = [
  {
    title: "Darshan",
    body: "A quiet space to sit before the divine, offer pranam, and receive the day’s aarti.",
  },
  {
    title: "Heritage",
    body: "We keep Sanatan culture alive through kirtan, festivals, language, and family traditions.",
  },
  {
    title: "Seva",
    body: "Volunteers, prasad, and community care — service is worship at this centre.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
          <Image
            src="/images/heritage-interior.jpg"
            alt="Carved temple hall with hanging lamps and sunlight through jali screens"
            width={900}
            height={700}
            className="relative h-[420px] w-full rounded-[1.6rem] object-cover shadow-xl md:h-[520px]"
          />
          <div className="absolute -right-4 -bottom-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-ivory shadow-lg md:block">
            <Image
              src="/images/diya-lotus.jpg"
              alt="Oil lamps and lotus flowers"
              width={300}
              height={300}
              className="h-36 w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm tracking-[0.28em] text-saffron uppercase">
            About the centre
          </p>
          <h2 className="font-serif mt-3 text-4xl text-maroon md:text-5xl">
            A temple for devotion, culture, and homecoming
          </h2>
          <LotusDivider className="my-6 max-w-xs" />
          <p className="text-base leading-8 text-ink/80">
            Nestled in Norval, Halton Hills, {site.name} welcomes devotees from
            across the GTA. Dedicated to Shri Radha and Sarveshwar — the Lord of
            All — the centre is a living mandir where families gather for daily
            worship, seasonal utsav, and the quiet joy of community.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/80">
            Whether you are visiting for the first time or returning after years,
            you will find a place to bow, to sing, and to belong.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((item) => (
              <li key={item.title}>
                <h3 className="font-serif text-xl text-maroon">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
