import type { Locale } from "@/i18n/config";

/**
 * URLs públicas
 * - Español en la raíz:   /soluciones/gestion
 * - Inglés bajo /en:      /en/solutions/management
 *
 * Internamente las páginas viven en app/[lang]/… con segmentos en español;
 * src/proxy.ts traduce las URLs públicas a las rutas internas.
 */

export type SolutionId = "gestion" | "sostenibilidad" | "cumplimiento" | "tecnologia" | "web";
export const solutionIds: SolutionId[] = ["gestion", "sostenibilidad", "cumplimiento", "tecnologia", "web"];

export type RouteKey = "home" | "solutions" | "projects" | "about" | "contact";

/** Segmento interno (español) de cada página. */
const internal: Record<Exclude<RouteKey, "home">, string> = {
  solutions: "soluciones",
  projects: "proyectos",
  about: "nosotros",
  contact: "contacto",
};

/** Slug interno (español) de cada solución. */
export const solutionSlugs: Record<SolutionId, string> = {
  gestion: "gestion",
  sostenibilidad: "sostenibilidad",
  cumplimiento: "cumplimiento",
  tecnologia: "tecnologia",
  web: "diseno-web",
};

/** Traducción de segmentos español → inglés para las URLs públicas en /en. */
export const enSegments: Record<string, string> = {
  soluciones: "solutions",
  proyectos: "projects",
  nosotros: "about",
  contacto: "contact",
  gestion: "management",
  sostenibilidad: "sustainability",
  cumplimiento: "compliance",
  tecnologia: "technology",
  "diseno-web": "web-design",
};
const esSegments: Record<string, string> = Object.fromEntries(Object.entries(enSegments).map(([es, en]) => [en, es]));

/** Convierte una ruta interna sin idioma ("/soluciones/gestion") a la URL pública del idioma. */
export function localize(lang: Locale, internalPath: string): string {
  if (lang === "es") return internalPath === "" ? "/" : internalPath;
  const translated = internalPath
    .split("/")
    .map((seg) => enSegments[seg] ?? seg)
    .join("/");
  return `/en${translated}`;
}

/** Ruta interna (para el proxy): "/en/solutions/management" → "/en/soluciones/gestion". */
export function toInternal(publicEnPath: string): string {
  return publicEnPath
    .split("/")
    .map((seg) => esSegments[seg] ?? seg)
    .join("/");
}

const internalPath = (key: RouteKey) => (key === "home" ? "" : `/${internal[key]}`);
export const solutionPath = (id: SolutionId) => `/soluciones/${solutionSlugs[id]}`;

export const route = (lang: Locale, key: RouteKey) => localize(lang, internalPath(key));
export const solutionRoute = (lang: Locale, id: SolutionId) => localize(lang, solutionPath(id));
export const contactRoute = (lang: Locale, area?: string) =>
  `${localize(lang, internalPath("contact"))}${area ? `?area=${area}` : ""}`;

/** Ruta interna (sin idioma) de una página, para metadata y sitemap. */
export const pathOf = (key: RouteKey) => internalPath(key);

export function solutionFromSlug(slug: string): SolutionId | undefined {
  return solutionIds.find((id) => solutionSlugs[id] === slug);
}

/**
 * Normaliza cualquier pathname (público o interno) a { lang, internal }.
 * Sirve en componentes cliente: en el servidor usePathname devuelve la ruta interna
 * y en el navegador la pública; ambas deben producir el mismo resultado.
 */
export function parsePathname(pathname: string): { lang: Locale; internal: string } {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return { lang: "en", internal: toInternal(pathname.slice(3)) };
  }
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return { lang: "es", internal: pathname.slice(3) };
  }
  return { lang: "es", internal: pathname === "/" ? "" : pathname };
}
