import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Services } from '../components/sections/Services';
import { CTA } from '../components/sections/CTA';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        {/* Page Header (Centered on all devices) */}
        <div className="py-12 border-b border-[rgba(248,240,229,0.15)] mb-16 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <SectionLabel number="02" text="OUR SERVICES" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-clamp-hero font-black uppercase tracking-tighter text-[#F8F0E5] mb-6 text-center"
          >
            INTELLIGENT DIGITAL <br />
            <span className="text-gradient-hero">SOLUTIONS & SERVICES.</span>
          </motion.h1>
          <p className="text-base sm:text-lg text-[#B8C4D8] max-w-xl font-normal leading-relaxed text-center">
            From custom AI engines to scalable web architectures and automated workflow pipelines, explore our complete software suite.
          </p>
        </div>
      </Container>

      <Services />
      <CTA />
    </main>
  );
};
