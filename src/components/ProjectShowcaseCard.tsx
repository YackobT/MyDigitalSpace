'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects' 
import { ArrowUpRight } from 'lucide-react' // For "View Details" icon

interface ProjectShowcaseCardProps {
  project: Project;
  index: number; 
  onViewDetails: (project: Project) => void;
}

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: 'easeOut', 
      delay: index * 0.1
    } 
  }),
  hover: { 
    scale: 1.03,
    borderColor: 'var(--color-accent-primary)', // Use CSS variable for dynamic color
    boxShadow: "0px 8px 20px rgba(168, 85, 247, 0.25)", // accent-primary shadow
    transition: { duration: 0.25 }
  }
};

// Helper to get conditional background color for placeholder
const getPlaceholderBgColor = (themeAccent?: Project['themeAccent']) => {
  switch (themeAccent) {
    case 'green':
      return 'bg-accent-green';
    case 'deepPurple':
      return 'bg-accent-deep-purple';
    case 'primaryAccent':
      return 'bg-accent-primary/30'; // Slightly transparent primary accent
    default:
      return 'bg-[#333F40]'; // Default dark gray
  }
};

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({ project, index, onViewDetails }) => {
  const placeholderBg = getPlaceholderBgColor(project.themeAccent);
  
  // Define border color based on hover state (for use with CSS variable)
  const accentPrimaryColor = '#A855F7'; // Fallback if CSS var not picked up by motion style

  return (
    <motion.div
      className="bg-[#2A3435] border border-text-secondary/20 rounded-lg shadow-lg flex flex-col cursor-pointer h-full" 
      // Slightly lighter card bg, subtle border, standard shadow
      // h-full to ensure cards in a grid row have same height if content differs slightly
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      custom={index} 
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      style={{ '--color-accent-primary': accentPrimaryColor } as React.CSSProperties} // For motion style
      onClick={() => onViewDetails(project)} // Make whole card clickable
    >
      {/* Visual Thumbnail/Preview Placeholder */}
      <div className={`w-full h-48 md:h-56 flex items-center justify-center rounded-t-lg ${placeholderBg}`}>
        <p className="text-text-secondary text-sm">Project Image</p>
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
        {project.category && (
          <p className="text-xs text-accent-secondary bg-accent-primary/20 px-2.5 py-1 rounded-full self-start mb-3 font-medium">
            {project.category}
          </p>
        )}
        {/* For minimalist dark theme, outcome and skills are in modal. Could add a short teaser here. */}
        <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-grow"> 
          {/* Short teaser for outcome, if available */}
          {project.outcome.substring(0, 70) + (project.outcome.length > 70 ? "..." : "")}
        </p>
        
        {/* "View Details" - now part of whole card click, but can keep as visual cue */}
        <div className="mt-auto text-right"> 
          <span // Changed from button to span, as whole card is clickable
            className="text-accent-primary font-medium text-sm inline-flex items-center"
            // Removed group-hover:text-accent-secondary as card hover is primary, and text is already accent.
          >
            View Details
            <ArrowUpRight size={18} className="ml-1 opacity-70" /> {/* Removed group-hover from icon too */}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcaseCard;
