import type { Metadata } from "next";
import { locales, localeMeta, type Locale } from "@/i18n/config";

/**
 * Metadata por página: título, descripción, canonical y hreflang.
 * `path` es la ruta sin el prefijo de idioma (p. ej. "/metodologia").
 */
export function pageMetadata(lang: Locale, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        "es-CR": `/es${path}`,
        en: `/en${path}`,
        "x-default": `/es${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}${path}`,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].ogLocale),
      // Al definir openGraph en una página se reemplaza el del layout, por eso se repite la imagen.
      images: [{ url: `/${lang}/opengraph-image`, width: 1200, height: 630, alt: "Integra Sinergia" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/${lang}/opengraph-image`] },
  };
}
