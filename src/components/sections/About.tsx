import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { Bot, Zap, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const robotImgSrc = "/images/Hero/robot-working-on-laptop-computer-artificial-intelligence-concept-3d-rendering-generative-ai-free-photo.jpg";

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#0D2A66]/30 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header (Centered on all devices) */}
        <div className="mb-8 sm:mb-10 max-w-3xl flex flex-col items-center text-center mx-auto justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full mb-3"
          >
            <SectionLabel number="02" text="ABOUT FLOWFOUNDRY" className="mb-0" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-section font-bold tracking-tight text-[#F8F0E5] uppercase leading-tight w-full text-center"
          >
            ENGINEERING INTELLIGENCE <span className="text-gradient-primary">INTO EVERY IDEA.</span>
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Animated AI Robot Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-md mx-auto rounded-2xl border border-[rgba(248,240,229,0.15)] bg-[#0D2A66] backdrop-blur-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-2xl shadow-[#06183D]/90 group"
            >
              {/* Outer Glow Pulse Accent */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-[#082052]/40 via-[#0D2A66]/40 to-[#123875]/30 pointer-events-none"
              />

              {/* Floating Top HUD Badges */}
              <div className="w-full flex items-center justify-between z-20 font-mono text-[10px] uppercase text-[#B8C4D8] mb-3">
                <span className="flex items-center space-x-1.5 bg-[#06183D]/90 px-3 py-1 rounded-full border border-[rgba(248,240,229,0.15)] text-[#F8F0E5]">
                  <Bot className="w-3.5 h-3.5 text-[#F8F0E5]" />
                  <span>AI ROBOT WORKSPACE</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-[#06183D]/90 px-3 py-1 rounded-full border border-[rgba(248,240,229,0.15)] text-[#F8F0E5]">
                  <Zap className="w-3 h-3 text-[#F8F0E5]" />
                  <span>ONLINE v3.0</span>
                </span>
              </div>

              {/* Isolated Robot Subject Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#06183D] border border-[rgba(248,240,229,0.2)] shadow-xl shadow-[#06183D] group-hover:border-[#F8F0E5]/40 transition-colors duration-300 z-10 flex items-center justify-center">
                {/* Radial Mask */}
                <div
                  className="relative w-full h-full flex items-center justify-center overflow-hidden"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse at 48% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
                    maskImage: 'radial-gradient(ellipse at 48% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
                  }}
                >
                  <motion.img
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    src={robotImgSrc}
                    alt="FlowFoundry AI Autonomous Robot"
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.95] gpu-layer"
                  />
                </div>

                {/* Seamless Edge Blending Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06183D] via-transparent to-[#06183D]/70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06183D]/80 via-transparent to-[#06183D]/80 pointer-events-none" />
              </div>

              {/* Bottom Status Bar */}
              <div className="w-full flex items-center justify-between border-t border-[rgba(248,240,229,0.15)] pt-3 mt-3 text-[10px] font-mono text-[#B8C4D8] z-20">
                <span className="flex items-center space-x-1.5 uppercase tracking-widest text-[#F8F0E5]">
                  <Sparkles className="w-3.5 h-3.5 text-[#F8F0E5] animate-spin" />
                  <span>FLOWFOUNDRY AI ENGINE</span>
                </span>
                <span className="text-[#F8F0E5] font-bold px-2.5 py-0.5 rounded-full bg-[#06183D] border border-[rgba(248,240,229,0.15)] flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8F0E5] animate-ping" />
                  <span>ACTIVE</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Centered on Mobile, Left-aligned on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-left"
          >
            <p className="text-lg sm:text-xl text-[#F8F0E5] leading-relaxed font-normal">
              FlowFoundry AI Solutions is a technology-focused company dedicated to building intelligent digital solutions. We explore the intersection of artificial intelligence, automation, software engineering, and modern digital experiences.
            </p>

            <p className="text-sm sm:text-base text-[#B8C4D8] leading-relaxed">
              Our engineering philosophy prioritizes clean code, robust architecture, and clear visual language. We believe that true technology solutions should simplify operational workflows, elevate digital experiences, and establish a foundation for long-term scalability.
            </p>

            <div className="pt-6 border-t border-[rgba(248,240,229,0.15)] flex flex-wrap justify-center lg:justify-start gap-4">
              <Button href="/about" variant="gradient" size="md">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
