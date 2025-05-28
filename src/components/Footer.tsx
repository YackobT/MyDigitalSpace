'use client' // Not strictly necessary if no client-side hooks, but good practice for components

import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion' // For subtle hover effects

const Footer = () => {
  const email = "Yackobt@yahoo.com";
  const linkedInUrl = "https://linkedin.com/in/yackob-tamire";

  const iconHoverVariant = {
    hover: { scale: 1.15, color: '#000000' }, // text-text-primary
    initial: { color: '#555555' } // text-text-secondary
  };

  return (
    <footer className="bg-background text-text-secondary py-10 md:py-12 px-4 md:px-8 border-t border-accent-subtle">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Social Links / Contact Info - this div gets the ID for navigation */}
        <motion.div 
          id="contact" // ID for navigation link from Header/Hero
          className="flex items-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" passHref>
            <motion.span // Using span for motion on icon + text
              className="flex items-center text-sm cursor-pointer group"
              variants={iconHoverVariant}
              initial="initial"
              whileHover="hover"
            >
              <Linkedin size={20} className="mr-1.5 transition-colors duration-300 group-hover:text-text-primary" /> 
              LinkedIn
            </motion.span>
          </Link>
          
          <Link href={`mailto:${email}`} passHref>
            <motion.span // Using span for motion on icon + text
              className="flex items-center text-sm cursor-pointer group"
              variants={iconHoverVariant}
              initial="initial"
              whileHover="hover"
            >
              <Mail size={20} className="mr-1.5 transition-colors duration-300 group-hover:text-text-primary" />
              Email
            </motion.span>
          </Link>
        </motion.div>

        {/* Copyright Notice */}
        <motion.p 
          className="text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Yackob Tamire. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
