import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "es-CR": `${siteConfig.url}/es`, en: `${siteConfig.url}/en` };
  return [
    { url: `${siteConfig.url}/es`, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${siteConfig.url}/en`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
