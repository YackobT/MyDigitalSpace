'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects' // Ensure this path is correct
import Link from 'next/link'

interface ProjectShowcaseCardProps {
  project: Project;
  index: number; // Add index to props
  onViewDetails: (project: Project) => void; // Add handler to props
}

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  // animate function to accept index for delay
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeInOut', 
      delay: index * 0.15 // Stagger delay, slightly different from ExperienceCard
    } 
  }),
  hover: { 
    scale: 1.02,
    boxShadow: "0px 12px 24px rgba(0, 229, 255, 0.12)", // Accent color shadow
    borderColor: "rgba(0, 229, 255, 0.6)", // Accent color border
    transition: { duration: 0.35 }
  }
};

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-background/80 backdrop-blur-md border border-gray-700 rounded-lg p-6 flex flex-col h-full" // Slightly different bg, added h-full
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      custom={index} // Pass index to variants
      viewport={{ once: true, amount: 0.25 }}
      whileHover="hover"
    >
      <h3 className="text-2xl font-bold text-accent mb-2">{project.title}</h3> {/* Changed font-semibold to font-bold */}
      <p className="text-sm text-text-secondary mb-3">
        <span className="font-semibold">Context:</span> {project.context}
      </p>
      <p className="text-text-primary mb-4 flex-grow">{project.outcome}</p> {/* text-text-primary for off-white */}
      
      <div className="mb-4"> {/* Skills container */}
        <h4 className="text-sm font-semibold text-text-secondary mb-2">Skills Utilized:</h4>
        <div className="flex flex-wrap gap-2">
          {project.skillsUsed.map((skill, index) => (
            <span key={index} className="bg-gray-600 text-text-primary text-xs font-medium px-3 py-1.5 rounded-md"> {/* Slightly different skill tag style */}
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* "View Details" button to open modal */}
      <div className="mt-auto pt-4 border-t border-gray-700 text-right"> 
        <motion.button
          onClick={() => onViewDetails(project)}
          className="text-accent hover:underline font-semibold text-sm inline-flex items-center"
          whileHover={{ x: 2, transition: { duration: 0.2 } }} // Subtle move effect
          whileTap={{ scale: 0.95 }}
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectShowcaseCard;
