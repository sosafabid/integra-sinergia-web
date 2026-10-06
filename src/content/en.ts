import type { Dictionary } from "./types";

/** English content. Mirrors es.ts — keep both in sync. */
const en: Dictionary = {
  meta: {
    title: "Integra Sinergia | Business consulting in Costa Rica",
    titleTemplate: "%s | Integra Sinergia",
    description:
      "We integrate management, sustainability and technology so companies work better. ISO systems, environmental management, compliance, automation and web design in Costa Rica.",
    keywords: [
      "business consulting Costa Rica",
      "environmental consulting",
      "environmental management",
      "sustainability",
      "management systems",
      "ISO 9001",
      "ISO 14001",
      "process improvement",
      "automation",
      "artificial intelligence",
      "web design Costa Rica",
      "web development",
    ],
  },
  pages: {
    solutions: {
      title: "Solutions",
      description:
        "Management, sustainability, compliance, technology and web design. We integrate disciplines based on the problem your company needs to solve.",
    },
    projects: {
      title: "Projects",
      description: "Integra Sinergia projects: web design, management and applied technology.",
    },
    about: {
      title: "About",
      description:
        "Integra Sinergia is a Costa Rican firm founded by chemical engineers Fabiola Sosa Duarte and María Celeste Amaya.",
    },
    contact: {
      title: "Contact",
      description: "Tell us what your company needs. We'll reply by email or WhatsApp.",
    },
  },
  common: {
    skip: "Skip to content",
    homeLabel: "Integra Sinergia, go to home",
    homeShort: "Home",
    switchTo: "Ver en español",
    switchToShort: "ES",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  nav: {
    links: [
      { key: "solutions", label: "Solutions" },
      { key: "projects", label: "Projects" },
      { key: "about", label: "About" },
    ],
    cta: "Let's talk",
  },
  ctaPrimary: "Tell us what you need",
  ui: {
    viewAll: "View all",
    related: "You may also be interested in",
    backToSolutions: "Solutions",
    problem: "The problem",
    solution: "Our solution",
    services: "What we can do",
    howWeWork: "How we work",
  },
  home: {
    hero: {
      titleA: "Your company is a system.",
      titleB: "Make it work better.",
      lead: "We integrate management, sustainability and technology to build solutions that help companies grow.",
      secondary: "Explore solutions",
    },
    idea: {
      kicker: "Everything is connected",
      title: "When the pieces work together, the business works better.",
      pieces: ["People", "Processes", "Information", "Technology", "Sustainability"],
      text: "That's why we don't solve isolated problems. We understand the whole system and work on what actually moves it.",
    },
    solutions: {
      kicker: "Solutions",
      title: "What we do",
      cta: "Explore solutions",
    },
    showcase: {
      kicker: "Design & technology",
      title: "Your digital presence is part of your business too.",
      lead: "We design and build websites that represent your brand, build trust and turn visits into opportunities.",
      cta: "See web design",
      mockupAlt: "Integra Sinergia website on a computer",
      mobileAlt: "Integra Sinergia website on a phone",
    },
    projects: {
      kicker: "Projects",
      title: "Recent work",
      cta: "See projects",
    },
    team: {
      kicker: "Team",
      title: "Real people behind real solutions.",
      cta: "Meet the team",
    },
  },
  solutionsPage: {
    title: "Solutions to make your company work better.",
    lead: "Not every company needs the same thing. We integrate disciplines based on the problem you want to solve.",
    unsure: {
      title: "Not sure where to start?",
      text: "That's the most common case. Tell us the situation and we'll guide you.",
    },
  },
  solutions: [
    {
      id: "gestion",
      name: "Management",
      fullName: "Management, processes & systems",
      line: "Processes, systems and improvement.",
      promise: "Bring order to the way your company works.",
      lead: "Clear processes, defined owners and management systems your team actually uses.",
      description:
        "Process mapping and improvement, manuals and ISO 9001, 14001, 45001 and 50001 management systems in Costa Rica. Audit and certification readiness.",
      problem: "Operations depend on a few people, processes change depending on who runs them, and every audit is stressful.",
      solution: "We design systems for your team's daily work, not binders for the audit.",
      services: [
        { title: "Processes", text: "Mapping, redesign and documentation of how work gets done." },
        { title: "ISO systems", text: "Implementation of ISO 9001, 14001, 45001 and 50001." },
        { title: "Audits", text: "Readiness for internal and external audits and certification." },
        { title: "Indicators", text: "A few indicators that matter, tied to decisions." },
      ],
      cta: "Organize my processes",
      related: ["cumplimiento", "tecnologia"],
    },
    {
      id: "sostenibilidad",
      name: "Sustainability",
      fullName: "Sustainability & environmental management",
      line: "Environmental management and performance.",
      promise: "Environmental management that also improves the business.",
      lead: "Meet what's required and use the environmental side to operate more efficiently.",
      description:
        "Environmental consulting in Costa Rica: environmental and waste management plans, Ecological Blue Flag (PBAE), ISO 14001 and sustainability indicators.",
      problem: "Environmental demands keep growing —from authorities, clients and supply chains— and feel like one more piece of paperwork.",
      solution: "We connect the environmental side with your processes and data, so it drives efficiency, not just compliance.",
      services: [
        { title: "Environmental management", text: "Environmental and waste management plans." },
        { title: "Ecological Blue Flag", text: "Support for Costa Rica's Ecological Blue Flag Program (PBAE)." },
        { title: "ISO 14001", text: "Environmental management systems ready to run and certify." },
        { title: "Performance", text: "Sustainability indicators and strategy." },
      ],
      cta: "Strengthen my environmental management",
      related: ["gestion", "cumplimiento"],
    },
    {
      id: "cumplimiento",
      name: "Compliance",
      fullName: "Compliance & administration",
      line: "Requirements, permits and readiness.",
      promise: "Requirements in order, without last-minute rushes.",
      lead: "Permits, procedures and procurement under control, with clear owners and dates.",
      description:
        "Procedures, health permits, business licenses, compliance audits and SICOP bid management for companies in Costa Rica.",
      problem: "Permits, licenses and public procurement take time and know-how the team doesn't always have.",
      solution: "We turn requirements into a controlled process, with owners, dates and evidence.",
      services: [
        { title: "Permits & procedures", text: "Support with health permits and procedures." },
        { title: "Business licenses", text: "Licenses and municipal requirements up to date." },
        { title: "Compliance audits", text: "Know what's missing before anyone asks." },
        { title: "SICOP", text: "Bid preparation and management in public procurement." },
      ],
      cta: "Get my requirements in order",
      related: ["gestion", "sostenibilidad"],
    },
    {
      id: "tecnologia",
      name: "Technology",
      fullName: "Automation & artificial intelligence",
      line: "Automation and artificial intelligence.",
      promise: "Less repetitive work. More time to grow.",
      lead: "Automation, data and artificial intelligence applied to real processes.",
      description:
        "Process automation, integrations, KPI dashboards and artificial intelligence assistants for companies in Costa Rica.",
      problem: "The team spends hours copying data, chasing approvals and building reports.",
      solution: "We automate processes we've organized first. Automating chaos only speeds it up.",
      services: [
        { title: "Automation", text: "Workflows, forms and approvals that move on their own." },
        { title: "Integrations", text: "The tools you already use, connected." },
        { title: "Data & dashboards", text: "Indicators that update without copy-paste." },
        { title: "AI assistants", text: "Answers based on your procedures and documents." },
      ],
      cta: "Automate my operations",
      related: ["gestion", "web"],
    },
    {
      id: "web",
      name: "Digital design",
      fullName: "Web design & development",
      line: "Web and digital presence.",
      promise: "Your digital presence is part of your business too.",
      lead: "We design and build websites that represent your brand, build trust and turn visits into opportunities.",
      description:
        "Web design and development in Costa Rica: strategy, UX/UI, custom development, technical SEO and integrations with WhatsApp, CRM and automation.",
      problem: "The website doesn't communicate the company's real value or simply doesn't generate leads.",
      solution: "We design the website as part of your sales system: connected to your processes and built to convert.",
      services: [
        { title: "Corporate websites", text: "Your company's main presence, designed to build trust." },
        { title: "Landing pages", text: "Pages focused on one service or campaign." },
        { title: "Redesigns", text: "We renew existing sites without losing what works." },
        { title: "Integrations", text: "Forms, WhatsApp, CRM and automation." },
      ],
      cta: "Get a website quote",
      related: ["tecnologia", "gestion"],
    },
  ],
  web: {
    processTitle: "How we do it",
    process: [
      { name: "Strategy", text: "Goals, audience and value proposition before designing anything." },
      { name: "UX/UI", text: "Architecture and journeys so visitors find what they need." },
      { name: "Design", text: "A visual direction aligned with your brand, refined on every screen." },
      { name: "Development", text: "Custom code that is fast, secure and easy to maintain." },
      { name: "Integrations", text: "Forms, WhatsApp, CRM and automation, connected." },
      { name: "SEO", text: "A technical foundation to show up when people search for you." },
      { name: "Conversion", text: "Every section guides toward contact." },
    ],
    projectsTitle: "Websites we've designed",
  },
  method: {
    title: "How we work",
    steps: [
      { name: "Understand", text: "We learn how your organization works today." },
      { name: "Standardize", text: "We organize processes, owners and documents." },
      { name: "Improve", text: "We measure, correct and automate what makes sense." },
      { name: "Scale", text: "We leave the foundation ready to grow." },
    ],
  },
  projects: {
    title: "Projects",
    lead: "A selection of our work.",
    items: [
      {
        title: "Integra Sinergia",
        category: "Web design · Digital identity",
        summary: "A bilingual, fast website built to generate contact.",
        solutions: ["web"],
        image: "/showcase/integra-desktop.jpg",
        imageAlt: "Integra Sinergia website home page",
      },
    ],
    upcoming: "New projects in progress.",
  },
  about: {
    title: "Real people behind real solutions.",
    lead: "Integra Sinergia is a Costa Rican firm that connects management, sustainability and technology.",
    why: {
      title: "Why Integra exists",
      text: "A company doesn't have a process problem, an environmental problem and a digital problem. It has a system that works better or worse. Integra was created to work on those pieces together.",
    },
    thinking: {
      title: "How we think",
      principles: [
        { title: "Understand first", text: "Before proposing, we diagnose." },
        { title: "Solutions people use", text: "What we implement has to work day to day." },
        { title: "Direct relationship", text: "You work with the people doing the work." },
      ],
    },
    team: {
      title: "Team",
      lead: "Engineering, management and strategic thinking.",
    },
  },
  team: {
    members: [
      {
        name: "Fabiola Sosa Duarte, Eng.",
        initials: "FS",
        role: "Chemical Engineer · Co-founder",
        bio: "Environmental management, management systems, sustainability and process improvement.",
        photo: "/team/fabiola.jpg",
        photoAlt: "Fabiola Sosa Duarte",
      },
      {
        name: "María Celeste Amaya, Eng.",
        initials: "MA",
        role: "Chemical Engineer · Co-founder",
        bio: "Business management and improvement, focused on technical solutions that bring order to operations.",
        photo: "",
        photoAlt: "María Celeste Amaya",
      },
    ],
    pending: "Photo coming soon",
  },
  finalCta: {
    title: "What does your company need?",
    lead: "Tell us where you are and where you want to go.",
  },
  contact: {
    title: "Tell us what your company needs.",
    lead: "We reply personally. If you're not sure exactly what you need, we can help with that too.",
    direct: { whatsapp: "WhatsApp", email: "Email" },
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "WhatsApp",
      interest: "What do you need?",
      unsure: "I'm not sure. I need guidance.",
      message: "Message",
      messagePlaceholder: "Briefly tell us about the situation.",
      optional: "optional",
      submit: "Send",
      sending: "Sending…",
      successTitle: "Thank you. We received your message.",
      successText: "We'll write to you soon.",
      error: "We couldn't send your message. Please try again or reach us on WhatsApp.",
      invalidEmail: "Please check the email.",
      missing: "This field is required.",
      notConfigured: "The form isn't connected yet. Reach us on WhatsApp or by email.",
      privacy: "We only use your information to reply.",
    },
  },
  whatsapp: {
    label: "Message us on WhatsApp",
    defaultMessage: "Hello, Integra Sinergia. I'd like to talk about what my company needs.",
  },
  footer: {
    line: "Grow with solid systems.",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "This page doesn't exist.",
    text: "The link may have changed.",
    cta: "Back to home",
  },
};

export default en;
