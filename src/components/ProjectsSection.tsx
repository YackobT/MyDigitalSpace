'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects' // Ensure this path is correct
import ProjectShowcaseCard from './ProjectShowcaseCard' // Ensure this path is correct

const titleVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } } // Added slight delay
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-mono font-bold mb-10 md:mb-12 text-text-primary text-left" // Added font-bold
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          &gt; PROJECTS
        </motion.h2>
        
        {/* Using a grid that defaults to 1 column, and 2 columns on md screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
