import type { AreaId } from "@/content/types";
import type { Locale } from "@/i18n/config";

/** URL amigable (SEO) de cada solución. Compartida entre idiomas. */
export const areaSlugs: Record<AreaId, string> = {
  gestion: "gestion-procesos-sistemas",
  sostenibilidad: "sostenibilidad-gestion-ambiental",
  cumplimiento: "cumplimiento-gestion-administrativa",
  datos: "datos-indicadores-mejora",
  automatizacion: "automatizacion-inteligencia-artificial",
  web: "diseno-desarrollo-web",
};

export function areaFromSlug(slug: string): AreaId | undefined {
  return (Object.keys(areaSlugs) as AreaId[]).find((id) => areaSlugs[id] === slug);
}

export type RouteKey = "home" | "solutions" | "method" | "about" | "contact" | "web" | "automation";

/** Rutas sin prefijo de idioma (útil para hreflang, sitemap y cambio de idioma). */
export const paths: Record<RouteKey, string> = {
  home: "",
  solutions: "/soluciones",
  method: "/metodologia",
  about: "/nosotros",
  contact: "/contacto",
  web: `/soluciones/${areaSlugs.web}`,
  automation: `/soluciones/${areaSlugs.automatizacion}`,
};

export const route = (lang: Locale, key: RouteKey) => `/${lang}${paths[key]}`;
export const solutionPath = (id: AreaId) => `/soluciones/${areaSlugs[id]}`;
export const solutionRoute = (lang: Locale, id: AreaId) => `/${lang}${solutionPath(id)}`;
export const contactRoute = (lang: Locale, area?: string) =>
  `/${lang}${paths.contact}${area ? `?area=${area}` : ""}`;
