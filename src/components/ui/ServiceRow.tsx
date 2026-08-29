import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Minus, CheckCircle2 } from 'lucide-react';
import type { Service } from '../../data/services';

interface ServiceRowProps {
  service: Service;
  index: number;
}

export const ServiceRow: React.FC<ServiceRowProps> = React.memo(({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-neutral-800 transition-colors duration-300">
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative py-8 sm:py-10 px-4 sm:px-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between transition-colors duration-500 hover:bg-neutral-900/60"
      >
        {/* Left: Number + Title */}
        <div className="flex items-start md:items-center space-x-6 sm:space-x-10 mb-4 md:mb-0">
          <span className="font-mono text-sm sm:text-base font-bold text-neutral-500 group-hover:text-white transition-colors duration-300">
            {service.number}
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
            {service.title}
          </h3>
        </div>

        {/* Middle: Short Description */}
        <div className="md:max-w-md lg:max-w-lg mb-4 md:mb-0 pr-4">
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed group-hover:text-neutral-200 transition-colors">
            {service.description}
          </p>
        </div>

        {/* Right: Expand Toggle + Arrow */}
        <div className="flex items-center space-x-4 self-end md:self-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors hidden sm:inline-block">
            {isExpanded ? 'Collapse' : 'Details'}
          </span>
          <div className="w-10 h-10 rounded-full border border-neutral-700 group-hover:border-white flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-neutral-950">
            {isExpanded ? (
              <Minus className="w-4 h-4" />
            ) : (
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </div>
        </div>
      </motion.div>

      {/* Expanded Details Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-neutral-950/90 border-t border-neutral-900 px-6 sm:px-12 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 font-semibold">
                  Core Engineering Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 font-semibold">
                  Key Deliverables & Output
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-neutral-300 p-2.5 bg-neutral-900/80 border border-neutral-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

ServiceRow.displayName = 'ServiceRow';

