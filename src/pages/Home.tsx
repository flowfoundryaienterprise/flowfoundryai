import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { Intro } from '../components/sections/Intro';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { TaloProduct } from '../components/sections/TaloProduct';
import { Capabilities } from '../components/sections/Capabilities';
import { VisualBreak } from '../components/sections/VisualBreak';
import { Technology } from '../components/sections/Technology';
import { Team } from '../components/sections/Team';
import { CTA } from '../components/sections/CTA';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#06183D] text-[#F8F0E5]">
      <Hero />
      <Intro />
      <About />
      <Services />
      <TaloProduct />
      <Capabilities />
      <VisualBreak />
      <Technology />
      <Team />
      <CTA />
    </main>
  );
};

export default Home;
