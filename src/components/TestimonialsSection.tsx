'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials' // Ensure this path is correct
// TestimonialItem.tsx import will be removed as its logic is merged here

const titleVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

const testimonialVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut',
      delay: index * 0.15 
    }
  })
};

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-background text-text-primary" // Updated padding
    >
      <div className="max-w-3xl mx-auto"> 
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-primary mb-12 md:mb-16 text-center" // Updated styling
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          #Testimonials
        </motion.h2>
        
        <div>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name + index} 
              className="mb-10 md:mb-12 text-center max-w-2xl mx-auto pb-10 md:pb-12 border-b border-text-secondary/20 last:mb-0 last:pb-0 last:border-b-0" // Updated border
              variants={testimonialVariants}
              initial="initial"
              whileInView="animate"
              custom={index} 
              viewport={{ once: true, amount: 0.1 }}
            >
              <p className="text-xl md:text-2xl font-medium italic text-text-primary leading-relaxed 
                          before:content-['\201C'] before:mr-1 before:text-accent-secondary before:opacity-50
                          after:content-['\201D'] after:ml-1 after:text-accent-secondary after:opacity-50">
                {testimonial.quote}
              </p>
              <p className="mt-4 text-md font-medium text-text-secondary"> {/* Added font-medium */}
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
