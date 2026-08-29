import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Brain, Cpu, Globe, Cloud, Code, Database, Terminal, ShieldCheck } from 'lucide-react';

export const Technology: React.FC = () => {
  const techCategories = [
    {
      code: "AI",
      name: "ARTIFICIAL INTELLIGENCE",
      desc: "LLMs, Machine Learning Engines, Vector Data Pipelines, Autonomous Agent Architectures",
      icon: Brain,
    },
    {
      code: "AUTO",
      name: "AUTOMATION WORKFLOWS",
      desc: "Process Orchestration, Enterprise API Pipelines, Event-Driven Triggers",
      icon: Cpu,
    },
    {
      code: "WEB",
      name: "MODERN WEB ARCHITECTURE",
      desc: "React, TypeScript, High-Performance SSR, Edge Rendering, Clean CSS",
      icon: Globe,
    },
    {
      code: "CLOUD",
      name: "CLOUD INFRASTRUCTURE",
      desc: "Distributed Systems, Microservices, Serverless Compute, Containerization",
      icon: Cloud,
    },
    {
      code: "APIs",
      name: "API & INTEGRATION ENGINE",
      desc: "RESTful Services, GraphQL, WebSockets, Secure Middleware",
      icon: Code,
    },
    {
      code: "DATA",
      name: "DATA ARCHITECTURE",
      desc: "Structured Analytics, Real-Time Streaming, Vector Search, Relational Storage",
      icon: Database,
    },
    {
      code: "SOFT",
      name: "SOFTWARE ENGINEERING",
      desc: "Clean Code Standards, Automated Testing, CI/CD Deployment, Security Compliance",
      icon: Terminal,
    },
    {
      code: "SEC",
      name: "CYBERSECURITY & COMPLIANCE",
      desc: "Zero-Trust Architecture, OAuth2 / JWT Auth, End-to-End Encryption, SOC2 & GDPR Compliance",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="technology" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0D2A66]/30 blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header (Centered on all devices) */}
        <div className="mb-8 sm:mb-10 max-w-3xl text-center mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel number="04" text="TECHNOLOGY" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-section font-bold tracking-tight text-[#F8F0E5] uppercase leading-tight text-center"
          >
            BUILDING AT THE EDGE <span className="text-gradient-hero">OF WHAT'S POSSIBLE.</span>
          </motion.h2>
        </div>

        {/* Floating Technology Matrix (2 cards per line on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-6">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-[#0D2A66]/90 backdrop-blur-xl border border-[rgba(248,240,229,0.15)] hover:border-[#F8F0E5]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group ${
                  idx === 0 || idx === 1 ? 'lg:col-span-6' : 'lg:col-span-4'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#B8C4D8] mb-4 sm:mb-8 border-b border-[rgba(248,240,229,0.15)] pb-2 sm:pb-3">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F8F0E5]" />
                    <span className="text-[#F8F0E5] font-bold">{cat.code}</span>
                  </div>
                  <span className="text-[#F8F0E5]">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-xl font-editorial font-bold text-[#F8F0E5] mb-2 sm:mb-3 tracking-tight group-hover:text-[#FFFFFF] transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#B8C4D8] font-mono leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 pt-3 sm:pt-4 border-t border-[rgba(248,240,229,0.15)] text-[9px] sm:text-[10px] font-mono text-[#B8C4D8] uppercase tracking-widest flex items-center justify-between">
                  <span>FLOWFOUNDRY</span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F8F0E5] animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
