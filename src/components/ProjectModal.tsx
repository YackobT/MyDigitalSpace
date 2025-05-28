'use client'

import { motion } from 'framer-motion' // Removed AnimatePresence
import { X } from 'lucide-react'
import { Project } from '@/data/projects' // Ensure this path is correct

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, y: 30, transition: { duration: 0.2, ease: 'easeIn' } }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } }
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose} // Close on backdrop click
    >
      <motion.div
        className="bg-background border border-gray-700 p-6 md:p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-text-secondary hover:text-accent transition-colors z-10"
          aria-label="Close project details modal"
        >
          <X size={28} />
        </button>

        <h2 className="text-3xl font-bold text-accent mb-4 pr-10">{project.title}</h2> {/* Added pr-10 for space for close button */}
        
        <div className="text-md text-text-secondary mb-6">
          <span className="font-semibold text-text-primary">Context:</span> {project.context}
        </div>

        <div>
          <h4 className="text-xl font-semibold text-text-primary mb-2">Roadmap</h4>
          <ul className="list-disc list-inside space-y-1 text-text-secondary mb-6 pl-2">
            {project.roadmap.map((phase, index) => (
              <li key={index} className="text-sm leading-relaxed">{phase}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-text-primary mt-4 mb-2">Outcome</h4>
          <p className="text-text-secondary leading-relaxed">{project.outcome}</p>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold text-text-primary mb-3">Skills Utilized</h4>
          <div className="flex flex-wrap gap-2">
            {project.skillsUsed.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-600 text-text-primary text-xs font-medium px-3 py-1.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Optional: A more prominent close button at the bottom for mobile or preference */}
        {/* <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-accent text-background font-semibold px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors"
          >
            Close
          </button>
        </div> */}

      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
