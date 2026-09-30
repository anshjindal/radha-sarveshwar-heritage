"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ContactStrip } from "./ContactStrip";
import { Card, PageHero, Section, SectionHeading } from "./PageSections";

const stepKeys = ["s1", "s2", "s3"] as const;

export function InfoPage({
  ns,
  cards,
  link,
  children,
}: {
  ns: string;
  cards: readonly { key: string; icon: string }[];
  link?: { href: string; labelKey: string };
  children?: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t(`${ns}.eyebrow`)}
        title={t(`${ns}.title`)}
        intro={t(`${ns}.intro`)}
      />

      <Section>
        <SectionHeading
          eyebrow={t(`${ns}.cardsEyebrow`)}
          title={t(`${ns}.cardsTitle`)}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.key}
              icon={card.icon}
              title={t(`${ns}.cards.${card.key}.title`)}
            >
              {t(`${ns}.cards.${card.key}.body`)}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <SectionHeading title={t(`${ns}.stepsTitle`)} />
          <ol className="mt-8 space-y-5">
            {stepKeys.map((key, i) => (
              <li key={key} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <p className="pt-1.5 leading-relaxed text-ink/85">
                  {t(`${ns}.steps.${key}`)}
                </p>
              </li>
            ))}
          </ol>
          {link ? (
            <Link
              href={link.href}
              className="mt-8 inline-flex rounded-full border border-maroon/25 px-5 py-2.5 text-sm font-semibold text-maroon hover:border-gold hover:bg-ivory"
            >
              {t(link.labelKey)} →
            </Link>
          ) : null}
        </div>
        <ContactStrip heading={t(`${ns}.contactHeading`)} />
      </Section>

      {children}
    </>
  );
}
