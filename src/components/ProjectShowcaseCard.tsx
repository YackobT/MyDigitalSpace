'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects' // Ensure this path is correct

interface ProjectShowcaseCardProps {
  project: Project;
  index: number; 
  // Removed onViewDetails as modal functionality is deferred/removed for this theme
}

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, // Slightly faster for minimalist theme
      ease: 'easeOut', 
      delay: index * 0.1  // Slightly faster stagger
    } 
  }),
  hover: { 
    scale: 1.03, // Reduced scale for minimalism
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)", // Softer shadow for light theme
    transition: { duration: 0.25 }
  }
};

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-background border border-accent-subtle rounded-md shadow-md w-80 h-96 flex flex-col cursor-pointer" 
      // Fixed width and height, white background, subtle border, light shadow
      variants={cardVariants}
      initial="initial"
      whileInView="animate" // Animate when card comes into view, if section uses whileInView for cards
      custom={index} 
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      // Note: if these cards are directly in the horizontal scroll, whileInView might trigger all at once.
      // Animation might be better handled by the parent scroll container's visibility.
      // For now, keeping individual card animation.
    >
      {/* Visual Thumbnail/Preview Placeholder */}
      <div className="w-full h-3/5 bg-accent-subtle flex items-center justify-center rounded-t-md">
        <p className="text-text-secondary text-sm">Project Image Placeholder</p>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-text-primary mb-1">{project.title}</h3>
        {project.category && (
          <p className="text-xs text-text-secondary mb-2 bg-accent-subtle px-2 py-0.5 rounded-full self-start">
            {project.category}
          </p>
        )}
        {/* Outcome or other short description could go here if needed, but keeping it minimal for now */}
        {/* <p className="text-sm text-text-secondary flex-grow">{project.outcome.substring(0, 50)}...</p> */}
      </div>
    </motion.div>
  );
};

export default ProjectShowcaseCard;
