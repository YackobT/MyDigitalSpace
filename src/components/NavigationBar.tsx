'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '#skills' }, // Will point to Experience section for now
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const NavigationBar = () => {
  return (
    <motion.nav 
      className="fixed top-0 right-0 z-50 p-4 md:p-6 bg-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
    >
      <ul className="flex space-x-4 md:space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} passHref>
              <motion.span // Changed from <a> to <span> for styling simplicity with Link passHref
                className="text-sm md:text-base text-text-primary hover:text-accent transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavigationBar;
