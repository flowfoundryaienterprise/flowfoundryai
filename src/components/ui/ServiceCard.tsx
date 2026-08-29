import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Monitor, Code, ShoppingBag, Bot, Globe, Workflow, CheckCircle2, ChevronDown } from 'lucide-react';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Icon mapping for the 6 services
  const icons = [Monitor, Code, ShoppingBag, Bot, Globe, Workflow];
  const IconComponent = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col h-full min-h-[280px] sm:min-h-[340px] bg-[#0D2A66]/90 backdrop-blur-xl border border-[rgba(248,240,229,0.15)] hover:border-[#F8F0E5]/40 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#06183D]/60"
    >
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-[#F8F0E5] opacity-70 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />

      <div className="p-4 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Header Row: Service Number + Icon + Arrow */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#F8F0E5] uppercase bg-[#082052] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[rgba(248,240,229,0.15)]">
              {service.number}
            </span>

            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#F8F0E5] p-0.5 shadow-lg group-hover:scale-110 transition-all duration-300">
              <div className="w-full h-full bg-[#082052] rounded-[6px] sm:rounded-[10px] flex items-center justify-center text-[#F8F0E5] group-hover:bg-[#123875] group-hover:text-[#FFFFFF] transition-colors">
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" />
              </div>
            </div>
          </div>

          {/* Title & Short Description */}
          <h3 className="text-base sm:text-2xl font-editorial font-bold text-[#F8F0E5] mb-2 sm:mb-3 group-hover:text-[#FFFFFF] transition-colors leading-tight">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#B8C4D8] leading-relaxed font-normal mb-4 sm:mb-6">
            {service.description}
          </p>
        </div>

        {/* Card Footer Toggle Button */}
        <div className="pt-3 sm:pt-4 border-t border-[rgba(248,240,229,0.15)] flex items-center justify-between mt-auto shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#F8F0E5] hover:text-[#FFFFFF] transition-colors cursor-pointer focus:outline-none py-1"
          >
            <span>{isExpanded ? 'Hide Specs' : 'Explore'}</span>
            <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#082052] border border-[rgba(248,240,229,0.2)] group-hover:bg-[#123875] text-[#F8F0E5] group-hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowUpRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isExpanded ? 'rotate-45 text-[#F8F0E5]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
          </div>
        </div>
      </div>

      {/* Expandable Details Drawer */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#06183D]/95 border-t border-[rgba(248,240,229,0.15)] p-4 sm:p-6 shrink-0"
          >
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#F8F0E5] mb-2 font-semibold">
                  Core Capabilities
                </h4>
                <ul className="space-y-1.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-[11px] sm:text-xs text-[#B8C4D8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F8F0E5] mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#F8F0E5] mb-2 font-semibold">
                  Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono text-[#F8F0E5] p-1.5 sm:p-2 rounded-md bg-[#0D2A66] border border-[rgba(248,240,229,0.15)]">
                      <CheckCircle2 className="w-3 h-3 text-[#F8F0E5] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

