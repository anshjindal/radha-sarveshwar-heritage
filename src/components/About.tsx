import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm tracking-[0.28em] text-gold uppercase">About us</p>
          <h2 className="mt-2 text-3xl font-semibold text-maroon md:text-5xl">
            {site.name}
          </h2>
          <div className="gold-rule my-6 max-w-xs" />
          <p className="text-base leading-8 text-ink/80">
            Radha Sarveshwar Heritage Centre is a Hindu temple and cultural home
            in Norval, Halton Hills. Dedicated to Shri Radha Sarveshwar, we
            welcome devotees from across the Greater Toronto Area for worship,
            festivals, and community.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/80">
            Our purpose is to preserve and share Sanatan Dharma — a place where
            families can gather, children can grow in culture, and visitors can
            find peace.
          </p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-maroon uppercase">
            {site.hours.label}: {site.hours.time}
          </p>
        </div>
        <Image
          src="/images/heritage-interior.jpg"
          alt="Temple hall"
          width={900}
          height={700}
          className="h-[380px] w-full rounded-2xl object-cover shadow-lg md:h-[460px]"
        />
      </div>
    </section>
  );
}
