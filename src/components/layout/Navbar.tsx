import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { navLinks } from '../../data/navigation';
import { Container } from '../ui/Container';

export const Navbar: React.FC = () => {
  const scrolled = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scroll or client-side navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    // Section anchor links like "/#capabilities"
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    // Home link
    if (href === '/') {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Route pages (like /products, /services, /about, etc.)
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass-navbar py-4 shadow-xl shadow-[#06183D]/80'
        : 'bg-transparent py-6'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none cursor-pointer"
            aria-label="FlowFoundry AI Solutions Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-white p-1.5 shadow-lg shadow-[#06183D]/50 border border-white/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src="/images/logo/FlowFoundry Logo.jpeg"
                alt="FlowFoundry Logo"
                className="w-full h-full object-contain"
                decoding="async"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo/logo.jpeg';
                }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-editorial text-lg font-black tracking-tight text-[#F8F0E5] group-hover:text-[#FFFFFF] transition-colors">
                FLOWFOUNDRY
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#B8C4D8] font-bold uppercase group-hover:text-[#F8F0E5] transition-colors">
                AI SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/products' && location.pathname.startsWith('/product'));
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-widest font-mono transition-all duration-300 relative py-1.5 group font-medium cursor-pointer ${isActive ? 'text-[#F8F0E5] font-bold' : 'text-[#B8C4D8] hover:text-[#FFFFFF]'
                    }`}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FFFFFF]">
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#F8F0E5] group-hover:bg-[#FFFFFF] transition-all duration-300 rounded-full ${isActive ? 'w-full shadow-sm shadow-[#F8F0E5]/40' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Primary Navy Accent Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono font-bold px-5 py-2.5 rounded-lg bg-[#082052] text-[#F8F0E5] hover:bg-[#123875] hover:text-[#FFFFFF] border border-[rgba(248,240,229,0.2)] shadow-lg shadow-[#06183D]/50 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-[#F8F0E5] hover:text-[#FFFFFF] rounded-lg border border-[rgba(248,240,229,0.15)] bg-[#0D2A66] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#06183D]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[rgba(248,240,229,0.15)] pb-6">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-white p-1 shadow-md border border-white/80 flex items-center justify-center shrink-0">
                  <img
                    src="/images/logo/FlowFoundry Logo.jpeg"
                    alt="FlowFoundry Logo"
                    className="w-full h-full object-contain"
                    decoding="async"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo/logo.jpeg';
                    }}
                  />
                </div>
                <span className="font-editorial text-lg font-black tracking-tight text-[#F8F0E5]">
                  FLOWFOUNDRY
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#B8C4D8] hover:text-[#F8F0E5] rounded-lg border border-[rgba(248,240,229,0.15)] focus:outline-none cursor-pointer"
                aria-label="Close Mobile Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-5 my-auto py-6">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href || (link.href === '/products' && location.pathname.startsWith('/product'));
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-2xl sm:text-3xl font-editorial font-bold tracking-tight flex items-center justify-between border-b border-[rgba(248,240,229,0.1)] pb-3 cursor-pointer group ${isActive ? 'text-[#F8F0E5]' : 'text-[#B8C4D8] hover:text-[#FFFFFF]'
                      }`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    <span className="font-mono text-xs text-[#B8C4D8] group-hover:text-[#FFFFFF]">0{idx + 1}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Contact CTA in Mobile Menu */}
            <div className="border-t border-[rgba(248,240,229,0.15)] pt-6 flex flex-col space-y-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-lg bg-[#082052] text-[#F8F0E5] font-bold uppercase tracking-widest font-mono text-sm flex items-center justify-center space-x-2 border border-[rgba(248,240,229,0.2)] shadow-lg shadow-[#06183D]/60 hover:bg-[#123875] hover:text-[#FFFFFF] transition-colors cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] font-mono text-[#B8C4D8] text-center uppercase tracking-widest flex items-center justify-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F8F0E5]" />
                <span>Intelligent AI Technology Platform</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
