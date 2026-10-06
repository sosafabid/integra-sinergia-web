import { NextResponse, type NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

/** Elige idioma según el navegador: inglés solo si el visitante lo prefiere; si no, español. */
function getLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().slice(0, 2), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find((p) => locales.includes(p.lang));
  return preferred?.lang ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Excluye archivos internos, estáticos y rutas de metadatos (sitemap, robots, íconos).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
