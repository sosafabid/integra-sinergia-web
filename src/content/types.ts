import type { RouteKey, SolutionId } from "@/lib/routes";

export type { SolutionId };
export type NavLink = { key: RouteKey; label: string };
export type PageMeta = { title: string; description: string };

export type Solution = {
  id: SolutionId;
  /** Nombre corto: "Gestión" */
  name: string;
  /** Nombre completo: "Gestión, procesos y sistemas" */
  fullName: string;
  /** Una línea para listados */
  line: string;
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
};

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  /** Ruta en /public (p. ej. /team/fabiola.jpg). Vacío = retrato provisional. */
  photo?: string;
  photoAlt: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  solutions: SolutionId[];
  image: string;
  imageAlt: string;
  href?: string;
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
  };
  nav: { links: NavLink[]; cta: string };
  /** Botón principal de contenido (consistente en todo el sitio) */
  ctaPrimary: string;
  ui: { viewAll: string; related: string; backToSolutions: string; problem: string; solution: string; services: string; howWeWork: string };
  home: {
    hero: { titleA: string; titleB: string; lead: string; secondary: string };
    idea: { kicker: string; title: string; pieces: string[]; text: string };
    solutions: { kicker: string; title: string; cta: string };
    showcase: { kicker: string; title: string; lead: string; cta: string; mockupAlt: string; mobileAlt: string };
    projects: { kicker: string; title: string; cta: string };
    team: { kicker: string; title: string; cta: string };
  };
  solutionsPage: { title: string; lead: string; unsure: { title: string; text: string } };
  solutions: Solution[];
  web: {
    processTitle: string;
    process: { name: string; text: string }[];
    projectsTitle: string;
  };
  method: { title: string; steps: { name: string; text: string }[] };
  projects: { title: string; lead: string; items: Project[]; upcoming: string };
  about: {
    title: string;
    lead: string;
    why: { title: string; text: string };
    thinking: { title: string; principles: { title: string; text: string }[] };
    team: { title: string; lead: string };
  };
  team: { members: TeamMember[]; pending: string };
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
