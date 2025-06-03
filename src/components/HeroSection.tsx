// src/components/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center text-center bg-background text-text_primary relative px-4 py-20 md:py-28 lg:py-32" 
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-6 md:mb-8 custom-cursor-hover-target" 
      >
        <video 
          src="/images/profile.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="rounded-lg shadow-2xl w-full h-auto"
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold custom-cursor-hover-target" 
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        Yackob Tamire
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl text-text_secondary mt-4 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto custom-cursor-hover-target"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        Business Analyst. Scrum Master. Systems Thinker. <br className="hidden md:block" />
        Bridging operations, analysis, and execution — <br className="hidden md:block" />
        from lease administration to enterprise EHR integration.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        className="mt-12 md:mt-16 custom-cursor-hover-target"
      >
        <a href="#works" aria-label="Scroll to works section" className="focus:outline-none focus:ring-2 focus:ring-accent_primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-full">
          <div className="animate-bounce w-8 h-8 md:w-10 md:h-10 text-text_primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection; // <-- Ensu