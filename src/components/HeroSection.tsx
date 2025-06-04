// src/components/HeroSection.tsx
'use client'; // For Framer Motion and potential future client-side hooks

import React from 'react';
import { motion } from 'framer-motion'; // For animations

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-text_primary relative px-4 py-16 sm:px-6 md:px-8" // Added py-16 for padding
      // Using min-h-screen to fill the viewport height
    >
      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-6 md:mb-8 custom-cursor-hover-target" // Adjusted max-width and margin
      >
        <video
          src="/images/profile.mp4" // PATH UPDATED HERE
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-2xl w-full h-auto" // Responsive video
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Main Headline - Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} // Adjusted delay
        // Slightly smaller font than original "Analyst"
        className="text-5xl sm:text-6xl md:text-7xl font-bold custom-cursor-hover-target"
        style={{ fontFamily: 'var(--font-poppins)' }} // Ensures Poppins Bold
      >
        Yackob Tamire
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} // Adjusted delay
        className="text-base sm:text-lg md:text-xl text-text_secondary mt-4 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto custom-cursor-hover-target"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        Business Analyst. Scrum Master. Systems Thinker. <br className="hidden md:block" />
        Bridging operations, analysis, and execution — <br className="hidden md:block" />
        from lease administration to enterprise EHR integration.
      </motion.p>

      {/* Scroll Indicator (adjust position if needed due to more content) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Consistent initial animation
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }} // Adjusted timing
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2" // Adjusted bottom padding
      >
        <a
          href="#works"
          aria-label="Scroll to works section"
          className="custom-cursor-hover-target p-2 rounded-full hover:bg-accent_primary/10 focus:outline-none focus:ring-2 focus:ring-accent_primary/50 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-300"
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
