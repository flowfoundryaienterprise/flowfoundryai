import React from 'react';
import { motion } from 'framer-motion';

export const VisualBreak: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-[#06183D] border-t border-b border-[rgba(248,240,229,0.15)] overflow-hidden py-24">
      {/* Background Mesh Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0D2A66]/30 blur-[140px] gpu-layer"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-2 sm:space-y-4"
        >
          <div className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            <span className="text-gradient-hero drop-shadow-2xl">
              THINK.
            </span>
          </div>
          <div className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            <span className="text-gradient-hero drop-shadow-2xl">
              BUILD.
            </span>
          </div>
          <div className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            <span className="text-gradient-hero drop-shadow-2xl">
              EVOLVE.
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-[#B8C4D8] font-bold"
        >
          FLOWFOUNDRY AI SOLUTIONS // INTELLIGENT DIGITAL EXPERIENCE
        </motion.p>
      </div>
    </section>
  );
};
