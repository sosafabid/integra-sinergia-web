import type { RouteKey, SolutionId } from "@/lib/routes";

export type { SolutionId };
export type NavLink = { key: RouteKey; label: string };
export type PageMeta = { title: string; description: string };

/**
 * Fotografías reales. Cada clave corresponde a un archivo en /public (ver src/content/photos.ts).
 * Si el archivo todavía no existe, el sitio muestra un espacio neutro en su lugar.
 */
export type PhotoKey =
  | "team"
  | "fabiola"
  | "mariaCeleste"
  | "brasil"
  | "panel"
  | "sostenibilidad"
  | "foro"
  | "reunion";

export type PhotoText = { alt: string; caption?: string };

export type Solution = {
  id: SolutionId;
  /** Nombre corto: "Gestión" */
  name: string;
  /** Nombre completo: "Gestión, procesos y sistemas" */
  fullName: string;
  /** Una frase para el inicio y listados */
  summary: string;
  /** Titular de la página: la promesa */
  promise: string;
  lead: string;
  /** Descripción para buscadores (≈150 caracteres) */
  description: string;
  problem: string;
  solution: string;
  services: { title: string; text: string }[];
  cta: string;
  related: SolutionId[];
  /** Fotografía real que acompaña la página (opcional) */
  photo?: PhotoKey;
};

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  photo: PhotoKey;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** Captura real en /public/projects/… (si no existe aún, se muestra una composición tipográfica) */
  image?: string;
  imageAlt?: string;
  /** Sitio en línea */
  href?: string;
  /** Fotografía real en lugar de captura */
  photo?: PhotoKey;
  solutions: SolutionId[];
};

export type Dictionary = {
  meta: { title: string; titleTemplate: string; description: string; keywords: string[] };
  pages: Record<"solutions" | "projects" | "about" | "contact", PageMeta>;
  common: {
    skip: string;
    homeLabel: string;
    homeShort: string;
    switchTo: string;
    switchToShort: string;
    menuOpen: string;
    menuClose: string;
    allSolutions: string;
  };
  nav: { links: NavLink[]; cta: string };
  /** Botón principal de contenido */
  ctaPrimary: string;
  ui: {
    related: string;
    backToSolutions: string;
    problem: string;
    solution: string;
    services: string;
    howWeWork: string;
    learnMore: string;
    visitSite: string;
    viewProject: string;
    screenshotSoon: string;
  };
  photos: Record<PhotoKey, PhotoText>;
  home: {
    hero: { titleA: string; titleB: string; lead: string; primary: string; secondary: string };
    idea: { title: string; text: string };
    solutions: { kicker: string; title: string };
    featured: { kicker: string; projectSlug: string };
    people: { kicker: string; title: string; text: string; cta: string };
    final: { title: string; titleB: string; cta: string };
  };
  solutionsPage: { title: string; lead: string; unsure: { title: string; text: string } };
  solutions: Solution[];
  web: {
    processTitle: string;
    process: { name: string; text: string }[];
    projectsTitle: string;
    mockupAlt: string;
    mobileAlt: string;
  };
  method: { title: string; steps: { name: string; text: string }[] };
  projects: {
    title: string;
    lead: string;
    items: Project[];
    experience: { kicker: string; title: string; text: string };
  };
  about: {
    title: string;
    lead: string;
    who: { title: string; text: string };
    howWeWork: { title: string; principles: { title: string; text: string }[] };
    experience: { kicker: string; title: string; text: string; areas: string[] };
    people: { title: string };
  };
  team: { members: TeamMember[] };
  finalCta: { title: string; lead: string };
  contact: {
    title: string;
    lead: string;
    direct: { whatsapp: string; email: string };
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      interest: string;
      unsure: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      error: string;
      invalidEmail: string;
      missing: string;
      notConfigured: string;
      privacy: string;
    };
  };
  whatsapp: { label: string; defaultMessage: string };
  footer: { line: string; rights: string };
  notFound: { title: string; text: string; cta: string };
};
