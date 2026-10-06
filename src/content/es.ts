import type { Dictionary } from "./types";

/**
 * Contenido en español.
 * La home presenta; la profundidad vive en las páginas internas.
 * Nada de clientes, cifras, testimonios ni resultados inventados.
 */
const es: Dictionary = {
  meta: {
    title: "Integra Sinergia | Consultoría empresarial en Costa Rica",
    titleTemplate: "%s | Integra Sinergia",
    description:
      "Integra Sinergia conecta gestión, sostenibilidad, tecnología y diseño para ayudar a organizaciones a crecer con sistemas sólidos. Costa Rica.",
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
        "Gestión, sostenibilidad, cumplimiento, tecnología e IA y diseño web. Integramos disciplinas según el problema que tu organización necesita resolver.",
    },
    projects: {
      title: "Proyectos",
      description: "Proyectos de Integra Sinergia: diseño web, transformación digital, productos digitales y gestión empresarial.",
    },
    about: {
      title: "Nosotros",
      description:
        "Integra Sinergia es una firma costarricense fundada por las ingenieras químicas Fabiola Sosa Duarte y María Celeste Amaya.",
    },
    contact: {
      title: "Hablemos",
      description: "Cuéntanos qué necesita tu organización. Te respondemos por correo o WhatsApp.",
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
    allSolutions: "Todas las soluciones",
  },
  nav: {
    links: [
      { key: "home", label: "Inicio" },
      { key: "solutions", label: "Soluciones" },
      { key: "projects", label: "Proyectos" },
      { key: "about", label: "Nosotros" },
    ],
    cta: "Hablemos",
  },
  ctaPrimary: "Cuéntanos qué necesitas",
  ui: {
    related: "También te puede interesar",
    backToSolutions: "Soluciones",
    problem: "El problema",
    solution: "Nuestra solución",
    services: "Qué podemos hacer",
    howWeWork: "Cómo trabajamos",
    learnMore: "Conocer solución",
    visitSite: "Visitar sitio",
    viewProject: "Ver proyecto",
    screenshotSoon: "Capturas próximamente",
  },
  // TODO (Fabi): completar los pies de foto con el nombre real del evento y el año.
  photos: {
    team: { alt: "Fabiola Sosa Duarte y María Celeste Amaya, fundadoras de Integra Sinergia" },
    fabiola: { alt: "Ing. Fabiola Sosa Duarte" },
    mariaCeleste: { alt: "Ing. María Celeste Amaya" },
    brasil: { alt: "Fabiola Sosa Duarte en una conferencia regional en Brasil", caption: "Conferencia regional · Brasil" },
    panel: { alt: "Fabiola Sosa Duarte participando en un panel técnico", caption: "Panel técnico" },
    sostenibilidad: { alt: "Participación en un evento técnico sobre sostenibilidad", caption: "Evento técnico de sostenibilidad" },
    foro: { alt: "Participación en un foro técnico", caption: "Foro técnico" },
    reunion: { alt: "Reunión de trabajo", caption: "Reunión de trabajo" },
  },
  home: {
    hero: {
      titleA: "Tu empresa es un sistema.",
      titleB: "Haz que funcione mejor.",
      lead: "Integra Sinergia conecta gestión, sostenibilidad, tecnología y diseño para ayudar a organizaciones a crecer con sistemas sólidos.",
      primary: "Conocer soluciones",
      secondary: "Hablemos",
    },
    idea: {
      title: "Todo está conectado.",
      text: "Una organización no funciona por áreas aisladas. Gestión, procesos, sostenibilidad, tecnología y presencia digital tienen que trabajar juntos.",
    },
    solutions: {
      kicker: "Soluciones",
      title: "Qué hacemos",
    },
    featured: {
      kicker: "Proyecto destacado",
      projectSlug: "azul-clarito",
    },
    people: {
      kicker: "Quiénes están detrás",
      title: "Personas detrás de los sistemas.",
      text: "Integra Sinergia nace de una visión multidisciplinaria: combinar conocimiento técnico, gestión y tecnología para resolver problemas reales.",
      cta: "Conocer al equipo",
    },
    final: {
      title: "¿Tienes un reto y no sabes por dónde empezar?",
      titleB: "Hablemos.",
      cta: "Cuéntanos qué necesitas",
    },
  },
  solutionsPage: {
    title: "Soluciones para hacer que tu organización funcione mejor.",
    lead: "No todas las organizaciones necesitan lo mismo. Integramos distintas disciplinas según el problema que quieres resolver.",
    unsure: {
      title: "¿No sabes por dónde empezar?",
      text: "Es lo más común. Cuéntanos la situación y te orientamos.",
    },
  },
  solutions: [
    {
      id: "gestion",
      name: "Gestión",
      fullName: "Gestión, procesos y sistemas",
      summary: "Ordenamos procesos y sistemas para que la operación sea más clara y consistente.",
      promise: "Ordena la forma en que trabaja tu empresa.",
      lead: "Procesos claros, responsables definidos y sistemas de gestión que el equipo realmente usa.",
      description:
        "Mapeo y mejora de procesos, manuales y sistemas de gestión ISO 9001, 14001, 45001 y 50001 en Costa Rica. Preparación para auditorías y certificación.",
      problem: "La operación depende de unas pocas personas, los procesos cambian según quién los haga y cada auditoría genera estrés.",
      solution: "Diseñamos sistemas pensados para el día a día de tu equipo, no carpetas para la auditoría.",
      services: [
        { title: "Procesos", text: "Mapeo, rediseño y documentación de cómo se trabaja." },
        { title: "Sistemas ISO", text: "Implementación de ISO 9001, 14001, 45001 y 50001." },
        { title: "Auditorías", text: "Preparación para auditorías internas, externas y certificación." },
        { title: "Indicadores", text: "Pocos indicadores que importan, conectados a decisiones." },
      ],
      cta: "Ordenar mis procesos",
      related: ["cumplimiento", "tecnologia"],
      photo: "reunion",
    },
    {
      id: "sostenibilidad",
      name: "Sostenibilidad",
      fullName: "Sostenibilidad y gestión ambiental",
      summary: "Convertimos compromisos ambientales en acciones y sistemas de gestión.",
      promise: "Gestión ambiental que también mejora el negocio.",
      lead: "Cumplir lo que se exige y aprovechar lo ambiental para operar con más eficiencia.",
      description:
        "Consultoría ambiental en Costa Rica: planes de gestión ambiental y de residuos, Bandera Azul Ecológica (PBAE), ISO 14001 e indicadores de sostenibilidad.",
      problem: "Las exigencias ambientales crecen —de autoridades, clientes y cadenas de suministro— y se viven como un trámite más.",
      solution: "Conectamos lo ambiental con tus procesos y tus datos, para que genere eficiencia y no solo cumplimiento.",
      services: [
        { title: "Gestión ambiental", text: "Planes de gestión ambiental y de residuos." },
        { title: "Bandera Azul Ecológica", text: "Acompañamiento en el Programa Bandera Azul Ecológica (PBAE)." },
        { title: "ISO 14001", text: "Sistemas de gestión ambiental listos para operar y certificar." },
        { title: "Desempeño", text: "Indicadores y estrategia de sostenibilidad." },
      ],
      cta: "Fortalecer mi gestión ambiental",
      related: ["gestion", "cumplimiento"],
      photo: "sostenibilidad",
    },
    {
      id: "cumplimiento",
      name: "Cumplimiento",
      fullName: "Cumplimiento y gestión administrativa",
      summary: "Ayudamos a las organizaciones a entender y gestionar sus obligaciones.",
      promise: "Requisitos al día, sin carreras de último minuto.",
      lead: "Permisos, trámites y procesos de contratación bajo control, con responsables y fechas claras.",
      description:
        "Trámites, permisos sanitarios, patentes, auditorías de cumplimiento y gestión de ofertas en SICOP para empresas en Costa Rica.",
      problem: "Permisos, patentes y contratación pública consumen tiempo y conocimiento que el equipo no siempre tiene.",
      solution: "Convertimos los requisitos en un proceso controlado, con responsables, fechas y evidencias.",
      services: [
        { title: "Trámites y permisos", text: "Acompañamiento en permisos sanitarios y trámites." },
        { title: "Patentes", text: "Patentes y requisitos municipales al día." },
        { title: "Auditorías de cumplimiento", text: "Saber qué falta antes de que alguien lo pregunte." },
        { title: "SICOP", text: "Preparación y gestión de ofertas en contratación pública." },
      ],
      cta: "Poner mis requisitos al día",
      related: ["gestion", "sostenibilidad"],
    },
    {
      id: "tecnologia",
      name: "Tecnología e IA",
      fullName: "Automatización e inteligencia artificial",
      summary: "Usamos datos, automatización e IA para simplificar procesos y mejorar decisiones.",
      promise: "Menos trabajo repetitivo. Más tiempo para crecer.",
      lead: "Automatización, datos e inteligencia artificial aplicados a procesos reales.",
      description:
        "Automatización de procesos, integraciones, tableros de indicadores y asistentes de inteligencia artificial para empresas en Costa Rica.",
      problem: "El equipo dedica horas a copiar datos, perseguir aprobaciones y armar reportes.",
      solution: "Automatizamos procesos que primero ordenamos. Automatizar el desorden solo lo acelera.",
      services: [
        { title: "Automatización", text: "Flujos, formularios y aprobaciones que avanzan solos." },
        { title: "Integraciones", text: "Las herramientas que ya usas, conectadas entre sí." },
        { title: "Datos y tableros", text: "Indicadores que se actualizan sin copiar y pegar." },
        { title: "Asistentes de IA", text: "Respuestas basadas en tus procedimientos y documentos." },
      ],
      cta: "Automatizar mi operación",
      related: ["gestion", "web"],
    },
    {
      id: "web",
      name: "Diseño web",
      fullName: "Diseño y desarrollo web",
      summary: "Creamos experiencias digitales que representan y fortalecen el negocio.",
      promise: "Tu presencia digital también es parte de tu negocio.",
      lead: "Diseñamos y desarrollamos sitios web que representan tu marca, generan confianza y convierten visitas en oportunidades.",
      description:
        "Diseño y desarrollo web en Costa Rica: estrategia, UX/UI, desarrollo a medida, SEO técnico e integraciones con WhatsApp, CRM y automatizaciones.",
      problem: "El sitio no comunica el valor real de la empresa o simplemente no genera contactos.",
      solution: "Diseñamos la web como parte de tu sistema comercial: conectada con tus procesos y pensada para convertir.",
      services: [
        { title: "Sitios corporativos", text: "La presencia principal de tu empresa, diseñada para generar confianza." },
        { title: "Landing pages", text: "Páginas enfocadas en un servicio o campaña." },
        { title: "Rediseño", text: "Renovamos sitios existentes sin perder lo que funciona." },
        { title: "Integraciones", text: "Formularios, WhatsApp, CRM y automatizaciones." },
      ],
      cta: "Cotizar mi sitio web",
      related: ["tecnologia", "gestion"],
    },
  ],
  web: {
    processTitle: "Cómo lo hacemos",
    process: [
      { name: "Estrategia", text: "Objetivos, público y propuesta de valor antes de diseñar nada." },
      { name: "UX/UI", text: "Arquitectura y recorridos pensados para que el visitante encuentre lo que busca." },
      { name: "Diseño", text: "Una dirección visual alineada con tu marca, cuidada en cada pantalla." },
      { name: "Desarrollo", text: "Código a medida, rápido, seguro y fácil de mantener." },
      { name: "Integraciones", text: "Formularios, WhatsApp, CRM y automatizaciones conectados." },
      { name: "SEO", text: "Base técnica para aparecer cuando te buscan." },
      { name: "Conversión", text: "Cada sección guía hacia el contacto." },
    ],
    projectsTitle: "Proyectos digitales",
    mockupAlt: "Sitio web de Integra Sinergia en una computadora",
    mobileAlt: "Sitio web de Integra Sinergia en un teléfono",
  },
  method: {
    title: "Cómo trabajamos",
    // TODO (Fabi): validar los textos de cada etapa.
    steps: [
      { name: "Comprender", text: "Entendemos cómo funciona hoy tu organización." },
      { name: "Estandarizar", text: "Ordenamos procesos, responsables y documentos." },
      { name: "Mejorar", text: "Medimos, corregimos y automatizamos lo que conviene." },
      { name: "Escalar", text: "Dejamos la base lista para crecer." },
    ],
  },
  projects: {
    title: "Proyectos",
    lead: "Ideas que se convierten en sistemas, herramientas y experiencias.",
    // Solo proyectos reales. Capturas en /public/projects/ con el nombre indicado en `image`.
    items: [
      {
        slug: "azul-clarito",
        title: "Azul Clarito",
        category: "Diseño web · Experiencia digital",
        summary: "Diseño y desarrollo de una experiencia digital que conecta identidad, contenido y presencia web.",
        image: "/projects/azul-clarito.jpg",
        imageAlt: "Sitio web de Azul Clarito",
        href: "https://azulclaritocr.com/",
        solutions: ["web"],
      },
      {
        slug: "kio",
        title: "KIO — Digitalización de sistema de producción",
        category: "Transformación digital · Gestión de procesos",
        summary: "Digitalización de un sistema de producción para facilitar el registro, seguimiento y organización de la información operativa.",
        image: "/projects/kio.jpg",
        imageAlt: "Sistema de producción digitalizado para KIO",
        solutions: ["tecnologia", "gestion"],
      },
      {
        slug: "plataforma-diabetes",
        title: "Plataforma de gestión para diabetes",
        category: "Producto digital · Desarrollo web",
        summary: "Desarrollo de una plataforma digital para registrar, organizar y visualizar información relacionada con el control de la diabetes.",
        image: "/projects/plataforma-diabetes.jpg",
        imageAlt: "Pantallas de la plataforma de gestión para diabetes",
        solutions: ["web", "tecnologia"],
      },
      {
        slug: "gestion-empresarial",
        title: "Gestión empresarial",
        category: "Asesoría · Procesos y sistemas",
        summary: "Acompañamiento a organizaciones para ordenar procesos, fortalecer su gestión y convertir necesidades operativas en sistemas de trabajo más claros.",
        photo: "reunion",
        solutions: ["gestion"],
      },
      {
        slug: "integra-sinergia",
        title: "Integra Sinergia",
        category: "Diseño web · Identidad digital",
        summary: "Sitio bilingüe, rápido y pensado para generar contacto.",
        image: "/showcase/integra-desktop.jpg",
        imageAlt: "Página de inicio del sitio de Integra Sinergia",
        solutions: ["web"],
      },
    ],
    experience: {
      kicker: "Trayectoria",
      title: "Experiencia en espacios técnicos y de cooperación regional.",
      text: "Detrás de cada proyecto hay experiencia real en sostenibilidad, normalización y gestión.",
    },
  },
  about: {
    title: "Personas reales detrás de soluciones reales.",
    lead: "Integra Sinergia es el proyecto. Fabiola y María Celeste son las personas detrás.",
    who: {
      title: "Quiénes somos",
      text: "Una firma costarricense que conecta gestión, sostenibilidad, tecnología y diseño. Nace de una idea simple: una organización no tiene un problema de procesos, otro ambiental y otro digital. Tiene un sistema que funciona mejor o peor.",
    },
    howWeWork: {
      title: "Nuestra forma de trabajar",
      principles: [
        { title: "Primero entender", text: "Antes de proponer, diagnosticamos." },
        { title: "Soluciones que se usan", text: "Lo que implementamos tiene que funcionar en el día a día." },
        { title: "Trato directo", text: "Trabajas con quienes hacen el trabajo." },
      ],
    },
    experience: {
      kicker: "Experiencia",
      title: "Conocimiento técnico construido en el terreno.",
      text: "Fabiola ha participado en espacios técnicos, foros y actividades de cooperación regional relacionados con:",
      areas: [
        "Sostenibilidad",
        "Normalización",
        "Refrigeración responsable",
        "Ecoetiquetado",
        "Compras públicas sostenibles",
        "Industria",
      ],
    },
    people: { title: "Equipo" },
  },
  team: {
    // TODO (Fabi): validar biografías.
    members: [
      {
        name: "Ing. Fabiola Sosa Duarte",
        initials: "FS",
        role: "Ingeniera Química · Cofundadora",
        bio: "Gestión ambiental, sistemas de gestión, sostenibilidad y mejora de procesos.",
        photo: "fabiola",
      },
      {
        name: "Ing. María Celeste Amaya",
        initials: "MA",
        role: "Ingeniera Química · Cofundadora",
        bio: "Gestión y mejora empresarial, con foco en soluciones técnicas que ordenan la operación.",
        photo: "mariaCeleste",
      },
    ],
  },
  finalCta: {
    title: "¿Tienes un reto y no sabes por dónde empezar?",
    lead: "Cuéntanos dónde estás y hacia dónde quieres llegar.",
  },
  contact: {
    title: "Cuéntanos qué necesita tu organización.",
    lead: "Te respondemos personalmente. Si no sabes exactamente qué necesitas, también podemos ayudarte.",
    direct: { whatsapp: "WhatsApp", email: "Correo" },
    form: {
      name: "Nombre",
      company: "Empresa",
      email: "Email",
      phone: "WhatsApp",
      interest: "¿Qué necesitas?",
      unsure: "No estoy seguro. Necesito orientación.",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos brevemente la situación.",
      optional: "opcional",
      submit: "Enviar",
      sending: "Enviando…",
      successTitle: "Gracias. Recibimos tu mensaje.",
      successText: "Te escribiremos pronto.",
      error: "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
      invalidEmail: "Revisa el email.",
      missing: "Este campo es necesario.",
      notConfigured: "El formulario aún no está conectado. Escríbenos por WhatsApp o correo.",
      privacy: "Usamos tus datos solo para responderte.",
    },
  },
  whatsapp: {
    label: "Escríbenos por WhatsApp",
    defaultMessage: "Hola, Integra Sinergia. Me gustaría conversar sobre lo que necesita mi organización.",
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
