'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience' // Ensure this path is correct
import ExperienceCard from './ExperienceCard' // Ensure this path is correct

const titleVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-mono mb-10 md:mb-12 text-text-primary text-left"
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
