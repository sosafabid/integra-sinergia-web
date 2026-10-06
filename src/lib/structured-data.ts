import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/content/types";

/** Datos estructurados (schema.org) para buscadores. Solo información verificable. */
export function buildJsonLd(dict: Dictionary) {
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
        knowsAbout: dict.solutions.map((s) => s.fullName),
        availableLanguage: ["es", "en"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.pages.solutions.title,
          itemListElement: dict.solutions.map((a) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: a.fullName, description: a.lead },
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
    ],
  };
}
