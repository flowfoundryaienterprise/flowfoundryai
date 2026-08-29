import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'gradient' | 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = React.memo(({
  children,
  variant = 'gradient',
  size = 'md',
  href,
  isExternal = false,
  showArrow = true,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F0E5] rounded-lg overflow-hidden";

  const variants = {
    gradient: "bg-[#082052] text-[#F8F0E5] hover:bg-[#123875] hover:text-[#FFFFFF] font-bold border border-[rgba(248,240,229,0.2)] hover:border-[rgba(248,240,229,0.5)] shadow-lg shadow-[#06183D]/50 hover:scale-[1.02]",
    primary: "bg-[#082052] text-[#F8F0E5] hover:bg-[#123875] hover:text-[#FFFFFF] font-bold shadow-md border border-[rgba(248,240,229,0.2)]",
    secondary: "bg-[#0D2A66] text-[#F8F0E5] border border-[rgba(248,240,229,0.15)] hover:border-[#F8F0E5]/40 hover:bg-[#123875]",
    glass: "bg-[#0D2A66]/80 text-[#F8F0E5] border border-[rgba(248,240,229,0.15)] backdrop-blur-md hover:bg-[#0D2A66] hover:border-[#F8F0E5]/50 shadow-sm",
    outline: "bg-transparent text-[#F8F0E5] border border-[rgba(248,240,229,0.25)] hover:border-[#F8F0E5] hover:bg-[#082052]/40",
    ghost: "bg-transparent text-[#B8C4D8] hover:text-[#FFFFFF] hover:bg-[#082052]/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider font-semibold",
    md: "px-6 py-3 text-sm uppercase tracking-widest font-semibold",
    lg: "px-8 py-4 text-base uppercase tracking-widest font-bold",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight className="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

