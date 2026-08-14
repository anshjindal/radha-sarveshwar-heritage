"use client";

import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-maroon-deep text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-sm md:px-8">
          <a href={`mailto:${site.email}`} className="hover:text-gold-light">
            {site.email}
          </a>
          <div className="flex flex-wrap gap-x-4">
            {site.phones.map((phone) => (
              <a key={phone.id} href={phone.href} className="hover:text-gold-light">
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-gold/25 bg-ivory">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={72}
              height={72}
              priority
              className="h-14 w-14 rounded-full bg-black object-cover md:h-[72px] md:w-[72px]"
            />
            <span className="hidden max-w-[12rem] text-sm font-semibold leading-tight text-maroon sm:block md:max-w-none md:text-base">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-maroon uppercase hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon/20 text-maroon lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-maroon transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-px w-5 bg-maroon transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-maroon transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <nav className="border-t border-gold/20 px-5 py-4 lg:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg text-maroon"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
