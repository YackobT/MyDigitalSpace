'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials' // Ensure this path is correct
import TestimonialItem from './TestimonialItem' // Ensure this path is correct

const titleVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } } // Added slight delay
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-mono mb-10 md:mb-12 text-text-primary text-left"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          &gt; TESTIMONIALS
        </motion.h2>
        
        {/* Responsive grid for testimonials. Adjust gap and columns as needed. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {testimonials.map((testimonial, index) => (
            // Assuming TestimonialItem is designed to be a direct grid child.
            // If TestimonialItem needs a specific width, that should be handled within TestimonialItem itself or by grid column span settings.
            <TestimonialItem key={testimonial.name || index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
