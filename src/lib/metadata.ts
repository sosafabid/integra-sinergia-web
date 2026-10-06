import type { Metadata } from "next";
import { locales, localeMeta, type Locale } from "@/i18n/config";
import { localize } from "@/lib/routes";

/**
 * Metadata por página: título, descripción, canonical y hreflang.
 * `path` es la ruta interna sin idioma (p. ej. "/soluciones/gestion").
 */
export function pageMetadata(lang: Locale, path: string, title: string, description: string): Metadata {
  const url = localize(lang, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "es-CR": localize("es", path), en: localize("en", path), "x-default": localize("es", path) },
    },
    openGraph: {
      title,
      description,
      url,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].ogLocale),
      // Al definir openGraph en una página se reemplaza el del layout, por eso se repite la imagen.
      images: [{ url: `/${lang}/opengraph-image`, width: 1200, height: 630, alt: "Integra Sinergia" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/${lang}/opengraph-image`] },
  };
}
