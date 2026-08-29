# FlowFoundry AI Solutions

> Production-grade web application showcasing intelligent digital systems, enterprise software architecture, AI voice agents, and workflow automation.

FlowFoundry AI Solutions is an agency-grade web application built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. It presents FlowFoundry's specialized engineering capabilities, proprietary AI products, verified team roster, and client consultation intake.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Build & Production](#-build--production)
- [Responsive Design](#-responsive-design)
- [UI/UX & Design System](#-uiux--design-system)
- [Security](#-security)
- [Code Quality & Linting](#-code-quality--linting)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Team & Leadership](#-team--leadership)
- [Contact & Inquiries](#-contact--inquiries)

---

## 📖 Project Overview

FlowFoundry AI Solutions operates at the intersection of modern web design, enterprise software engineering, and intelligent automation. The platform serves as the primary corporate presence and product showcase for FlowFoundry AI, addressing core business challenges:

1. **Custom Software & Web Platforms**: Scalable, high-performance web applications built on React 19, TypeScript, and modern API infrastructures.
2. **AI Voice Agents & Telephony (Talo)**: AI-driven voice agent platforms and call telemetry dashboards engineered for automated inbound and outbound phone operations.
3. **Workflow Automation & Integration**: Intelligent automated pipelines linking business systems, webhooks, and third-party SaaS services.

### Designed For
- **Startups & Scale-ups**: Accelerating digital product development and modernizing user experiences.
- **Enterprises**: Streamlining business processes through custom AI agents and workflow orchestration.
- **Technology Partners**: Collaborating on high-impact software engineering and cloud infrastructure.

---

## ✨ Key Features

### 1. Tailored Core Services Showcase
Interactive, expandable service cards detailing six core offerings with scope, deliverables, and technical capabilities:
- **Website Design / Redesign**: Modern, responsive, conversion-focused web design with performance and UI/UX modernization.
- **Custom Software Development**: Enterprise web applications, management dashboards, and scalable REST/GraphQL APIs.
- **Shopify Store Development**: High-converting, custom Liquid and headless Shopify storefronts optimized for mobile commerce.
- **AI Agents and Infrastructure**: Autonomous AI agents, custom LLM integration, vector database setup, and secure API middleware.
- **WordPress Development**: Custom Gutenberg theme engineering, WooCommerce e-commerce platforms, and performance tuning.
- **Workflow Automation**: End-to-end business process orchestration, API webhook pipelines, and alert triggers.

### 2. Flagship Product Ecosystem
Dedicated product catalog and dynamic individual product deep-dive pages (`/products`, `/products/:id`):
- **Talo — AI Voice Agents**: Inbound/outbound automated voice coverage for reservations, FAQs, call telemetry, and interactive Figma prototype integration (`https://nit-indent-59207974.figma.site/`).
- **FoundryFlow Automator**: Event-driven workflow engine connecting enterprise APIs, webhooks, and AI decision logic.
- **Agentic Knowledge Engine**: High-speed hybrid vector retrieval-augmented generation (RAG) and semantic search infrastructure.

### 3. Integrated Inquiry Routing via WhatsApp
- Interactive client inquiry form with dynamic category selection matching core services.
- Real-time client-side message compilation and instant single-click dispatch routed to Ravi Sir's direct WhatsApp channel (`+91 92287 26763`).
- Post-submission fallback modal with manual direct-action triggers.

### 4. Verified Team Roster & Regional Leadership
- Interactive team directory displaying roles, locations, direct contact links, and portrait cards for leadership and engineering leads:
  - **Sri Harsha M** — Founder & CTO (Vijayawada, Andhra Pradesh)
  - **Ravi Vaghela** — Co-Founder & CMO (Ahmedabad, Gujarat)
  - **Nithish** — Tech Lead (Madurai, Tamil Nadu)
  - **Ajay** — Backend Developer (Vijayawada, Andhra Pradesh)
  - **Janarthanan** — Frontend Developer (Madurai, Tamil Nadu)

### 5. Architectural Deep-Dive
- Comprehensive technology breakdown view (`/technology`) covering client layers, AI engine layers, API middleware, and cloud infrastructure.

### 6. Comprehensive Legal & Compliance Pages
- Fully structured `/privacy-policy` and `/terms` pages outlining data handling and commercial service terms.

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.2.8` | Component rendering & state management |
| **Language** | TypeScript | `~6.0.2` | Static type safety and data models |
| **Build Tool & Dev Server** | Vite | `^8.2.0` | Lightning-fast development & optimized bundling |
| **Styling** | Tailwind CSS | `^4.3.3` | Utility-first styling framework |
| **Vite Tailwind Plugin** | `@tailwindcss/vite` | `^4.3.3` | Native Tailwind v4 Vite integration |
| **Routing** | React Router DOM | `^7.18.2` | Client-side routing with deep link support |
| **Animations** | Framer Motion | `^13.1.0` | Declarative UI animations & scroll interactions |
| **Icons** | Lucide React | `^1.33.0` | Scalable SVG icon library |
| **Class Utilities** | `clsx` + `tailwind-merge` | `^2.1.1` / `^3.6.0` | Dynamic CSS class merging |
| **Code Quality / Linter** | Oxlint | `^1.75.0` | High-speed JavaScript/TypeScript linting |
| **Asset Utilities** | Sharp | `^0.35.3` | Image processing scripts |

---

## 📁 Project Structure

```
FlowFoundry AI Solutions/
├── index.html                  # HTML5 entrypoint, meta tags & font prefetching
├── package.json                # Project dependencies, scripts & metadata
├── tsconfig.json               # TypeScript base configuration
├── tsconfig.app.json           # TypeScript application configuration
├── tsconfig.node.json          # TypeScript Node environment configuration
├── vite.config.ts              # Vite configuration with React & Tailwind plugins
├── .oxlintrc.json              # Oxlint linting rules configuration
├── public/                     # Static public assets served as-is
│   └── images/                 # Brand logos, team portraits, product mockups
└── src/
    ├── main.tsx                # React DOM root mounting entrypoint
    ├── App.tsx                 # Main router container & global layout wrapper
    ├── App.css                 # Application-wide utility helper classes
    ├── index.css               # Design system tokens, fonts & Tailwind theme layers
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx      # Responsive navigation bar & mobile drawer
    │   │   ├── Footer.tsx      # Multi-column footer with contact details & legal links
    │   │   └── ScrollToTop.tsx # Automatic window scroll reset on route change
    │   ├── sections/
    │   │   ├── Hero.tsx        # Editorial typography hero section
    │   │   ├── Intro.tsx       # Company introduction banner
    │   │   ├── About.tsx       # Core engineering philosophy & mission
    │   │   ├── Services.tsx    # 6-service interactive card grid
    │   │   ├── TaloProduct.tsx # Flagship Talo AI Voice Agent showcase
    │   │   ├── Capabilities.tsx# Technical infrastructure overview
    │   │   ├── VisualBreak.tsx # Visual separator section
    │   │   ├── Technology.tsx  # Architectural layers overview
    │   │   ├── Team.tsx        # Team portrait roster grid
    │   │   └── CTA.tsx         # Conversion-focused call-to-action section
    │   └── ui/
    │       ├── Button.tsx      # Reusable button component with variant styles
    │       ├── Container.tsx   # Responsive max-width container wrapper
    │       ├── SectionLabel.tsx# Monospaced section label badge
    │       ├── ServiceCard.tsx # Expandable service card with deliverables drawer
    │       └── TeamCard.tsx    # Team member portrait card with contact info
    ├── data/
    │   ├── navigation.ts       # Navigation routes and link definitions
    │   ├── products.ts         # Product specifications, benefits & use cases
    │   ├── services.ts         # Core services data, details & deliverables
    │   └── team.ts             # Team members roster data and contact details
    ├── hooks/
    │   └── useScroll.ts        # Scroll position listener hook for navbar effects
    ├── lib/
    │   └── utils.ts            # Dynamic classname merge utility (clsx + twMerge)
    └── pages/
        ├── Home.tsx            # Homepage view
        ├── AboutPage.tsx       # About us view
        ├── ServicesPage.tsx    # Detailed services overview view
        ├── ProductsPage.tsx    # Products catalog view
        ├── ProductDetailsPage.tsx # Dynamic individual product deep-dive view
        ├── TechnologyPage.tsx  # Technology architecture deep-dive view
        ├── TeamPage.tsx        # Team & leadership roster view
        ├── ContactPage.tsx     # WhatsApp interactive inquiry intake form
        ├── PrivacyPolicy.tsx   # Privacy policy legal document view
        └── TermsOfService.tsx  # Terms of service legal document view
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher (recommended: `v20+` or `v22+`)
- **npm**: `v9.0.0` or higher (comes bundled with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/flowfoundry-ai/flowfoundryai-landing-page.git
   cd flowfoundryai-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` to view the application.

---

## 📋 Available Scripts

In the project root, you can execute the following npm scripts:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and generates the optimized production bundle with Vite. |
| `npm run lint` | Runs Oxlint to analyze code quality and detect syntax or pattern issues. |
| `npm run preview` | Starts a local web server to test and preview the production build in `dist/`. |

---

## ⚙️ Environment Variables

This application is built as a self-contained static client-side single-page application (SPA). 
- **No external `.env` configuration is required** for standard local development or static hosting.
- Inquiry submissions format lead payloads client-side and safely redirect via WhatsApp Web / Universal API.

If integrating third-party analytics or external API endpoints in future iterations, create a `.env.local` file:

```env
# Optional Future Integrations
VITE_APP_TITLE="FlowFoundry AI Solutions"
VITE_API_BASE_URL=https://api.flowfoundryai.in
```

---

## 🏗️ Build & Production

To compile the application for production deployment:

```bash
npm run build
```

This performs two sequential operations:
1. **TypeScript Typecheck**: Executes `tsc -b` to validate all typings against project interfaces.
2. **Vite Minification & Tree-Shaking**: Bundles HTML, CSS, JavaScript, and assets into the `dist/` directory.

To preview the compiled production build locally before deploying:

```bash
npm run preview
```

---

## 📱 Responsive Design

The application implements a mobile-first responsive design strategy:

- **Desktop (`1280px+` & `1024px`)**:
  - Full multi-column grid layouts for services, products, and team cards.
  - Sticky glassmorphic top navigation with route indicators.
  - Side-by-side product telemetry showcases.
- **Tablet (`768px - 1023px`)**:
  - Balanced 2-column card layouts with adjusted typography clamp scales.
  - Adaptive grid reflows for contact details and product specs.
- **Mobile (`320px - 767px`)**:
  - Full-screen animated mobile menu drawer with background body scroll lock.
  - Single-column card stacking for comfortable touch interaction.
  - Full-width tappable CTA buttons and responsive input forms.

---

## 🎨 UI/UX & Design System

The visual identity is designed with an editorial, dark-mode glassmorphic aesthetic:

### Color Palette
- **Midnight Navy Background**: `#06183D`
- **Card Navy**: `#0D2A66`
- **Warm Cream Accent**: `#F8F0E5`
- **Steel Blue Text**: `#B8C4D8`
- **Dark Accent Blue**: `#082052` / `#123875`

### Typography Stack
- **Editorial Headings**: Google Fonts `Syne`, `Space Grotesk`, `Manrope`
- **Body & Interfaces**: `Plus Jakarta Sans`, `Inter`
- **Technical Badges**: Monospaced font hierarchy

### Micro-Interactions & Motion
- **Scroll Transitions**: Hardware-accelerated Framer Motion viewport triggers (`opacity`, `transform`).
- **Interactive Drawers**: Smooth CSS height expansions for service deliverables.
- **Hover Micro-Animations**: Elevation shifts (`translate-y`), border glow transitions, and arrow transforms.

---

## 🔐 Security

- **Client-Side Data Privacy**: No client inquiry data is stored on unauthenticated intermediary servers; payloads are client-encoded directly to WhatsApp.
- **Safe External Navigation**: All outbound links use `rel="noopener noreferrer"` and `target="_blank"` attributes to prevent tab-nabbing vulnerabilities.
- **Strict Typing**: Full TypeScript coverage preventing undefined state access and runtime errors.
- **Zero Exposed Secrets**: No private API keys or credentials exist in the client-side code.

---

## 🧪 Code Quality & Linting

Code quality is enforced using **Oxlint** and the TypeScript compiler:

```bash
# Run linter
npm run lint

# Run type check
npm run build
```

---

## 🌐 Deployment

The application can be deployed to any modern static hosting provider:

### Vercel
```bash
npx vercel
```
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Netlify
```bash
npx netlify-cli deploy --prod
```
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Cloudflare Pages / AWS S3 + CloudFront
- Configure the build command as `npm run build` and publish directory as `dist`.
- Ensure SPA rewrite routing redirects all requests (`/*`) to `index.html`.

---

## 🤝 Contributing

Contributions to improve FlowFoundry AI Solutions are welcome:

1. **Fork the repository**
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add new feature: description"
   ```
4. **Verify build and lint**:
   ```bash
   npm run lint
   npm run build
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

---

## 📄 License

All rights reserved by the repository owner. Commercial usage, branding assets, and software source code are governed by **FlowFoundry AI Solutions** proprietary terms.

---

## 👨‍💻 Team & Leadership

- **Sri Harsha M** — Founder & CTO (Vijayawada, Andhra Pradesh, India)
- **Ravi Vaghela** — Co-Founder & CMO (Ahmedabad, Gujarat, India)
- **Nithish** — Tech Lead (Madurai, Tamil Nadu, India)
- **Ajay** — Backend Developer (Vijayawada, Andhra Pradesh, India)
- **Janarthanan** — Frontend Developer (Madurai, Tamil Nadu, India)

---

## 📞 Contact & Inquiries

- **Headquarters**: Vijayawada, Andhra Pradesh, India
- **Direct WhatsApp Routing**: `+91 92287 26763` (Ravi Vaghela)
- **General Phone**: `+91 73309 37354`
- **Email**: `info@flowfoundryai.in`
- **Website**: [https://flowfoundryai.in](https://flowfoundryai.in)
- **Talo Interactive Demo**: [https://nit-indent-59207974.figma.site/](https://nit-indent-59207974.figma.site/)
#
