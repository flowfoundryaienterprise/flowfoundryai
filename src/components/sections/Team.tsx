import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { TeamCard } from '../ui/TeamCard';
import { teamMembers } from '../../data/team';

export const Team: React.FC = () => {
  const firstRow = teamMembers.slice(0, 3); // Sri Harsha M, Ravi Vaghela, Nithish
  const secondRow = teamMembers.slice(3, 5); // Ajay, Janarthanan

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      {/* Mesh Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0D2A66]/30 blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header (Centered on all devices) */}
        <div className="mb-8 sm:mb-10 max-w-3xl text-center mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel number="05" text="OUR TEAM" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-section font-bold tracking-tight text-[#F8F0E5] uppercase mb-3 leading-tight text-center"
          >
            THE PEOPLE <span className="text-gradient-hero">BEHIND FLOWFOUNDRY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#B8C4D8] font-normal leading-relaxed text-center"
          >
            Technology is built by people who are curious enough to imagine what's possible.
          </motion.p>
        </div>

        {/* Team Grid Layout */}
        <div className="space-y-6 sm:space-y-8 max-w-md sm:max-w-none mx-auto">
          {/* Top Row: Sri Harsha M, Ravi Vaghela, Nithish */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {firstRow.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Bottom Row: Ajay, Janarthanan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {secondRow.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index + 3} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
