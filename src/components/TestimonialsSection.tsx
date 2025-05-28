'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials' // Ensure this path is correct
// TestimonialItem.tsx import will be removed as its logic is merged here

const titleVariants = {
  initial: { opacity: 0, y: 30 }, // Adjusted for minimalist theme
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

const testimonialVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({ // Pass index if staggering is needed
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut',
      delay: index * 0.15 // Stagger animation for each testimonial
    }
  })
};

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-16 px-4 sm:px-6 md:px-8 bg-background text-text-primary"
    >
      <div className="max-w-3xl mx-auto"> {/* Centered and max-width for overall section content */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center" // Centered title
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          Testimonials
        </motion.h2>
        
        <div>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name + index} // Using name + index for a more stable key
              className="mb-10 md:mb-12 text-center max-w-2xl mx-auto pb-10 md:pb-12 border-b border-accent-subtle last:mb-0 last:pb-0 last:border-b-0"
              variants={testimonialVariants}
              initial="initial"
              whileInView="animate"
              custom={index} // Pass index for stagger
              viewport={{ once: true, amount: 0.1 }}
            >
              <p className="text-xl md:text-2xl italic text-text-primary leading-relaxed before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </p>
              <p className="mt-4 text-md text-text-secondary">
                — {testimonial.name}
                {testimonial.company && `, ${testimonial.company}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
