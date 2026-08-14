import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          Get in touch
        </p>
        <h2 className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl">
          Contact
        </h2>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          Whether you have questions or wish to visit, reach us by phone or
          email. We are open daily {site.hours.time}.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              Contact
            </p>
            <ul className="mt-3 space-y-1">
              {site.phones.map((phone) => (
                <li key={phone.id}>
                  <a
                    href={phone.href}
                    className="text-lg font-semibold text-maroon hover:text-gold"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              Temple location
            </p>
            <p className="mt-3 text-lg font-semibold text-maroon">
              {site.address.line1}
            </p>
            <p className="text-ink/75">{site.address.line2}</p>
          </article>

          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              Mail
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all text-lg font-semibold text-maroon hover:text-gold"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-ink/70">
              {site.hours.label} {site.hours.time}
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-cream hover:bg-maroon-deep"
          >
            Open in Google Maps
          </a>
          <a
            href={site.phones[0].href}
            className="rounded-full border border-maroon/20 px-5 py-2.5 text-sm font-medium text-maroon hover:border-gold"
          >
            Call {site.phones[0].display}
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gold/30 shadow-lg">
          <iframe
            title="Map to Radha Sarveshwar Heritage Centre"
            src={site.address.embedUrl}
            className="h-[380px] w-full border-0 md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
