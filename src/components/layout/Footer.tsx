import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { SocialLinks } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06183D] text-[#B8C4D8] border-t border-[rgba(248,240,229,0.15)] pt-20 pb-12 relative overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#0D2A66]/30 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(248,240,229,0.15)]">
          {/* Brand Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-lg shadow-[#06183D]/50 border border-white/80 flex items-center justify-center shrink-0">
                  <img
                    src="/images/logo/FlowFoundry Logo.jpeg"
                    alt="FlowFoundry Brand Logo"
                    className="w-full h-full object-contain"
                    decoding="async"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo/logo.jpeg';
                    }}
                  />
                </div>
                <span className="font-editorial text-2xl font-black tracking-tight text-[#F8F0E5]">
                  FLOWFOUNDRY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold tracking-tight text-[#F8F0E5] leading-tight max-w-xl">
                Building intelligent solutions for a smarter future.
              </h2>
            </div>

            <div className="space-y-6 mt-8 flex flex-col items-start">
              {/* Official Social Links in Brand Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-semibold">
                  Follow Us:
                </span>
                <SocialLinks variant="buttons" iconClassName="w-5.5 h-5.5 sm:w-6 sm:h-6" />
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#F8F0E5] flex-wrap">
                <Sparkles className="w-4 h-4 text-[#F8F0E5] animate-pulse shrink-0 mr-1" />
                <span>AI AGENTS • SOFTWARE • SHOPIFY • WORDPRESS • WORKFLOW AUTOMATION</span>
              </div>
            </div>
          </div>

          {/* Right Columns (Navigation, Legal, Contact) - Clean Straight Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            {/* Nav Column */}
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-bold mb-4">
                Navigation
              </h3>
              <ul className="space-y-3 text-sm flex flex-col items-start">
                <li>
                  <Link to="/" className="hover:text-[#FFFFFF] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-[#FFFFFF] transition-colors font-medium text-[#F8F0E5]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FFFFFF] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#FFFFFF] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="hover:text-[#FFFFFF] transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-[#FFFFFF] transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-bold mb-4">
                Legal
              </h3>
              <ul className="space-y-3 text-sm flex flex-col items-start">
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#FFFFFF] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#FFFFFF] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-start">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-bold mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-xs font-mono text-[#B8C4D8] flex flex-col items-start">
                <li className="flex items-start space-x-2 text-left">
                  <MapPin className="w-3.5 h-3.5 text-[#F8F0E5] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Vijayawada, Andhra Pradesh,<br />
                    India
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+917330937354"
                    className="inline-flex items-center space-x-2 hover:text-[#FFFFFF] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F8F0E5] shrink-0" />
                    <span>+91 73309 37354</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@flowfoundryai.in"
                    className="inline-flex items-center space-x-2 hover:text-[#FFFFFF] transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#F8F0E5] shrink-0" />
                    <span className="truncate">info@flowfoundryai.in</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#B8C4D8] gap-4">
          <div>
            © 2026 FlowFoundry AI Solutions. Vijayawada, India. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-[#B8C4D8] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3.5 h-3.5 -rotate-45" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
