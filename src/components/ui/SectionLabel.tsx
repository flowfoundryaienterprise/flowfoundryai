import React from 'react';
import { cn } from '../../lib/utils';

interface SectionLabelProps {
  number?: string;
  text: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = React.memo(({
  number,
  text,
  className = '',
}) => {
  return (
    <div className={cn('inline-flex items-center space-x-3 text-xs tracking-[0.25em] font-mono uppercase font-bold px-3.5 py-1.5 rounded-full bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] backdrop-blur-md shadow-sm mb-6', className)}>
      <span className="inline-block w-2 h-2 rounded-full bg-[#F8F0E5] animate-pulse shadow-sm shadow-[#F8F0E5]/40" />
      {number && <span className="text-[#F8F0E5] font-bold">{number} — </span>}
      <span className="text-[#F8F0E5]">{text}</span>
    </div>
  );
});

SectionLabel.displayName = 'SectionLabel';

