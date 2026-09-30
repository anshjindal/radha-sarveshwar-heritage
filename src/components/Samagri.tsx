"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const samagriLists = [
  { key: "pooja", src: "/images/pooja-samagri.png" },
  { key: "rudra", src: "/images/rudra-abhishek-samagri.png" },
] as const;

export function Samagri({
  as: Heading = "h2",
  tone = "cream",
}: {
  as?: "h1" | "h2";
  tone?: "cream" | "ivory";
}) {
  const { t } = useTranslation();

  return (
    <section
      id="samagri"
      className={`scroll-mt-24 py-16 md:py-24 ${tone === "cream" ? "bg-cream" : "bg-ivory"}`}
      aria-labelledby="samagri-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          {t("samagri.eyebrow")}
        </p>
        <Heading
          id="samagri-heading"
          className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl"
        >
          {t("samagri.title")}
        </Heading>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          {t("samagri.body")}
        </p>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {samagriLists.map((list) => (
            <li
              key={list.key}
              className={`overflow-hidden rounded-2xl shadow-md ${tone === "cream" ? "bg-ivory" : "bg-white"}`}
            >
              <a href={list.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={list.src}
                  alt={t(`samagri.items.${list.key}.alt`)}
                  width={682}
                  height={1024}
                  className="h-auto w-full"
                />
              </a>
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className="text-xs tracking-[0.18em] text-gold uppercase">
                    {t(`samagri.items.${list.key}.note`)}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-maroon">
                    {t(`samagri.items.${list.key}.title`)}
                  </h3>
                </div>
                <a
                  href={list.src}
                  download
                  className="rounded-full border border-maroon/25 px-4 py-1.5 text-sm font-medium text-maroon hover:border-gold hover:text-gold"
                >
                  {t("samagri.download")}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
