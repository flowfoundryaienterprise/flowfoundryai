import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Team } from '../components/sections/Team';
import { CTA } from '../components/sections/CTA';

export const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        {/* Page Header (Centered on all devices) */}
        <div className="py-12 border-b border-[rgba(248,240,229,0.15)] mb-16 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <SectionLabel number="05" text="MEET THE TEAM" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-clamp-hero font-black uppercase tracking-tighter text-[#F8F0E5] mb-6 text-center"
          >
            THE BUILDERS <br />
            <span className="text-gradient-hero">BEHIND FLOWFOUNDRY.</span>
          </motion.h1>
          <p className="text-base sm:text-lg text-[#B8C4D8] max-w-xl font-normal leading-relaxed text-center">
            A team of curious engineers, developers, and founders shaping the next generation of intelligent software.
          </p>
        </div>
      </Container>

      <Team />
      <CTA />
    </main>
  );
};
