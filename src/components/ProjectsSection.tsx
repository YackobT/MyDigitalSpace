'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/data/projects' // Ensure Project is imported
import ProjectShowcaseCard from './ProjectShowcaseCard'
import ProjectModal from './ProjectModal' 
// Removed ChevronLeft, ChevronRight, useRef, useEffect for scroll logic
// Removed AbstractDots

const titleVariants = {
  initial: { opacity: 0, x: -30 }, 
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

// Stagger animation for the grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation of each card
      delayChildren: 0.2,   // Delay before children start animating
    },
  },
};


const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section 
        id="projects" 
        className="py-16 md:py-24 bg-background text-text-primary" // Adjusted padding
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-left text-accent-primary" // Updated title styling
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          
          {/* Responsive Vertical Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible" // Trigger children animations when grid is in view
            viewport={{ once: true, amount: 0.05 }} // Lower amount to trigger sooner for grid
          >
            {projects.map((project, index) => (
              // ProjectShowcaseCard now uses its own item-level animation via its variants
              <ProjectShowcaseCard 
                key={project.title + index} 
                project={project} 
                index={index} // index is used by card's own animation variant
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
