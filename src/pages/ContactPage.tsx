import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, MapPin, Phone, ChevronDown, Check, MessageSquare } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { SocialLinks } from '../components/ui/SocialIcons';

const serviceOptions = [
  { id: "Website Design / Redesign", label: "01 — Website Design / Redesign", desc: "Modern, responsive, conversion-focused websites" },
  { id: "Custom Software Development", label: "02 — Custom Software Development", desc: "Tailored web apps, dashboards & platforms" },
  { id: "Shopify Store Development", label: "03 — Shopify Store Development", desc: "Custom themes & high-converting stores" },
  { id: "AI Agents and Infrastructure", label: "04 — AI Agents and Infrastructure", desc: "Autonomous agents, LLM & RAG architecture" },
  { id: "WordPress Development", label: "05 — WordPress Development", desc: "Custom themes, WooCommerce & optimization" },
  { id: "Workflow Automation", label: "06 — Workflow Automation", desc: "API orchestration & process automation" },
];

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceOptions[0].id,
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const selectedServiceObj = serviceOptions.find(s => s.id === formData.service) || serviceOptions[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Formatted WhatsApp message
      const text = `*New Inquiry from FlowFoundry Website*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `✉️ *Email:* ${formData.email}\n` +
        `🛠️ *Service Interest:* ${formData.service}\n\n` +
        `💬 *Project Details:*\n${formData.message}`;

      const whatsappUrl = `https://wa.me/919228726763?text=${encodeURIComponent(text)}`;
      
      // Redirect directly to WhatsApp with pre-filled message
      window.open(whatsappUrl, '_blank');
      
      setSubmitted(true);
    }
  };

  return (
    <main className="pt-28 pb-24 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        {/* Page Header (Centered on all devices) */}
        <div className="py-12 border-b border-[rgba(248,240,229,0.15)] mb-16 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <SectionLabel number="07" text="GET IN TOUCH" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-clamp-hero font-black uppercase tracking-tighter text-[#F8F0E5] mb-6 leading-tight text-center"
          >
            LET'S START <br />
            <span className="text-gradient-hero">A CONVERSATION.</span>
          </motion.h1>
          <p className="text-base sm:text-lg text-[#B8C4D8] max-w-xl font-normal leading-relaxed text-center">
            Ready to explore intelligent digital experiences, custom software, or enterprise workflow automation? Send us a message and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Social */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-2xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
                FlowFoundry AI Solutions
              </h2>
              <p className="text-sm text-[#B8C4D8] leading-relaxed">
                We partner with ambitious startups, modern enterprises, and technology leaders to build production-grade AI, web platforms, and software architectures.
              </p>

              <div className="space-y-4 pt-6 border-t border-[rgba(248,240,229,0.15)] font-mono text-sm flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-3 text-[#F8F0E5]">
                  <MapPin className="w-4 h-4 text-[#F8F0E5] shrink-0" />
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3 text-[#F8F0E5]">
                  <Phone className="w-4 h-4 text-[#F8F0E5] shrink-0" />
                  <a href="https://wa.me/917330937354" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#FFFFFF]">
                    +91 73309 37354 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-[#F8F0E5]">
                  <Mail className="w-4 h-4 text-[#F8F0E5] shrink-0" />
                  <a href="mailto:info@flowfoundryai.in" className="hover:underline hover:text-[#FFFFFF]">
                    info@flowfoundryai.in
                  </a>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="pt-6 border-t border-[rgba(248,240,229,0.15)] space-y-3">
                <span className="block text-xs font-mono uppercase tracking-widest text-[#F8F0E5] font-semibold text-center lg:text-left">
                  Official Channels & Socials
                </span>
                <SocialLinks variant="cards" />
              </div>
            </div>

            {/* Structured Contact & Regional Card */}
            <div className="p-6 bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] rounded-2xl space-y-4 font-mono text-xs text-[#B8C4D8]">
              <div className="flex justify-between border-b border-[rgba(248,240,229,0.15)] pb-2">
                <span>HEADQUARTERS</span>
                <span className="text-[#F8F0E5] font-bold">VIJAYAWADA, INDIA</span>
              </div>
              <div className="border-b border-[rgba(248,240,229,0.15)] pb-3 space-y-1.5">
                <div className="flex justify-between">
                  <span>LEADERSHIP</span>
                  <span className="text-[#F8F0E5] font-bold">RAVI VAGHELA</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#B8C4D8]">
                  <span>LOCATION</span>
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>PHONE</span>
                  <a href="tel:+919228726763" className="text-[#F8F0E5] hover:underline">
                    +91 92287 26763
                  </a>
                </div>
              </div>
              <div className="flex justify-between border-b border-[rgba(248,240,229,0.15)] pb-2">
                <span>AVAILABILITY</span>
                <span className="text-[#F8F0E5] font-bold">ACCEPTING NEW PROJECTS</span>
              </div>
              <div className="flex justify-between">
                <span>ESTIMATED RESPONSE</span>
                <span className="text-[#F8F0E5] font-bold">INSTANT VIA WHATSAPP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 sm:p-14 bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] rounded-2xl text-center space-y-6"
              >
                <div className="w-16 h-16 bg-[#082052] border border-[rgba(248,240,229,0.2)] text-[#F8F0E5] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#06183D]/60">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-editorial font-bold text-[#F8F0E5]">
                  WhatsApp Opened.
                </h3>
                <p className="text-sm text-[#B8C4D8] max-w-md mx-auto leading-relaxed">
                  Your inquiry message has been compiled and sent to WhatsApp (**+91 92287 26763**). If WhatsApp didn't open automatically, click the button below:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href={`https://wa.me/919228726763?text=${encodeURIComponent(
                      `*New Inquiry from FlowFoundry Website*\n\n👤 *Name:* ${formData.name}\n✉️ *Email:* ${formData.email}\n🛠️ *Service Interest:* ${formData.service}\n\n💬 *Project Details:*\n${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#082052] text-[#F8F0E5] font-bold text-sm hover:bg-[#123875] hover:text-[#FFFFFF] border border-[rgba(248,240,229,0.2)] transition-colors shadow-lg shadow-[#06183D]/60"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Directly</span>
                  </a>

                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: serviceOptions[0].id, message: '' });
                    }}
                    variant="outline"
                    size="md"
                    showArrow={false}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 bg-[#0D2A66] border border-[rgba(248,240,229,0.15)] rounded-2xl space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#F8F0E5] mb-2 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#06183D] border border-[rgba(248,240,229,0.15)] rounded-lg text-[#F8F0E5] placeholder-[#B8C4D8]/40 text-sm focus:outline-none focus:border-[#F8F0E5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#F8F0E5] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-3 bg-[#06183D] border border-[rgba(248,240,229,0.15)] rounded-lg text-[#F8F0E5] placeholder-[#B8C4D8]/40 text-sm focus:outline-none focus:border-[#F8F0E5] transition-colors"
                    />
                  </div>
                </div>

                {/* Custom Framer Motion Dropdown Menu */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#F8F0E5] mb-2 font-semibold">
                    Core Capability / Service Interest
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 bg-[#06183D] border border-[rgba(248,240,229,0.15)] hover:border-[#F8F0E5]/50 rounded-lg text-[#F8F0E5] text-sm focus:outline-none focus:border-[#F8F0E5] transition-all cursor-pointer text-left"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[#F8F0E5] font-bold text-xs">
                        {selectedServiceObj.label.split(' — ')[0]}
                      </span>
                      <span className="text-[#F8F0E5] font-medium">
                        {selectedServiceObj.label.split(' — ')[1]}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#F8F0E5] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 top-full z-40 bg-[#06183D] border border-[rgba(248,240,229,0.2)] rounded-xl shadow-2xl overflow-hidden p-1.5 space-y-1 backdrop-blur-2xl"
                      >
                        {serviceOptions.map((opt) => {
                          const isSelected = opt.id === formData.service;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, service: opt.id });
                                setDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                                isSelected 
                                  ? 'bg-[#0D2A66] text-[#F8F0E5] border border-[rgba(248,240,229,0.15)] font-semibold' 
                                  : 'text-[#B8C4D8] hover:bg-[#0D2A66]/80 hover:text-[#FFFFFF]'
                              }`}
                            >
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">{opt.label}</span>
                                <span className="text-[11px] text-[#B8C4D8]/70 font-mono">{opt.desc}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-[#F8F0E5] shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#F8F0E5] mb-2 font-semibold">
                    Project Requirements / Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, goals, timelines, or technical requirements..."
                    className="w-full px-4 py-3 bg-[#06183D] border border-[rgba(248,240,229,0.15)] rounded-lg text-[#F8F0E5] placeholder-[#B8C4D8]/40 text-sm focus:outline-none focus:border-[#F8F0E5] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  Submit Inquiry via WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};
