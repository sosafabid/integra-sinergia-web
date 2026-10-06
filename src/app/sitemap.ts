import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { localize, pathOf, solutionIds, solutionPath } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: pathOf("home"), priority: 1 },
    { path: pathOf("solutions"), priority: 0.9 },
    ...solutionIds.map((id) => ({ path: solutionPath(id), priority: 0.8 })),
    { path: pathOf("projects"), priority: 0.7 },
    { path: pathOf("about"), priority: 0.6 },
    { path: pathOf("contact"), priority: 0.7 },
  ];
  const lastModified = new Date();
  return pages.flatMap(({ path, priority }) => {
    const languages = { "es-CR": siteConfig.url + localize("es", path), en: siteConfig.url + localize("en", path) };
    return (["es", "en"] as const).map((lang) => ({
      url: siteConfig.url + (localize(lang, path) === "/" ? "" : localize(lang, path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "es" ? priority : Math.round(priority * 8) / 10,
      alternates: { languages },
    }));
  });
}
