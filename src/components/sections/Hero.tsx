import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Zap, Sparkles, Bot } from 'lucide-react';

export const Hero: React.FC = () => {
  const robotImgSrc = "/images/Hero/robot-working-on-laptop-computer-artificial-intelligence-concept-3d-rendering-generative-ai-free-photo.jpg";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#06183D]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-colorful opacity-30 pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#0D2A66]/40 blur-[140px] gpu-layer"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full bg-[#082052]/50 blur-[150px] gpu-layer"
        />
      </div>

      <Container className="relative z-10">
        {/* Grid aligned with middle of left content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline & CTAs (Centered on mobile, Left-aligned on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left justify-start">
            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 mb-4 px-4 py-1.5 rounded-full bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] backdrop-blur-md max-w-max shadow-md shadow-[#06183D]/80 mx-auto lg:mx-0"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F8F0E5] animate-pulse shadow-sm shadow-[#F8F0E5]/40" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F8F0E5] font-bold">
                NEXT-GEN AI • AUTOMATION • ROBOTICS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-editorial text-clamp-hero font-black text-[#F8F0E5] uppercase tracking-tighter leading-tight mb-4"
            >
              WE BUILD <span className="text-gradient-hero">WHAT'S NEXT.</span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-2xl font-medium text-[#F8F0E5] mb-4 font-editorial tracking-tight max-w-2xl"
            >
              Intelligent technology for a rapidly changing world.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base text-[#B8C4D8] max-w-xl leading-relaxed mb-6 font-normal mx-auto lg:mx-0"
            >
              FlowFoundry AI Solutions builds intelligent digital experiences, AI-powered products, robotics automation systems, and modern software solutions for businesses ready to move forward.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            >
              <Button href="/services" variant="gradient" size="lg" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
              <Button href="/team" variant="glass" size="lg" className="w-full sm:w-auto">
                Meet Our Team
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Robot Visual Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-start justify-center pt-8 lg:pt-20"
          >
            <motion.div
              animate={{
                y: [10, 0, 10],
              }}
              transition={{
                duration: 5,
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
                  <span>AI ROBOT SYSTEM</span>
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
                    loading="eager"
                    fetchPriority="high"
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
        </div>
      </Container>
    </section>
  );
};
