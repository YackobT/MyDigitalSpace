'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/data/projects' // Ensure Project is imported
import ProjectShowcaseCard from './ProjectShowcaseCard'
import ProjectModal from './ProjectModal' // Import the modal component
import AbstractDots from '@/components/decorative/AbstractDots' // Import AbstractDots

const titleVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
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
      <section id="projects" className="py-16 px-4 sm:px-6 md:px-8 relative z-10 overflow-hidden"> {/* Added overflow-hidden */}
        <div className="max-w-7xl mx-auto relative"> {/* Added relative for positioning context */}
          {/* Decorative Element */}
          <motion.div
            className="absolute -bottom-12 -right-12 z-0" // Positioned bottom-right
            initial={{ opacity: 0, y: 50, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "backOut" }}
            viewport={{ once: true }}
          >
            <AbstractDots className="w-36 h-36 text-accent-purple opacity-15" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-mono font-bold mb-10 md:mb-12 text-text-primary text-left relative z-10" // Added relative z-10
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            &gt; PROJECTS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10"> {/* Added relative z-10 */}
            {projects.map((project, index) => (
              <ProjectShowcaseCard 
                key={index} 
                project={project} 
                index={index}
                onViewDetails={() => handleViewDetails(project)} // Pass handler
              />
            ))}
          </div>
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
