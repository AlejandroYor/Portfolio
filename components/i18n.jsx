// i18n: simple lang context + translations

const LangCtx = React.createContext({ lang: "en", setLang: () => {}, t: (k) => k });

const TRANSLATIONS = {
  en: {
    // nav
    "nav.about": "about",
    "nav.skills": "skills",
    "nav.projects": "projects",
    "nav.contact": "contact",
    "nav.contactBtn": "contact me",
    // hero
    "hero.available": "available for new opportunities",
    "hero.hi": "hi, ",
    "hero.im": "i'm ",
    "hero.tagline": "technical support engineer focused on",
    "hero.taglineBold": "solving complex problems",
    "hero.taglineEnd": "and building functional web solutions.",
    "hero.cta1": "contact me",
    "hero.cta2": "view projects",
    "hero.scroll": "SCROLL",
    "hero.meta.currently": "currently",
    "hero.meta.currentlyV": "monday.com",
    "hero.meta.currentlySub": "tse · enterprise",
    "hero.meta.based": "based in",
    "hero.meta.basedV": "guatemala",
    "hero.meta.basedSub": "remote · hybrid",
    "hero.meta.exp": "experience",
    "hero.meta.expV": "5+ years",
    "hero.meta.expSub": "tier 2 / b2b saas",
    "hero.meta.stack": "stack",
    "hero.meta.stackV": "react · ts · apis",
    "hero.meta.stackSub": "rest · graphql · sql",
    "hero.badge.support": "tier 2 support",
    // about
    "about.tag": "/ 01 — ABOUT",
    "about.title": "about ",
    "about.titleItalic": "me",
    "about.p1a": "I specialize in ",
    "about.p1b": "troubleshooting complex systems",
    "about.p1c": ", debugging issues across frontend and backend, and delivering reliable solutions under pressure.",
    "about.p2": "With experience in technical support engineering, I work closely with real-world problems — from API errors to system integrations — and I enjoy transforming them into clean and scalable solutions.",
    "about.p3": "Currently, I'm expanding into web development, building projects that combine functionality, automation, and user-focused design.",
    "exp.role1": "Technical Support Engineer",
    "exp.note1": "B2B Enterprise · CRM, Service, Work Management, Dev · APIs, SSO",
    "exp.role2": "IT Analyst, Tier 2",
    "exp.note2": "Active Directory, FortiClient VPN, Salesforce, Citrix, AWS",
    "exp.role3": "Customer Service · De'Longhi",
    "exp.note3": "Tier 1 troubleshooting · data analysis",
    "exp.role4": "Systems Developer (intern)",
    "exp.note4": "C# · SQL · internal tooling",
    "exp.date1": "2025 — present",
    "exp.date2": "2023 — 2025",
    "exp.date3": "2023",
    "exp.date4": "2018",
    // skills
    "skills.tag": "/ 02 — TOOLKIT",
    "skills.title": "skills ",
    "skills.titleItalic": "& stack",
    "skills.intro": "The tools I reach for daily — split between solving production incidents and shipping web interfaces.",
    "skills.cat1": "Technical Support",
    "skills.cat1.i1": "Troubleshooting complex issues",
    "skills.cat1.i2": "Debugging APIs and services",
    "skills.cat1.i3": "Log analysis",
    "skills.cat1.i4": "Incident resolution",
    "skills.cat2": "Web Development",
    "skills.cat2.i1": "HTML, CSS, JavaScript",
    "skills.cat2.i2": "React + TypeScript",
    "skills.cat2.i3": "Tailwind CSS",
    "skills.cat2.i4": "Responsive design",
    "skills.cat3": "Tools & Systems",
    "skills.cat3.i1": "Git / GitHub",
    "skills.cat3.i2": "REST APIs",
    "skills.cat3.i3": "Postman",
    "skills.cat3.i4": "Browser DevTools",
    // projects
    "projects.tag": "/ 03 — SELECTED WORK",
    "projects.title": "projects ",
    "projects.titleItalic": "& cases",
    "projects.intro": "A mix of shipped sites, practical automations, and real production incidents I've worked through.",
    "projects.visit": "visit live site",
    "projects.internal": "— internal / case study",
    "p1.title": "Personal Portfolio",
    "p1.type": "Personal",
    "p1.desc": "Responsive portfolio built with React and Tailwind, focused on performance and modern UI.",
    "p2.title": "Antojitos GT — WhatsApp Ordering",
    "p2.type": "Practical Tool",
    "p2.desc": "Food ordering web app that sends complete orders to WhatsApp using URL-based API integration. Dynamic cart, totals, and one-tap message dispatch.",
    "p3.title": "Salud y Bienestar",
    "p3.type": "Client Site",
    "p3.desc": "Catalog & contact site for a wellness distributor — clean responsive layout, fast load, integrated WhatsApp inquiries.",
    "p4.title": "Debugging Case Solutions",
    "p4.type": "Experience",
    "p4.year": "ongoing",
    "p4.desc": "A growing collection of real troubleshooting scenarios solved in production — API failures, integration breakages, SSO edge cases, and system inconsistencies.",
    // contact
    "contact.tag": "/ 04 — GET IN TOUCH",
    "contact.title1": "let's ",
    "contact.title2": "connect",
    "contact.lead": "Want to work together or need help solving a problem? Let's connect — WhatsApp is fastest, email works too.",
    "contact.wa": "whatsapp me",
    "contact.email": "send an email",
    "contact.linkedin": "linkedin",
    "contact.behance": "behance",
    "p5.title": "Rastreador de Gasto Público GT",
    "p5.type": "Civic Tech",
    "p5.desc": "Public-spending tracker for Guatemala — visualizes open government data with interactive charts, filters, and category breakdowns. Focused on transparency and accessibility.",
    "contact.email_k": "EMAIL",
    "contact.wa_k": "WHATSAPP",
    "contact.loc_k": "LOCATION",
    "contact.loc_v": "Guatemala City",
    "contact.time_k": "LOCAL TIME",
    "footer.opp": "OPEN TO OPPORTUNITIES · GT",
    "footer.built": "BUILT WITH REACT · DEPLOYED ON THE WEB",
  },
  es: {
    "nav.about": "sobre mí",
    "nav.skills": "habilidades",
    "nav.projects": "proyectos",
    "nav.contact": "contacto",
    "nav.contactBtn": "contáctame",

    "hero.available": "disponible para nuevas oportunidades",
    "hero.hi": "hola, ",
    "hero.im": "soy ",
    "hero.tagline": "ingeniero de soporte técnico enfocado en",
    "hero.taglineBold": "resolver problemas complejos",
    "hero.taglineEnd": "y construir soluciones web funcionales.",
    "hero.cta1": "contáctame",
    "hero.cta2": "ver proyectos",
    "hero.scroll": "DESLIZA",
    "hero.meta.currently": "actualmente",
    "hero.meta.currentlyV": "monday.com",
    "hero.meta.currentlySub": "tse · enterprise",
    "hero.meta.based": "ubicación",
    "hero.meta.basedV": "guatemala",
    "hero.meta.basedSub": "remoto · híbrido",
    "hero.meta.exp": "experiencia",
    "hero.meta.expV": "5+ años",
    "hero.meta.expSub": "tier 2 / b2b saas",
    "hero.meta.stack": "stack",
    "hero.meta.stackV": "react · ts · apis",
    "hero.meta.stackSub": "rest · graphql · sql",
    "hero.badge.support": "soporte tier 2",

    "about.tag": "/ 01 — SOBRE MÍ",
    "about.title": "sobre ",
    "about.titleItalic": "mí",
    "about.p1a": "Me especializo en ",
    "about.p1b": "resolver sistemas complejos",
    "about.p1c": ", depurar errores en frontend y backend, y entregar soluciones confiables bajo presión.",
    "about.p2": "Con experiencia en ingeniería de soporte técnico, trabajo con problemas reales del día a día — desde errores de API hasta integraciones de sistemas — y disfruto convertirlos en soluciones limpias y escalables.",
    "about.p3": "Actualmente estoy expandiéndome al desarrollo web, construyendo proyectos que combinan funcionalidad, automatización y diseño centrado en el usuario.",
    "exp.role1": "Ingeniero de Soporte Técnico",
    "exp.note1": "B2B Enterprise · CRM, Service, Work Management, Dev · APIs, SSO",
    "exp.role2": "Analista de TI, Tier 2",
    "exp.note2": "Active Directory, FortiClient VPN, Salesforce, Citrix, AWS",
    "exp.role3": "Servicio al Cliente · De'Longhi",
    "exp.note3": "Soporte Tier 1 · análisis de datos",
    "exp.role4": "Desarrollador de Sistemas (prácticas)",
    "exp.note4": "C# · SQL · herramientas internas",
    "exp.date1": "2025 — presente",
    "exp.date2": "2023 — 2025",
    "exp.date3": "2023",
    "exp.date4": "2018",

    "skills.tag": "/ 02 — HERRAMIENTAS",
    "skills.title": "habilidades ",
    "skills.titleItalic": "& stack",
    "skills.intro": "Las herramientas que uso a diario — entre resolver incidentes en producción y entregar interfaces web.",
    "skills.cat1": "Soporte Técnico",
    "skills.cat1.i1": "Resolución de problemas complejos",
    "skills.cat1.i2": "Depuración de APIs y servicios",
    "skills.cat1.i3": "Análisis de logs",
    "skills.cat1.i4": "Resolución de incidentes",
    "skills.cat2": "Desarrollo Web",
    "skills.cat2.i1": "HTML, CSS, JavaScript",
    "skills.cat2.i2": "React + TypeScript",
    "skills.cat2.i3": "Tailwind CSS",
    "skills.cat2.i4": "Diseño responsivo",
    "skills.cat3": "Herramientas & Sistemas",
    "skills.cat3.i1": "Git / GitHub",
    "skills.cat3.i2": "APIs REST",
    "skills.cat3.i3": "Postman",
    "skills.cat3.i4": "Browser DevTools",

    "projects.tag": "/ 03 — TRABAJO DESTACADO",
    "projects.title": "proyectos ",
    "projects.titleItalic": "& casos",
    "projects.intro": "Una mezcla de sitios entregados, automatizaciones prácticas e incidentes reales en producción que he resuelto.",
    "projects.visit": "ver sitio en vivo",
    "projects.internal": "— interno / caso de estudio",
    "p1.title": "Portafolio Personal",
    "p1.type": "Personal",
    "p1.desc": "Portafolio responsivo construido con React y Tailwind, enfocado en rendimiento y UI moderna.",
    "p2.title": "Antojitos GT — Pedidos por WhatsApp",
    "p2.type": "Herramienta Práctica",
    "p2.desc": "App de pedidos de comida que envía órdenes completas a WhatsApp mediante integración por URL. Carrito dinámico, totales y envío en un toque.",
    "p3.title": "Salud y Bienestar",
    "p3.type": "Sitio Cliente",
    "p3.desc": "Sitio de catálogo y contacto para un distribuidor de bienestar — diseño responsivo, carga rápida, consultas integradas vía WhatsApp.",
    "p4.title": "Casos de Debugging",
    "p4.type": "Experiencia",
    "p4.year": "en curso",
    "p4.desc": "Una colección creciente de escenarios reales resueltos en producción — fallas de API, integraciones rotas, casos límite de SSO e inconsistencias de sistemas.",

    "contact.tag": "/ 04 — CONTACTO",
    "contact.title1": "vamos a ",
    "contact.title2": "conectar",
    "contact.lead": "¿Quieres trabajar juntos o necesitas ayuda resolviendo un problema? Conectemos — WhatsApp es lo más rápido, el correo también funciona.",
    "contact.wa": "escríbeme por whatsapp",
    "contact.email": "envíame un correo",
    "contact.linkedin": "linkedin",
    "contact.behance": "behance",
    "p5.title": "Rastreador de Gasto Público GT",
    "p5.type": "Civic Tech",
    "p5.desc": "Rastreador del gasto público de Guatemala — visualiza datos abiertos del gobierno con gráficas interactivas, filtros y desglose por categorías. Enfocado en transparencia y accesibilidad.",
    "contact.email_k": "CORREO",
    "contact.wa_k": "WHATSAPP",
    "contact.loc_k": "UBICACIÓN",
    "contact.loc_v": "Ciudad de Guatemala",
    "contact.time_k": "HORA LOCAL",
    "footer.opp": "DISPONIBLE PARA OPORTUNIDADES · GT",
    "footer.built": "HECHO CON REACT · DESPLEGADO EN LA WEB",
  },
};

