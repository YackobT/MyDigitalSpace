// src/components/ProjectModal.tsx
'use client'; // Needed for useEffect for potential body scroll lock, and event listeners

import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion

// Define types for the project details to be displayed in the modal
export interface ProjectDetails {
  title: string;
  contextCompany: string;
  roadmapPhases: string[];
  outcomeText: string;
  skillsUtilized: string[];
  // Future additions might include: image_url, live_link, source_code_link, detailed_description_html
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null; // Project can be null if no project is selected
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  // Effect to handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) {
    return null; // Don't render anything if modal is not open or no project data
  }

  // Handle overlay click to close modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) { // Ensure click is on overlay, not modal content
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      // Using custom-cursor-hover-target on the overlay might be too much if the cursor changes significantly.
      // Consider if only the modal content and close button should be targets.
      // For now, following prompt.
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 custom-cursor-hover-target"
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="
          bg-[#2A3030] text-text_primary rounded-xl p-6 md:p-8 shadow-2xl  /* Enhanced shadow */
          w-full max-w-lg md:max-w-xl lg:max-w-2xl /* Adjusted max-widths based on common screen sizes */
          max-h-[90vh] /* Increased max-height */
          overflow-y-auto
          relative flex flex-col
          custom-cursor-hover-target
        "
        style={{ fontFamily: 'var(--font-poppins)' }} // Apply Poppins to the whole modal
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it via overlay
      >
        {/* Close Button needs to be part of the motion.div to be included in the animation */}
        <button
          onClick={onClose}
          aria-label="Close project details modal"
          className="
            absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white
            text-4xl leading-none
            transition-colors duration-200 ease-in-out
            custom-cursor-hover-target z-10
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent_primary focus:ring-offset-[#2A3030]" // Added focus classes
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2
          id="project-modal-title"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-accent_primary mb-4 md:mb-6 pr-10 md:pr-12" // Responsive title. Mobile: 18px or 20px -> text-xl is 20px.
        >
          {project.title}
        </h2>

        <div className="text-xs sm:text-sm md:text-base text-[#D1D5DB] space-y-4 md:space-y-5"> {/* Responsive body text. Mobile: text-xs (12px) */}
          <div>
            <p className="italic text-gray-400 mb-1">Context / Company:</p>
            {/* Company name can be slightly larger or same as body text */}
            <p className="sm:text-sm md:text-base">{project.contextCompany}</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-white mb-2">Roadmap</h3> {/* Responsive heading. Mobile: text-sm (14px) */}
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-300"> {/* Styled list */}
              {project.roadmapPhases.map((phase, index) => (
                <li key={index}>{phase}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-white mt-3 md:mt-4 mb-2">Outcome</h3> {/* Responsive heading */}
            <p className="leading-relaxed text-gray-300">{project.outcomeText}</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-white mt-3 md:mt-4 mb-2">Skills Utilized</h3> {/* Responsive heading */}
            <div className="flex flex-wrap gap-2">
              {project.skillsUtilized.map((skill, index) => (
                <span
                  key={index}
                  className="bg-accent_primary/80 hover:bg-accent_primary text-white text-[10px] sm:text-xs font-medium py-1 sm:py-1.5 px-2 sm:px-3 rounded-full custom-cursor-hover-target transition-colors duration-200" // Responsive tags. Mobile: 10px
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
