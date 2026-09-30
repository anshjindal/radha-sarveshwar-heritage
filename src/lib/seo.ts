import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path,
  image = { url: "/og.jpg", width: 1200, height: 630 },
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width?: number; height?: number };
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [{ ...image, alt: `${title} — ${site.name}` }],
    },
  };
}
