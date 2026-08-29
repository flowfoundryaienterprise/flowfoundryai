import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { products } from '../data/products';
import { TaloProduct } from '../components/sections/TaloProduct';
import { CTA } from '../components/sections/CTA';

export const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="pt-28 pb-20 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        {/* Page Header (Centered on all devices) */}
        <div className="py-12 border-b border-[rgba(248,240,229,0.15)] mb-16 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <SectionLabel number="04" text="OUR PRODUCTS" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-clamp-hero font-black uppercase tracking-tighter text-[#F8F0E5] mb-6 text-center"
          >
            INTELLIGENT PRODUCTS <br />
            <span className="text-gradient-hero">FOR MODERN ENTERPRISES.</span>
          </motion.h1>
          <p className="text-base sm:text-lg text-[#B8C4D8] max-w-xl font-normal leading-relaxed text-center">
            Proprietary AI software systems, autonomous voice telephony, and automation engines engineered to power high-growth digital organizations.
          </p>
        </div>

        {/* Products Catalog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-[#0D2A66]/90 border border-white/15 rounded-2xl flex flex-col justify-between hover:border-white/40 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[11px] font-mono font-bold tracking-widest text-[#F8F0E5] bg-[#082052] rounded-full border border-white/15 uppercase">
                    {product.badge}
                  </span>
                  <span className="font-mono text-xs text-[#B8C4D8]">0{idx + 1}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white group-hover:text-[#F8F0E5] transition-colors">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8C4D8] leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {product.keyBenefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-[#F8F0E5]/90 font-mono">
                      <Check className="w-3.5 h-3.5 text-[#F8F0E5] shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/product/${product.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white font-bold hover:text-[#F8F0E5] transition-colors"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {product.demoUrl && product.demoUrl.startsWith('http') && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#B8C4D8] hover:text-white inline-flex items-center space-x-1"
                    title="Live Demo"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Flagship Talo Product Deep-Dive Section */}
      <TaloProduct />

      <CTA />
    </main>
  );
};
