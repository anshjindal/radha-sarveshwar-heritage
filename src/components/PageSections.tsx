"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  const { t } = useTranslation();

  return (
    <section className="sunburst text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        <nav className="text-xs text-cream/60" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold-light">
            {t("nav.home")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cream/85">{title}</span>
        </nav>
        {eyebrow ? (
          <p className="mt-6 text-xs font-bold tracking-[0.3em] text-gold-light uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl leading-tight font-bold md:text-5xl">
          {title}
        </h1>
        <div className="gold-rule my-6 max-w-xs" />
        {intro ? (
          <p className="max-w-3xl text-base leading-relaxed text-cream/85 md:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "ivory",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ivory" | "cream";
}) {
  const bg = { ivory: "bg-ivory", cream: "bg-cream" }[tone];
  return (
    <section className={bg}>
      <div className={`mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20 ${className}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold text-maroon md:text-4xl">{title}</h2>
    </div>
  );
}

export function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-gold/25 bg-white p-6 shadow-sm shadow-maroon/5">
      {icon ? (
        <span
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-xl"
          aria-hidden
        >
          {icon}
        </span>
      ) : null}
      <h3 className={`${icon ? "mt-4" : ""} text-lg font-bold text-maroon`}>
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-ink/80">{children}</div>
    </div>
  );
}
