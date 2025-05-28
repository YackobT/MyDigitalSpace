'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience' // Ensure this path is correct
// Removed ExperienceCard import
// Removed CircuitLine import as decorative elements will be re-evaluated for minimalist theme

const titleVariants = {
  initial: { opacity: 0, x: -30 }, 
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut',
      delay: index * 0.1 
    }
  })
};

const ExperienceSection = () => {
  return (
    <section 
      id="skills" // For navigation
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-background text-text-primary" // Updated padding
    >
      <div className="max-w-3xl mx-auto"> 
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-primary mb-12 md:mb-16 text-left" // Updated styling
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          #Skills
        </motion.h2>
        
        <div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company + exp.role} 
              className="mb-8 md:mb-10 pb-8 md:pb-10 border-b border-text-secondary/20 last:mb-0 last:pb-0 last:border-b-0" // Updated border color
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              custom={index} 
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{exp.role}</h3> {/* Changed to font-bold */}
              <p className="text-md font-medium text-text-secondary my-1"> {/* Added font-medium */}
                {exp.company} | {exp.dateRange}
              </p>
              <ul className="mt-3 list-disc list-inside text-text-secondary space-y-1.5"> {/* Ensured font-normal is inherited */}
                {exp.impact.map((point, idx) => (
                  <li key={idx} className="text-sm md:text-base leading-relaxed">{point}</li>
                ))}
              </ul>
              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-accent-primary/20 text-accent-secondary px-3 py-1 rounded-full" // Harmonized tag styling
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
