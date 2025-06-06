// src/app/page.tsx
'use client'; // Required for Framer Motion components

import HeroSection from '@/components/HeroSection';
import WorksSection from '@/components/WorksSection'; 
import ExperienceSection from '@/components/ExperienceSection';
// import ProjectsSection from '@/components/ProjectsSection'; // This should remain commented out or removed
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection'; 

export default function Home() {
  return (
    <main className="scroll-smooth relative pt-20"> {/* Added pt-20 here */}
      <HeroSection />
      <ExperienceSection />
      <WorksSection /> 
      <TestimonialsSection />
      <ContactSection /> 
    </main>
  );
}
