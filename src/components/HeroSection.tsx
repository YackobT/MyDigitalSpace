'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image' // Import Image component

const HeroSection = () => {
  const staticName = "Yackob Tamire";
  const animatedSubtitleText = "Business Analyst. Scrum Master. Systems Thinker.";
  const descriptiveSubheadlineText = "Bridging operations, analysis, and execution — from lease administration to enterprise EHR integration.";

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, delay: 0.2 } // Image appears first
  };

  const nameAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: imageAnimation.transition.delay + 0.3 } // After image
  };

  // Animation variants for the animated subtitle (old headline)
  const animatedSubtitleVariants = {
    hidden: { opacity: 1 }, // Parent opacity for stagger
    visible: {
      opacity: 1,
      transition: {
        delay: nameAnimation.transition.delay + 0.3, // After name
        staggerChildren: 0.08,
      },
    },
  };

  const wordAnimation = { // Renamed from 'letter' for clarity
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const descriptiveSubheadlineAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    // Calculate delay based on animatedSubtitle finishing
    transition: { delay: animatedSubtitleVariants.visible.transition.delay + (animatedSubtitleText.split(" ").length * 0.08) + 0.2, duration: 0.5 }
  };
  
  const ctaAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    // Calculate delay based on descriptiveSubheadline finishing
    transition: { delay: descriptiveSubheadlineAnimation.transition.delay + 0.3, duration: 0.5 }
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-8 relative z-10">
      <motion.div
        variants={imageAnimation}
        initial="initial"
        animate="animate"
        className="mb-8"
      >
        <Image
          src="/images/profile.png"
          alt="Yackob Tamire - Profile Picture"
          width={160}
          height={160}
          className="rounded-full shadow-xl shadow-[0_0_30px_rgba(0,229,255,0.3)]"
          priority
        />
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-black text-text-primary text-center mb-4"
        variants={nameAnimation}
        initial="initial"
        animate="animate"
      >
        {staticName}
      </motion.h1>

      <motion.h2 // Changed from h1, for semantic correctness & styling
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-secondary text-center mb-8" // Adjusted styling
        variants={animatedSubtitleVariants}
        initial="hidden"
        animate="visible"
      >
        {animatedSubtitleText.split(" ").map((word, index) => (
          <motion.span 
            key={word + "-" + index} 
            variants={wordAnimation} 
            className="inline-block" // Removed conditional sizing for "Yackob"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>

      <motion.p 
        className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8" // Kept original styling, could be differentiated more if needed
        variants={descriptiveSubheadlineAnimation}
        initial="initial"
        animate="animate"
      >
        {descriptiveSubheadlineText}
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
        variants={ctaAnimation}
        initial="initial"
        animate="animate"
      >
        <Link href="#projects" passHref>
          <motion.button 
            className="w-full sm:w-auto bg-accent text-background font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </Link>
        <Link href="/resume.pdf" passHref legacyBehavior>
          <motion.a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-accent text-background font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 inline-block" // Added inline-block for <a>
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            download="Yackob_Tamire_Resume.pdf" // Added download attribute
          >
            Download Resume
          </motion.a>
        </Link>
        <Link href="#contact" passHref>
          <motion.button 
            className="w-full sm:w-auto bg-accent text-background font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

export default HeroSection
