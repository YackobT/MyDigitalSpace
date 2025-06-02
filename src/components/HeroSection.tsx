// src/components/HeroSection.tsx
'use client'; // For Framer Motion and potential future client-side hooks

import React from 'react';
import { motion } from 'framer-motion'; // For animations

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-text_primary relative px-4 sm:px-6 md:px-8"
      // Using min-h-screen to fill the viewport height
    >
      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold custom-cursor-hover-target"
        style={{ fontFamily: 'var(--font-poppins)' }} // Ensures Poppins Bold
      >
        Analyst
      </motion.h1>

      {/* Optional: Sub-headline or brief description */}
      {/* 
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl text-text_secondary mt-4 max-w-md sm:max-w-lg md:max-w-xl custom-cursor-hover-target"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        Crafting elegant solutions for complex business challenges. Passionate about data, agile methodologies, and driving impactful change.
      </motion.p> 
      */}
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Changed initial y for consistency
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }} // Adjusted timing
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#works" 
          aria-label="Scroll to works section" 
          className="custom-cursor-hover-target p-2 rounded-full hover:bg-accent_primary/10 focus:outline-none focus:ring-2 focus:ring-accent_primary/50 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-300" // Added padding, hover/focus effect for better UX
        >
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

export default HeroSection;
