import Image from "next/image";
import { site } from "@/lib/site";
import { LotusDivider } from "./Ornament";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Temple mandapa at dusk with oil lamps and marigold garlands"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="font-deva mb-3 text-lg tracking-[0.35em] text-gold-light md:text-xl">
          {site.blessing} · ॐ
        </p>
        <h1 className="font-serif max-w-4xl text-4xl leading-[1.1] font-semibold text-cream sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>
        <p className="font-deva mt-3 text-xl text-gold-light/90 md:text-2xl">
          {site.devanagari}
        </p>
        <LotusDivider className="my-6 max-w-md" />
        <p className="max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
          {site.tagline}. Come for darshan, stay for community, and carry
          the blessings of Shri Radha Sarveshwar home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#visit"
            className="rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-wide text-maroon-deep uppercase transition hover:bg-gold-light"
          >
            Plan your visit
          </a>
          <a
            href="#worship"
            className="rounded-full border border-cream/40 px-6 py-3 text-sm tracking-wide text-cream uppercase transition hover:border-gold hover:text-gold-light"
          >
            Daily aarti
          </a>
        </div>
      </div>
    </section>
  );
}
