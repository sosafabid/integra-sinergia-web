export type AreaId = "gestion" | "sostenibilidad" | "cumplimiento" | "datos" | "automatizacion" | "web";

import type { RouteKey } from "@/lib/routes";

export type NavLink = { key: RouteKey; label: string };

export type PageMeta = { title: string; description: string };

export type SolutionArea = {
  id: AreaId;
  name: string;
  /** Nombre corto para diagramas y chips */
  label: string;
  short: string;
  /** Descripción para buscadores (≈150 caracteres) */
  description: string;
  problem: string;
  outcomes: string[];
  why: string;
  cta: string;
  connects: AreaId[];
};

export type TeamMember = {
  name: string;
  initials: string;
  credential: string;
  role: string;
  bio: string;
  focus: string[];
  /** Ruta en /public (p. ej. /team/fabiola.jpg). Vacío = se muestra un retrato provisional. */
  photo?: string;
  photoAlt: string;
};

export type Project = {
  title: string;
  client: string;
  areas: AreaId[];
  summary: string;
  result?: string;
  image?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  pages: {
    solutions: PageMeta;
    method: PageMeta;
    about: PageMeta;
    contact: PageMeta;
  };
  ui: {
    breadcrumbHome: string;
    viewSolution: string;
    allSolutions: string;
    prev: string;
    next: string;
    otherSolutions: string;
    talkTitle: string;
    talkText: string;
  };
  home: {
    solutionsKicker: string;
    solutionsTitle: string;
    solutionsLead: string;
    explore: { key: RouteKey; kicker: string; title: string; text: string; cta: string }[];
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
  };
  common: {
    skip: string;
    homeLabel: string;
    homeShort: string;
    language: string;
    switchTo: string;
    switchToShort: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
    open: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    tagline: string;
    diagramTitle: string;
    diagramCenter: string;
    scroll: string;
  };
  problem: {
    kicker: string;
    title: string;
    lead: string;
    symptoms: { area: AreaId; text: string }[];
    closing: string;
  };
  connected: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    lead: string;
    fragmented: { title: string; caption: string; items: string[] };
    integrated: { title: string; caption: string; center: string };
    principles: { title: string; text: string }[];
  };
  solutions: {
    kicker: string;
    title: string;
    lead: string;
    labels: { problem: string; outcome: string; why: string; connects: string };
    areas: SolutionArea[];
    unsure: { title: string; text: string; cta: string };
  };
  method: {
    kicker: string;
    title: string;
    lead: string;
    outputLabel: string;
    steps: { letter: string; name: string; text: string; output: string }[];
    cta: string;
  };
  web: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    lead: string;
    processTitle: string;
    steps: { name: string; text: string }[];
    mockup: { url: string; annotations: string[] };
    deliverablesTitle: string;
    deliverables: { title: string; text: string }[];
    proof: { title: string; text: string; specs: string[] };
    cta: string;
    secondary: string;
  };
  automation: {
    kicker: string;
    title: string;
    lead: string;
    flow: string[];
    principle: string;
    examplesTitle: string;
    examples: { title: string; text: string }[];
    cta: string;
  };
  sectors: {
    kicker: string;
    title: string;
    lead: string;
    items: { name: string; text: string }[];
  };
  team: {
    kicker: string;
    title: string;
    lead: string;
    focusLabel: string;
    members: TeamMember[];
    portraitPending: string;
  };
  projects: {
    kicker: string;
    title: string;
    lead: string;
    items: Project[];
  };
  finalCta: {
    title: string;
    titleAccent: string;
    lead: string;
    primary: string;
    whatsapp: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    direct: {
      title: string;
      whatsapp: string;
      email: string;
      phone: string;
      location: string;
      locationValue: string;
    };
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
      required: string;
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
  whatsapp: {
    floating: string;
    defaultMessage: string;
  };
  footer: {
    description: string;
    solutionsTitle: string;
    companyTitle: string;
    contactTitle: string;
    companyLinks: NavLink[];
    rights: string;
    builtBy: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
};
