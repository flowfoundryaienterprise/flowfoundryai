export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  keyBenefits: string[];
  features: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  useCases: string[];
}

export const products: Product[] = [
  {
    id: "talo",
    slug: "talo",
    name: "Talo — AI Voice Agents",
    category: "Voice AI & Telephony Operations",
    badge: "Flagship Product",
    tagline: "Autonomous voice agents and real-time telephony telemetry for modern enterprises.",
    description: "Talo is FlowFoundry's AI voice agent platform designed for businesses to handle phone conversations, automate appointment bookings, resolve customer FAQs, and streamline inbound and outbound call operations.",
    longDescription: "Engineered for high-volume enterprise operations, Talo eliminates missed calls, reduces hold times, and automates repetitive customer inquiries with human-like AI voice conversations. Featuring direct CRM synchronization, live telemetry dashboards, and customizable knowledge base training.",
    image: "/images/talo/talo-overview.png",
    demoUrl: "https://talo-ai.netlify.app/dashboard",
    keyBenefits: [
      "24/7 Automated Inbound & Outbound Call Handling",
      "Real-Time Sentiment Analysis & Call Metrics",
      "Automated Appointment Booking & SMS Confirmations",
      "Custom Knowledge Base Training & Zero Hallucinations",
      "Seamless Calendar & CRM Integrations",
      "Full Call Transcripts & Analytics Telemetry"
    ],
    features: [
      {
        title: "AI Voice Agents",
        description: "Deploy customizable AI voice agents tailored to answer business phone calls, manage reservations, and handle customer service with ultra-low latency."
      },
      {
        title: "Real-Time Call Analytics",
        description: "Monitor live calls, sentiment scores, customer satisfaction metrics, and detailed call logs via interactive dashboards."
      },
      {
        title: "Custom Knowledge Base",
        description: "Train voice agents on custom business FAQs, operating hours, service catalogs, and rules for instant, accurate answers."
      },
      {
        title: "Automated Booking & SMS",
        description: "Schedule appointments seamlessly during phone calls with instant automated SMS confirmations and calendar sync."
      }
    ],
    specifications: [
      { label: "Deployment", value: "Cloud / Edge Telephony" },
      { label: "Latency", value: "< 450ms Voice Response" },
      { label: "Supported Channels", value: "SIP, Twilio, WebRTC, Direct PSTN" },
      { label: "Analytics", value: "Real-Time Sentiment & Telemetry" },
      { label: "Integrations", value: "Google Calendar, HubSpot, Zapier, Webhooks" },
      { label: "Security", value: "End-to-End Encrypted Audio & Transcripts" }
    ],
    useCases: [
      "Healthcare Clinics & Dental Practice Booking",
      "Hospitality & Restaurant Reservations",
      "Home Services & Contractor Dispatching",
      "E-Commerce Customer Support & Order Tracking",
      "Financial Services & Qualification Inquiries"
    ]
  },
  {
    id: "foundry-flow",
    slug: "foundry-flow",
    name: "FoundryFlow Automator",
    category: "Workflow Automation & Orchestration",
    badge: "Enterprise Automation",
    tagline: "Autonomous event-driven workflow engine connecting enterprise APIs, webhooks, and AI models.",
    description: "FoundryFlow Automator provides intelligent API orchestration, webhooks pipelines, and AI decision branching to automate complex operations without coding bottlenecks.",
    longDescription: "Connect your entire software stack with event-driven triggers, automated ETL data transformations, and autonomous agent loops that execute business processes 24/7 with zero human intervention required.",
    image: "/images/Hero/robot-working-on-laptop-computer-artificial-intelligence-concept-3d-rendering-generative-ai-free-photo.jpg",
    demoUrl: "/contact",
    keyBenefits: [
      "No-Code & Pro-Code Workflow Orchestration",
      "Multi-Step AI Decision Logic & Routing",
      "Real-Time Webhook Ingestion & Queue Handling",
      "500+ Native Cloud API Integrations",
      "Audited Execution Logs & Error Fallbacks"
    ],
    features: [
      {
        title: "API Orchestration",
        description: "Seamlessly route data between CRMs, payment gateways, databases, and custom backend systems."
      },
      {
        title: "AI Processing Nodes",
        description: "Insert LLM summaries, sentiment classifiers, and vector searches directly into workflow steps."
      },
      {
        title: "Automated Triggers",
        description: "Trigger pipelines from database changes, webhook payloads, scheduled cron jobs, or user actions."
      },
      {
        title: "Reliability & Fallbacks",
        description: "Built-in automatic retry queues, dead-letter notifications, and rollback mechanisms."
      }
    ],
    specifications: [
      { label: "Architecture", value: "Serverless Event-Driven Grid" },
      { label: "Throughput", value: "10,000+ executions / min" },
      { label: "Protocol Support", value: "REST, GraphQL, gRPC, WebSockets" },
      { label: "Security", value: "SOC2 Compliant, Vault Encryption" }
    ],
    useCases: [
      "Automated Lead Enrichment & CRM Sync",
      "E-Commerce Multi-Channel Inventory Updating",
      "Automated Invoicing & Payment Reconciliation",
      "User Onboarding & Identity Verification Pipelines"
    ]
  },
  {
    id: "agentic-knowledge-engine",
    slug: "agentic-knowledge-engine",
    name: "Agentic Knowledge Engine",
    category: "AI & Vector Search Infrastructure",
    badge: "Data Infrastructure",
    tagline: "High-speed retrieval-augmented generation and vector indexing for company data.",
    description: "Secure, real-time knowledge base indexing that connects enterprise documents, databases, and customer support archives directly to AI agents with zero hallucinations.",
    longDescription: "The Agentic Knowledge Engine turns your company's scattered PDFs, docs, spreadsheets, and support tickets into an ultra-fast semantic index accessible by autonomous AI agents and internal search tools.",
    image: "/images/Hero/robot-working-on-laptop-computer-artificial-intelligence-concept-3d-rendering-generative-ai-free-photo.jpg",
    demoUrl: "/contact",
    keyBenefits: [
      "Sub-100ms Hybrid Vector & Keyword Search",
      "Automated Chunking, Embedding & Syncing",
      "Strict Enterprise Role-Based Access Control",
      "Zero Data Leakage & Private Model Hosting",
      "Multi-Format Ingestion (PDF, DOCX, CSV, SQL)"
    ],
    features: [
      {
        title: "Hybrid Search Pipeline",
        description: "Combines dense vector embeddings with sparse keyword search for unmatched retrieval accuracy."
      },
      {
        title: "Dynamic Sync Connectors",
        description: "Automatically re-indexes content from Google Drive, Notion, Confluence, and PostgreSQL on change."
      },
      {
        title: "Granular Permissions",
        description: "Preserve document-level access permissions so agents only reveal data users are authorized to see."
      },
      {
        title: "Citation Telemetry",
        description: "Every AI response includes exact document source citations and verification confidence scores."
      }
    ],
    specifications: [
      { label: "Vector Dimensions", value: "1536 / 3072 Support" },
      { label: "Index Latency", value: "< 80ms P99 Query Latency" },
      { label: "Embeddings", value: "OpenAI / Cohere / Local Embeddings" },
      { label: "Storage", value: "Distributed Vector Storage" }
    ],
    useCases: [
      "Internal Employee Support & SOP Search",
      "Customer Support AI Chatbots with Exact Citations",
      "Legal & Financial Document Research",
      "Technical Documentation Search"
    ]
  }
];
