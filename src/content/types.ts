import type { RouteKey } from "@/lib/routes";

export type AreaId = "gestion" | "sostenibilidad" | "cumplimiento" | "datos" | "automatizacion" | "web";
export type PillarId = "gestion" | "sostenibilidad" | "tecnologia" | "digital";

export type NavLink = { key: RouteKey; label: string };
export type PageMeta = { title: string; description: string };

/** Detalle de cada servicio (vive en las páginas internas, no en la home). */
export type SolutionArea = {
  id: AreaId;
  name: string;
  /** Una línea. */
  short: string;
  /** Descripción para buscadores (≈150 caracteres). */
  description: string;
  problem: string;
  outcomes: string[];
  why: string;
  cta: string;
  related: AreaId[];
};

/** Los 4 grandes conceptos que agrupan las áreas. */
export type Pillar = {
  id: PillarId;
  name: string;
  line: string;
  areas: AreaId[];
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
  /** Cliente o "Proyecto propio". Solo con autorización del cliente. */
  client: string;
  problem: string;
  solution: string;
  areas: AreaId[];
  image: string;
  imageAlt: string;
  href?: string;
};

export type Dictionary = {
  meta: { title: string; titleTemplate: string; description: string; keywords: string[] };
  pages: Record<"solutions" | "projects" | "method" | "about" | "contact", PageMeta>;
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
  ui: {
    home: string;
    viewAll: string;
    prev: string;
    next: string;
    related: string;
    talkTitle: string;
    talkText: string;
  };
  hero: { title: string; lead: string; ctaPrimary: string; ctaSecondary: string };
  manifesto: { title: string; pieces: string[]; closing: string };
  pieces: { kicker: string; title: string; lead: string; cta: string; pillars: Pillar[] };
  digital: { kicker: string; title: string; lead: string; cta: string; mockupAlt: string; mobileAlt: string };
  automation: {
    lines: [string, string];
    lead: string;
    cta: string;
    /** Página interna */
    examplesTitle: string;
    examples: { title: string; text: string }[];
  };
  web: {
    /** Página interna de diseño web */
    processTitle: string;
    process: string[];
  };
  method: {
    kicker: string;
    title: string;
    lead: string;
    steps: { name: string; text: string; output: string }[];
    cta: string;
    outputLabel: string;
  };
  solutions: {
    title: string;
    lead: string;
    labels: { problem: string; outcome: string; why: string };
    areas: SolutionArea[];
  };
  projects: {
    kicker: string;
    title: string;
    lead: string;
    labels: { problem: string; solution: string };
    items: Project[];
    cta: string;
    upcoming: string;
  };
  team: { kicker: string; title: string; lead: string; members: TeamMember[]; pending: string };
  about: { title: string; lead: string; body: string[] };
  finalCta: { title: string; lead: string; cta: string };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    direct: { title: string; whatsapp: string; email: string; phone: string; location: string; locationValue: string };
    form: {
      name: string;
      email: string;
      company: string;
      phone: string;
      interest: string;
      interestHint: string;
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
