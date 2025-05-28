'use client'

import { motion } from 'framer-motion'
import { Experience } from '@/data/experience' // Ensure this path is correct

interface ExperienceCardProps {
  experience: Experience;
  index: number; // Add index to props
}

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  // animate function to accept index for delay
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      delay: index * 0.1 // Stagger delay
    } 
  }),
  hover: { 
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0, 229, 255, 0.1)", // Accent color shadow
    borderColor: "rgba(0, 229, 255, 0.5)", // Accent color border
    transition: { duration: 0.3 }
  }
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="bg-background/70 backdrop-blur-sm border border-gray-700 rounded-lg p-6 h-full flex flex-col" // Added h-full and flex flex-col
      variants={cardVariants}
      initial="initial"
      whileInView="animate" // Animate when card comes into view
      custom={index} // Pass index to variants
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is visible
      whileHover="hover"
    >
      <h3 className="text-xl font-bold text-accent mb-1">{experience.company}</h3>
      <h4 className="text-lg font-semibold text-text-primary mb-1">{experience.role}</h4>
      <p className="text-sm text-text-secondary mb-3">{experience.dateRange}</p>
      
      <ul className="list-disc list-inside space-y-1 text-text-secondary mb-4 flex-grow"> {/* Added flex-grow */}
        {experience.impact.map((point, index) => (
          <li key={index} className="text-sm">{point}</li>
        ))}
      </ul>
      
      <div className="mt-auto flex flex-wrap gap-2"> {/* Added mt-auto to push tags to bottom */}
        {experience.tags.map((tag, index) => (
          <span key={index} className="bg-gray-700 text-text-secondary text-xs font-medium px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
