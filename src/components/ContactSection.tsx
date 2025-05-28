'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react' // Import icons
import AbstractDots from '@/components/decorative/AbstractDots' // Import AbstractDots

const titleVariants = {
  initial: { opacity: 0, x: -50 }, // Changed y: -30 to x: -50
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } } // Changed y: 0 to x: 0
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } }
};

const ContactSection = () => {
  const email = "Yackobt@yahoo.com";
  const linkedInUser = "yackob-tamire"; // Just the username part for the display
  const linkedInUrl = "https://linkedin.com/in/yackob-tamire";

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-8 text-center relative z-10 overflow-hidden"> {/* Added overflow-hidden for safety */}
      {/* Decorative Element */}
      <motion.div
        className="absolute top-10 -left-10 z-0"
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AbstractDots className="w-32 h-32 text-accent-teal opacity-20" />
      </motion.div>

      <motion.h2 
        className="text-3xl md:text-4xl font-mono font-bold mb-8 text-text-primary relative z-10" // Added relative z-10
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        &gt; CONTACT
      </motion.h2>
      
      <motion.p 
        className="text-lg text-text-secondary mb-10 max-w-xl mx-auto" // text-text-secondary is silver-gray
        variants={contentVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        Let&apos;s connect. I&apos;m open to new opportunities and collaborations.
      </motion.p>
      
      <motion.div 
        className="space-y-6 md:space-y-0 md:flex md:justify-center md:space-x-12"
        variants={contentVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <a 
          href={`mailto:${email}`} 
          className="group inline-flex items-center text-xl text-text-primary hover:text-accent-purple transition-colors duration-300 relative z-10" // Changed hover:text-accent to hover:text-accent-purple, added z-10
        >
          <Mail className="w-7 h-7 mr-3 text-text-secondary group-hover:text-accent-purple transition-colors duration-300" /> {/* Changed group-hover:text-accent */}
          <span>{email}</span>
        </a>
        
        <a 
          href={linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group inline-flex items-center text-xl text-text-primary hover:text-accent-purple transition-colors duration-300 relative z-10" // Changed hover:text-accent to hover:text-accent-purple, added z-10
        >
          <Linkedin className="w-7 h-7 mr-3 text-text-secondary group-hover:text-accent-purple transition-colors duration-300" /> {/* Changed group-hover:text-accent */}
          <span>{linkedInUser}</span>
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
