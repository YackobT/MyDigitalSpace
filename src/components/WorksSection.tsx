// src/components/WorksSection.tsx
'use client';
import React, { useState } from 'react';
// ProjectCardProps might not be needed here if WorksSection doesn't directly use its detailed type structure for other logic
import ProjectCard /*, { ProjectCardProps } */ from './ProjectCard';
import ProjectModal, { ProjectDetails } from './ProjectModal';
import { worksData, WorkProjectData } from '@/data/worksData';
import { AnimatePresence, motion } from 'framer-motion';

const WorksSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProjectData | null>(null);

  const handleOpenModal = (project: WorkProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <motion.section
      id="works"
      className="bg-[#1F2525] py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-[1200px] px-8"> {/* Using px-8 as per this subtask's full code */}
        {/* H2 styling from Subtask 33 (right-aligned, font-mono) */}
        <motion.h2
          className="text-3xl md:text-4xl font-mono mb-10 md:mb-12 text-text_primary text-right custom-cursor-hover-target"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          &gt; Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 sm:gap-3">
        {/* Using grid classes as per this subtask's full code */}
          {worksData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              categoryTag={project.categoryTag}
              description={project.description}
              imageUrl={project.imageUrl} // *** THIS LINE IS CRUCIAL ***
              onViewDetails={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            project={selectedProject}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};
export default WorksSection;
