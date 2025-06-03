'use client'; // Add 'use client' directive

// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
// No next/link needed as these are external links

// Define an interface for social link props for clarity
interface SocialLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-text_secondary hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target focus:outline-none focus:ring-2 focus:ring-accent_primary/50 focus:ring-offset-2 focus:ring-offset-background"
    style={{ fontFamily: 'var(--font-poppins)' }}
  >
    {label}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social links data - replace with actual URLs if different
  const socialLinks: SocialLinkProps[] = [
    { href: "https://github.com/YackobT", label: "GitHub", ariaLabel: "View Yackob's GitHub profile" },
    { href: "https://linkedin.com/in/yackob-tamire", label: "LinkedIn", ariaLabel: "View Yackob's LinkedIn profile" },
    // Add more links as needed, e.g., Twitter, Dribbble, etc.
    // { href: "mailto:your.email@example.com", label: "Email", ariaLabel: "Send an email to Yackob" },
  ];

  return (
    // The parent <footer className="w-full"> is in layout.tsx
    // This component provides the content for that semantic footer.
    // The div here acts as the direct child of the semantic footer in layout.tsx.
    <motion.div
      className="bg-background text-text_secondary py-8 sm:py-10 px-6 md:px-8 text-center border-t border-text_secondary/10" // Softer border
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }} // Slightly different delay
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Social Media Links */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center items-center space-x-6 mb-6"> {/* Increased bottom margin */}
            {socialLinks.map(link => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        )}

        {/* Copyright Notice */}
        <p className="text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}> {/* Responsive text size */}
          &copy; {currentYear} Yackob Tamire. All rights reserved.
        </p>

        {/* Optional: Small credit or built with message - uncomment if desired */}
        {/*
        <p className="text-xs text-text_secondary/70 mt-3">
          Designed with <span className="text-accent_primary/80">&hearts;</span> by Jules &amp; built with Next.js &amp; Tailwind CSS.
        </p>
        */}
      </div>
    </motion.div>
  );
};

export default Footer;
