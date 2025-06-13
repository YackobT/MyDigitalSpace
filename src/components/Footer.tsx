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
