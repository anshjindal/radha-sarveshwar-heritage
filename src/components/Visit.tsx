import { site } from "@/lib/site";
import { LotusDivider } from "./Ornament";

export function Visit() {
  return (
    <section id="visit" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm tracking-[0.28em] text-saffron uppercase">
            Visit
          </p>
          <h2 className="font-serif mt-3 text-4xl text-maroon md:text-5xl">
            Find us in Norval
          </h2>
          <LotusDivider className="my-6 max-w-xs" />
          <p className="text-base leading-8 text-ink/80">
            The centre sits on Tenth Line North in Norval, a short drive from
            Brampton, Georgetown, Milton, and Mississauga. All are welcome —
            come in modest dress, with a quiet heart.
          </p>

          <address className="mt-8 not-italic">
            <p className="font-serif text-2xl text-maroon">{site.address.line1}</p>
            <p className="mt-1 text-ink/70">{site.address.line2}</p>
          </address>

          <ul className="mt-6 space-y-2">
            {site.phones.map((phone) => (
              <li key={phone.id}>
                <a
                  href={phone.href}
                  className="text-lg text-saffron hover:text-maroon"
                >
                  {phone.label}: {phone.display}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-maroon px-5 py-3 text-sm tracking-wide text-cream uppercase hover:bg-maroon-deep"
            >
              Open in Google Maps
            </a>
            <a
              href={site.phones[0].href}
              className="rounded-full border border-maroon/20 px-5 py-3 text-sm tracking-wide text-maroon uppercase hover:border-gold"
            >
              Call {site.phones[0].display}
            </a>
          </div>

          <p className="mt-8 text-sm text-ink/55">{site.hoursNote}</p>
        </div>

        <div className="overflow-hidden rounded-[1.6rem] border border-gold/30 shadow-xl">
          <iframe
            title="Map to Radha Sarveshwar Heritage Centre"
            src={site.address.embedUrl}
            className="h-[420px] w-full border-0 md:h-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
