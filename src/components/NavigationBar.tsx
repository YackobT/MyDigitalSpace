// src/components/NavigationBar.tsx
'use client';

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';

const NavigationBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    // { href: '/blog', label: 'Blog' }, // Example for a page link
    // { href: '/resume.pdf', label: 'Resume', target: '_blank' }, // Example for an external link
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent text-text_primary py-4 px-6 md:px-8 flex items-center justify-between flex-wrap w-full fixed top-0 left-0 z-50">
      {/* Logo/Name */}
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold custom-cursor-hover-target">
          Yackob
        </a>
      </Link>

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu} // Toggle function
          aria-label="Toggle menu"
          className="text-text_primary focus:outline-none custom-cursor-hover-target p-2 -mr-2" // Added padding for easier tap, negative margin to align edge
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
            {/* Change icon based on state: Hamburger or Close */}
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path> // Close icon (X)
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      {/* text-text_primary is inherited from nav, explicitly setting fontFamily can be removed if font-sans is reliable */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} legacyBehavior passHref>
            <a 
              className="hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target"
              // style={{ fontFamily: 'var(--font-poppins)' }} // Removed, should be inherited
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Links - Dropdown */}
      {isMobileMenuOpen && (
        <div className="w-full md:hidden mt-4 py-2 bg-background/95 backdrop-blur-md rounded-lg shadow-xl"> {/* Enhanced styling for dropdown */}
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} legacyBehavior passHref>
              <a 
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className="block px-5 py-3 text-base hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target" 
                // style={{ fontFamily: 'var(--font-poppins)' }} // Removed, should be inherited
                target={link.target}
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
