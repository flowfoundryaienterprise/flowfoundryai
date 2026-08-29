import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#082052] border-t border-[#2A4B9B]/30 relative overflow-hidden">
      {/* Mesh Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2A4B9B]/08 blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-3xl text-center mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel number="03" text="WHAT WE DO" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-section font-bold tracking-tight text-[#F8F0E5] uppercase leading-tight text-center"
          >
            TECHNOLOGY, <span className="text-gradient-hero">BUILT WITH PURPOSE.</span>
          </motion.h2>
        </div>

        {/* 6 Service Cards Grid - 2 per line on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
