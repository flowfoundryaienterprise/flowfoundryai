export interface Service {
  number: string;
  title: string;
  description: string;
  details: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Website Design / Redesign",
    description: "Create modern, responsive, user-focused websites and redesign existing websites with improved UI/UX, performance, structure, and conversion.",
    details: [
      "User Research & Wireframing",
      "Responsive & Mobile-First Design",
      "UI/UX Modernization & Redesign",
      "Conversion & Speed Optimization"
    ],
    deliverables: [
      "Custom Design System",
      "Responsive React / Web Code",
      "SEO & Accessibility Pass",
      "High Lighthouse Score"
    ]
  },
  {
    number: "02",
    title: "Custom Software Development",
    description: "Build custom software, web applications, dashboards, business platforms, and digital solutions tailored to specific business requirements.",
    details: [
      "Full-Stack Web & Enterprise Apps",
      "Tailored Business Dashboards",
      "Scalable Backend & REST/GraphQL APIs",
      "Cloud Infrastructure Setup"
    ],
    deliverables: [
      "Production Application",
      "Clean Modular Architecture",
      "Comprehensive API Docs",
      "Deployment Pipelines"
    ]
  },
  {
    number: "03",
    title: "Shopify Store Development",
    description: "Design and develop professional Shopify stores with customized themes, product experiences, responsive layouts, integrations, and conversion-focused user experiences.",
    details: [
      "Custom Liquid & Headless Themes",
      "Product Catalog & Checkout Optimization",
      "App & Payment Gateway Integration",
      "Mobile Conversion Optimization"
    ],
    deliverables: [
      "Turnkey Shopify Store",
      "Custom Theme Architecture",
      "App Integration Setup",
      "Speed & Mobile Optimization"
    ]
  },
  {
    number: "04",
    title: "AI Agents and Infrastructure",
    description: "Build AI-powered agents, intelligent systems, API integrations, and reliable infrastructure for deploying and operating AI solutions.",
    details: [
      "Autonomous AI Agents & Workflows",
      "Custom LLM & RAG Integration",
      "Vector Database Architecture",
      "Enterprise AI Security Middleware"
    ],
    deliverables: [
      "Production AI Engine",
      "API Middleware Layer",
      "Monitoring & Telemetry",
      "Deployment Scripts"
    ]
  },
  {
    number: "05",
    title: "WordPress Development",
    description: "Develop, customize, and optimize professional WordPress websites, business websites, blogs, WooCommerce stores, themes, and integrations.",
    details: [
      "Custom Gutenberg & Theme Engineering",
      "WooCommerce E-Commerce Platforms",
      "Security Hardening & Speed Optimization",
      "Third-Party API & Plugin Integration"
    ],
    deliverables: [
      "Custom WordPress Setup",
      "WooCommerce Store Integration",
      "Performance Optimization",
      "Content Migration & Backup"
    ]
  },
  {
    number: "06",
    title: "Workflow Automation",
    description: "Automate repetitive business processes using APIs, webhooks, integrations, workflow tools, notifications, and intelligent automation systems.",
    details: [
      "End-to-End Process Orchestration",
      "API & Webhook Pipeline Builder",
      "Robotic Process & Data Extraction",
      "Automated Alerting & Notifications"
    ],
    deliverables: [
      "Workflow Architecture",
      "Automated Integration Pipelines",
      "Error Recovery Protocols",
      "Operational Dashboards"
    ]
  }
];
