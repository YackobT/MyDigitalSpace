'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience' // Ensure this path is correct
// Removed ExperienceCard import
// Removed CircuitLine import as decorative elements will be re-evaluated for minimalist theme

const titleVariants = {
  initial: { opacity: 0, x: -30 }, // Simplified animation
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({ // Pass index if staggering is needed
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut',
      delay: index * 0.1 // Stagger animation for each experience item
    }
  })
};

const ExperienceSection = () => {
  return (
    <section 
      id="skills" // For navigation
      className="py-16 px-4 sm:px-6 md:px-8 bg-background text-text-primary"
    >
      <div className="max-w-3xl mx-auto"> {/* Centered and max-width for readability */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-left" // Minimalist title
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          Experience 
          {/* Using plain text title for minimalism, can revert to "> EXPERIENCE" if preferred */}
        </motion.h2>
        
        <div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company + exp.role} // More stable key
              className="mb-8 md:mb-10 pb-8 md:pb-10 border-b border-accent-subtle last:mb-0 last:pb-0 last:border-b-0" // Add border between items
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              custom={index} // Pass index for stagger
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{exp.role}</h3>
              <p className="text-md text-text-secondary my-1">
                {exp.company} | {exp.dateRange}
              </p>
              <ul className="mt-2 list-disc list-inside text-text-secondary space-y-1.5">
                {exp.impact.map((point, idx) => (
                  <li key={idx} className="text-sm md:text-base leading-relaxed">{point}</li>
                ))}
              </ul>
              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-accent-subtle text-text-secondary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
