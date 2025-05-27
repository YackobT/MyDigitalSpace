// src/app/page.tsx
'use client' // Required for Framer Motion components

import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection' // Import the new Contact section

// import Image from 'next/image' // Remove if not used
// import Link from 'next/link' // Remove if not used
// import { motion } from 'framer-motion' // Remove if not used

export default function Home() {
  // All previous content (projects, testimonials, experiences arrays) is removed.
  
  return (
    // Keep scroll-smooth and relative for potential future uses (e.g., smooth scrolling to sections, absolutely positioned elements)
    // The p-8 class was removed from main, as HeroSection will control its own padding and height.
    // The main element in layout.tsx already has flex-grow to take available space.
    <main className="scroll-smooth relative">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection /> {/* Add the ContactSection here */}
      {/* Other sections will be added here later */}
    </main>
  )
}
