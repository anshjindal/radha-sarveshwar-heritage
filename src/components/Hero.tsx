import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[72vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-maroon-deep/70" />
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-5 py-20 text-cream md:px-8">
        <p className="text-sm tracking-[0.35em] text-gold-light uppercase">
          Welcome to
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          {site.name}
        </h1>
        <div className="gold-rule my-6 max-w-xs" />
        <p className="max-w-2xl text-base leading-relaxed text-cream/90 md:text-lg">
          A sacred home for Sanatan Dharma in Norval — a place to worship,
          celebrate, and keep Hindu heritage alive for families across the GTA.
        </p>
        <p className="mt-4 text-gold-light">{site.slogan}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#about"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-maroon-deep uppercase hover:bg-gold-light"
          >
            About us
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/50 px-6 py-3 text-sm font-semibold tracking-wide text-cream uppercase hover:border-gold hover:text-gold-light"
          >
            Visit
          </a>
        </div>
      </div>
    </section>
  );
}
