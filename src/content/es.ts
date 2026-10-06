import type { Dictionary } from "./types";

/**
 * Contenido en español.
 * Regla editorial: si una idea cabe en 10 palabras, no usar 40.
 * Nada de clientes, cifras, testimonios ni resultados inventados.
 */
const es: Dictionary = {
  meta: {
    title: "Integra Sinergia | Consultoría empresarial en Costa Rica",
    titleTemplate: "%s | Integra Sinergia",
    description:
      "Integramos gestión, sostenibilidad y tecnología para que las empresas crezcan con sistemas sólidos. Sistemas ISO, gestión ambiental, automatización y diseño web en Costa Rica.",
    keywords: [
      "consultoría empresarial Costa Rica",
      "consultoría ambiental",
      "gestión ambiental",
      "sostenibilidad",
      "PBAE",
      "sistemas de gestión",
      "ISO 9001",
      "ISO 14001",
      "mejora de procesos",
      "automatización",
      "inteligencia artificial",
      "diseño web Costa Rica",
      "desarrollo web",
    ],
  },
  pages: {
    solutions: {
      title: "Soluciones",
      description:
        "Gestión, sostenibilidad, tecnología y presencia digital. Combinamos disciplinas según lo que necesita cada organización.",
    },
    projects: {
      title: "Proyectos",
      description: "Proyectos de Integra Sinergia: el problema, la solución y cómo se conectaron las piezas.",
    },
    method: {
      title: "Metodología",
      description: "Comprender, estandarizar, mejorar y escalar. Así trabajamos con cada organización.",
    },
    about: {
      title: "Nosotros",
      description:
        "Integra Sinergia es una firma boutique costarricense fundada por las ingenieras químicas Fabiola Sosa Duarte y María Celeste Amaya.",
    },
    contact: {
      title: "Hablemos",
      description: "Cuéntanos dónde está tu empresa y hacia dónde quiere llegar. Te respondemos por correo o WhatsApp.",
    },
  },
  common: {
    skip: "Saltar al contenido",
    homeLabel: "Integra Sinergia, ir al inicio",
    homeShort: "Inicio",
    switchTo: "View in English",
    switchToShort: "EN",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },
  nav: {
    links: [
      { key: "solutions", label: "Soluciones" },
      { key: "projects", label: "Proyectos" },
      { key: "about", label: "Nosotros" },
    ],
    cta: "Hablemos",
  },
  ui: {
    home: "Inicio",
    viewAll: "Ver todo",
    prev: "Anterior",
    next: "Siguiente",
    related: "Se conecta con",
    talkTitle: "¿Hablamos de tu caso?",
    talkText: "Cuéntanos tu situación y te decimos por dónde empezar.",
  },
  hero: {
    title: "Hacemos que tu empresa funcione mejor.",
    lead: "Integramos gestión, sostenibilidad y tecnología para que las empresas crezcan con sistemas sólidos.",
    ctaPrimary: "Cuéntanos qué necesitas",
    ctaSecondary: "Conoce Integra",
  },
  manifesto: {
    title: "Tu empresa es un sistema.",
    pieces: ["Personas", "Procesos", "Información", "Tecnología", "Sostenibilidad"],
    closing: "Cuando las piezas trabajan juntas, el negocio funciona mejor.",
  },
  pieces: {
    kicker: "Solución integral",
    title: "Integramos las piezas.",
    lead: "Combinamos disciplinas según lo que realmente necesita cada organización.",
    cta: "Explorar soluciones",
    pillars: [
      {
        id: "gestion",
        name: "Gestión",
        line: "Procesos claros, requisitos al día y sistemas ISO que se usan.",
        areas: ["gestion", "cumplimiento"],
      },
      {
        id: "sostenibilidad",
        name: "Sostenibilidad",
        line: "Gestión ambiental que también genera eficiencia.",
        areas: ["sostenibilidad"],
      },
      {
        id: "tecnologia",
        name: "Tecnología",
        line: "Datos para decidir. Automatización para avanzar.",
        areas: ["datos", "automatizacion"],
      },
      {
        id: "digital",
        name: "Presencia digital",
        line: "Sitios web que generan confianza y oportunidades.",
        areas: ["web"],
      },
    ],
  },
  digital: {
    kicker: "Diseño y tecnología",
    title: "Tu presencia digital también es parte de tu negocio.",
    lead: "Diseñamos y desarrollamos sitios web que representan tu marca, generan confianza y convierten visitantes en oportunidades.",
    cta: "Ver soluciones digitales",
    mockupAlt: "Sitio web de Integra Sinergia en una pantalla de computadora",
    mobileAlt: "Sitio web de Integra Sinergia en un teléfono",
  },
  automation: {
    lines: ["Menos trabajo repetitivo.", "Más tiempo para hacer crecer el negocio."],
    lead: "Automatización e inteligencia artificial aplicadas a procesos reales.",
    cta: "Ver automatización e IA",
    examplesTitle: "Dónde suele aplicarse",
    examples: [
      { title: "Vencimientos", text: "Alertas para permisos, patentes, calibraciones y auditorías." },
      { title: "Reportes", text: "Indicadores que se actualizan desde tus formularios y hojas de cálculo." },
      { title: "Solicitudes", text: "Formularios que clasifican, asignan y avisan al responsable." },
      { title: "Asistente interno", text: "Respuestas basadas en tus procedimientos y documentos." },
    ],
  },
  web: {
    processTitle: "Cómo lo hacemos",
    process: ["Estrategia", "UX/UI", "Diseño", "Desarrollo", "Integraciones", "SEO", "Conversión", "Crecimiento"],
  },
  method: {
    kicker: "Metodología",
    title: "Tenemos un método.",
    lead: "Primero entendemos. Después ordenamos, mejoramos y preparamos la empresa para crecer.",
    // TODO (Fabi): validar los textos de cada etapa.
    steps: [
      {
        name: "Comprender",
        text: "Entendemos cómo funciona hoy tu organización: procesos, requisitos, datos y objetivos.",
        output: "Diagnóstico y prioridades",
      },
      {
        name: "Estandarizar",
        text: "Ordenamos procesos, responsables y documentos para que el trabajo no dependa de la memoria.",
        output: "Procesos claros y documentados",
      },
      {
        name: "Mejorar",
        text: "Medimos, corregimos y automatizamos lo que conviene.",
        output: "Indicadores y mejoras en marcha",
      },
      {
        name: "Escalar",
        text: "Dejamos la base lista para crecer, certificarse o expandirse.",
        output: "Una organización preparada",
      },
    ],
    cta: "Conocer nuestra metodología",
    outputLabel: "Resultado",
  },
  solutions: {
    title: "Integramos las piezas.",
    lead: "Cada organización necesita una combinación distinta. Estas son las piezas con las que trabajamos.",
    labels: { problem: "El problema", outcome: "Lo que obtienes", why: "Cómo lo abordamos" },
    areas: [
      {
        id: "gestion",
        name: "Gestión, procesos y sistemas",
        short: "Procesos claros y sistemas de gestión que se usan.",
        description:
          "Mapeo y rediseño de procesos, manuales y sistemas de gestión ISO 9001, 14001, 45001 y 50001 en Costa Rica. Preparación para auditorías y certificación.",
        problem: "La operación depende de unas pocas personas y cada auditoría genera estrés.",
        outcomes: [
          "Mapeo y rediseño de procesos",
          "Manuales y procedimientos operativos",
          "Sistemas de gestión ISO 9001, 14001, 45001 y 50001",
          "Preparación para auditorías y certificación",
        ],
        why: "Diseñamos sistemas para el día a día de tu equipo, no carpetas para la auditoría.",
        cta: "Ordenar mis procesos",
        related: ["datos", "cumplimiento", "automatizacion"],
      },
      {
        id: "sostenibilidad",
        name: "Sostenibilidad y gestión ambiental",
        short: "Gestión ambiental con impacto real en el negocio.",
        description:
          "Consultoría ambiental en Costa Rica: planes de gestión ambiental y de residuos, Bandera Azul Ecológica (PBAE), ISO 14001 e indicadores de sostenibilidad.",
        problem: "Las exigencias ambientales crecen y la gestión ambiental se vive como un trámite más.",
        outcomes: [
          "Planes de gestión ambiental y de residuos",
          "Acompañamiento en el Programa Bandera Azul Ecológica (PBAE)",
          "Estrategia e indicadores de sostenibilidad",
          "Sistemas de gestión ambiental ISO 14001",
        ],
        why: "Conectamos lo ambiental con tus procesos y tus datos, para que genere eficiencia y no solo cumplimiento.",
        cta: "Fortalecer mi gestión ambiental",
        related: ["gestion", "cumplimiento", "datos"],
      },
      {
        id: "cumplimiento",
        name: "Cumplimiento y gestión administrativa",
        short: "Requisitos al día, sin carreras de último minuto.",
        description:
          "Trámites, permisos sanitarios, patentes, auditorías de cumplimiento y gestión de ofertas en SICOP para empresas en Costa Rica.",
        problem: "Permisos, patentes y contratación pública consumen tiempo y conocimiento que el equipo no siempre tiene.",
        outcomes: [
          "Trámites y permisos sanitarios",
          "Patentes y requisitos municipales",
          "Auditorías de cumplimiento",
          "Preparación y gestión de ofertas en SICOP",
        ],
        why: "Convertimos los requisitos en un proceso controlado, con responsables, fechas y evidencias.",
        cta: "Poner mis requisitos al día",
        related: ["gestion", "sostenibilidad", "automatizacion"],
      },
      {
        id: "datos",
        name: "Datos, indicadores y mejora",
        short: "Decisiones basadas en lo que realmente pasa.",
        description:
          "Indicadores (KPI), tableros de seguimiento, análisis de causa raíz y planes de mejora para decidir con datos confiables.",
        problem: "Los datos están repartidos en hojas de cálculo y correos, y nadie ve el desempeño completo.",
        outcomes: [
          "Indicadores definidos por proceso",
          "Tableros de seguimiento",
          "Análisis de causa raíz y planes de mejora",
          "Rutinas de revisión para la dirección",
        ],
        why: "Elegimos pocos indicadores que importan y los conectamos con decisiones concretas.",
        cta: "Medir lo que importa",
        related: ["gestion", "automatizacion", "web"],
      },
      {
        id: "automatizacion",
        name: "Automatización e inteligencia artificial",
        short: "Menos trabajo repetitivo, más capacidad.",
        description:
          "Automatización de procesos, integraciones entre herramientas, reportes automáticos y asistentes de inteligencia artificial para empresas en Costa Rica.",
        problem: "El equipo dedica horas a copiar datos, perseguir aprobaciones y armar reportes.",
        outcomes: [
          "Automatización de flujos y formularios",
          "Integraciones entre las herramientas que ya usas",
          "Reportes que se generan solos",
          "Asistentes de IA basados en tu propia información",
        ],
        why: "Automatizamos procesos que primero ordenamos. Automatizar el desorden solo lo acelera.",
        cta: "Automatizar mi operación",
        related: ["datos", "gestion", "web"],
      },
      {
        id: "web",
        name: "Diseño y desarrollo web",
        short: "Una presencia digital que trabaja para tu negocio.",
        description:
          "Diseño y desarrollo web en Costa Rica: estrategia, UX/UI, desarrollo a medida, SEO técnico e integraciones con WhatsApp, CRM y automatizaciones.",
        problem: "El sitio no comunica el valor real de la empresa o no genera contactos.",
        outcomes: [
          "Estrategia digital y arquitectura de contenidos",
          "Diseño UX/UI y desarrollo a medida",
          "SEO técnico y analítica",
          "Integración con formularios, WhatsApp, CRM y automatizaciones",
        ],
        why: "Diseñamos la web como parte de tu sistema comercial, no como un folleto.",
        cta: "Cotizar mi sitio web",
        related: ["automatizacion", "datos", "gestion"],
      },
    ],
  },
  projects: {
    kicker: "Proyectos",
    title: "Trabajo seleccionado.",
    lead: "El problema, la solución y cómo se conectaron las piezas.",
    labels: { problem: "Problema", solution: "Solución" },
    // Agregar solo proyectos reales y autorizados por el cliente.
    items: [
      {
        title: "Integra Sinergia",
        client: "Proyecto propio",
        problem: "La marca evolucionó y su presencia digital no lo reflejaba.",
        solution: "Estrategia, diseño y desarrollo de un sitio bilingüe, rápido y pensado para generar contacto.",
        areas: ["web"],
        image: "/showcase/integra-desktop.jpg",
        imageAlt: "Página de inicio del sitio de Integra Sinergia",
      },
    ],
    cta: "Ver proyectos",
    upcoming: "Nuevos casos en preparación.",
  },
  team: {
    kicker: "Equipo",
    title: "Personas reales detrás de las soluciones.",
    lead: "Combinamos ingeniería, gestión y pensamiento estratégico para construir soluciones que funcionen en la realidad.",
    // TODO (Fabi): agregar fotografías profesionales en /public/team/ y validar biografías.
    members: [
      {
        name: "Ing. Fabiola Sosa Duarte",
        initials: "FS",
        role: "Ingeniera Química · Cofundadora",
        bio: "Gestión ambiental, sistemas de gestión, sostenibilidad y mejora de procesos.",
        photo: "",
        photoAlt: "Ing. Fabiola Sosa Duarte",
      },
      {
        name: "Ing. María Celeste Amaya",
        initials: "MA",
        role: "Ingeniera Química · Cofundadora",
        bio: "Gestión y mejora empresarial, con foco en soluciones técnicas que ordenan la operación.",
        photo: "",
        photoAlt: "Ing. María Celeste Amaya",
      },
    ],
    pending: "Fotografía próximamente",
  },
  about: {
    title: "Una firma boutique que ve el sistema completo.",
    lead: "Integra Sinergia nace para resolver de forma conectada lo que normalmente se gestiona por separado.",
    body: [
      "Una empresa no tiene un problema de procesos, otro ambiental y otro digital. Tiene un sistema que funciona mejor o peor.",
      "Por eso trabajamos directamente con quienes toman decisiones, desde el diagnóstico hasta la implementación.",
    ],
  },
  finalCta: {
    title: "¿Qué necesita tu empresa?",
    lead: "Cuéntanos dónde estás y hacia dónde quieres llegar.",
    cta: "Hablar con Integra",
  },
  contact: {
    kicker: "Hablemos",
    title: "Cuéntanos qué necesitas.",
    lead: "No necesitas tener el problema definido. Para eso está el diagnóstico.",
    direct: {
      title: "O escríbenos directamente",
      whatsapp: "WhatsApp",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      locationValue: "Costa Rica",
    },
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa",
      phone: "Teléfono o WhatsApp",
      interest: "¿Sobre qué quieres hablar?",
      interestHint: "Puedes elegir varias.",
      unsure: "No estoy seguro de qué necesito",
      message: "Cuéntanos la situación",
      messagePlaceholder: "Por ejemplo: queremos certificarnos en ISO 9001, pero no tenemos procesos documentados…",
      optional: "opcional",
      submit: "Enviar",
      sending: "Enviando…",
      successTitle: "Gracias. Recibimos tu mensaje.",
      successText: "Te escribiremos pronto para conversar.",
      error: "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
      invalidEmail: "Revisa el correo electrónico.",
      missing: "Este campo es necesario.",
      notConfigured: "El formulario aún no está conectado. Escríbenos por WhatsApp o correo.",
      privacy: "Usamos tus datos solo para responderte.",
    },
  },
  whatsapp: {
    label: "Hablar con Integra",
    defaultMessage: "Hola, Integra Sinergia. Me gustaría conversar sobre lo que necesita mi empresa.",
  },
  footer: {
    line: "Crece con sistemas sólidos.",
    rights: "Todos los derechos reservados.",
  },
  notFound: {
    title: "Esta página no existe.",
    text: "Puede que el enlace haya cambiado.",
    cta: "Volver al inicio",
  },
};

export default es;
