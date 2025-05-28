'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  // Note: "Experience" section ID is "skills"
  { name: 'Experience', href: '#skills' }, 
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
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
    <nav className="w-full bg-background text-text-primary px-4 md:px-8 py-5 border-b border-accent-subtle relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link href="/" passHref>
          <motion.span
            className="text-xl font-bold tracking-wide cursor-pointer"
            whileHover={{ color: '#555555' }} // text-text-secondary on hover
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
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 cursor-pointer text-sm"
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
            className="text-text-primary p-2"
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
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-accent-subtle z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <Link href={item.href} passHref>
                    <span // Using span because Link passHref handles the <a>
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                      className="block py-3 text-text-secondary hover:text-text-primary hover:bg-accent-subtle w-full transition-colors duration-200 cursor-pointer"
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
