import type { Locale } from "./config";
import type { Dictionary } from "@/content/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("@/content/es").then((m) => m.default),
  en: () => import("@/content/en").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
