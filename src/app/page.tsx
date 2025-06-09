// src/app/page.tsx
'use client'; // Required for Framer Motion components

import HeroSection from '@/components/HeroSection';
import WorksSection from '@/components/WorksSection';
import ExperienceSection from '@/components/ExperienceSection';
// import ProjectsSection from '@/components/ProjectsSection'; // REMOVED / Commented out
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="scroll-smooth relative pt-20"> {/* Ensure pt-20 is present */}
      <HeroSection />
      <ExperienceSection />
      <WorksSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
