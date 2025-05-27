'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  const headlineText = "Yackob Tamire — Business Analyst. Scrum Master. Systems Thinker."
  const subheadlineText = "Bridging operations, analysis, and execution — from lease administration to enterprise EHR integration."

  // Animation variants for the headline (word by word)
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08, // Adjust speed of word appearance
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-8 relative z-10">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {headlineText.split(" ").map((word, index) => (
          <motion.span key={word + "-" + index} variants={letter} className="inline-block">
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: headlineText.split(" ").length * 0.08 + 0.5, duration: 0.5 }} // Delay until headline is done
      >
        {subheadlineText}
      </motion.p>
      <motion.div 
        className="flex flex-wrap justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: headlineText.split(" ").length * 0.08 + 1, duration: 0.5 }} // Delay further
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
