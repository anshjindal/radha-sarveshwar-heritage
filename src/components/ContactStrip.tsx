"use client";

import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function ContactStrip({ heading }: { heading: string }) {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl border border-gold/25 bg-white p-6 shadow-sm shadow-maroon/5">
      <p className="text-lg font-bold text-maroon">{heading}</p>
      <dl className="mt-4 space-y-4 text-sm">
        <div>
          <dt className="text-xs tracking-[0.18em] text-ink/60 uppercase">
            {t("contact.phone")}
          </dt>
          {site.phones.map((phone) => (
            <dd key={phone.id}>
              <a
                href={phone.href}
                className="text-base font-semibold text-maroon hover:text-gold"
              >
                {phone.display}
              </a>
            </dd>
          ))}
        </div>
        <div>
          <dt className="text-xs tracking-[0.18em] text-ink/60 uppercase">
            {t("contact.email")}
          </dt>
          <dd>
            <a
              href={`mailto:${site.email}`}
              className="text-base font-semibold break-all text-maroon hover:text-gold"
            >
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-[0.18em] text-ink/60 uppercase">
            {t("contact.location")}
          </dt>
          <dd className="text-ink/80">
            {site.address.line1}, {site.address.line2}
          </dd>
          <dd className="text-ink/60">
            {t("common.hoursLabel")}: {site.hours.time}
          </dd>
        </div>
      </dl>
      <a
        href={site.phones[0].href}
        className="mt-6 block rounded-full bg-maroon py-3 text-center text-sm font-semibold text-cream hover:bg-maroon-deep"
      >
        {t("contact.call", { phone: site.phones[0].display })}
      </a>
    </div>
  );
}
