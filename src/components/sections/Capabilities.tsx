import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Layers, Network, Workflow, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI",
      description: "Intelligent applications and AI-powered experiences designed for modern digital products.",
    },
    {
      icon: Workflow,
      title: "Automation",
      description: "Smarter workflows and business processes that eliminate manual friction.",
    },
    {
      icon: Cpu,
      title: "Engineering",
      description: "Scalable modern software systems built with high performance standards.",
    },
    {
      icon: Layers,
      title: "Experience",
      description: "Human-centered digital interfaces with clean, editorial visual language.",
    },
    {
      icon: Network,
      title: "Integration",
      description: "Connecting AI engines and modern cloud infrastructure with existing business systems.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Cloud",
      description: "Enterprise-grade AI governance, cloud architecture, and secure data infrastructure.",
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      <Container className="relative z-10">
        {/* Section Header (Centered on all devices) */}
        <div className="mb-8 sm:mb-10 max-w-3xl flex flex-col items-center text-center mx-auto w-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex items-center justify-center"
          >
            <SectionLabel text="CORE CAPABILITIES" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-section font-bold tracking-tight text-[#F8F0E5] uppercase mb-4 leading-tight w-full text-center"
          >
            FROM CONCEPT TO <span className="text-gradient-primary">INTELLIGENT PRODUCT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#B8C4D8] font-normal leading-relaxed text-center max-w-2xl"
          >
            We transform ambitious ideas into production-grade intelligent software, automated pipelines, and high-performance digital systems.
          </motion.p>
        </div>

        {/* 6 Capabilities Grid (2 Cards per line on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-4 sm:p-8 bg-[#0D2A66]/90 backdrop-blur-xl border border-[rgba(248,240,229,0.15)] hover:border-[#F8F0E5]/40 rounded-xl sm:rounded-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#06183D]/60 h-full min-h-[220px] sm:min-h-[260px]"
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 mb-4 sm:mb-8 rounded-lg sm:rounded-xl bg-[#F8F0E5] p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-[#082052] rounded-[6px] sm:rounded-[10px] flex items-center justify-center text-[#F8F0E5] group-hover:bg-[#123875] group-hover:text-[#FFFFFF] transition-colors">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-2xl font-editorial font-bold text-[#F8F0E5] mb-1.5 sm:mb-3 tracking-tight group-hover:text-[#FFFFFF] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C4D8] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 pt-3 sm:pt-4 border-t border-[rgba(248,240,229,0.15)] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#B8C4D8] uppercase tracking-widest shrink-0">
                  <span>0{idx + 1}</span>
                  <span className="text-[#F8F0E5] font-bold">FLOWFOUNDRY</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
