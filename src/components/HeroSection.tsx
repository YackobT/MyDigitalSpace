// src/components/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center bg-background text-text_primary relative px-4 py-16 sm:py-20 md:py-24 lg:py-28 min-h-screen" // Added min-h-screen
    >
      {/* Text Block Above Video */}
      <div className="mb-8 md:mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-sm sm:text-base text-white uppercase tracking-wider custom-cursor-hover-target"
          style={{ fontFamily: 'var(--font-poppins)'}}
        >
          ANALYST
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-accent_primary my-2 sm:my-3 md:my-4 relative inline-block custom-cursor-hover-target"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          YACKOB
          {/* Subtle noise/texture overlay for "YACKOB" */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2050%2050%22%20preserveAspectRatio%3D%22none%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.07%22%2F%3E%3C%2Fsvg%3E')] opacity-40 mix-blend-overlay"
            // Adjust opacity (on the rect or the span) or mix-blend-mode for desired subtlety.
          ></span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 md:space-x-6 mt-2 sm:mt-3"
        >
          <p className="text-xs sm:text-sm text-white uppercase tracking-wider custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)'}}>SYSTEMS THINKER</p>
          <span className="hidden sm:inline-block text-white opacity-50">|</span>
          <p className="text-xs sm:text-sm text-white uppercase tracking-wider custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)'}}>SCRUM MASTER</p>
          <span className="hidden sm:inline-block text-white opacity-50">|</span>
          <p className="text-xs sm:text-sm text-white uppercase tracking-wider custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)'}}>2025</p>
        </motion.div>
      </div>

      {/* Video Player - Centered below the main text block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mb-4 md:mb-6 custom-cursor-hover-target"
      >
        <div style={{paddingBottom: "56.25%", position: "relative", height: 0}}> {/* 16:9 Aspect Ratio Container */}
          <video
            src="/images/profile.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Texts Below Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex justify-between items-center text-xs sm:text-sm text-white uppercase tracking-wider mt-1"
      >
        <p className="custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)'}}>ARLINGTON, VA</p>
        <p className="text-right custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)'}}>BRIDGING OPERATIONS, ANALYSIS, AND EXECUTION</p>
      </motion.div>

      {/* Scroll Indicator was removed in this version, if needed, it would be added here */}
      {/* Example:
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#experience" // Changed to #experience as #works might be too close
          aria-label="Scroll to next section"
          className="custom-cursor-hover-target p-2 rounded-full hover:bg-accent_primary/10 focus:outline-none focus:ring-2 focus:ring-accent_primary/50 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-300"
        >
          <div className="animate-bounce w-8 h-8 md:w-10 md:h-10 text-text_primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </a>
      </motion.div>
      */}
    </section>
  );
};

export default HeroSection;
