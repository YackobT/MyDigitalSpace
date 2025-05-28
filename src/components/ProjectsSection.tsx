'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects, Project } from '@/data/projects' // Ensure Project is imported
import ProjectShowcaseCard from './ProjectShowcaseCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// Removed ProjectModal and AnimatePresence as modal functionality is deferred for this theme
// Removed AbstractDots as decorative elements will be re-evaluated for the minimalist theme later if needed

const titleVariants = {
  initial: { opacity: 0, x: -30 }, // Simplified animation for minimalist theme
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const cardWidth = 320 + 24; // w-80 (320px) + space-x-6 (24px)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
      setIsScrollable(scrollWidth > clientWidth);
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(Math.abs(scrollWidth - clientWidth - scrollLeft) < 1); // Check if near the end
    }
  };

  useEffect(() => {
    checkScrollability(); // Initial check
    window.addEventListener('resize', checkScrollability);
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
    }
    return () => {
      window.removeEventListener('resize', checkScrollability);
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  // Dot Pagination state (basic implementation, can be enhanced)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft } = scrollContainerRef.current;
        const newActiveIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newActiveIndex);
      }
    };
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [cardWidth]);
  
  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };


  return (
    <section id="projects" className="py-16 bg-background text-text-primary"> {/* Full width section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-left" // Minimalist title
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          Projects
        </motion.h2>
        
        <div className="relative">
          {isScrollable && !isAtStart && (
            <motion.button
              onClick={() => scroll('left')}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 hover:bg-accent-subtle rounded-full shadow-md border border-accent-subtle"
              aria-label="Scroll left"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChevronLeft size={28} className="text-text-primary" />
            </motion.button>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 py-4 scroll-smooth scrollbar-hide" 
            // scrollbar-hide might need a plugin or custom CSS if not covered by base Tailwind
          >
            {projects.map((project, index) => (
              <div key={project.title + index} className="flex-shrink-0"> {/* Wrapper to ensure space-x works correctly */}
                <ProjectShowcaseCard 
                  project={project} 
                  index={index}
                />
              </div>
            ))}
          </div>

          {isScrollable && !isAtEnd && (
            <motion.button
              onClick={() => scroll('right')}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 hover:bg-accent-subtle rounded-full shadow-md border border-accent-subtle"
              aria-label="Scroll right"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChevronRight size={28} className="text-text-primary" />
            </motion.button>
          )}
        </div>
        
        {/* Dot Pagination */}
        {isScrollable && projects.length > 0 && (
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => scrollToProject(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200
                  ${activeIndex === index ? 'bg-text-primary scale-125' : 'bg-accent-subtle hover:bg-text-secondary/50'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
