import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

/** Datos estructurados (schema.org) para buscadores. Solo información verificable. */
export function buildJsonLd(lang: Locale, dict: Dictionary) {
  const url = `${siteConfig.url}/${lang}`;
  const orgId = `${siteConfig.url}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": orgId,
        name: siteConfig.name,
        slogan: siteConfig.tagline,
        description: dict.meta.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/logo-integra-sinergia.png`,
        image: `${siteConfig.url}/brand/logo-integra-sinergia.png`,
        email: siteConfig.email,
        telephone: siteConfig.phones.map((p) => p.tel),
        address: { "@type": "PostalAddress", addressCountry: "CR" },
        areaServed: { "@type": "Country", name: "Costa Rica" },
        founder: siteConfig.founders.map((name) => ({ "@type": "Person", name, jobTitle: "Ingeniera Química" })),
        knowsAbout: dict.solutions.areas.map((a) => a.name),
        availableLanguage: ["es", "en"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.solutions.kicker,
          itemListElement: dict.solutions.areas.map((a) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: a.name, description: a.short },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: ["es-CR", "en"],
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: lang === "es" ? "es-CR" : "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": orgId },
      },
    ],
  };
}
