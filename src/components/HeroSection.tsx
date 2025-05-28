'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image' // Import Image component

const HeroSection = () => {
  const headlineText = "Yackob Tamire — Business Analyst. Scrum Master. Systems Thinker."
  const subheadlineText = "Bridging operations, analysis, and execution — from lease administration to enterprise EHR integration."

  // Animation variants for the headline (word by word)
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6, // Slightly delay sentence animation for image to appear first
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

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, delay: 0.2 } // Image appears first
  }

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
          width={160} // Changed from 200
          height={160} // Changed from 200
          className="rounded-full shadow-xl shadow-[0_0_30px_rgba(0,229,255,0.3)]" // Standard shadow + custom accent shadow
          priority // Mark as priority as it's LCP for this section
        />
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-6"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {headlineText.split(" ").map((word, index) => {
          const isYackob = word === "Yackob";
          return (
            <motion.span 
              key={word + "-" + index} 
              variants={letter} 
              className={`inline-block ${isYackob ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl' : ''}`}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
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
