import Image from "next/image";

const festivals = [
  {
    title: "Janmashtami",
    note: "Krishna’s appearance",
    image: "/images/festival-janmashtami.jpg",
  },
  {
    title: "Diwali",
    note: "Festival of lights",
    image: "/images/festival-diwali.jpg",
  },
  {
    title: "Holi",
    note: "Festival of colours",
    image: "/images/festival-holi.jpg",
  },
  {
    title: "Radhashtami",
    note: "Shri Radha’s appearance",
    image: "/images/diya-lotus.jpg",
  },
];

export function Festivals() {
  return (
    <section id="festivals" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          Temple events
        </p>
        <h2 className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl">
          Festivals
        </h2>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          Join us through the year for the sacred calendar. Call or email for
          the next utsav date.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {festivals.map((fest) => (
            <li
              key={fest.title}
              className="overflow-hidden rounded-2xl bg-ivory shadow-md"
            >
              <Image
                src={fest.image}
                alt={fest.title}
                width={600}
                height={400}
                className="h-44 w-full object-cover"
              />
              <div className="px-5 py-4">
                <p className="text-xs tracking-[0.18em] text-gold uppercase">
                  {fest.note}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-maroon">
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
