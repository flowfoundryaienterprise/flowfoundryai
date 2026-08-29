import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Check,
  Layers,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Layout,
  Bot,
  Info
} from 'lucide-react';
import { products } from '../data/products';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { CTA } from '../components/sections/CTA';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imageError, setImageError] = useState(false);

  // Find product by id or slug
  const product = products.find(p => p.id === id || p.slug === id) || products[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setImageError(false);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-32 pb-24 bg-[#06183D] text-[#F8F0E5] min-h-screen flex items-center justify-center">
        <Container className="text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#082052] border border-white/20 text-[#F8F0E5] flex items-center justify-center mx-auto">
            <Info className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-editorial font-bold">Product Not Found</h1>
          <p className="text-sm text-[#B8C4D8] max-w-md mx-auto">
            The product you requested does not exist or has been relocated.
          </p>
          <Button href="/products" variant="gradient">
            Back to Products
          </Button>
        </Container>
      </main>
    );
  }

  // Related products (exclude current)
  const otherProducts = products.filter(p => p.id !== product.id);

  return (
    <main className="pt-28 pb-24 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 mb-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#B8C4D8]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#F8F0E5] font-semibold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#F8F0E5] hover:text-white px-3.5 py-1.5 rounded-lg bg-[#082052] border border-white/15 hover:bg-[#123875] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Product Information & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-3">
              <span className="px-3.5 py-1 text-xs font-mono font-bold tracking-widest text-[#F8F0E5] bg-[#082052] rounded-full border border-white/20 uppercase shadow-inner">
                {product.badge}
              </span>
              <span className="text-xs font-mono text-[#B8C4D8] uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-[#F8F0E5]/90 font-medium leading-relaxed">
                {product.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#B8C4D8] leading-relaxed font-normal">
              {product.longDescription || product.description}
            </p>

            {/* Key Benefits List */}
            <div className="p-6 bg-[#0D2A66]/90 border border-white/15 rounded-2xl space-y-3 font-mono text-xs text-[#F8F0E5]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F8F0E5]" />
                <span>Key Platform Benefits</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-[11px] sm:text-xs">
                    <Check className="w-3.5 h-3.5 text-[#F8F0E5] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {product.demoUrl && product.demoUrl.startsWith('http') && (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#082052] text-[#F8F0E5] font-mono font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-[#123875] hover:text-white border border-white/20 shadow-lg shadow-[#06183D]/60 transition-all duration-300 group cursor-pointer"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              <Button href="/contact" variant="primary" size="md">
                <span>Request Custom Deployment</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Visual Product Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 relative flex flex-col justify-center"
          >
            <div className="relative w-full bg-[#0D2A66] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#06183D] border-b border-white/15 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="text-[10px] font-mono text-[#B8C4D8] tracking-wider uppercase flex items-center space-x-2 bg-[#0D2A66] px-3 py-1 rounded-full border border-white/15">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <Layout className="w-3 h-3 text-[#F8F0E5]" />
                  <span>flowfoundryai.in/{product.slug}</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Product Visual Container */}
              <div className="relative w-full bg-[#06183D] overflow-hidden flex items-center justify-center p-3 sm:p-5">
                {!imageError ? (
                  <img
                    src={product.image}
                    alt={`${product.name} Dashboard Overview`}
                    decoding="async"
                    loading="eager"
                    onError={() => setImageError(true)}
                    className="w-full h-auto max-h-[440px] object-contain rounded-xl border border-white/15 shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center text-center p-6 bg-[#06183D]/90 rounded-xl border border-white/15 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#0D2A66] border border-white/20 flex items-center justify-center text-[#F8F0E5]">
                      <Bot className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-editorial text-xl font-bold text-[#F8F0E5]">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#B8C4D8] max-w-xs mx-auto font-mono">
                        Intelligent AI Product Architecture
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features & Architecture Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionLabel text="CORE ARCHITECTURE" />
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase tracking-tight">
              ENGINEERED FOR PRODUCTION PERFORMANCE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {product.features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 bg-[#0D2A66]/90 border border-white/15 rounded-xl hover:border-white/40 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#082052] border border-white/15 flex items-center justify-center text-[#F8F0E5]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-editorial font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#B8C4D8] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Specifications & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Specifications Table */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0D2A66]/90 border border-white/15 rounded-2xl">
            <h3 className="text-base font-mono uppercase tracking-widest text-white font-bold mb-6 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#F8F0E5]" />
              <span>Technical Specifications</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center py-2.5 border-b border-white/10">
                  <span className="text-[#B8C4D8]">{spec.label}</span>
                  <span className="text-white font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0D2A66]/90 border border-white/15 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-base font-mono uppercase tracking-widest text-white font-bold mb-6 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#F8F0E5]" />
                <span>Target Industry Applications</span>
              </h3>

              <div className="space-y-3">
                {product.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-[#06183D] border border-white/10 text-xs text-[#F8F0E5] font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#F8F0E5] shrink-0" />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#082052] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#123875] border border-white/15 transition-colors"
              >
                <span>Consult on Enterprise Use Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Other Products Section */}
        {otherProducts.length > 0 && (
          <div className="mb-16 pt-12 border-t border-white/15">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white">
                  Explore Other AI Products
                </h3>
                <p className="text-xs text-[#B8C4D8] font-mono mt-1">
                  Discover more intelligent solutions from FlowFoundry.
                </p>
              </div>

              <Link
                to="/products"
                className="hidden sm:inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#F8F0E5] hover:text-white"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherProducts.map(other => (
                <div
                  key={other.id}
                  className="p-6 bg-[#0D2A66]/90 border border-white/15 rounded-2xl flex flex-col justify-between space-y-4 hover:border-white/40 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest text-[#F8F0E5] bg-[#082052] rounded-full border border-white/15 uppercase">
                      {other.badge}
                    </span>
                    <h4 className="text-lg font-editorial font-bold text-white">
                      {other.name}
                    </h4>
                    <p className="text-xs text-[#B8C4D8] leading-relaxed">
                      {other.description}
                    </p>
                  </div>

                  <Link
                    to={`/product/${other.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#F8F0E5] hover:text-white pt-3 border-t border-white/10"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>

      <CTA />
    </main>
  );
};
