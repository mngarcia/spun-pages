export type Lang = 'en' | 'es'

export interface Package {
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
    heading1: string
    heading2: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    qualifiers: string[]
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
  }
  about: {
    label: string
    title1: string
    title2: string
    body1: string
    body2: string
    body3: string
    howLabel: string
    howItems: string[]
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
      heading1: 'Crafted sites.',
      heading2: 'Refined details.',
      sub: "I'm a freelance web developer specialising in clean, fast, beautifully considered websites for small businesses, creatives, and founders who care about the details as much as I do.",
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See my work',
      qualifiers: ['Hand-coded', 'Fixed pricing', 'Yours to keep'],
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
          name: 'Simple Business Website',
          desc: 'A clean, professional 5-page website so customers can find you, see what you offer, and get in touch. Built on Wix or Squarespace — easy to update yourself down the road. Perfect for restaurants, salons, contractors, and service providers getting started online.',
          tags: ['Wix or Squarespace', 'Mobile-friendly', 'Easy to update yourself'],
          turnaround: '~1 week',
        },
        {
          name: 'Custom-Built Website',
          subtitle: 'Fully custom — no templates, no shortcuts',
          desc: "A professional website built specifically for your business — not copied from a template or assembled from someone else's leftovers. It loads fast, looks sharp on every phone and screen size, and is built the right way so Google can find you. The go-to choice for small businesses that want a site that actually brings in customers.",
          tags: ['No templates', 'Fast load times', 'SEO built in', 'Mobile-friendly'],
          turnaround: '2–4 weeks',
          featured: true,
        },
        {
          name: 'Online Store Setup',
          desc: 'Everything you need to start selling online — your products listed, payments set up, and order confirmation emails handled automatically. For restaurants and food businesses, I can connect your site directly to Toast so online orders go straight to your kitchen. No tech headaches, just a store ready to take orders.',
          tags: ['Shopify or Wix', 'Online payments', 'Toast integration'],
          turnaround: '2–3 weeks',
        },
      ],
      customPackages: [
        {
          name: 'Custom Web App or Portal',
          desc: "Need something more than a regular website? Booking systems, customer portals, staff dashboards, or a site for a business with multiple locations — if it's complex, this is where it fits. Scoped and priced around exactly what you need.",
          tags: ['Booking systems', 'Customer portals', 'Multi-location sites'],
        },
        {
          name: 'Website Redesign',
          desc: "If your current site looks outdated, loads slowly, or just doesn't represent your business anymore — I'll rebuild it from the ground up. Modern design, faster load times, mobile-friendly, and built to last. Great for businesses moving off old WordPress sites, DIY templates, or anything that's embarrassing to hand out at a meeting.",
          tags: ['WordPress migration', 'Mobile-friendly', 'Fast performance'],
        },
        {
          name: 'Monthly SEO Management',
          desc: "Ranking on Google takes consistent effort, not a one-time fix. Each month I handle keyword tracking, on-page updates, Google Search Console monitoring, local SEO maintenance, and content recommendations so your site keeps climbing in search results. Best for small businesses serious about being found online.",
          tags: ['Local SEO', 'Google ranking', 'Monthly reporting', 'Search visibility'],
          retainer: true,
        },
        {
          name: 'Monthly Website Care',
          desc: "Keep your website fresh and running smoothly without having to think about it. Covers content updates, security patches, performance checks, and priority support whenever something comes up.",
          tags: ['Monthly plan', 'Security patches', 'Priority support'],
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
    },
    about: {
      label: 'About me',
      title1: 'Built by one.',
      title2: 'Crafted with care.',
      body1: "I'm Michelle — a web developer with five years of professional experience and a genuine obsession with getting the details right. Spun Pages is my solo studio, and that's entirely by design. When you hire me, you work directly with the person building your site, making your design decisions, and caring as much about how it performs as how it looks.",
      body2: "Every project I take on gets my full attention — delivered on time, built to last, and done right the first time. No shortcuts, no handoffs to someone you haven't met.",
      body3: "If you believe the gap between a good website and a great one lives in the details, we'll get along just fine.",
      howLabel: 'How I work',
      howItems: [
        'You talk to me directly — not an account manager',
        'I take on a limited number of projects at a time',
        'Fixed pricing, no surprise invoices',
        'Your site and code are yours to keep',
      ],
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
      heading1: 'Sitios elaborados.',
      heading2: 'Detalles refinados.',
      sub: 'Soy una desarrolladora web freelance especializada en sitios limpios, rápidos y cuidadosamente diseñados para pequeñas empresas, creativos y emprendedores que valoran los detalles tanto como yo.',
      ctaPrimary: 'Iniciar un proyecto',
      ctaSecondary: 'Ver mi trabajo',
      qualifiers: ['Código a mano', 'Precio fijo', 'Tu código, siempre'],
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
          name: 'Sitio Web Sencillo',
          desc: 'Un sitio web profesional de 5 páginas para que tus clientes te encuentren, vean lo que ofreces y se pongan en contacto. Hecho en Wix o Squarespace — fácil de actualizar tú mismo más adelante. Ideal para restaurantes, salones, contratistas y prestadores de servicios que quieren estar en línea.',
          tags: ['Wix o Squarespace', 'Adaptado a móvil', 'Fácil de actualizar'],
          turnaround: '~1 semana',
        },
        {
          name: 'Sitio Web a Medida',
          subtitle: 'Completamente personalizado — sin plantillas, sin atajos',
          desc: 'Un sitio web profesional creado específicamente para tu negocio — no copiado de una plantilla ni armado con diseños de otro. Carga rápido, se ve bien en cualquier teléfono y pantalla, y está construido de la manera correcta para que Google te encuentre. La mejor opción para pequeños negocios que quieren un sitio que realmente atraiga clientes.',
          tags: ['Sin plantillas', 'Carga rápida', 'SEO incluido', 'Adaptado a móvil'],
          turnaround: '2–4 semanas',
          featured: true,
        },
        {
          name: 'Tienda en Línea',
          desc: 'Todo lo que necesitas para empezar a vender en línea — tus productos publicados, pagos configurados y correos de confirmación automáticos. Para restaurantes y negocios de comida, puedo conectar tu sitio directamente con Toast para que los pedidos lleguen directo a tu cocina. Sin complicaciones técnicas, solo una tienda lista para recibir órdenes.',
          tags: ['Shopify o Wix', 'Pagos en línea', 'Integración con Toast'],
          turnaround: '2–3 semanas',
        },
      ],
      customPackages: [
        {
          name: 'Aplicación Web o Portal',
          desc: '¿Necesitas algo más que un sitio web normal? Sistemas de reservas, portales para clientes, tableros para tu equipo o un sitio para un negocio con varias sucursales — si es complejo, aquí encaja. El alcance y el precio se definen según lo que necesitas.',
          tags: ['Sistemas de reservas', 'Portales para clientes', 'Múltiples sucursales'],
        },
        {
          name: 'Rediseño de Sitio Web',
          desc: 'Si tu sitio actual se ve desactualizado, carga lento o ya no representa tu negocio — lo reconstruyo desde cero. Diseño moderno, carga más rápida, adaptado a móvil y construido para durar. Ideal para negocios que quieren salir de WordPress antiguo, plantillas de bricolaje o cualquier cosa que da vergüenza mostrar.',
          tags: ['Migración desde WordPress', 'Adaptado a móvil', 'Rendimiento mejorado'],
        },
        {
          name: 'SEO Mensual',
          desc: 'Posicionarte en Google requiere esfuerzo constante, no un arreglo único. Cada mes me encargo del seguimiento de palabras clave, actualizaciones en la página, monitoreo de Google Search Console, mantenimiento de SEO local y recomendaciones de contenido para que tu sitio siga subiendo en los resultados. Ideal para pequeños negocios que quieren ser encontrados en línea.',
          tags: ['SEO local', 'Posicionamiento en Google', 'Reporte mensual', 'Visibilidad en búsquedas'],
          retainer: true,
        },
        {
          name: 'Mantenimiento Mensual',
          desc: 'Mantén tu sitio web actualizado y funcionando sin tener que pensar en ello. Incluye actualizaciones de contenido, parches de seguridad, revisiones de rendimiento y soporte prioritario cuando algo surja.',
          tags: ['Plan mensual', 'Parches de seguridad', 'Soporte prioritario'],
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
    },
    about: {
      label: 'Sobre mí',
      title1: 'Hecho por una.',
      title2: 'Elaborado con cuidado.',
      body1: 'Soy Michelle — desarrolladora web con cinco años de experiencia profesional y una obsesión genuina por los detalles. Spun Pages es mi estudio independiente, y eso es completamente intencional. Cuando me contratas, trabajas directamente con la persona que construye tu sitio, toma tus decisiones de diseño y se preocupa tanto por cómo funciona como por cómo se ve.',
      body2: 'Cada proyecto que tomo recibe mi atención completa — se entrega a tiempo, está bien hecho desde el principio y construido para durar. Sin atajos, sin traspasos a alguien que no has conocido.',
      body3: 'Si crees que la diferencia entre un buen sitio y uno excelente está en los detalles, nos vamos a llevar muy bien.',
      howLabel: 'Cómo trabajo',
      howItems: [
        'Hablas directamente conmigo — sin intermediarios',
        'Tomo un número limitado de proyectos a la vez',
        'Precio fijo, sin facturas sorpresa',
        'Tu sitio y código son tuyos para siempre',
      ],
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
