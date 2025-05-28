'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Experience', href: '#skills' }, 
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contacts' }, // Updated ID for Contact section
];

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    // Removed border-b, bg-background is now dark
    <nav className="w-full bg-background text-text-primary px-4 md:px-8 py-5 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link href="/" passHref>
          <motion.span
            className="text-xl font-bold tracking-wide cursor-pointer text-text-primary" // Ensure text-primary for white
            // Removed explicit hover color change, keeps it primary or could use accent-secondary
            whileHover={{ opacity: 0.85 }} // Subtle opacity change on hover
          >
            Yackob Tamire
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <motion.span
                  className="text-text-secondary hover:text-accent-primary font-medium text-sm transition-colors duration-300 cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-text-primary p-2" // Ensure text-primary for white icon
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            // Removed border-t, bg-background is dark, shadow-lg for depth
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg z-40" 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <Link href={item.href} passHref>
                    <span 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block py-3 text-text-secondary hover:text-accent-primary hover:bg-background/80 w-full transition-colors duration-200 cursor-pointer"
                      // Using background/80 for a slightly lighter shade of dark background on hover
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;
