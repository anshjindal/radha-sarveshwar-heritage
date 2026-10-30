"use client";

import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="bg-ivory py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          {t("contact.eyebrow")}
        </p>
        <h1
          id="contact-heading"
          className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl"
        >
          {t("contact.title")}
        </h1>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          {t("contact.body")}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              {t("contact.phone")}
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
              {t("contact.email")}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all text-lg font-semibold text-maroon hover:text-gold"
            >
              {site.email}
            </a>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.phones[0].href}
            className="rounded-full border border-maroon/20 px-5 py-2.5 text-sm font-medium text-maroon hover:border-gold"
          >
            {t("contact.call", { phone: site.phones[0].display })}
          </a>
        </div>
      </div>
    </section>
  );
}
