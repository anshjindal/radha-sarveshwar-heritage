"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { donateHref, isActivePath, isGroup, navigation } from "@/lib/nav";
import { site } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const isActive = (href: string) => isActivePath(pathname, href);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={64}
            height={64}
            priority
            className="h-14 w-14 rounded-full bg-black object-cover md:h-16 md:w-16"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block text-base font-bold text-maroon md:text-lg">
              {site.name}
            </span>
            <span className="block text-xs text-maroon/70">
              {site.hindiSlogan} · {site.address.city}, {site.address.region}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {navigation.map((entry) =>
            isGroup(entry) ? (
              <div key={entry.key} className="group relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-full px-2.5 py-2 text-sm font-semibold whitespace-nowrap 2xl:px-3 ${
                    entry.items.some((i) => isActive(i.href))
                      ? "bg-cream text-maroon-deep"
                      : "text-maroon hover:bg-cream"
                  }`}
                  aria-haspopup="true"
                >
                  {t(`nav.${entry.key}`)}
                  <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
                    <path
                      d="M5.5 7.5 10 12l4.5-4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                  </svg>
                </button>
                <div className="invisible absolute top-full left-0 min-w-56 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-gold/30 bg-white p-2 shadow-xl shadow-maroon/10">
                    {entry.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`block rounded-xl px-4 py-2.5 text-sm ${
                          isActive(item.href)
                            ? "bg-cream font-semibold text-maroon"
                            : "text-ink hover:bg-cream"
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                aria-current={isActive(entry.href) ? "page" : undefined}
                className={`rounded-full px-2.5 py-2 text-sm font-semibold whitespace-nowrap 2xl:px-3 ${
                  isActive(entry.href)
                    ? "bg-cream text-maroon-deep"
                    : "text-maroon hover:bg-cream"
                }`}
              >
                {t(`nav.${entry.key}`)}
              </Link>
            ),
          )}
          <LanguageSwitcher className="ml-2" />
          <Link
            href={donateHref}
            className="ml-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold whitespace-nowrap text-maroon-deep shadow-md shadow-gold/30 hover:bg-gold-light"
          >
            {t("nav.donate")}
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 text-maroon"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-maroon transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 bg-maroon transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-maroon transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gold/20 px-4 pb-6 xl:hidden"
          aria-label="Mobile"
        >
          {navigation.map((entry) =>
            isGroup(entry) ? (
              <div key={entry.key} className="mt-4">
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  {t(`nav.${entry.key}`)}
                </p>
                {entry.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block py-2 pl-3 text-base ${isActive(item.href) ? "font-semibold text-maroon-deep" : "text-maroon"}`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                aria-current={isActive(entry.href) ? "page" : undefined}
                className={`mt-2 block py-2 text-lg font-semibold ${isActive(entry.href) ? "text-maroon-deep underline decoration-gold decoration-2 underline-offset-4" : "text-maroon"}`}
              >
                {t(`nav.${entry.key}`)}
              </Link>
            ),
          )}
          <Link
            href={donateHref}
            className="mt-6 block rounded-full bg-gold py-3 text-center font-bold text-maroon-deep"
          >
            {t("nav.donate")}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
