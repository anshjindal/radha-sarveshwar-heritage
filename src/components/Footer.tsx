"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { isGroup, navigation } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useTranslation();
  const groups = navigation.filter(isGroup);
  const mainLinks = navigation.filter((entry) => !isGroup(entry));

  return (
    <footer className="bg-maroon-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${site.name} logo`}
              width={80}
              height={80}
              className="h-20 w-20 rounded-full bg-black object-cover"
            />
            <div>
              <p className="text-lg font-bold">{site.name}</p>
              <p className="text-sm text-gold-light">{site.hindiSlogan}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-cream/75">
            {t("footer.blurb")}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            {t("footer.explore")}
          </p>
          <nav
            className="mt-4 flex flex-col gap-2 text-sm text-cream/80"
            aria-label="Footer"
          >
            {mainLinks.map((entry) =>
              "href" in entry ? (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className="hover:text-gold-light"
                >
                  {t(`nav.${entry.key}`)}
                </Link>
              ) : null,
            )}
            <a
              href={site.address.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              {t("nav.googleListing")}
            </a>
          </nav>
        </div>

        <div className="grid content-start gap-6">
          {groups.map((group) => (
            <div key={group.key}>
              <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                {t(`nav.${group.key}`)}
              </p>
              <div className="mt-3 flex flex-col gap-1.5 text-sm text-cream/80">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-gold-light"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            {t("footer.getInTouch")}
          </p>
          <address className="mt-4 text-sm not-italic text-cream/80">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <div className="mt-4 space-y-1 text-sm">
            {site.phones.map((phone) => (
              <p key={phone.id}>
                <a href={phone.href} className="hover:text-gold-light">
                  {phone.display}
                </a>
              </p>
            ))}
            <p>
              <a
                href={`mailto:${site.email}`}
                className="break-all hover:text-gold-light"
              >
                {site.email}
              </a>
            </p>
          </div>
          <p className="mt-3 text-sm text-cream/70">
            {t("footer.daily", { hours: site.hours.time })}
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-cream/55 md:px-6">
          © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
