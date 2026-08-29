import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks, type SocialLink } from '../../data/social';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const InstagramIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size = 28, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`shrink-0 drop-shadow-sm ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="igFilledGrad" cx="25%" cy="105%" r="135%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="15%" stopColor="#FCAF45" />
        <stop offset="35%" stopColor="#F77737" />
        <stop offset="55%" stopColor="#F56040" />
        <stop offset="70%" stopColor="#FD1D1D" />
        <stop offset="85%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </radialGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" fill="url(#igFilledGrad)" />
    <rect width="11" height="11" x="6.5" y="6.5" rx="3.2" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.6" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
    <circle cx="15.2" cy="8.8" r="0.8" fill="#FFFFFF" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size = 28, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`shrink-0 drop-shadow-sm ${className}`}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" fill="#1DA1F2" />
    <path
      fill="#FFFFFF"
      d="M14.7 7h1.6l-3.5 4 4.1 5.4h-3.2l-2.5-3.3-2.9 3.3H6.7l3.7-4.2L6.5 7h3.3l2.3 3 2.6-3z"
    />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size = 28, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`shrink-0 drop-shadow-sm ${className}`}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" fill="#0A66C2" />
    <path
      fill="#FFFFFF"
      d="M6.5 9.5h2.2v7.5H6.5v-7.5zm1.1-3.5c.7 0 1.3.5 1.3 1.2 0 .7-.6 1.2-1.3 1.2-.7 0-1.3-.5-1.3-1.2 0-.7.6-1.2 1.3-1.2zm3.4 3.5h2.1v1h.03c.3-.6 1-1.2 2.1-1.2 2.3 0 2.7 1.5 2.7 3.5v4.2h-2.2v-3.7c0-.9-.02-2-1.2-2-1.2 0-1.4 1-1.4 2v3.7H11v-7.5z"
    />
  </svg>
);

export const getSocialIcon = (id: SocialLink['id'], className?: string, size?: number) => {
  switch (id) {
    case 'instagram':
      return <InstagramIcon className={className} size={size} />;
    case 'x':
      return <XIcon className={className} size={size} />;
    case 'linkedin':
      return <LinkedInIcon className={className} size={size} />;
    default:
      return null;
  }
};

const getBrandStyles = (id: SocialLink['id']) => {
  switch (id) {
    case 'instagram':
      return {
        badgeBg: 'hover:bg-gradient-to-r hover:from-[#f09433]/25 hover:via-[#dc2743]/25 hover:to-[#bc1888]/25',
        badgeBorder: 'border-[rgba(248,240,229,0.18)] hover:border-[#E1306C]',
        badgeShadow: 'hover:shadow-[0_0_20px_rgba(225,48,108,0.35)]',
        accentText: 'text-[#F8F0E5] group-hover:text-[#FFFFFF]',
      };
    case 'x':
      return {
        badgeBg: 'hover:bg-[#1DA1F2]/20',
        badgeBorder: 'border-[rgba(248,240,229,0.18)] hover:border-[#1DA1F2]',
        badgeShadow: 'hover:shadow-[0_0_20px_rgba(29,161,242,0.35)]',
        accentText: 'text-[#F8F0E5] group-hover:text-[#FFFFFF]',
      };
    case 'linkedin':
      return {
        badgeBg: 'hover:bg-[#0A66C2]/20',
        badgeBorder: 'border-[rgba(248,240,229,0.18)] hover:border-[#0A66C2]',
        badgeShadow: 'hover:shadow-[0_0_20px_rgba(10,102,194,0.35)]',
        accentText: 'text-[#F8F0E5] group-hover:text-[#FFFFFF]',
      };
    default:
      return {
        badgeBg: 'hover:bg-[#123875]',
        badgeBorder: 'border-[rgba(248,240,229,0.18)] hover:border-[#F8F0E5]/50',
        badgeShadow: 'hover:shadow-[#06183D]/60',
        accentText: 'text-[#F8F0E5] group-hover:text-[#FFFFFF]',
      };
  }
};

interface SocialLinksProps {
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  showLabels?: boolean;
  variant?: 'buttons' | 'minimal' | 'cards' | 'badges';
}

export const SocialLinks: React.FC<SocialLinksProps> = React.memo(({
  className = '',
  itemClassName = '',
  iconClassName = 'w-5.5 h-5.5 sm:w-6 sm:h-6',
  showLabels = false,
  variant = 'buttons',
}) => {
  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full ${className}`}>
        {socialLinks.map((link) => {
          const brand = getBrandStyles(link.id);
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              title={`Visit FlowFoundry on ${link.name}`}
              className={`flex items-center justify-between sm:justify-center px-4 py-3 sm:px-3 sm:py-3.5 rounded-xl bg-[#0D2A66] ${brand.badgeBg} border ${brand.badgeBorder} text-[#F8F0E5] transition-all duration-200 ease-out group shadow-md ${brand.badgeShadow} hover:-translate-y-0.5 cursor-pointer min-w-0 ${itemClassName}`}
            >
              <div className="flex items-center space-x-3 sm:space-x-2.5 min-w-0">
                <div className="group-hover:scale-110 transition-transform duration-200 ease-out shrink-0 flex items-center justify-center">
                  {getSocialIcon(link.id, iconClassName || 'w-6 h-6', 24)}
                </div>
                <span className={`text-xs sm:text-sm font-mono font-bold ${brand.accentText} truncate`}>
                  {link.name}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#B8C4D8] group-hover:text-[#FFFFFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:hidden shrink-0" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'badges') {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
        {socialLinks.map((link) => {
          const brand = getBrandStyles(link.id);
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              title={`Visit FlowFoundry on ${link.name}`}
              className={`inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-[#0D2A66] ${brand.badgeBg} border ${brand.badgeBorder} text-[#F8F0E5] font-mono text-xs font-bold transition-all duration-200 ease-out group shadow-md ${brand.badgeShadow} hover:scale-105 hover:-translate-y-0.5 cursor-pointer ${itemClassName}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-200 ease-out shrink-0 flex items-center justify-center">
                {getSocialIcon(link.id, iconClassName || 'w-6 h-6', 24)}
              </div>
              <span className={brand.accentText}>{link.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-4 ${className}`}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            title={link.name}
            className={`transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-0.5 cursor-pointer ${itemClassName}`}
          >
            {getSocialIcon(link.id, iconClassName || 'w-6 h-6', 24)}
          </a>
        ))}
      </div>
    );
  }

  // Default 'buttons' variant with background div container (Slightly Reduced Compact Size)
  return (
    <div className={`flex items-center space-x-2 sm:space-x-2.5 ${className}`}>
      {socialLinks.map((link) => {
        const brand = getBrandStyles(link.id);
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            title={`Visit FlowFoundry on ${link.name}`}
            className={`w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-xl bg-[#0D2A66] ${brand.badgeBg} border ${brand.badgeBorder} flex items-center justify-center transition-all duration-200 ease-out shadow-md shadow-[#06183D]/50 ${brand.badgeShadow} hover:-translate-y-0.5 hover:scale-105 active:scale-95 active:translate-y-0 cursor-pointer ${itemClassName}`}
          >
            <div className="flex items-center justify-center">
              {getSocialIcon(link.id, iconClassName || 'w-5.5 h-5.5 sm:w-6 sm:h-6', 24)}
            </div>
            {showLabels && <span className="ml-2 text-xs font-mono font-bold text-[#F8F0E5]">{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

