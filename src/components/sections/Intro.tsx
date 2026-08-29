import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0D2A66]/30 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex items-center justify-center mb-3"
          >
            <SectionLabel number="01" text="WHO WE ARE" />
          </motion.div>

          {/* Main Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-statement font-bold tracking-tight text-[#F8F0E5] leading-[1.15] mb-8 text-center uppercase"
          >
            Technology should not only solve problems.{' '}
            <span className="text-gradient-hero inline-block">It should create possibilities.</span>
          </motion.h2>

          {/* Paragraph & Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-[rgba(248,240,229,0.15)] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8 text-center md:text-left"
            >
              <p className="text-base sm:text-lg text-[#B8C4D8] font-normal leading-relaxed text-center md:text-left">
                FlowFoundry AI Solutions combines software engineering, artificial intelligence, automation, and creative thinking to build technology that moves businesses forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-4 flex flex-col space-y-3 font-mono text-xs text-[#B8C4D8] pt-2 md:pt-0"
            >
              <div className="flex justify-between border-b border-[rgba(248,240,229,0.15)] pb-2">
                <span>FOUNDED</span>
                <span className="text-[#F8F0E5] font-bold">2026</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(248,240,229,0.15)] pb-2">
                <span>FOCUS</span>
                <span className="text-[#F8F0E5] font-bold">INTELLIGENT SYSTEMS</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(248,240,229,0.15)] pb-2">
                <span>APPROACH</span>
                <span className="text-[#F8F0E5] font-bold">ENGINEERING FIRST</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
