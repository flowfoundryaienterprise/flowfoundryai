import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, User, MapPin, Phone } from 'lucide-react';
import type { TeamMember } from '../../data/team';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export const TeamCard: React.FC<TeamCardProps> = React.memo(({ member }) => {
  const [imageError, setImageError] = useState(false);

  const objectPos = member.imagePosition || "object-[center_20%]";
  const scaleClass = member.imageScale || "scale-100";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col h-full bg-[#0D2A66]/90 backdrop-blur-xl border border-[rgba(248,240,229,0.15)] hover:border-[#F8F0E5]/40 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#06183D]/70 hover:-translate-y-1.5"
    >
      {/* Top Header Pill & Number */}
      <div className="flex items-center justify-between p-3 sm:p-5 border-b border-[rgba(248,240,229,0.15)] bg-[#06183D]/70 font-mono text-[10px] sm:text-xs text-[#B8C4D8] shrink-0">
        <span className="text-[#F8F0E5] font-bold">{member.number}</span>
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F8F0E5] animate-pulse" />
          <span className="uppercase tracking-widest text-[9px] sm:text-[10px] text-[#F8F0E5] font-semibold truncate">
            FLOWFOUNDRY
          </span>
        </div>
      </div>

      {/* Portrait Photo Container with 3:4 Aspect Ratio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#06183D] shrink-0">
        {!imageError ? (
          <img
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            decoding="async"
            loading="lazy"
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover ${objectPos} ${scaleClass} group-hover:scale-110 transition-transform duration-700 ease-out`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0D2A66] to-[#06183D] text-[#F8F0E5] p-4 text-center">
            <User className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 text-[#F8F0E5] group-hover:scale-110 transition-transform" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#F8F0E5]">{member.name}</span>
          </div>
        )}

        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06183D] via-[#06183D]/20 to-transparent opacity-65 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

        {/* Hover LinkedIn Link Badge */}
        <a
          href={member.linkedin || "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#082052]/90 border border-[rgba(248,240,229,0.2)] backdrop-blur-md flex items-center justify-center text-[#F8F0E5] opacity-90 group-hover:opacity-100 group-hover:bg-[#123875] group-hover:text-[#FFFFFF] group-hover:border-transparent transition-all duration-300 shadow-md"
          title={`Connect with ${member.name} on LinkedIn`}
          aria-label={`LinkedIn profile for ${member.name}`}
        >
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Footer Content */}
      <div className="p-3.5 sm:p-6 bg-[#06183D]/90 flex flex-col flex-grow justify-between border-t border-[rgba(248,240,229,0.15)]">
        <div>
          <h3 className="text-base sm:text-2xl font-editorial font-bold tracking-tight text-[#F8F0E5] group-hover:text-[#FFFFFF] transition-colors leading-tight">
            {member.name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
            <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold rounded-full bg-[#0D2A66] text-[#F8F0E5] border border-[rgba(248,240,229,0.15)]">
              {member.role}
            </span>
            {member.location && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-mono text-[#B8C4D8] bg-[#06183D] rounded-full border border-[rgba(248,240,229,0.15)]">
                <MapPin className="w-3 h-3 text-[#F8F0E5] shrink-0" />
                <span className="truncate">{member.location}</span>
              </span>
            )}
          </div>

          {member.phone && (
            <div className="mt-2.5">
              <a
                href={`tel:${member.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-mono text-[#F8F0E5] hover:underline hover:text-[#FFFFFF] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#F8F0E5] shrink-0" />
                <span>{member.phone}</span>
              </a>
            </div>
          )}
        </div>

        {member.bio && (
          <p className="text-[11px] sm:text-xs text-[#B8C4D8] mt-3 sm:mt-4 leading-relaxed font-normal border-t border-[rgba(248,240,229,0.15)] pt-2 sm:pt-3">
            {member.bio}
          </p>
        )}
      </div>
    </motion.div>
  );
});

TeamCard.displayName = 'TeamCard';

