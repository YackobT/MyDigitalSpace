// src/components/NavigationBar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Define TypeScript interface for navigation link objects
interface NavLink {
  href: string;
  label: string;
  target?: string; // Optional: for opening in a new tab e.g. '_blank'
}

const NavigationBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [ // Apply the interface
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    // Example: { href: '/resume.pdf', label: 'Resume', target: '_blank' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent text-text_primary py-4 px-6 md:px-8 flex items-center justify-between flex-wrap w-full fixed top-0 left-0 z-50">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold custom-cursor-hover-target">
          Yackob
        </a>
      </Link>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          className="text-text_primary focus:outline-none custom-cursor-hover-target p-2 -mr-2"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} legacyBehavior passHref>
            <a 
              className="hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target"
              target={link.target} // This will now be type-safe
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className="w-full md:hidden mt-4 py-2 bg-background/95 backdrop-blur-md rounded-lg shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} legacyBehavior passHref>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-5 py-3 text-base hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target"
                target={link.target} // This will now be type-safe
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
