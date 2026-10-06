import { NextResponse, type NextRequest } from "next/server";
import { enSegments, localize, toInternal } from "@/lib/routes";

/**
 * Traduce URLs públicas a rutas internas:
 *   /soluciones/gestion            → /es/soluciones/gestion   (rewrite, la URL no cambia)
 *   /en/solutions/management       → /en/soluciones/gestion   (rewrite)
 *   /es/...                        → /...                     (redirect permanente)
 *   /en/soluciones/...             → /en/solutions/...        (redirect permanente)
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Imagen Open Graph: se sirve directamente en su ruta interna.
  if (/^\/(es|en)\/opengraph-image/.test(pathname)) return;

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    // Segmentos en español bajo /en → versión en inglés
    if (rest.split("/").some((seg) => seg in enSegments)) {
      const url = request.nextUrl.clone();
      url.pathname = localize("en", rest);
      return NextResponse.redirect(url, 308);
    }
    const internal = toInternal(pathname);
    if (internal === pathname) return;
    const url = request.nextUrl.clone();
    url.pathname = internal;
    return NextResponse.rewrite(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Excluye archivos internos, estáticos y rutas de metadatos (sitemap.xml, robots.txt, íconos).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
