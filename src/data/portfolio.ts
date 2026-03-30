export interface ProjectKPI {
  label: string;
  value: string;
}

export interface ProjectDetail {
  title: string;
  client: string;
  problem: string;
  approach: string;
  technicalDecision: string;
  results: string[];
  kpis: ProjectKPI[];
  architecture: string[];
  ownership: string[];
  stack: string[];
  operationalCockpit?: {
    title: string;
    widgets: string[];
  };
  isHero?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
  technologies: string[];
}

export const portfolioData = {
  name: "Federico Guillermo Gravina",
  headline:
    "Plataformas de IA, datos y automatización para revenue, compliance y eficiencia operativa industrial",
  tagline:
    "Diseño y lidero soluciones enterprise de IA generativa, ingeniería de datos, observabilidad y automatización para entornos industriales y regulados. Mi foco está en reliability, asset optimization, demand forecasting, control tower operativa, compliance by design y toma de decisiones mission-critical.",
  email: "gravinadavilafederico@gmail.com",
  phone: "+54 11 3825-6724",
  github: "https://github.com/FedeGG09",
  linkedin: "https://www.linkedin.com/in/federico-gravina-23a289b2/",
  cvUrl: "/cv-federico-gravina.pdf",

  heroMetrics: [
    { value: "60%", label: "Menos tiempo en análisis críticos" },
    { value: "15M+", label: "Registros procesados" },
    { value: "99.5%", label: "SLA objetivo enterprise" },
    { value: "<4s", label: "Latencia RAG productiva" },
    { value: "80+", label: "Workshops automatizados" },
  ],

  about:
    "Lidero el diseño y despliegue de plataformas de IA, ingeniería de datos y automatización para procesos críticos en entornos industriales, energéticos y altamente regulados. Mi experiencia combina arquitecturas cloud escalables, observabilidad end-to-end, RBAC, gobierno de datos, audit logs, trazabilidad por auditoría y foco en eficiencia operativa. Traduzco complejidad técnica en decisiones ejecutivas, conectando negocio, compliance, reliability y performance productiva.",

  skillsDominant: [
    {
      category: "AI / LLM / RAG",
      items: [
        "Azure AI Foundry",
        "LangChain",
        "LangGraph",
        "Qdrant",
        "FAISS",
        "Embeddings",
        "Prompt Engineering",
        "RAG Enterprise",
      ],
    },
    {
      category: "Data Engineering / Backend",
      items: [
        "Python",
        "FastAPI",
        "PySpark",
        "SQL",
        "Airflow",
        "Spark Structured Streaming",
        "Docker",
        "Kubernetes",
        "Machine Learning",
        "Deep Learning",
        "NLP",
      ],
    },
    {
      category: "Governance / Platform",
      items: [
        "RBAC",
        "Data Lineage",
        "Audit Logs",
        "Prompt Versioning",
        "Observability",
        "Compliance by Design",
        "SOC2 Mindset",
        "SLA/SLO",
      ],
    },
    {
      category: "Cloud / Analytics",
      items: [
        "Azure",
        "AWS",
        "GCP",
        "Power BI",
        "BigQuery",
        "CloudWatch",
        "Grafana",
        "OpenSearch",
      ],
    },
  ],

  skillsIndustry: [
    "Eficiencia Operativa Industrial",
    "Reliability Engineering",
    "Asset Optimization",
    "Field Operations",
    "Demand Forecasting",
    "Supply Chain Resilience",
    "Maintenance Intelligence",
    "Production Planning",
    "Compliance",
    "Observability",
    "Time Series",
    "Documentación Técnica",
  ],

  skillsSecondary: [
    "React",
    "TypeScript",
    "Chart.js",
    "Playwright",
    "Selenium",
    "GitLab CI/CD",
    "Hotjar",
    "Google Ads",
    "LLaMA 3",
    "OpenAI",
    "Azure AI Foundry,",    
    "AWS Bedrock",
  ],

  projects: [
    {
      title: "Motor de pricing dinámico y control tower de revenue industrial",
      client: "Sullair",
      problem:
        "La definición manual de precios reducía velocidad de respuesta comercial y dificultaba la optimización de rentabilidad en escenarios industriales con alta volatilidad de demanda.",
      approach:
        "Construí pipelines ETL y modelos analíticos para ajustar precios según históricos, comportamiento de clientes, señales de mercado y proyecciones de demanda, habilitando simulación near real-time.",
      technicalDecision:
        "Python + SQL Server + Azure VMs + Power BI + feature engineering + alertas por drift comercial + observabilidad de revenue.",
      results: [
        "18% mejora en rentabilidad por segmento",
        "35% menos tiempo de definición comercial",
        "Simulación de escenarios operativos en minutos",
        "Eliminación de dependencia manual",
      ],
      kpis: [
        { value: "5M+", label: "Registros históricos" },
        { value: "98%", label: "Disponibilidad" },
        { value: "NRT", label: "Refresh de pricing" },
        { value: "18%", label: "Revenue uplift" },
      ],
      architecture: [
        "Pricing engine modular",
        "Versionado de reglas",
        "Alertas por anomalías de margen",
        "Escalabilidad por unidad de negocio",
        "Lineage de decisiones de pricing",
      ],
      ownership: [
        "Arquitectura end-to-end",
        "Pipelines ETL",
        "Modelo analítico",
        "KPIs ejecutivos",
        "Presentación a dirección comercial",
      ],
      operationalCockpit: {
        title: "Industrial Revenue Control Tower",
        widgets: [
          "Revenue uplift by segment",
          "Demand forecasting confidence",
          "Margin leakage alerts",
          "Pricing drift monitor",
          "Commercial performance by plant",
        ],
      },
      stack: ["Python", "SQL Server", "Azure", "Power BI"],
      isHero: true,
    },
    {
      title: "IA Generativa y RAG para dossiers regulatorios",
      client: "Qualipharma",
      problem:
        "La validación documental regulatoria implicaba múltiples revisiones manuales, errores humanos y riesgo de incumplimiento normativo.",
      approach:
        "Diseñé arquitectura RAG enterprise con recuperación semántica, embeddings y trazabilidad documental completa para automatizar generación, análisis y corrección.",
      technicalDecision:
        "Azure AI Foundry + LangChain + Qdrant + Azure Blob + Data Lake + Azure SQL + RBAC + audit logs.",
      results: [
        "65% menos tiempo de revisión",
        "40% menos errores manuales",
        "Compliance by design",
        "Estandarización regulatoria",
      ],
      kpis: [
        { value: "15K+", label: "Documentos" },
        { value: "92%", label: "Precisión" },
        { value: "99.5%", label: "SLA" },
        { value: "<4s", label: "Respuesta" },
      ],
      architecture: [
        "RAG enterprise escalable",
        "RBAC",
        "Lineage por documento",
        "Prompt versioning",
        "Observabilidad end-to-end",
      ],
      ownership: [
        "Arquitectura",
        "Backend RAG",
        "Métricas de calidad",
        "Roadmap técnico",
      ],
      operationalCockpit: {
        title: "Regulatory Compliance Control Tower",
        widgets: [
          "SLA de revisión",
          "Precisión contextual",
          "Errores evitados",
          "Trazabilidad por fuente",
          "Auditoría por documento",
        ],
      },
      stack: ["Azure AI Foundry", "LangChain", "Qdrant", "Azure SQL"],
    },
    {
      title: "Scraping y enriquecimiento inteligente de leads",
      client: "Consultancy Services International Ltd.",
      problem:
        "La adquisición de leads desde LinkedIn y fuentes externas era manual, inconsistente y no escalable.",
      approach:
        "Lideré una plataforma end-to-end con scraping async, enriquecimiento con IA, vector search y dashboard en tiempo real.",
      technicalDecision:
        "FastAPI + Playwright + Selenium + asyncio + Azure Blob + Azure SQL + Twilio + ProxyCurl + Apollo + Chart.js.",
      results: [
        "Automatización total del funnel",
        "Mejora de conversión",
        "Mayor completitud de datos",
        "Escala sobre grandes volúmenes",
      ],
      kpis: [
        { value: "500K+", label: "Perfiles" },
        { value: "6", label: "APIs" },
        { value: "99%", label: "Uptime" },
        { value: "NRT", label: "Activación" },
      ],
      architecture: [
        "Async workers",
        "Retries",
        "Observabilidad de jobs",
        "HA cloud",
      ],
      ownership: [
        "Liderazgo técnico",
        "Backend",
        "Dashboards",
        "Integraciones externas",
      ],
      stack: ["FastAPI", "Playwright", "Azure", "Chart.js"],
    },
    {
      title: "Plataforma de análisis de riesgo crediticio con IA",
      client: "Fintech",
      problem:
        "La evaluación crediticia era lenta y no explotaba documentos no estructurados.",
      approach:
        "Diseñé scoring con LLM + RAG + pipelines históricos y Qdrant para enriquecer decisiones con trazabilidad.",
      technicalDecision:
        "Azure Data Factory + Data Lake + Qdrant + LangChain + FastAPI.",
      results: [
        "60% reducción de tiempo",
        "Mayor precisión de scoring",
        "Automatización de análisis",
      ],
      kpis: [
        { value: "1M+", label: "Perfiles" },
        { value: "<2s", label: "Latencia" },
        { value: "30%", label: "Menos retrabajo" },
      ],
      architecture: [
        "Scoring batch + online",
        "Auditabilidad",
        "Drift monitoring",
      ],
      ownership: ["Arquitectura", "Pipelines", "APIs", "Stakeholders"],
      stack: ["LangChain", "Qdrant", "ADF", "FastAPI"],
    },
  ] as ProjectDetail[],

  experience: [
    {
      role: "AI Platform Engineer / Professor / Data Engineer",
      company: "Coderhouse",
      period: "Abr 2025 — Presente",
      summary:
        "Participación activa en el desarrollo y puesta en producción de Course Creator para automatizar workshops virtuales. Diseñé flujos automatizados de contenido con OpenAI API sobre AWS, PySpark sobre Amazon EMR, orquestación con MWAA, EKS, S3, RDS PostgreSQL y observabilidad con CloudWatch, OpenSearch y Grafana. Contribuí directamente a +80 workshops y dicté +40 talleres, articulando academia, producto y tecnología.",
      tags: [
        "Platform Engineering",
        "PySpark",
        "Observability",
        "Leadership",
        "AWS",
      ],
      technologies: [
        "Python",
        "PySpark",
        "Amazon EMR",
        "MWAA",
        "EKS",
        "S3",
        "RDS",
        "CloudWatch",
        "OpenSearch",
        "Grafana",
        "GitLab CI/CD",
      ],
    },
    {
      role:
        "Data Scientist / Data Engineer / AI Engineer / Backend Engineer / Software Engineer",
      company: "Consultancy Services International Ltd.",
      period: "Mar 2025 — Presente",
      summary:
        "Lidero diseño y desarrollo de plataformas end-to-end de scraping, enriquecimiento de leads, scoring con IA, motores de recomendación y backends productivos con FastAPI. Implementé LangChain, FAISS, Qdrant, Azure AI Foundry, Playwright, Selenium, Azure Blob Storage, Azure SQL y dashboards interactivos con HTML/JS/Chart.js.",
      tags: [
        "LLM",
        "RAG",
        "Backend",
        "Scraping",
        "Dashboards",
      ],
      technologies: [
        "FastAPI",
        "LangChain",
        "Qdrant",
        "FAISS",
        "Azure",
        "Playwright",
        "Selenium",
        "Chart.js",
      ],
    },
    {
  role: "Data Scientist / Data Engineer / AI Engineer",
  company: "Analytics Town",
  period: "Feb 2024 — Abr 2025",
  summary:
    "Diseñé arquitecturas de IA, RAG y machine learning para pricing dinámico, forecasting, dashboards ejecutivos y automatización de decisiones de negocio. Implementé pipelines ETL, modelos predictivos, soluciones con AWS Bedrock, análisis de sentimiento, optimización UX con Hotjar y estrategias data-driven para revenue uplift.",
  tags: [
    "LLM",
    "RAG",
    "Pricing",
    "Forecasting",
    "Dashboards",
    "Revenue",
    "Data Storytelling",
  ],
  technologies: [
    "Python",
    "SQL Server",
    "Power BI",
    "FastAPI",
    "AWS Bedrock",
    "Hotjar",
    "Google Ads",
    "Azure",
  ],
},
    {
      role: "Data Science Teaching Assistant",
      company: "Henry Bootcamp",
      period: "Jul 2023 — Dic 2023",
      summary:
        "Coordiné grupos de estudiantes, promoví pair programming y propuse mejoras operativas para procesos académicos del bootcamp.",
      tags: ["Teaching", "Leadership", "Process Improvement"],
      technologies: ["Python", "Pandas", "SQL"],
    },
    {
      role: "Profesor Universitario de Ciencias Económicas",
      company: "Universidad Nacional de Avellaneda (UNDAV)",
      period: "Abr 2022 — Feb 2024",
      summary:
        "Docencia universitaria, diseño de reportes, bases SQL y comunicación de insights para contextos académicos y administrativos.",
      tags: ["Teaching", "Reporting", "Business"],
      technologies: ["SQL", "Reporting", "Analytics"],
    },
    {
      role: "Servicio de atención al cliente y reporting",
      company: "UNDAV",
      period: "Mar 2018 — Abr 2022",
      summary:
        "Gestión de demanda estudiantil, resolución de reclamos, diseño de informes, SQL y optimización de operatoria administrativa.",
      tags: ["Operations", "SQL", "Stakeholders"],
      technologies: ["SQL", "Excel", "Reporting"],
    },
    {
      role: "Director responsable de equipo y producción",
      company: "Cooperativa Provincias Unidas",
      period: "Feb 2022 — Jul 2023",
      summary:
        "Liderazgo operativo de equipos y producción, coordinación de procesos, continuidad operativa y cumplimiento de objetivos organizacionales.",
      tags: ["Leadership", "Operations", "Continuity"],
      technologies: ["Management", "Process Design", "SQL", "Excel"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Diplomatura en Ciencia de Datos",
      institution: "Universidad Nacional de Chilecito",
      year: "2024",
    },
    {
      degree: "Programación en Python",
      institution: "Universidad Nacional de Misiones",
      year: "2023",
    },
    {
      degree: "Data Science — Henry",
      institution: "Henry Bootcamp",
      year: "2023",
    },
    {
      degree: "Profesor Superior de Historia",
      institution: "Profesorado Alfredo Palacios",
      year: "2013 — 2019",
    },
    {
      degree: "Licenciatura en Sociología (cursado)",
      institution: "UBA",
      year: "2005 — 2009",
    },
  ],

  certifications: [
    "Microsoft Certified: Azure Fundamentals — 2025",
    "Azure AI Foundry Text Analysis — 2026",
    "Azure Image Analysis — 2026",
    "Responsible Generative AI in Foundry — 2026",
    "Generación de imágenes con IA — 2026",
    "Fusion Dev Teams for Enterprise Software — 2026",
    "Microsoft Dataverse for Teams — 2026",
    "Microsoft Copilot Studio — 2026",
    "Azure Content Understanding — 2026",
    "AI Agents with Microsoft Foundry — 2026",
    "Planning AI Solutions in Azure — 2026",
    "NLP Concepts — 2026",
    "AI and Generative Agents — 2026",
    "Azure Governance — 2026",
    "Machine Learning Avanzado — 2025",
    "Introducción al Machine Learning — 2025",
    "Introducción a la Ciencia de Datos — 2025",
    "Programación con Python — 2025",
    "CoderCamp IA — 2025",
    "EF SET C1 Advanced — 2025",
    "AWS Certifications (5) — 2024",
    "SFPC Scrum Foundation — 2023",
  ],

  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "B2" },
  ],

  contactClosing:
    "Abierto a roles de liderazgo técnico donde IA, data platforms y automatización generen impacto medible en eficiencia operativa, reliability, compliance y toma de decisiones en industrias de alta exigencia como energía, oil & gas, pharma y fintech.",

  navLinks: [
    { label: "Sobre mí", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Formación", href: "#education" },
    { label: "Certificaciones", href: "#certifications" },
    { label: "Contacto", href: "#contact" },
  ],
};
