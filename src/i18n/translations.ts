export type Lang = 'en' | 'es'

export interface Package {
  icon: string
  name: string
  subtitle?: string
  desc: string
  tags: string[]
  turnaround?: string
  featured?: boolean
  retainer?: boolean
}

interface Translations {
  header: {
    navServices: string
    navWork: string
    navAbout: string
    navContact: string
    cta: string
  }
  hero: {
    badge: string
    heading1: string
    heading2: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    stats: Array<{ value: string; label: string }>
  }
  services: {
    label: string
    title1: string
    title2: string
    subtitle: string
    groupBuilder: string
    groupCustom: string
    badgeMostPopular: string
    ctaGetQuote: string
    noteText: string
    noteCta: string
    builderPackages: Package[]
    customPackages: Package[]
  }
  work: {
    label: string
    title: string
    subtitle: string
    category: string
    projectName: string
    projectDesc: string
    tags: string[]
  }
  about: {
    label: string
    title1: string
    title2: string
    body1: string
    body2: string
    body3: string
    stackLabel: string
  }
  contact: {
    label: string
    title1: string
    title2: string
    sub: string
    perks: string[]
    labelName: string
    placeholderName: string
    labelEmail: string
    placeholderEmail: string
    labelBudget: string
    budgetPlaceholder: string
    budgets: string[]
    labelMessage: string
    placeholderMessage: string
    errorMsg: string
    submitIdle: string
    submitSending: string
    successTitle: string
    successBody: string
  }
  footer: {
    navServices: string
    navWork: string
    navAbout: string
    navContact: string
    copy: string
    tagline: string
  }
}

