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
        "Focused on React, TypeScript and production-ready SaaS. I build polished interfaces, reliable APIs and AI-assisted workflows with real production experience.",
      pills: {
        openTop: "Open to",
        openBot: "Remote roles",
        production: "Production Systems Experience",
        legaltech: "Full-Stack Product Builder",
        stkTop: "Architecture · Strategy",
        stkBot: "Full-Stack Ownership",
      },
      proof: [
        { value: "Standard", label: "Production-Ready Systems / Architectural Resilience" },
        { value: "Solutions", label: "Full-Stack Architect / Complex Product Engineering" },
        { value: "Remote", label: "Async-Native / Global Collaboration & Remote Excellence" },
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
        "I'm Gonzalo, a Full Stack Developer focused on bridging the gap between product vision and technical reality. I build systems that don't just work, but scale, caring about everything from architectural resilience to the micro-interactions that define the user experience.",
      p2:
        "My approach is grounded in high-level engineering: I don't just ship features, I optimize for the full software development lifecycle. Whether it's architecting reliable backends or crafting high-performance frontends, my goal is to deliver battle-tested code that drives business value.",
      focusTitle: "Currently focused on",
      focus: [
        {
          title: "Complex Product Design",
          text: "Architecting systems that solve real-world problems with scalability and maintainability in mind.",
        },
        {
          title: "AI & Data Strategy",
          text: "Integrating AI to remove business friction, from intelligent document flows to automated summaries.",
        },
        {
          title: "Technical Leadership",
          text: "Guiding the technical direction to ensure high performance, security, and long-term stability.",
        },
      ],
      items: [
        { title: "Full Ownership", text: "End-to-end responsibility" },
        { title: "Battle-Tested", text: "Production-ready solutions" },
        { title: "Edge", text: "Frontend polish + backend logic" },
        { title: "Looking for", text: "High-impact product teams" },
      ],
    },
    stack: {
      title1: "Engineering",
      title2: "Capabilities",
      subtitle: "Tooling selected for reliability, speed, and long-term maintainability.",
      levels: {
        production: "Production",
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
            "Architecting robust APIs, business logic, and transactional data flows.",
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
        "High-fidelity builds and technical prototypes presented as case studies: focusing on architectural decisions and end-to-end ownership.",
      list: [
        {
          title: "LawCaseAI",
          subtitle: "Solo Founder & Architect",
          description:
            "A comprehensive AI-driven legal platform built solo from scratch. Handles the full software lifecycle: from secure document processing and case summarization to an intelligent attorney-review assistant.",
          tech: ["React", "Next.js", "TypeScript", "Tailwind", "OpenAI"],
          visual: "legal",
          align: "left",
          status: "Solo Build · Private repo - walkthrough available",
          problem: "Attorneys need to review dense legal documents faster without losing context or traceability.",
          role: "Solo Architect: Designed and built the entire ecosystem, including the AI processing pipeline and secure document infrastructure.",
          decisions: [
            "End-to-end solo development and deployment",
            "Custom AI document workflow for traceability",
            "High-fidelity UI focused on professional legal review",
          ],
          outcome: "Successfully built and deployed a production-ready solo SaaS that automates document analysis.",
          proof: ["Architecture notes", "Private walkthrough", "Solo deployment"],
          link: "https://lawcaseai-gamma.vercel.app/",
        },
        {
          title: "Paideia",
          subtitle: "Venture Prototype · Full-Stack Ownership",
          description:
            "A complex marketplace prototype featuring credit-based class purchases and teacher redemption flows. Architected both frontend and backend to handle transactional integrity.",
          tech: ["Node.js", "Express", "React", "PostgreSQL", "Stripe"],
          visual: "education",
          align: "right",
          status: "Lead Full-Stack Developer",
          problem: "Education marketplaces need clear value exchange between students, teachers and payments.",
          role: "Lead Full-Stack Developer: Owned the marketplace model and the core transaction logic from database to UI.",
          decisions: [
            "Credit-based monetization model",
            "Decoupled backend API architecture",
            "Transactional integrity for teacher payouts",
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
      role: "Core Contributor & Full-Stack Developer",
      company: "@ NocNoc · High-Scale Cross-Border E-commerce",
      bullets: [
        "Developed and maintained mission-critical features in a high-scale production environment (110+ employees).",
        "Collaborated with cross-functional product teams to deliver production-grade modules using Java and TypeScript.",
        "Operated within high-velocity delivery cycles, ensuring code quality through rigorous peer reviews and agile best practices.",
        "Proactively resolved complex technical incidents, maintaining system stability and performance.",
      ],
    },
    contact: {
      pill: "Open to high-impact product teams & complex challenges",
      title1: "Let's build",
      title2: "the next big thing.",
      p:
        "Ready to tackle your most complex technical challenges with architectural resilience and product ownership.",
      availability: [
        { title: "Engagement", text: "High-impact & Async-Native" },
        { title: "Ownership", text: "Full End-to-end Responsibility" },
        { title: "Expertise", text: "Scalable Architectures & Ownership" },
      ],
      emailLabel: "Email",
      cvLabel: "Download CV",
      sayHello: "Contact for Opportunities",
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
        unlocked: "Gonzalo's expertise is now at your disposal. Architectural resilience and product ownership, unlocked.",
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
        "Enfocado en React, TypeScript y SaaS listos para producción. Construyo interfaces pulidas, APIs confiables y flujos con IA con experiencia real en producción.",
      pills: {
        openTop: "Abierto a",
        openBot: "Roles remotos",
        production: "Sistemas en Producción",
        legaltech: "Arquitecto de Productos Full-Stack",
        stkTop: "Arquitectura · Estrategia",
        stkBot: "Ownership Full-Stack",
      },
      proof: [
        { value: "Estándar", label: "Sistemas para Producción / Resiliencia Arquitectónica" },
        { value: "Soluciones", label: "Arquitecto Full-Stack / Ingeniería de Productos Complejos" },
        { value: "Remoto", label: "Nativo Asincrónico / Excelencia en Colaboración Global" },
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
        "Soy Gonzalo, Desarrollador Full Stack enfocado en cerrar la brecha entre la visión de producto y la realidad técnica. Construyo sistemas que no solo funcionan, sino que escalan, cuidando desde la resiliencia arquitectónica hasta las micro-interacciones que definen la experiencia del usuario.",
      p2:
        "Mi enfoque se basa en ingeniería de alto nivel: no solo entrego funcionalidades, optimizo todo el ciclo de vida del software. Ya sea diseñando backends robustos o frontends de alto rendimiento, mi objetivo es entregar código probado en batalla que genere valor real de negocio.",
      focusTitle: "Actualmente enfocado en",
      focus: [
        {
          title: "Diseño de Productos Complejos",
          text: "Arquitectura de sistemas que resuelven problemas reales pensando en escalabilidad y mantenimiento.",
        },
        {
          title: "Estrategia de IA y Datos",
          text: "Integrando IA para eliminar fricción de negocio, desde flujos inteligentes de documentos hasta resúmenes automatizados.",
        },
        {
          title: "Liderazgo Técnico",
          text: "Guíando la dirección técnica para asegurar alto rendimiento, seguridad y estabilidad a largo plazo.",
        },
      ],
      items: [
        { title: "Full Ownership", text: "Responsabilidad de punta a punta" },
        { title: "Código Probado", text: "Soluciones listas para producción" },
        { title: "Diferencial", text: "UI pulida + lógica backend" },
        { title: "Buscando", text: "Equipos de producto de alto impacto" },
      ],
    },
    stack: {
      title1: "Capacidades",
      title2: "Técnicas",
      subtitle: "Herramientas seleccionadas por su confiabilidad, velocidad y mantenibilidad a largo plazo.",
      levels: {
        production: "Producción",
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
            "Arquitectura de APIs, lógica de negocio y flujos transaccionales de datos.",
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
        "Prototipos técnicos y desarrollos de alta fidelidad presentados como casos de estudio: foco en decisiones de arquitectura y ownership total.",
      list: [
        {
          title: "LawCaseAI",
          subtitle: "Solo Founder & Architect",
          description:
            "Plataforma legal impulsada por IA construida íntegramente en solitario. Gestiona todo el ciclo de vida: desde el procesamiento seguro de documentos hasta un asistente inteligente para revisión de abogados.",
          tech: ["React", "Next.js", "TypeScript", "Tailwind", "OpenAI"],
          visual: "legal",
          align: "left",
          status: "Construcción Solo · Repo privado - walkthrough disponible",
          problem: "Los abogados necesitan revisar documentos densos más rápido sin perder contexto ni trazabilidad.",
          role: "Solo Architect: Diseñé y construí todo el ecosistema, incluyendo el pipeline de procesamiento de IA y la infraestructura segura de documentos.",
          decisions: [
            "Desarrollo y despliegue íntegro en solitario",
            "Workflow de documentos con IA para trazabilidad total",
            "UI de alta fidelidad para revisión profesional legal",
          ],
          outcome: "Construí y desplegué con éxito un SaaS listo para producción que automatiza el análisis documental.",
          proof: ["Notas de arquitectura", "Walkthrough privado", "Despliegue independiente"],
          link: "https://lawcaseai-gamma.vercel.app/",
        },
        {
          title: "Paideia",
          subtitle: "Venture Prototype · Full-Stack Ownership",
          description:
            "Prototipo de marketplace complejo con compra de clases mediante créditos y flujos de cobro para profesores. Arquitectura frontend y backend diseñada para integridad transaccional.",
          tech: ["Node.js", "Express", "React", "PostgreSQL", "Stripe"],
          visual: "education",
          align: "right",
          status: "Lead Full-Stack Developer",
          problem: "Los marketplaces educativos necesitan un intercambio claro de valor entre estudiantes, profesores y pagos.",
          role: "Lead Full-Stack Developer: Responsable del modelo de marketplace y la lógica transaccional desde la DB hasta la UI.",
          decisions: [
            "Modelo de monetización basado en créditos",
            "Arquitectura de API desacoplada",
            "Integridad transaccional para pagos a profesores",
          ],
          outcome: "Entregué un prototipo funcional con una ruta clara hacia la monetización real.",
          proof: ["Walkthrough técnico", "Lógica de flujo de créditos", "Arquitectura de base de datos"],
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
      role: "Core Contributor & Full-Stack Developer",
      company: "@ NocNoc · E-commerce Cross-Border de Alta Escala",
      bullets: [
        "Desarrollo y mantenimiento de funcionalidades críticas en un entorno de producción de alta escala (+110 empleados).",
        "Colaboración con equipos de producto cross-functional para entregar módulos de grado de producción usando Java y TypeScript.",
        "Operación en ciclos de entrega de alta velocidad, asegurando la calidad del código mediante revisiones por pares y mejores prácticas ágiles.",
        "Resolución proactiva de incidentes técnicos complejos, manteniendo la estabilidad y el rendimiento del sistema.",
      ],
    },
    contact: {
      pill: "Abierto a equipos de producto de alto impacto",
      title1: "Construyamos",
      title2: "el próximo gran producto.",
      p:
        "Listo para enfrentar tus desafíos técnicos más complejos con resiliencia arquitectónica y ownership de producto.",
      availability: [
        { title: "Interés", text: "Impacto & Nativo Asincrónico" },
        { title: "Ownership", text: "Responsabilidad de Punta a Punta" },
        { title: "Especialidad", text: "Arquitecturas Escalables y Ownership" },
      ],
      emailLabel: "Email",
      cvLabel: "Descargar CV",
      sayHello: "Contactar por oportunidades",
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
        unlocked: "La experiencia de Gonzalo ahora está a tu disposición. Resiliencia arquitectónica y ownership de producto, desbloqueados.",
        cta: "EMPEZAR PROYECTO",
      }
    },
  },
};
