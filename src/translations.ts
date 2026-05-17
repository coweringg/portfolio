export const t = {
  EN: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      dive: "SELECTED WORK",
      menu: "Menu",
      close: "Close menu",
    },
    hero: {
      location: "Montevideo, Uruguay",
      role: "Full Stack",
      developer: "Developer",
      intro:
        "Full Stack Developer focused on building complete web applications, from modern interfaces to APIs and backend logic, using React, TypeScript, Node.js, and Java. I build polished interfaces, reliable APIs and product-focused workflows, combining real production experience with independent full-stack projects.",
      pills: {
        openTop: "Open to",
        openBot: "Remote roles",
        production: "Production Experience",
        legaltech: "Full-Stack Product Builder",
        stkTop: "Clean Systems · Strategy",
        stkBot: "Full-Stack Ownership",
      },
      proof: [
        { value: "Standard", label: "Maintainable Systems / Reliable APIs" },
        { value: "Solutions", label: "Full Stack Developer / End-to-End Product Building" },
        { value: "Remote", label: "Async Communication / Remote Collaboration" },
      ],
      buttons: {
        viewProjects: "View Selected Work",
        contactMe: "Contact Me",
        downloadCV: "Download CV",
      },
      spotlight: {
        title: "Project Spotlight",
        dive: "See case study",
      },
      scroll: "Scroll to Dive",
    },
    about: {
      title1: "From",
      title2: "Product",
      title3: "To Production",
      p1:
        "I'm Gonzalo, a Full Stack Developer focused on bridging the gap between product vision and technical reality. I build systems that don't just work, but scale, caring about everything from reliable APIs to the micro-interactions that define the user experience.",
      p2:
        "My approach is grounded in solid engineering: I don't just ship features, I optimize for the full software development lifecycle. Whether it's building reliable backends or crafting high-performance frontends, my goal is to deliver maintainable, production-minded code that drives business value.",
      focusTitle: "Currently focused on",
      focus: [
        {
          title: "Complex Product Design",
          text: "Building systems that solve real-world problems with scalability and maintainability in mind.",
        },
        {
          title: "AI Workflows",
          text: "Integrating AI into practical product flows, from intelligent document handling to automated summaries.",
        },
        {
          title: "Technical Ownership",
          text: "Taking ownership of the technical direction to ensure high performance, security, and long-term stability.",
        },
      ],
      items: [
        { title: "Full Ownership", text: "End-to-end responsibility" },
        { title: "Production Experience", text: "Maintainable, product-ready solutions" },
        { title: "Edge", text: "Frontend polish + backend logic" },
        { title: "Looking for", text: "High-impact product teams" },
      ],
    },
    stack: {
      title1: "Engineering",
      title2: "Capabilities",
      subtitle: "Tooling selected for reliability, speed, and long-term maintainability.",
      levels: {
        production: "Professional",
        project: "Project",
        upcoming: "Advanced",
      },
      categories: [
        {
          title: "Frontend",
          description:
            "Interfaces that feel polished, remain readable and scale beyond the first version.",
          items: [
            { name: "React", level: "production" },
            { name: "TypeScript", level: "production" },
            { name: "Next.js", level: "project" },
            { name: "Tailwind CSS", level: "project" },
            { name: "UI systems", level: "project" },
            { name: "Performance", level: "upcoming" },
          ],
        },
        {
          title: "Backend",
          description:
            "Building robust APIs, business logic, and transactional data flows.",
          items: [
            { name: "Java", level: "production" },
            { name: "Node.js", level: "project" },
            { name: "Express.js", level: "project" },
            { name: "Auth flows", level: "project" },
            { name: "MySQL", level: "project" },
            { name: "MongoDB", level: "project" },
          ],
        },
        {
          title: "Delivery",
          description:
            "Tooling and methodology for shipping, debugging, and maintaining scalable ecosystems.",
          items: [
            { name: "GitHub", level: "production" },
            { name: "Debugging", level: "production" },
            { name: "Agile workflows", level: "production" },
            { name: "Docker", level: "project" },
            { name: "AWS", level: "project" },
            { name: "CI/CD", level: "upcoming" },
          ],
        },
      ],
    },
    projects: {
      title1: "Featured",
      title2: "Work",
      subtitle:
        "High-fidelity builds and technical prototypes presented as case studies: focusing on technical decisions and end-to-end ownership.",
      list: [
        {
          title: "LawCaseAI",
          subtitle: "Solo Full-Stack Developer",
          description:
            "A comprehensive AI-driven legal platform built solo from scratch. Covers the main full-stack flows: secure document processing, case summarization, and an intelligent attorney-review assistant.",
          tech: ["React", "Next.js", "TypeScript", "Tailwind", "OpenRouter"],
          visual: "legal",
          align: "left",
          status: "Solo Build · Public project - walkthrough available",
          problem: "Attorneys need to review dense legal documents faster without losing context or traceability.",
          role: "Solo Full-Stack Developer: Designed and built the entire ecosystem, including the AI processing pipeline and secure document infrastructure.",
          decisions: [
            "Secure document flow: Files are handled through controlled backend flows and stored with Cloudflare R2, keeping file storage separate from application data.",
            "AI document workflows: Custom summary and context-specific chat flows powered by the OpenRouter API turn dense legal files into structured, usable information.",
            "Server-state management: TanStack React Query handles server data synchronization, caching, queries and mutations across the frontend.",
            "Authentication and protected routes: JWT-based authentication protects user-specific case data and private document workflows.",
            "Validation and API safety: Zod, Express Validator, Helmet, rate limiting and sanitization middleware help validate inputs and reduce unsafe requests.",
            "Payments and SaaS flow: Paddle integration supports subscription checkout and webhook-based payment flows."
          ],
          outcome: "A public full-stack LegalTech project demonstrating document upload flows, AI-powered summaries, secure storage, authentication, and product-oriented UX.",
          proof: ["Technical notes", "Public demo", "Solo deployment"],
          link: "https://lawcaseai-gamma.vercel.app/",
          github: "https://github.com/coweringg/LawCaseAI",
        },
        {
          title: "Paideia",
          subtitle: "Academic Marketplace Prototype · Full-Stack Ownership",
          description:
            "A complex marketplace prototype featuring credit-based class purchases and teacher redemption flows. Built both frontend and backend to handle transactional integrity.",
          tech: ["Node.js", "Express", "React", "MySQL", "Prisma"],
          visual: "education",
          align: "right",
          status: "Full-Stack Developer",
          problem: "Education marketplaces need clear value exchange between students, teachers and payments.",
          role: "Full-Stack Developer: Owned the marketplace model and core transaction logic from database to UI.",
          decisions: [
            "Credit-based marketplace model: Designed a transactional flow for class purchases, teacher balances and redemption logic.",
            "Decoupled backend APIs: Developed modular REST endpoints in Node.js/Express, keeping frontend flows separated from backend business logic.",
            "Database modeling: Structured student, teacher, class and credit entities using MySQL and Prisma."
          ],
          outcome: "Delivered a fully functional marketplace prototype with a clear path to monetization.",
          proof: ["Technical walkthrough", "Credit flow logic", "Database architecture"],
        },
      ],
      code: "Code",
      demo: "Live Demo",
      caseStudy: "Case Study",
      problem: "Problem",
      role: "My role",
      decisions: "Key decisions",
      outcome: "Outcome",
      proof: "Available proof",
      private: "Private project",
      walkthroughCta: "Request Walkthrough",
    },
    experience: {
      title1: "Professional",
      title2: "Trajectory",
      date: "May 2024 - November 2024",
      role: "Full Stack Developer Intern",
      company: "@ NocNoc · Cross-Border E-commerce",
      bullets: [
        "Implemented user-facing features and backend business logic in a professional production environment.",
        "Collaborated with product and engineering teams to deliver Java and TypeScript changes through agile workflows.",
        "Participated in code reviews, standups, debugging and production delivery processes.",
        "Investigated and resolved technical issues under time constraints, helping maintain delivery flow.",
      ],
    },
    contact: {
      pill: "Open to product teams & full-stack challenges",
      title1: "Let's build",
      title2: "useful software.",
      p:
        "Ready to collaborate on real products with reliable APIs, clean systems, and product ownership.",
      availability: [
        { title: "Engagement", text: "High-impact & remote-ready" },
        { title: "Ownership", text: "Full End-to-end Responsibility" },
        { title: "Focus", text: "Reliable APIs & Product Ownership" },
      ],
      emailLabel: "Email",
      cvLabel: "Download CV",
      sayHello: "Contact for Opportunities",
      statsTitle: "Live Dashboard",
      copyright: "Gonzalo Mendez · Based in Montevideo, Uruguay",
    },
    sidebars: {
      surface: "SURFACE",
      depths: "DEPTHS",
    },
    terminal: {
      welcome: "GONZALO_TERMINAL v1.0.0",
      help_hint: "Type 'help' to see available commands.",
      ready: "Ready for input",
      session: "session active",
      help: {
        help: "Show this help menu",
        whoami: "About Gonzalo",
        ls: "List featured projects",
        cat: "View technical stack",
        clear: "Clear terminal history",
        hire: "The special command",
        exit: "Close the terminal",
      },
      hire: {
        protocol: "Protocol: HIRE_SQUAD",
        unlocked: "Gonzalo is ready to build. Reliable APIs, clean systems and product ownership unlocked.",
        cta: "START PROJECT",
      }
    },
  },
  ES: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      dive: "TRABAJO DESTACADO",
      menu: "Menú",
      close: "Cerrar menú",
    },
    hero: {
      location: "Montevideo, Uruguay",
      role: "Desarrollador",
      developer: "Full Stack",
      intro:
        "Full Stack Developer enfocado en construir aplicaciones web completas, desde interfaces modernas hasta APIs y lógica backend, usando React, TypeScript, Node.js y Java. Construyo interfaces pulidas, APIs confiables y flujos orientados a producto, combinando experiencia real en producción con proyectos full-stack independientes.",
      pills: {
        openTop: "Abierto a",
        openBot: "Roles remotos",
        production: "Experiencia en Producción",
        legaltech: "Product Builder Full-Stack",
        stkTop: "Sistemas Limpios · Estrategia",
        stkBot: "Ownership Full-Stack",
      },
      proof: [
        { value: "Estándar", label: "Sistemas Mantenibles / APIs Confiables" },
        { value: "Soluciones", label: "Full Stack Developer / Construcción de Productos End-to-End" },
        { value: "Remoto", label: "Comunicación Asíncrona / Colaboración Remota" },
      ],
      buttons: {
        viewProjects: "Ver Trabajo Seleccionado",
        contactMe: "Contacto",
        downloadCV: "Descargar CV",
      },
      spotlight: {
        title: "Proyecto Destacado",
        dive: "Ver caso de estudio",
      },
      scroll: "Scroll para bajar",
    },
    about: {
      title1: "De",
      title2: "Producto",
      title3: "A Producción",
      p1:
        "Soy Gonzalo, Desarrollador Full Stack enfocado en cerrar la brecha entre la visión de producto y la realidad técnica. Construyo sistemas que no solo funcionan, sino que escalan, cuidando desde APIs confiables hasta las micro-interacciones que definen la experiencia del usuario.",
      p2:
        "Mi enfoque se basa en ingeniería sólida: no solo entrego funcionalidades, optimizo todo el ciclo de vida del software. Ya sea construyendo backends robustos o frontends de alto rendimiento, mi objetivo es entregar código mantenible y pensado para producción que genere valor real de negocio.",
      focusTitle: "Actualmente enfocado en",
      focus: [
        {
          title: "Diseño de Productos Complejos",
          text: "Construcción de sistemas que resuelven problemas reales pensando en escalabilidad y mantenimiento.",
        },
        {
          title: "Flujos con IA",
          text: "Integrando IA en flujos reales de producto, desde manejo inteligente de documentos hasta resúmenes automatizados.",
        },
        {
          title: "Ownership Técnico",
          text: "Asumiendo la dirección técnica para asegurar alto rendimiento, seguridad y estabilidad a largo plazo.",
        },
      ],
      items: [
        { title: "Full Ownership", text: "Responsabilidad de punta a punta" },
        { title: "Experiencia en Producción", text: "Código mantenible y orientado a producto" },
        { title: "Diferencial", text: "UI pulida + lógica backend" },
        { title: "Buscando", text: "Equipos de producto de alto impacto" },
      ],
    },
    stack: {
      title1: "Capacidades",
      title2: "Técnicas",
      subtitle: "Herramientas seleccionadas por su confiabilidad, velocidad y mantenibilidad a largo plazo.",
      levels: {
        production: "Profesional",
        project: "Proyecto",
        upcoming: "Avanzado",
      },
      categories: [
        {
          title: "Frontend",
          description:
            "Interfaces pulidas, legibles y preparadas para crecer más allá de la primera versión.",
          items: [
            { name: "React", level: "production" },
            { name: "TypeScript", level: "production" },
            { name: "Next.js", level: "project" },
            { name: "Tailwind CSS", level: "project" },
            { name: "Sistemas UI", level: "project" },
            { name: "Performance", level: "upcoming" },
          ],
        },
        {
          title: "Backend",
          description:
            "Desarrollo de APIs, lógica de negocio y flujos transaccionales de datos.",
          items: [
            { name: "Java", level: "production" },
            { name: "Node.js", level: "project" },
            { name: "Express.js", level: "project" },
            { name: "Flujos auth", level: "project" },
            { name: "MySQL", level: "project" },
            { name: "MongoDB", level: "project" },
          ],
        },
        {
          title: "Delivery",
          description:
            "Herramientas y metodologías para entregar, debuggear y mantener ecosistemas escalables.",
          items: [
            { name: "GitHub", level: "production" },
            { name: "Debugging", level: "production" },
            { name: "Agile workflows", level: "production" },
            { name: "Docker", level: "project" },
            { name: "AWS", level: "project" },
            { name: "CI/CD", level: "upcoming" },
          ],
        },
      ],
    },
    projects: {
      title1: "Trabajo",
      title2: "Destacado",
      subtitle:
        "Prototipos técnicos y desarrollos de alta fidelidad presentados como casos de estudio: foco en decisiones técnicas y ownership total.",
      list: [
        {
          title: "LawCaseAI",
          subtitle: "Solo Full-Stack Developer",
          description:
            "Plataforma legal impulsada por IA construida íntegramente en solitario. Cubre los principales flujos full stack: procesamiento seguro de documentos, resúmenes de casos y un asistente inteligente para revisión legal.",
          tech: ["React", "Next.js", "TypeScript", "Tailwind", "OpenRouter"],
          visual: "legal",
          align: "left",
          status: "Construcción Solo · Proyecto público - walkthrough disponible",
          problem: "Los abogados necesitan revisar documentos densos más rápido sin perder contexto ni trazabilidad.",
          role: "Solo Full-Stack Developer: Diseñé y construí todo el ecosistema, incluyendo el pipeline de procesamiento de IA y la infraestructura segura de documentos.",
          decisions: [
            "Flujo seguro de documentos: Los archivos se manejan mediante flujos controlados en el backend y se almacenan con Cloudflare R2, separando el almacenamiento de archivos de los datos de la aplicación.",
            "Workflows de documentos con IA: Flujos personalizados de resumen y chat contextual utilizando la API de OpenRouter convierten archivos legales densos en información estructurada y útil.",
            "Sincronización de datos del servidor: TanStack React Query gestiona la sincronización, caché, consultas y mutaciones de datos entre frontend y backend.",
            "Autenticación y rutas protegidas: La autenticación basada en JWT protege los datos de cada usuario y los flujos privados de documentos.",
            "Validación y seguridad de API: Zod, Express Validator, Helmet, rate limiting y middlewares de sanitización ayudan a validar entradas y reducir peticiones inseguras.",
            "Pagos y flujo SaaS: La integración con Paddle permite checkout de suscripciones y flujos de pago basados en webhooks."
          ],
          outcome: "Un proyecto LegalTech full stack y público que demuestra flujos de carga de documentos, resúmenes con IA, almacenamiento seguro, autenticación y una experiencia de usuario orientada a producto.",
          proof: ["Notas técnicas", "Demo pública", "Despliegue independiente"],
          link: "https://lawcaseai-gamma.vercel.app/",
          github: "https://github.com/coweringg/LawCaseAI",
        },
        {
          title: "Paideia",
          subtitle: "Prototipo académico de marketplace · Ownership Full-Stack",
          description:
            "Prototipo de marketplace complejo con compra de clases mediante créditos y flujos de cobro para profesores. Frontend y backend diseñados para integridad transaccional.",
          tech: ["Node.js", "Express", "React", "MySQL", "Prisma"],
          visual: "education",
          align: "right",
          status: "Full-Stack Developer",
          problem: "Los marketplaces educativos necesitan un intercambio claro de valor entre estudiantes, profesores y pagos.",
          role: "Full-Stack Developer: Responsable del modelo de marketplace y la lógica transaccional desde la base de datos hasta la UI.",
          decisions: [
            "Modelo de marketplace basado en créditos: Diseñé un flujo transaccional para compras de clases, balances de profesores y lógica de canje.",
            "APIs desacopladas: Desarrollé endpoints REST modulares en Node.js/Express, separando los flujos del frontend de la lógica de negocio del backend.",
            "Modelado de base de datos: Estructuré entidades de estudiantes, profesores, clases y créditos usando MySQL y Prisma."
          ],
          outcome: "Entregué un prototipo funcional con una ruta clara hacia la monetización real.",
          proof: ["Walkthrough técnico", "Lógica de flujo de créditos", "Estructura de base de datos"],
        },
      ],
      code: "Código",
      demo: "Demo",
      caseStudy: "Caso de Estudio",
      problem: "Problema",
      role: "Mi rol",
      decisions: "Decisiones clave",
      outcome: "Resultado",
      proof: "Prueba disponible",
      private: "Proyecto privado",
      walkthroughCta: "Pedir Walkthrough",
    },
    experience: {
      title1: "Trayectoria",
      title2: "Profesional",
      date: "Mayo 2024 - Noviembre 2024",
      role: "Full Stack Developer Intern",
      company: "@ NocNoc · E-commerce Cross-Border",
      bullets: [
        "Implementé funcionalidades de cara al usuario y lógica backend en un entorno profesional de producción.",
        "Colaboré con equipos de producto e ingeniería para entregar cambios en Java y TypeScript dentro de flujos ágiles.",
        "Participé en code reviews, dailies, debugging y procesos de entrega a producción.",
        "Investigué y resolví incidencias técnicas bajo tiempos ajustados, ayudando a mantener el flujo de entrega.",
      ],
    },
    contact: {
      pill: "Abierto a equipos de producto y desafíos full-stack",
      title1: "Construyamos",
      title2: "software útil.",
      p:
        "Listo para colaborar en productos reales con APIs confiables, sistemas limpios y ownership de producto.",
      availability: [
        { title: "Interés", text: "Impacto y trabajo remoto" },
        { title: "Ownership", text: "Responsabilidad de Punta a Punta" },
        { title: "Foco", text: "APIs confiables y ownership de producto" },
      ],
      emailLabel: "Email",
      cvLabel: "Descargar CV",
      sayHello: "Contactar por oportunidades",
      statsTitle: "Dashboard en Vivo",
      copyright: "Gonzalo Mendez · Basado en Montevideo, Uruguay",
    },
    sidebars: {
      surface: "SUPERFICIE",
      depths: "PROFUNDIDAD",
    },
    terminal: {
      welcome: "GONZALO_TERMINAL v1.0.0",
      help_hint: "Escribí 'help' para ver los comandos disponibles.",
      ready: "Listo para comando",
      session: "sesión activa",
      help: {
        help: "Mostrar este menú de ayuda",
        whoami: "Sobre Gonzalo",
        ls: "Listar proyectos destacados",
        cat: "Ver stack tecnológico",
        clear: "Limpiar el historial",
        hire: "El comando especial",
        exit: "Cerrar la terminal",
      },
      hire: {
        protocol: "Protocolo: HIRE_SQUAD",
        unlocked: "Gonzalo está listo para construir. APIs confiables, sistemas limpios y ownership de producto desbloqueados.",
        cta: "EMPEZAR PROYECTO",
      }
    },
  },
};
