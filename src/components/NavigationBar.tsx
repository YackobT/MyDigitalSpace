// src/components/NavigationBar.tsx
'use client'; // If client-side interactivity (like a mobile menu toggle) is needed later

import React from 'react';
import Link from 'next/link'; // For navigation

const NavigationBar: React.FC = () => {
  // Placeholder for navigation links - will be adapted for mobile/desktop later
  const navLinks = [
    { href: '#projects', label: 'Projects' }, // Example: link to a section
    { href: '#contact', label: 'Contact' },  // Example: link to a section
    // Add other links as needed, e.g., for a blog, resume page, etc.
  ];

  return (
    <nav className="bg-transparent text-text_primary py-4 px-6 md:px-8 flex items-center justify-between w-full fixed top-0 left-0 z-50">
      {/* Logo/Name */}
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)' }}>
          Yackob
        </a>
      </Link>

      {/* Desktop Navigation Links - will be hidden on mobile and replaced by hamburger */}
      {/* For now, always visible for simplicity in this step */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} legacyBehavior>
            <a className="text-text_primary hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target" style={{ fontFamily: 'var(--font-poppins)' }}>
              {link.label}
            </a>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon (Hamburger) - Placeholder, functionality to be added later */}
      <div className="md:hidden">
        {/* Basic Hamburger SVG Icon - replace with a more refined one if available */}
        <svg 
          className="w-6 h-6 text-text_primary custom-cursor-hover-target" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>
    </nav>
  );
};

export default NavigationBar;
