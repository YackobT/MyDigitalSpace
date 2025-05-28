'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AbstractDots from '@/components/decorative/AbstractDots' // Assuming this exists

const HeroSection = () => {
  const mainHeadlineText = "YACKOB IS A WEB DESIGNER AND FRONT-END DEVELOPER";
  const subHeadlineText = "I’M INTERESTED IN FREELANCE OPPORTUNITIES — ESPECIALLY AMBITIOUS OR LARGE PROJECTS.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  
  const dotsVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center py-12 sm:py-24 relative overflow-hidden bg-background"
      // Using justify-center for vertical centering of the content block
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        {/* Decorative Element - Positioned to create an asymmetrical feel */}
        <motion.div
          className="absolute top-1/4 -right-1/4 md:-right-1/3 lg:-right-1/2 transform -translate-y-1/2 z-0 opacity-5 md:opacity-10"
          // Adjust positioning and opacity as needed
          variants={dotsVariants}
          initial="hidden"
          animate="visible"
        >
          <AbstractDots className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] text-accent-secondary" />
        </motion.div>

        {/* Content Wrapper */}
        <motion.div 
          className="max-w-3xl text-left relative z-10" // Text aligned left
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tighter"
            variants={itemVariants}
          >
            {mainHeadlineText}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-medium text-text-secondary mt-6"
            variants={itemVariants}
          >
            {subHeadlineText}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="#contacts" passHref>
              <motion.button // Changed from <a> to <button> for consistency if motion.a is not preferred for buttons
                className="bg-accent-primary text-text-primary font-medium px-8 py-3 rounded-lg mt-10 inline-block hover:bg-accent-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact me !!
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