export const translations: Record<Lang, Translations> = {
  en: {
    header: {
      navServices: 'Services',
      navWork: 'Work',
      navAbout: 'About',
      navContact: 'Contact',
      cta: 'Work with me',
    },
    hero: {
      badge: 'Available for new projects',
      heading1: 'Crafted sites.',
      heading2: 'Refined details.',
      sub: "I'm a freelance web developer specialising in clean, fast, beautifully considered websites for small businesses, creatives, and founders who care about the details as much as I do.",
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See my work',
      stats: [
        { value: '5 yrs', label: 'in software development' },
        { value: '50+', label: 'projects delivered' },
        { value: '100%', label: 'on-time delivery' },
      ],
    },
    services: {
      label: 'What I offer',
      title1: 'Packages built',
      title2: 'for where you are',
      subtitle: 'Every site is built to your business — not assembled from a theme. Every quote is tailored.',
      groupBuilder: 'Website builder packages',
      groupCustom: 'Custom coded packages',
      badgeMostPopular: 'Most popular',
      ctaGetQuote: 'Get a quote',
      noteText: 'Not sure which fits?',
      noteCta: "Let's talk",
      builderPackages: [
        {
          icon: '🌱',
          name: 'Starter Presence',
          desc: '5-page Wix or Squarespace site — ideal for restaurants, salons, or service providers who just need to be found online. Includes branding setup and contact form.',
          tags: ['Wix / Squarespace', 'Mobile responsive'],
          turnaround: '~1 week',
        },
        {
          icon: '⭐',
          name: 'Business Pro',
          subtitle: 'React + TypeScript — up to 5 pages',
          desc: 'A hand-coded React and TypeScript site with SEO built in from the start. Fast, clean, and fully custom — no templates, no bloat. Best for businesses that want a professional web presence that actually performs.',
          tags: ['React', 'TypeScript', 'SEO included', 'Performance optimized'],
          turnaround: '2–4 weeks',
          featured: true,
        },
        {
          icon: '🛒',
          name: 'eCommerce Launch',
          desc: 'Online store setup with product catalog, payment processing, automated emails, and inventory basics. Includes Toast integration for restaurants and food businesses with online ordering needs.',
          tags: ['Shopify / Wix eCommerce', 'Toast (food ordering)', 'Payment setup'],
          turnaround: '2–3 weeks',
        },
      ],
      customPackages: [
        {
          icon: '🔧',
          name: 'Full Custom + Features',
          desc: 'Complex apps — custom portals, booking systems, dashboards, multi-location business sites. Scoped per project.',
          tags: ['Custom scope', 'Auth / dashboards', 'API integrations'],
        },
        {
          icon: '✦',
          name: 'Website Modernization',
          desc: "Got an outdated site that no longer represents your brand? I rebuild it from the ground up — modern stack, faster performance, mobile-first, and built to last. Ideal for businesses moving off old WordPress, dated HTML sites, or templates they've outgrown.",
          tags: ['Legacy → Modern', 'Performance', 'Mobile-first', 'Custom scope'],
        },
        {
          icon: '🔁',
          name: 'Maintenance & Updates',
          desc: 'Monthly content updates, performance monitoring, security patches, and priority support.',
          tags: ['Recurring retainer', 'Priority support'],
          retainer: true,
        },
      ],
    },
    work: {
      label: 'Selected work',
      title: 'Latest concept project',
      subtitle: 'Every project is built from scratch — no themes, no shortcuts, no cut corners.',
      category: 'Home Services',
      projectName: 'Reborn Remodeling & Repairs',
      projectDesc: 'Full business site for a residential remodeling contractor. Includes service pages for kitchen, bathroom, and basement remodels, a reviews section, and a contact form for online quotes.',
      tags: ['React', 'TypeScript', 'Mobile Responsive'],
    },
    about: {
      label: 'About me',
      title1: 'Built by one.',
      title2: 'Crafted with care.',
      body1: "I'm Michelle — a full-stack developer with five years of professional experience and a genuine obsession with getting the details right. Spun Pages is my solo studio, and that's entirely by design. When you hire me, you work directly with the person writing your code, making your design decisions, and sweating every margin and millisecond.",
      body2: "As a woman in tech, I've built my career on precision and craft — two things I refuse to treat as optional. Every project I take on gets my full attention, delivered on time, with code I'd be proud to maintain for years to come. No shortcuts, no handoffs to someone you haven't met.",
      body3: "If you believe the gap between a good website and a great one lives in the details, we'll get along just fine.",
      stackLabel: 'My stack',
    },
    contact: {
      label: 'Get in touch',
      title1: "Let's build something",
      title2: 'worth noticing',
      sub: "Tell me about your project and I'll get back to you within one business day. No hard sell, no vague estimates — just a straight conversation about what you need.",
      perks: [
        'Free 30-min discovery call',
        'Clear proposal within 3 business days',
        'Fixed-price or retainer engagements',
        'Source code is always yours',
      ],
      labelName: 'Name',
      placeholderName: 'Your name',
      labelEmail: 'Email',
      placeholderEmail: 'you@company.com',
      labelBudget: 'Budget range',
      budgetPlaceholder: 'Select a range…',
      budgets: ['Under $1,000', '$1,000 – $3,000', 'Over $3,000', 'Not sure yet'],
      labelMessage: 'About your project',
      placeholderMessage: 'What are you building? Any deadlines or must-haves to know about?',
      errorMsg: 'Something went wrong — please try again or email info@spunpages.com directly.',
      submitIdle: 'Send message →',
      submitSending: 'Sending…',
      successTitle: 'Message received',
      successBody: "I'll be in touch within one business day.",
    },
    footer: {
      navServices: 'Services',
      navWork: 'Work',
      navAbout: 'About',
      navContact: 'Contact',
      copy: 'Crafted with care.',
      tagline: 'Crafted Sites. Refined Details.',
    },
  },

  es: {
    header: {
      navServices: 'Servicios',
      navWork: 'Trabajo',
      navAbout: 'Sobre mí',
      navContact: 'Contacto',
      cta: 'Trabajemos juntos',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      heading1: 'Sitios elaborados.',
      heading2: 'Detalles refinados.',
      sub: 'Soy una desarrolladora web freelance especializada en sitios limpios, rápidos y cuidadosamente diseñados para pequeñas empresas, creativos y emprendedores que valoran los detalles tanto como yo.',
      ctaPrimary: 'Iniciar un proyecto',
      ctaSecondary: 'Ver mi trabajo',
      stats: [
        { value: '5 años', label: 'en desarrollo de software' },
        { value: '50+', label: 'proyectos entregados' },
        { value: '100%', label: 'entrega puntual' },
      ],
    },
    services: {
      label: 'Lo que ofrezco',
      title1: 'Paquetes diseñados',
      title2: 'para tu momento',
      subtitle: 'Cada sitio se construye para tu negocio, no se ensambla desde una plantilla. Cada cotización es personalizada.',
      groupBuilder: 'Paquetes con constructor de sitios',
      groupCustom: 'Paquetes de código personalizado',
      badgeMostPopular: 'Más popular',
      ctaGetQuote: 'Solicitar cotización',
      noteText: '¿No sabes cuál es el indicado?',
      noteCta: 'Hablemos',
      builderPackages: [
        {
          icon: '🌱',
          name: 'Presencia Inicial',
          desc: 'Sitio de 5 páginas en Wix o Squarespace — ideal para restaurantes, salones o prestadores de servicios que solo necesitan estar en línea. Incluye configuración de marca y formulario de contacto.',
          tags: ['Wix / Squarespace', 'Adaptado a móvil'],
          turnaround: '~1 semana',
        },
        {
          icon: '⭐',
          name: 'Business Pro',
          subtitle: 'React + TypeScript — hasta 5 páginas',
          desc: 'Un sitio React y TypeScript escrito a mano con SEO integrado desde el inicio. Rápido, limpio y totalmente personalizado — sin plantillas, sin excesos. Ideal para negocios que quieren una presencia web profesional que realmente funcione.',
          tags: ['React', 'TypeScript', 'SEO incluido', 'Rendimiento optimizado'],
          turnaround: '2–4 semanas',
          featured: true,
        },
        {
          icon: '🛒',
          name: 'Lanzamiento eCommerce',
          desc: 'Configuración de tienda en línea con catálogo de productos, procesamiento de pagos, correos automatizados e inventario básico. Incluye integración con Toast para restaurantes y negocios de alimentos con pedidos en línea.',
          tags: ['Shopify / Wix eCommerce', 'Toast (pedidos de comida)', 'Configuración de pagos'],
          turnaround: '2–3 semanas',
        },
      ],
      customPackages: [
        {
          icon: '🔧',
          name: 'Personalizado + Funciones',
          desc: 'Aplicaciones complejas — portales personalizados, sistemas de reservas, tableros, sitios para negocios con múltiples ubicaciones. Alcance definido por proyecto.',
          tags: ['Alcance personalizado', 'Auth / tableros', 'Integraciones API'],
        },
        {
          icon: '✦',
          name: 'Modernización de Sitio Web',
          desc: '¿Tu sitio ya no representa tu marca? Lo reconstruyo desde cero — stack moderno, mejor rendimiento, diseño mobile-first y construido para durar. Ideal para negocios que quieren salir de WordPress antiguo, HTML desactualizado o plantillas que ya superaron.',
          tags: ['Legacy → Moderno', 'Rendimiento', 'Mobile-first', 'Alcance personalizado'],
        },
        {
          icon: '🔁',
          name: 'Mantenimiento y Actualizaciones',
          desc: 'Actualizaciones de contenido mensuales, monitoreo de rendimiento, parches de seguridad y soporte prioritario.',
          tags: ['Retainer recurrente', 'Soporte prioritario'],
          retainer: true,
        },
      ],
    },
    work: {
      label: 'Trabajo seleccionado',
      title: 'Proyecto conceptual más reciente',
      subtitle: 'Cada proyecto se construye desde cero — sin plantillas, sin atajos, sin compromisos.',
      category: 'Servicios del Hogar',
      projectName: 'Reborn Remodeling & Repairs',
      projectDesc: 'Sitio completo para un contratista de remodelación residencial. Incluye páginas de servicios para cocinas, baños y sótanos, una sección de reseñas y un formulario de contacto para cotizaciones en línea.',
      tags: ['React', 'TypeScript', 'Adaptado a móvil'],
    },
    about: {
      label: 'Sobre mí',
      title1: 'Hecho por una.',
      title2: 'Elaborado con cuidado.',
      body1: 'Soy Michelle — desarrolladora full-stack con cinco años de experiencia profesional y una obsesión genuina por los detalles. Spun Pages es mi estudio independiente, y eso es completamente intencional. Cuando me contratas, trabajas directamente con la persona que escribe tu código, toma tus decisiones de diseño y cuida cada margen y cada milisegundo.',
      body2: 'Como mujer en tecnología, he construido mi carrera sobre la precisión y el oficio — dos cosas que me niego a tratar como opcionales. Cada proyecto que tomo recibe mi atención completa, se entrega a tiempo, con código del que me enorgullecería mantener durante años. Sin atajos, sin traspasos a alguien que no has conocido.',
      body3: 'Si crees que la diferencia entre un buen sitio y uno excelente está en los detalles, nos vamos a llevar muy bien.',
      stackLabel: 'Mi stack',
    },
    contact: {
      label: 'Contáctame',
      title1: 'Construyamos algo',
      title2: 'que valga la pena',
      sub: 'Cuéntame sobre tu proyecto y te responderé en un día hábil. Sin presiones, sin estimaciones vagas — solo una conversación directa sobre lo que necesitas.',
      perks: [
        'Llamada de descubrimiento gratuita de 30 min',
        'Propuesta clara en 3 días hábiles',
        'Proyectos a precio fijo o por retainer',
        'El código fuente siempre es tuyo',
      ],
      labelName: 'Nombre',
      placeholderName: 'Tu nombre',
      labelEmail: 'Correo electrónico',
      placeholderEmail: 'tu@empresa.com',
      labelBudget: 'Rango de presupuesto',
      budgetPlaceholder: 'Selecciona un rango…',
      budgets: ['Menos de $1,000', '$1,000 – $3,000', 'Más de $3,000', 'Aún no lo sé'],
      labelMessage: 'Sobre tu proyecto',
      placeholderMessage: '¿Qué estás construyendo? ¿Hay plazos o requisitos importantes que deba saber?',
      errorMsg: 'Algo salió mal — por favor intenta de nuevo o escríbenos directamente a info@spunpages.com.',
      submitIdle: 'Enviar mensaje →',
      submitSending: 'Enviando…',
      successTitle: 'Mensaje recibido',
      successBody: 'Me comunicaré contigo en un día hábil.',
    },
    footer: {
      navServices: 'Servicios',
      navWork: 'Trabajo',
      navAbout: 'Sobre mí',
      navContact: 'Contacto',
      copy: 'Elaborado con cuidado.',
      tagline: 'Sitios Elaborados. Detalles Refinados.',
    },
  },
}
