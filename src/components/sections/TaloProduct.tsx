import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { ExternalLink, Sparkles, PhoneCall, BarChart3, Database, Calendar, Check, ArrowRight, Layout } from 'lucide-react';
import taloImg from '../../assets/talo-overview.png';

export const TaloProduct: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      icon: PhoneCall,
      title: "AI Voice Agents",
      description: "Deploy customizable AI voice agents tailored to answer business phone calls, manage reservations, and handle customer service."
    },
    {
      icon: BarChart3,
      title: "Real-Time Call Analytics",
      description: "Monitor live calls, sentiment scores, customer satisfaction metrics, and detailed call logs via interactive dashboards."
    },
    {
      icon: Database,
      title: "Custom Knowledge Base",
      description: "Train voice agents on custom business FAQs, operating hours, service catalogs, and rules for instant, accurate answers."
    },
    {
      icon: Calendar,
      title: "Automated Booking & SMS",
      description: "Schedule appointments seamlessly during phone calls with instant automated SMS confirmations and calendar sync."
    }
  ];

  const benefits = [
    "24/7 Automated Inbound & Outbound Call Handling",
    "Real-Time Sentiment Analysis & Call Metrics",
    "Automated Appointment Booking & SMS Confirmations",
    "Seamless Knowledge Base & Calendar Integrations",
    "Zero Missed Calls & Reduced Operational Drag"
  ];

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#06183D] border-t border-[rgba(248,240,229,0.15)] relative overflow-hidden">
      {/* Background Mesh Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.05, 0.95] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#0D2A66]/30 blur-[160px] pointer-events-none gpu-layer"
      />

      <Container className="relative z-10">
        {/* Section Header (Centered on all devices) */}
        <div className="mb-8 sm:mb-10 max-w-3xl text-center mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel number="04" text="FLAGSHIP PRODUCT" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-clamp-section font-bold tracking-tight text-[#F8F0E5] uppercase mb-3 leading-tight text-center"
          >
            MEET TALO. <span className="text-gradient-hero">AI VOICE AGENTS & PHONE OPERATIONS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#B8C4D8] font-normal leading-relaxed text-center max-w-2xl"
          >
            Monitor, automate, and optimize phone conversations with AI voice agents via real-time call dashboards, call analytics, and custom business integrations.
          </motion.p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Product Info & Problem Solved */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            <div className="p-6 sm:p-8 bg-[#0D2A66]/90 backdrop-blur-xl border border-[rgba(248,240,229,0.15)] rounded-2xl space-y-6 shadow-xl hover:border-[#F8F0E5]/40 transition-colors duration-300">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest text-[#F8F0E5] bg-[#082052] rounded-full border border-[rgba(248,240,229,0.15)] uppercase shadow-inner">
                  OFFICIAL PRODUCT
                </span>
                <span className="flex items-center space-x-1.5 text-xs font-mono text-[#B8C4D8]">
                  <Sparkles className="w-3.5 h-3.5 text-[#F8F0E5] animate-pulse" />
                  <span>By FlowFoundry AI</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F8F0E5] mb-3">
                  What is Talo?
                </h3>
                <p className="text-sm sm:text-base text-[#B8C4D8] leading-relaxed font-normal">
                  Talo is FlowFoundry's AI voice agent platform designed for businesses to handle phone conversations, automate appointment bookings, resolve customer FAQs, and streamline inbound and outbound call operations.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(248,240,229,0.15)]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-bold mb-2">
                  What Problem Does Talo Solve?
                </h4>
                <p className="text-xs sm:text-sm text-[#B8C4D8] leading-relaxed font-normal">
                  Businesses lose valuable revenue and customer trust due to missed phone calls, long hold times, and manual scheduling delays. Talo provides 24/7 intelligent voice coverage, instant answers, and real-time call analytics to eliminate operational drag.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://talo-ai.netlify.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#082052] text-[#F8F0E5] font-mono font-bold uppercase tracking-wider text-xs hover:bg-[#123875] hover:text-[#FFFFFF] border border-[rgba(248,240,229,0.2)] shadow-lg shadow-[#06183D]/60 transition-all duration-300 group cursor-pointer"
                >
                  <span>View Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>

                <Link
                  to="/product/talo"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-transparent text-[#F8F0E5] font-mono font-bold uppercase tracking-wider text-xs hover:bg-[#082052] hover:text-white border border-[rgba(248,240,229,0.25)] transition-all duration-300 group cursor-pointer"
                >
                  <span>Full Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Main Benefits List */}
            <div className="p-6 bg-[#06183D] border border-[rgba(248,240,229,0.15)] rounded-2xl space-y-3 font-mono text-xs text-[#B8C4D8]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-bold mb-3">
                Key Product Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center space-x-2 text-[11px] sm:text-xs"
                  >
                    <Check className="w-3.5 h-3.5 text-[#F8F0E5] shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Talo Product Image / Mockup Display */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center relative"
          >
            {/* Subtle Ambient Behind Glow */}
            <div className="absolute inset-0 bg-[#0D2A66]/30 blur-3xl rounded-full transform scale-90 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:border-[#F8F0E5]/40 transition-colors duration-500"
            >
              {/* Device Frame Window Bar */}
              <div className="px-4 py-3 bg-[#06183D] border-b border-[rgba(248,240,229,0.15)] flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="text-[10px] font-mono text-[#B8C4D8] tracking-wider uppercase flex items-center space-x-2 bg-[#0D2A66] px-3 py-1 rounded-full border border-[rgba(248,240,229,0.15)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <Layout className="w-3 h-3 text-[#F8F0E5]" />
                  <span>talo.flowfoundryai.in</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Seamless Full-Fit Image Display */}
              <div className="relative w-full bg-[#06183D] overflow-hidden flex items-center justify-center p-2.5 sm:p-4">
                {!imageError ? (
                  <Link to="/product/talo" className="block w-full cursor-pointer">
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      src={taloImg}
                      alt="Talo AI Voice Agents & Call Dashboard Overview"
                      decoding="async"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.endsWith('/images/talo/talo-overview.png')) {
                          target.src = '/images/talo/talo-overview.png';
                        } else if (!target.src.endsWith('/images/products/talo.png')) {
                          target.src = '/images/products/talo.png';
                        } else {
                          setImageError(true);
                        }
                      }}
                      className="w-full h-auto object-contain rounded-xl border border-[rgba(248,240,229,0.15)] shadow-2xl"
                    />
                  </Link>
                ) : (
                  <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-[#06183D]/90 rounded-xl border border-[rgba(248,240,229,0.15)] space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#0D2A66] border border-[rgba(248,240,229,0.2)] flex items-center justify-center text-[#F8F0E5]">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-editorial text-xl font-bold text-[#F8F0E5]">
                        Talo Interface Preview
                      </h4>
                      <p className="text-xs text-[#B8C4D8] max-w-xs mx-auto font-mono">
                        Official product image asset area structured and ready.
                      </p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] text-[11px] font-mono text-[#F8F0E5]">
                      Asset Path: /public/images/talo/talo-overview.png
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 bg-[#0D2A66]/90 border border-[rgba(248,240,229,0.15)] rounded-xl hover:border-[#F8F0E5]/40 hover:shadow-xl hover:shadow-[#06183D]/60 transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#06183D] border border-[rgba(248,240,229,0.15)] flex items-center justify-center text-[#F8F0E5] group-hover:bg-[#082052] group-hover:text-[#FFFFFF] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-editorial font-bold text-[#F8F0E5] group-hover:text-[#FFFFFF] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-[#B8C4D8] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Hover Light Sweep Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8F0E5]/05 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <div>
            <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#F8F0E5] mb-2">
              Ready to experience Talo in action?
            </h3>
            <p className="text-xs sm:text-sm text-[#B8C4D8] font-mono">
              Explore the interactive call dashboard and discover how Talo transforms phone operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/product/talo"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-transparent text-[#F8F0E5] font-mono font-bold uppercase tracking-wider text-xs hover:bg-[#082052] hover:text-white border border-[rgba(248,240,229,0.25)] transition-all duration-300 group"
            >
              <span>Explore Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://talo-ai.netlify.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#082052] text-[#F8F0E5] font-mono font-bold uppercase tracking-wider text-xs hover:bg-[#123875] hover:text-[#FFFFFF] border border-[rgba(248,240,229,0.2)] shadow-lg shadow-[#06183D]/60 transition-all duration-300 group"
            >
              <span>View Interactive Demo</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
