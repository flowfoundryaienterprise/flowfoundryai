import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-[#06183D] text-[#F8F0E5] min-h-screen">
      <Container>
        <div className="max-w-4xl py-12 border-b border-[rgba(248,240,229,0.15)] mb-12">
          <SectionLabel number="08" text="LEGAL" />
          <h1 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F8F0E5] mb-4">
            PRIVACY POLICY
          </h1>
          <p className="font-mono text-xs text-[#B8C4D8]">
            Last Updated: January 2026
          </p>
        </div>

        <div className="max-w-3xl space-y-8 text-[#B8C4D8] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              FlowFoundry AI Solutions collects information directly provided by users via our contact form, consultation inquiries, or direct email communications. This includes names, business email addresses, phone numbers, and technical project specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              2. How We Use Information
            </h2>
            <p>
              Information collected is strictly used to communicate with prospective clients, evaluate software engineering requirements, execute contractual services, and improve platform performance. We do not sell or share client data with third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard encryption, zero-trust infrastructure principles, and secure cloud storage protocols to safeguard business data against unauthorized access or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial font-bold text-[#F8F0E5] tracking-tight">
              4. Contact & Inquiries
            </h2>
            <p>
              For questions regarding our privacy practices, contact us at{' '}
              <a href="mailto:info@flowfoundryai.in" className="text-[#F8F0E5] underline font-bold hover:text-[#FFFFFF]">
                info@flowfoundryai.in
              </a>.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
};
