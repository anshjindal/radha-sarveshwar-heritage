import type { MetadataRoute } from "next";
import { isGroup, navigation } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = navigation.flatMap((entry) =>
    isGroup(entry) ? entry.items.map((item) => item.href) : [entry.href],
  );

  return paths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
