import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { paths, solutionPath } from "@/lib/routes";
import type { AreaId } from "@/content/types";

const areaIds: AreaId[] = ["gestion", "sostenibilidad", "cumplimiento", "datos", "automatizacion", "web"];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [
    { path: paths.home, priority: 1 },
    { path: paths.solutions, priority: 0.9 },
    ...areaIds.map((id) => ({ path: solutionPath(id), priority: 0.8 })),
    { path: paths.projects, priority: 0.7 },
    { path: paths.method, priority: 0.6 },
    { path: paths.about, priority: 0.6 },
    { path: paths.contact, priority: 0.7 },
  ];
  const lastModified = new Date();
  return all.flatMap(({ path, priority }) => {
    const languages = { "es-CR": `${siteConfig.url}/es${path}`, en: `${siteConfig.url}/en${path}` };
    return (["es", "en"] as const).map((lang) => ({
      url: `${siteConfig.url}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "es" ? priority : Math.round(priority * 8) / 10,
      alternates: { languages },
    }));
  });
}
