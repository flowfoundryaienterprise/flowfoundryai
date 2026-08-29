import { useState, useEffect } from 'react';

export function useScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > threshold : false));

  useEffect(() => {
    let ticking = false;
    let lastState = window.scrollY > threshold;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > threshold;
          if (isScrolled !== lastState) {
            lastState = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
}