function LangProvider({ children }) {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("lang") || "en"; } catch (_) { return "en"; }
  });
  React.useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch (_) {}
    document.documentElement.lang = lang;
  }, [lang]);
  const t = React.useCallback((k) => (TRANSLATIONS[lang] && TRANSLATIONS[lang][k]) || TRANSLATIONS.en[k] || k, [lang]);
  return React.createElement(LangCtx.Provider, { value: { lang, setLang, t } }, children);
}

function useT() {
  const ctx = React.useContext(LangCtx);
  return ctx;
}

function LangSwitch() {
  const { lang, setLang } = useT();
  const isEn = lang === "en";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      padding: 3, borderRadius: 999,
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      marginRight: 4,
    }}>
      {["en", "es"].map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            style={{
              appearance: "none", border: 0, cursor: "pointer",
              padding: "5px 10px", borderRadius: 999,
              fontFamily: "JetBrains Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em",
              background: active ? "var(--accent)" : "transparent",
              color: active ? "#0C0C0C" : "rgba(245,245,242,0.6)",
              transition: "all 200ms ease",
              textTransform: "uppercase",
            }}
            aria-pressed={active}
          >
            {l === "en" ? "ENG" : "ESP"}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { LangProvider, LangCtx, useT, LangSwitch, TRANSLATIONS });
