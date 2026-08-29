import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        <div className="max-w-4xl py-12 border-b border-[rgba(248,240,229,0.15)] mb-12">
          <SectionLabel number="09" text="LEGAL" />
          <h1 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F8F0E5] mb-4">
            TERMS OF SERVICE
          </h1>
          <p className="font-mono text-xs text-[#B8C4D8]">
            Last Updated: January 2026
          </p>
        </div>

        <div className="max-w-3xl space-y-8 text-[#B8C4D8] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              1. Services & Agreements
            </h2>
            <p>
              By accessing FlowFoundry AI Solutions software development services, custom AI integrations, or website platforms, you agree to comply with our commercial terms, engineering statements of work, and project delivery frameworks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              2. Intellectual Property
            </h2>
            <p>
              All custom deliverables, software source code, proprietary algorithms, and brand assets developed for client projects are transferred upon full commercial settlement as governed by individual master service agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              3. Limitation of Liability
            </h2>
            <p>
              FlowFoundry AI Solutions provides software engineering services with high quality standards but disclaims liability for indirect business disruptions resulting from third-party API dependencies or external cloud downtime.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
};
