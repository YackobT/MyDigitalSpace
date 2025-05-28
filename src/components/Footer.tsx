'use client' // Not strictly necessary if no client-side hooks, but good practice for components

import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion' // For subtle hover effects

const Footer = () => {
  const email = "Yackobt@yahoo.com";
  const linkedInUrl = "https://linkedin.com/in/yackob-tamire";

  // Removed iconHoverVariant as hover color will be handled by Tailwind classes

  return (
    <footer className="bg-background text-text-secondary py-10 md:py-12 px-4 md:px-8 border-t border-text-secondary/20"> {/* Changed border color */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          id="contacts" // ID for navigation
          className="flex items-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" passHref>
            <motion.div
              className="flex items-center text-sm font-medium text-text-secondary hover:text-accent-primary cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.05 }} // Subtle scale on hover
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} className="mr-1.5" /> 
              LinkedIn
            </motion.div>
          </Link>
          
          <Link href={`mailto:${email}`} passHref>
            <motion.div
              className="flex items-center text-sm font-medium text-text-secondary hover:text-accent-primary cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.05 }} // Subtle scale on hover
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="mr-1.5" />
              Email
            </motion.div>
          </Link>
        </motion.div>

        {/* Copyright Notice */}
        <motion.p 
          className="text-xs text-text-secondary opacity-75" // Added opacity-75
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
