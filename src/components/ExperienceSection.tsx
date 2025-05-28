'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience' // Ensure this path is correct
import ExperienceCard from './ExperienceCard' // Ensure this path is correct
import CircuitLine from '@/components/decorative/CircuitLine' // Import CircuitLine

const titleVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ExperienceSection = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 md:px-8 relative z-10 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="max-w-7xl mx-auto relative"> {/* Added relative for positioning context */}
        {/* Decorative Element */}
        <motion.div
          className="absolute -top-16 -right-16 z-0" // Positioned near the title area
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
          viewport={{ once: true }}
        >
          <CircuitLine className="w-48 h-48 md:w-64 md:h-64 text-accent-teal opacity-10" />
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl font-mono font-bold mb-10 md:mb-12 text-text-primary text-left relative z-10" // Added relative z-10
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          &gt; EXPERIENCE
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
