import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ali Ammar Hussain — Senior Software Engineer · AI Systems",
  author: "Ali Ammar Hussain",
  description:
    "Senior Software Engineer specializing in production AI systems — RAG pipelines, AI agents, multimodal Vision AI, tool calling, and enterprise intelligent workflows. Based in Lahore, Pakistan.",
  lang: "en",
  siteLogo: "/profile.png",
  navLinks: [
    { text: "AI Expertise", href: "#ai-expertise" },
    { text: "Tech Stack", href: "#tech-expertise" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:aliammarhussain1122@gmail.com" },
    { text: "Phone", href: "tel:+923086612077" },
  ],
  socialImage: "/profile.png",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ali Ammar Hussain",
    specialty: "Senior Software Engineer",
    summary:
      "I design and build production AI systems for enterprise use — not surface-level LLM API integrations. From RAG pipelines and AI agents to multimodal Vision AI and database-aware tool calling, I architect intelligent platforms where AI is the core product and the web application is the delivery layer.",
    email: "aliammarhussain1122@gmail.com",
    highlights: [
      "RAG & Vector Databases",
      "AI Agents",
      "Vision AI",
      "Tool Calling",
      "n8n & Agentic Workflows",
      "LangChain",
      "OpenAI & Gemini",
      "Enterprise AI",
    ],
  },
  aiExpertise: [
    {
      title: "AI Agents",
      description:
        "Autonomous agents that reason, plan, and execute multi-step workflows with tool calling and structured outputs.",
      icon: "agents",
    },
    {
      title: "Retrieval-Augmented Generation",
      description:
        "Production RAG pipelines for private knowledge retrieval, document indexing, and context-grounded responses.",
      icon: "rag",
    },
    {
      title: "AI Chat Systems",
      description:
        "Streaming conversational interfaces with context management, memory, and workspace-aware intelligence.",
      icon: "chat",
    },
    {
      title: "Vision AI",
      description:
        "Real-time multimodal assistants that understand live camera input, documents, and construction environments.",
      icon: "vision",
    },
    {
      title: "Multimodal AI",
      description:
        "Systems that reason across text, images, and structured data within a unified conversational experience.",
      icon: "multimodal",
    },
    {
      title: "Tool & Function Calling",
      description:
        "Database-aware AI agents that retrieve records, create data, execute workflows, and return structured results.",
      icon: "tools",
    },
    {
      title: "Prompt Engineering",
      description:
        "Carefully engineered prompts, system instructions, and context windows for reliable enterprise AI behavior.",
      icon: "prompt",
    },
    {
      title: "Semantic Search",
      description:
        "Embedding-based search across private knowledge bases, documents, and domain-specific content libraries.",
      icon: "search",
    },
    {
      title: "Vector Databases",
      description:
        "Embedding storage, similarity retrieval, and semantic indexing for large-scale knowledge systems.",
      icon: "vector",
    },
    {
      title: "AI Workflow Automation",
      description:
        "Production n8n pipelines combining LLM reasoning, agentic workflows, webhooks, and multi-system orchestration for enterprise business automation.",
      icon: "workflow",
    },
    {
      title: "Enterprise AI Solutions",
      description:
        "End-to-end AI platforms for construction, engineering, healthcare, and SaaS with secure production deployment.",
      icon: "enterprise",
    },
    {
      title: "Context Engineering",
      description:
        "AI stitching across multiple knowledge sources — vaults, databases, and expert models in one conversation.",
      icon: "context",
    },
    {
      title: "Streaming AI",
      description:
        "Low-latency streaming responses for real-time chat, live Vision AI, and interactive assistant experiences.",
      icon: "streaming",
    },
    {
      title: "LLM Integrations",
      description:
        "OpenAI APIs, Gemini, LangChain, and LangGraph for production-grade model orchestration and reasoning.",
      icon: "llm",
    },
  ],
  techExpertise: [
    {
      title: "Node.js & Express",
      description:
        "Scalable backend services, RESTful APIs, and complex business logic for production SaaS platforms serving thousands of users.",
      icon: "node",
      tags: ["Node.js", "Express.js", "JavaScript ES6+"],
    },
    {
      title: "Vue.js",
      description:
        "Component-based SPAs and dashboards with responsive UI, state management, and seamless API integration for enterprise products.",
      icon: "vue",
      tags: ["Vue.js", "Composition API", "Pinia"],
    },
    {
      title: "React.js",
      description:
        "Full-stack web applications with React frontends, reusable components, and REST API consumption for data-driven interfaces.",
      icon: "react",
      tags: ["React.js", "Hooks", "Component Architecture"],
    },
    {
      title: "REST & Real-Time APIs",
      description:
        "Secure API design with authentication, authorization, webhooks, and real-time communication via Socket.io for live features.",
      icon: "api",
      tags: ["REST APIs", "Socket.io", "Webhooks"],
    },
    {
      title: "Databases",
      description:
        "Data modeling, query optimization, and production database management across SQL and NoSQL systems at scale.",
      icon: "database",
      tags: ["MongoDB", "PostgreSQL", "Supabase", "MS SQL"],
    },
    {
      title: "Auth & Security",
      description:
        "JWT and OAuth authentication, role-based access control (RBAC), and secure execution layers for enterprise applications.",
      icon: "auth",
      tags: ["JWT", "OAuth", "RBAC"],
    },
    {
      title: "DevOps & Deployment",
      description:
        "Git workflows, GitLab CI/CD pipelines, Linux server management, and production deployment for reliable releases.",
      icon: "devops",
      tags: ["Git", "GitLab CI/CD", "Linux"],
    },
    {
      title: "Third-Party Integrations",
      description:
        "Production integrations with payment gateways, e-commerce platforms, calendars, and messaging APIs for business workflows.",
      icon: "integration",
      tags: ["Stripe", "Shopify", "Google APIs", "Outlook"],
    },
    {
      title: "Frontend Engineering",
      description:
        "Responsive, accessible interfaces with modern HTML5, CSS3, and JavaScript — built for performance and maintainability.",
      icon: "frontend",
      tags: ["HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "TypeScript",
      description:
        "Type-safe application development with TypeScript for robust backends, shared types, and maintainable codebases.",
      icon: "typescript",
      tags: ["TypeScript", "Type Safety", "Interfaces"],
    },
    {
      title: "Real-Time Systems",
      description:
        "Event-driven architectures, live data updates, and low-latency communication for interactive platform features.",
      icon: "realtime",
      tags: ["WebSockets", "Event-Driven", "Live Updates"],
    },
    {
      title: "SaaS & Enterprise Platforms",
      description:
        "End-to-end delivery of multi-tenant SaaS products — from architecture and APIs to deployment and team leadership.",
      icon: "saas",
      tags: ["SaaS", "Multi-tenant", "Scalability"],
    },
  ],
  experience: [
    {
      company: "Worktech",
      position: "Senior Backend Developer",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Developing scalable backend services and secure RESTful APIs powering production AI-enabled platforms.",
        "Implementing role-based access control (RBAC) and integrations for enterprise AI workflow systems.",
        "Collaborating with frontend and product teams to deliver AI-assisted features and intelligent automation.",
      ],
    },
    {
      company: "OutsourceNZ",
      position: "Team Lead — Vue.js & Node.js",
      startDate: "Feb 2022",
      endDate: "May 2025",
      summary: [
        "Led an 11-member engineering team delivering production SaaS platforms with embedded AI systems at their core.",
        "Architected enterprise AI platforms including RAG pipelines, AI agents, multimodal Vision AI, and database-aware assistants.",
        "Designed backend architecture using Node.js supporting thousands of active users across intelligent workflow products.",
        "Improved API response times by ~30% through query optimization and caching for AI retrieval and data services.",
        "Owned full delivery lifecycle: requirements → AI architecture → deployment → production monitoring.",
        "Mentored junior developers on AI integration patterns, coding standards, and production system design.",
      ],
    },
    {
      company: "SSP",
      position: "Backend Developer",
      startDate: "Jun 2021",
      endDate: "Apr 2022",
      summary: [
        "Developed backend services and RESTful APIs using Node.js and Express.js for data-driven applications.",
        "Implemented secure authentication, authorization, and core business logic for production platforms.",
      ],
    },
    {
      company: "Devsinc",
      position: "Associate Software Engineer",
      startDate: "Jan 2021",
      endDate: "Jun 2021",
      summary: [
        "Contributed to full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Developed and consumed RESTful APIs and implemented core frontend and backend features.",
      ],
    },
  ],
  projects: [
    {
      name: "DOMINIQX",
      tagline: "Enterprise AI Platform for Construction Intelligence",
      flagship: true,
      aiPlatform: true,
      category: "Enterprise AI · Construction",
      summary:
        "A production enterprise AI platform composed of multiple intelligent systems — not a conventional SaaS app with AI bolted on. DOMINIQX unifies private knowledge retrieval, database-aware agents, domain expert models, multimodal Vision AI, and cross-system AI orchestration into one construction intelligence layer.",
      highlights: [
        "Built enterprise AI assistants capable of interacting with databases through natural language.",
        "Developed production-grade RAG pipelines for private knowledge retrieval from uploaded documents.",
        "Implemented multimodal Vision AI for live, context-aware assistance on construction sites.",
        "Engineered AI stitching to unify Vault, Database Assistant, and Expert Models in one conversation.",
        "Created domain-specific AI assistants for construction compliance, rules, and regulations.",
      ],
      images: [
        {
          src: "/projects/dominiqx-1.png",
          alt: "DOMINIQX AI chat interface with Knowledge Vault and document-based Q&A",
          caption: "AI Chat · Knowledge Vault & RAG Conversations",
        },
        {
          src: "/projects/dominiqx-2.png",
          alt: "DOMINIQX Ask DOM AI hub with Sight, Upload, and agent stitching",
          caption: "Unified AI Hub · Sight, Vault & Personal Assistants",
        },
        {
          src: "/projects/dominiqx-3.png",
          alt: "DOMINIQX integrated business dashboard with Ask DOM assistant",
          caption: "Enterprise Dashboard · Ask DOM & Business Operations",
        },
      ],
      technologies: [
        "OpenAI APIs",
        "RAG",
        "Vector Databases",
        "Embeddings",
        "Function Calling",
        "Tool Calling",
        "Vision AI",
        "AI Agents",
        "Streaming Responses",
        "Context Management",
        "Prompt Engineering",
        "LangChain",
        "Semantic Search",
      ],
      features: [
        {
          title: "AI Knowledge Vault",
          description:
            "A private, AI-powered knowledge base where users upload PDFs, Word documents, and text files. Documents are parsed, embedded, and indexed for semantic retrieval — enabling natural language Q&A grounded exclusively in the user's own knowledge.",
          highlights: [
            "Retrieval-Augmented Generation (RAG)",
            "Document parsing & chunking",
            "Embeddings & vector storage",
            "Semantic search",
            "Context-aware, source-grounded answers",
          ],
        },
        {
          title: "AI Database Assistant",
          description:
            "An enterprise AI agent that interacts directly with application databases. Users perform complex business workflows through natural language — retrieving records, generating summaries, creating and updating data with secure, structured execution.",
          highlights: [
            "Tool calling & function calling",
            "Structured outputs",
            "Database-aware AI agent",
            "Secure execution layer",
            "Context-aware conversations",
          ],
        },
        {
          title: "Domain Expert Models",
          description:
            "Specialized construction AI assistants built through curated knowledge sources and RAG pipelines. Includes NCC (construction rules assistant) and SOPA (construction guidelines assistant) for standards, regulations, and compliance questions.",
          highlights: [
            "NCC — construction rules & compliance",
            "SOPA — guidelines & standards",
            "Domain-specific RAG pipelines",
            "Natural language regulatory Q&A",
          ],
        },
        {
          title: "Dominiqx Sight — Vision AI",
          description:
            "A multimodal AI assistant using live camera input. Users show construction sites, objects, or documents and ask real-time questions. The AI understands visual and conversational context, responding based on the active workspace — Knowledge Vault, Database Assistant, or Expert Models.",
          highlights: [
            "Multimodal Vision AI",
            "Real-time image understanding",
            "Live AI assistance",
            "Workspace-aware context routing",
          ],
        },
        {
          title: "AI Stitching — Unified Intelligence Layer",
          description:
            "A unique orchestration layer that combines multiple AI systems into one workflow. Users stitch together Knowledge Vault, Database Assistant, and Construction Expert Models — enabling the AI to reason across all knowledge sources within a single conversation.",
          highlights: [
            "AI orchestration & multi-agent workflow",
            "Context stitching across systems",
            "Unified intelligence layer",
            "Cross-source reasoning",
          ],
        },
        {
          title: "Dom Ask — AI Web Search Assistant",
          description:
            "An AI-powered web search assistant where users ask questions and receive grounded, conversational answers. The AI searches the web, gathers information, summarizes findings, and delivers synthesized responses.",
          highlights: [
            "AI-powered web retrieval",
            "Grounded, summarized responses",
            "Conversational search interface",
          ],
        },
      ],
    },
    {
      name: "TDH",
      tagline: "Engineering AI Platform for Hydraulic Intelligence",
      aiPlatform: true,
      category: "Engineering AI · Decision Support",
      summary:
        "An engineering AI platform — not calculation software with AI added on. TDH delivers intelligent hydraulic analysis, infrastructure recommendations, cost estimation, and documentation-grounded FAQ responses through production AI systems that understand project data and engineering context.",
      highlights: [
        "Designed AI systems capable of engineering calculations and intelligent infrastructure recommendations.",
        "Built production RAG pipelines for engineering FAQ grounded in company documentation.",
        "Engineered AI-assisted hydraulic optimization with pump placement decision support.",
        "Created intelligent early-stage project cost estimation from equipment and layout analysis.",
      ],
      images: [
        {
          src: "/projects/tdh-1.png",
          alt: "TDH Engine map view with pipeline routing and hydraulic design tools",
          caption: "Infrastructure Map · Pipeline Design & TDH Analysis",
        },
        {
          src: "/projects/tdh-2.png",
          alt: "TDH AI assistant performing pump calculations and data extraction",
          caption: "TDH AI · Engineering Calculations & Pump Optimization",
        },
        {
          src: "/projects/tdh-3.png",
          alt: "TDH Engine calculator with hydraulic data table and column configuration",
          caption: "TDH Engine · Hydraulic Calculator & Design Data",
        },
      ],
      technologies: [
        "OpenAI APIs",
        "Gemini",
        "RAG",
        "Tool Calling",
        "Function Calling",
        "LangChain",
        "Streaming Responses",
        "Prompt Engineering",
        "Context Management",
      ],
      features: [
        {
          title: "Engineering AI Assistant",
          description:
            "A conversational AI that accesses project databases, reads engineering data, understands available infrastructure, performs calculations, explains results, and recommends solutions — all through natural language interaction.",
          highlights: [
            "Database-connected engineering chat",
            "Calculation execution & explanation",
            "Infrastructure-aware reasoning",
            "Solution recommendations",
          ],
        },
        {
          title: "Hydraulic Intelligence",
          description:
            "AI performs complex hydraulic calculations using project parameters — available pipes, sizes, liquids, elevations, flow requirements, and pressure targets — then recommends optimal pump placement to achieve required pressure.",
          highlights: [
            "AI-assisted engineering analysis",
            "Pump placement optimization",
            "Pressure & flow decision support",
            "Multi-parameter hydraulic reasoning",
          ],
        },
        {
          title: "Cost Estimation AI",
          description:
            "Intelligent project cost estimation during early planning stages. The AI analyzes selected equipment, layouts, hydraulic requirements, and pump recommendations to produce data-driven cost projections.",
          highlights: [
            "Early-stage intelligent estimation",
            "Equipment & layout analysis",
            "Hydraulic-driven cost modeling",
          ],
        },
        {
          title: "FAQ RAG Pipeline",
          description:
            "A Retrieval-Augmented Generation pipeline enabling the AI to answer engineering FAQs from company documentation and knowledge bases — delivering domain-specific responses instead of generic LLM output.",
          highlights: [
            "Document-grounded engineering answers",
            "Private knowledge retrieval",
            "Context-aware FAQ responses",
          ],
        },
      ],
    },
    {
      name: "Moxxi",
      tagline: "AI-Powered Workflow Automation Platform",
      aiPlatform: true,
      category: "AI Automation · Business Operations",
      summary:
        "A production-grade AI workflow automation platform — not simple n8n automations. Moxxi combines LLM reasoning, workflow orchestration, business logic, and multi-system integrations to automate real business operations at scale. Intelligent workflows understand user intent, reason over data, and trigger complex processes across Airtable, Asana, and external APIs.",
      highlights: [
        "Designed production AI workflows using n8n that combine LLM reasoning with event-driven orchestration.",
        "Built an AI Operations Assistant that classifies conversations, scores priority, and routes tasks to Asana automatically.",
        "Engineered conversational business intelligence across messages, properties, reservations, and customer data.",
        "Created an AI-driven competitive intelligence engine for market analysis and revenue optimization.",
        "Delivered scalable automation pipelines — not isolated workflows — across the full business operation.",
      ],
      technologies: [
        "n8n",
        "AI Agents",
        "OpenAI",
        "Gemini",
        "Airtable",
        "Asana",
        "REST APIs",
        "Webhooks",
        "Workflow Orchestration",
        "Event-Driven Automation",
        "Agentic Workflows",
        "Business Process Automation",
      ],
      features: [
        {
          title: "Intelligent Task Management Agent",
          description:
            "An AI Operations Assistant that monitors user conversations stored in Airtable. The AI analyzes dialogue, detects problems and action items, evaluates urgency and business impact, then creates structured, prioritized tasks in Asana — assigned to the most relevant team member without manual intervention.",
          highlights: [
            "Natural language understanding & AI classification",
            "Priority scoring by severity and impact",
            "Intelligent task routing & assignment",
            "Automated project management",
            "Eliminates manual task creation",
          ],
        },
        {
          title: "AI Business Intelligence Assistant",
          description:
            "An internal conversational AI where staff ask questions in natural language. The system retrieves and consolidates information from multiple business sources — messages, properties, reservations, and customer data — delivering immediate, context-aware answers instead of manual system searches.",
          highlights: [
            "AI-powered multi-source data retrieval",
            "Context aggregation across business systems",
            "Conversational business intelligence",
            "Internal AI assistant for operations teams",
          ],
        },
        {
          title: "Market Intelligence & Competitive Analysis",
          description:
            "An AI-driven competitive intelligence engine — not a scraping workflow. The system automatically collects competitor property listings and reservation data, compares market performance, identifies pricing trends and occupancy differences, detects areas where competitors outperform, and generates actionable recommendations to improve reservations and revenue.",
          highlights: [
            "Data aggregation & market intelligence",
            "Trend analysis & occupancy benchmarking",
            "AI-generated insights & recommendations",
            "Decision support for revenue optimization",
          ],
        },
        {
          title: "Real-Time Caller Intelligence",
          description:
            "A context-aware customer support workflow triggered on incoming calls. The system identifies the caller, retrieves customer information, fetches reservation history and property details — equipping staff with full contextual intelligence before or during the conversation.",
          highlights: [
            "Real-time event-driven automation",
            "Context-aware customer support",
            "CRM enrichment & instant retrieval",
            "Pre-call contextual briefing",
          ],
        },
        {
          title: "Enterprise Workflow Automation",
          description:
            "Beyond these flagship workflows, designed and implemented numerous AI-driven automations to streamline operations — including data synchronization, notification systems, API integrations, automated reporting, cross-platform orchestration, and AI-powered decision-making across the business.",
          highlights: [
            "Scalable production automation pipelines",
            "Cross-platform integrations",
            "AI-powered decision making",
            "Business process automation at scale",
          ],
        },
      ],
    },
    {
      name: "Sales Prediction System",
      summary:
        "Machine-learning sales forecasting system using Python to analyze historical data, identify trends, and predict future sales — delivering data-driven decision support for business planning.",
    },
    {
      name: "Locum Bridge",
      summary:
        "Healthcare job platform with smart matching, availability sharing, and Google/Outlook calendar integrations for medical locum workforce coordination.",
      linkPreview: "https://www.facebook.com/reel/339961541890431",
    },
    {
      name: "Smart Kids",
      summary:
        "Large-scale educational e-commerce platform with 600+ products, Shopify integration, search/filtering, and payment workflows.",
    },
    {
      name: "Premium Meals",
      summary:
        "Full-featured e-commerce system for meat vendors with inventory management, secure payments, and scalable order processing.",
    },
    {
      name: "Hiredkiwi",
      summary:
        "Service marketplace with Stripe and GoCardless payments, region-based filtering, and secure booking workflows.",
    },
    {
      name: "Tint Sprint",
      summary:
        "Cost-estimation platform for window tinting contractors with real-time pricing, material management, and client quote exports.",
    },
    {
      name: "Vagahau",
      summary:
        "Cultural language preservation platform with scalable APIs, multimedia content delivery, and user progress tracking.",
    },
    {
      name: "Boatsman IQ",
      summary:
        "Boat service marketplace connecting owners and providers with vendor lookup, tracking, and secure payment handling.",
    },
    {
      name: "IMZ International",
      summary:
        "Media data migration system with pipelines converting CSV, XML, and SQL data into structured MongoDB collections.",
    },
  ],
  about: {
    description: `
      I'm Ali Ammar Hussain, a Senior Software Engineer who designs and builds production AI systems for enterprise clients. My work goes far beyond integrating LLM APIs — I architect RAG pipelines, AI agents, multimodal Vision AI, tool calling systems, and intelligent workflows that solve real business problems at scale.

      As team lead and senior engineer, I've delivered enterprise AI platforms like DOMINIQX (construction intelligence), TDH (engineering AI), and Moxxi (AI workflow automation) — systems where AI is the core product. I specialize in retrieval-augmented generation, vector databases, AI agents, agentic workflows, n8n orchestration, tool calling, context engineering, and multi-system business automation using OpenAI, Gemini, LangChain, and LangGraph.

      With 5+ years of full-stack experience across Node.js, Vue.js, Supabase, and workflow automation, I bring both AI architecture depth and production engineering rigor. I hold a BS in Software Engineering from Punjabi University College of Information Technology, Lahore (2017–2021).
    `,
    image: "/profile.png",
  },
};
