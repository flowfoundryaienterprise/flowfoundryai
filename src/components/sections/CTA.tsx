import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      {/* Background Animated Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0D2A66]/30 blur-[150px] gpu-layer"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[rgba(248,240,229,0.15)] bg-[#0D2A66] backdrop-blur-2xl p-6 sm:p-12 text-center relative overflow-hidden shadow-2xl shadow-[#06183D]/90 group">
          {/* Top Cream Accent Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#F8F0E5]" />

          {/* Section Sub-Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F8F0E5] mb-5 bg-[#06183D] px-4 py-1.5 rounded-full border border-[rgba(248,240,229,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#F8F0E5] animate-ping" />
            <span>START A PROJECT</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F8F0E5] leading-tight mb-4"
          >
            HAVE AN IDEA? <span className="text-gradient-hero">LET'S BUILD IT.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#B8C4D8] max-w-xl mx-auto mb-8 leading-relaxed font-normal"
          >
            From an early concept to a production-ready product, let's turn ambitious ideas into intelligent digital experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <Button href="/contact" variant="gradient" size="lg">
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
