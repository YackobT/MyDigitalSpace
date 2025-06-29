'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
  const basePath = process.env.NODE_ENV === 'production' ? '/MyDigitalSpace' : '';

  const socialLinks: SocialLinkProps[] = [
    { href: "https://github.com/YackobT", label: "GitHub", ariaLabel: "View Yackob's GitHub profile" },
    { href: "https://linkedin.com/in/yackob-tamire", label: "LinkedIn", ariaLabel: "View Yackob's LinkedIn profile" },
  ];

  const footerContent = (
    <div className="container mx-auto max-w-[1200px]">
      <div className="flex justify-center items-center space-x-6 mb-6">
        {socialLinks.map(link => (
          <SocialLink key={link.label} {...link} />
        ))}
        <a
          href={`${basePath}/ytresume.pdf`}
          download="ytresume.pdf"
          aria-label="Download Yackob Tamire's Resume"
          className="text-text_secondary hover:text-accent_primary transition-colors duration-300 custom-cursor-hover-target focus:outline-none focus:ring-2 focus:ring-accent_primary/50 focus:ring-offset-2 focus:ring-offset-background"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Resume
        </a>
      </div>

      <p className="text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
        &copy; {currentYear} Yackob Tamire. All rights reserved.
      </p>
    </div>
  );

  return (
    <motion.div
      className="bg-background text-text_secondary py-8 sm:py-10 px-6 md:px-8 text-center border-t border-text_secondary/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
    >
      {footerContent}
    </motion.div>
  );
};

export default Footer;
