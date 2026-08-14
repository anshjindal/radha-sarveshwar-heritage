"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-maroon-deep/95 shadow-[0_8px_30px_rgba(45,8,16,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-gold/40 object-cover"
          />
          <span className="leading-tight">
            <span className="font-deva block text-[13px] text-gold-light">
              {site.blessing}
            </span>
            <span className="font-serif block text-[15px] font-semibold tracking-wide text-cream md:text-base">
              {site.name}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-[0.14em] text-cream/85 uppercase transition hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.phones[0].href}
            className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm text-gold-light transition hover:bg-gold hover:text-maroon-deep"
          >
            Call temple
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-cream transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute top-1.5 left-0 h-px w-5 bg-cream transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-cream transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/20 bg-maroon-deep px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phones[0].href}
              className="mt-2 inline-flex w-fit rounded-full bg-gold px-5 py-2.5 text-sm text-maroon-deep"
            >
              {site.phones[0].display}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
