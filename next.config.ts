import type { NextConfig } from "next";

/** URLs de versiones anteriores del sitio → nuevas (redirecciones permanentes, cuidan el SEO). */
const oldSolutions: Record<string, { es: string; en: string }> = {
  "gestion-procesos-sistemas": { es: "gestion", en: "management" },
  "sostenibilidad-gestion-ambiental": { es: "sostenibilidad", en: "sustainability" },
  "cumplimiento-gestion-administrativa": { es: "cumplimiento", en: "compliance" },
  "datos-indicadores-mejora": { es: "tecnologia", en: "technology" },
  "automatizacion-inteligencia-artificial": { es: "tecnologia", en: "technology" },
  "diseno-desarrollo-web": { es: "diseno-web", en: "web-design" },
};

const nextConfig: NextConfig = {
  async redirects() {
    const solutionRedirects = Object.entries(oldSolutions).flatMap(([old, to]) => [
      { source: `/es/soluciones/${old}`, destination: `/soluciones/${to.es}`, permanent: true },
      { source: `/soluciones/${old}`, destination: `/soluciones/${to.es}`, permanent: true },
      { source: `/en/soluciones/${old}`, destination: `/en/solutions/${to.en}`, permanent: true },
    ]);
    return [
      ...solutionRedirects,
      { source: "/es/metodologia", destination: "/nosotros", permanent: true },
      { source: "/metodologia", destination: "/nosotros", permanent: true },
      { source: "/en/metodologia", destination: "/en/about", permanent: true },
    ];
  },
};

export default nextConfig;
