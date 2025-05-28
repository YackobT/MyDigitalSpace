'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const headlineText = "Business Analyst. Scrum Master. Systems Thinker.";

  const headlineVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.2, // Slight delay for effect
        ease: "easeOut" 
      } 
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 8, 0], // Bouncing effect
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: headlineVariants.animate.transition.delay + 0.5, // Start after headline is mostly visible
      },
    },
    initial: { opacity: 0 }, // Start invisible
    visible: { opacity: 1, transition: { delay: headlineVariants.animate.transition.delay + 0.5, duration: 0.5 } } // Fade in
  };

  return (
    <section 
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 md:px-8 bg-background text-text-primary relative z-10"
      // Using 85vh as an approximation for viewport height minus header.
      // For more precision, this could be calculated with JS or CSS custom properties if header height is dynamic.
    >
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight md:leading-normal"
        // text-text-primary is inherited from section parent
        variants={headlineVariants}
        initial="initial"
        animate="animate"
      >
        {headlineText}
      </motion.h1>

      <motion.div
        className="mt-12" // Spacing from headline
        variants={scrollIndicatorVariants}
        initial="initial" // Start invisible
        animate="visible" // Fade in
      >
        <motion.div 
          variants={scrollIndicatorVariants} // Use the same variants for the bounce, but only the animate part will be used here due to parent's animate
          animate="animate" // Trigger the bounce
        >
          <ChevronDown size={36} className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
