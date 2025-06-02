// src/components/WorksSection.tsx
'use client'; // Needed for useState

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import ProjectCard from './ProjectCard'; // ProjectCardProps will be implicitly imported if defined in ProjectCard.tsx
import ProjectModal from './ProjectModal'; // ProjectDetails will be implicitly imported
import { worksData, WorkProjectData } from '@/data/worksData'; // Adjust path as needed

const WorksSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProjectData | null>(null);

  const handleOpenModal = (project: WorkProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: Delay setting project to null for smoother exit animation if modal has one
    // Consider matching this duration to any CSS animation duration on the modal
    setTimeout(() => setSelectedProject(null), 300); 
  };

  return (
    <motion.section 
      id="works" 
      className="bg-[#1F2525] py-16 md:py-24" // Section background and padding
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of section is in view
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8"> {/* Adjusted padding */}
        <h2 
          className="text-3xl md:text-4xl font-bold text-text_primary mb-12 md:mb-16 text-center custom-cursor-hover-target" 
          style={{fontFamily: 'var(--font-poppins)'}}
        >
          My Works
        </h2>
        
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
          {worksData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              categoryTag={project.categoryTag}
              description={project.description} // Card-specific short description
              imagePlaceholderClass={project.imagePlaceholderClass}
              onViewDetails={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Render the Modal */}
      {/* 
        The ProjectModal component expects 'project' prop of type ProjectDetails | null.
        Our 'selectedProject' is of type WorkProjectData | null.
        Since WorkProjectData extends ProjectDetails, this is compatible.
      */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            isOpen={isModalOpen} // Technically AnimatePresence handles visibility, but good for clarity
            onClose={handleCloseModal}
            project={selectedProject} 
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default WorksSection;
