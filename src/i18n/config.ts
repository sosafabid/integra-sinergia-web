export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Etiqueta para atributos hreflang / Open Graph */
export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string }> = {
  es: { htmlLang: "es-CR", ogLocale: "es_CR", label: "Español" },
  en: { htmlLang: "en", ogLocale: "en_US", label: "English" },
};
