'use client'

import { motion } from 'framer-motion'
import { testimonials, Testimonial } from '@/data/testimonials' // Ensure this path is correct
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
        
        {/* Centering the testimonial item(s). If more are added, this layout might need to change to a grid or slider. */}
        <div className="flex flex-col items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full max-w-2xl lg:max-w-3xl"> {/* Max width for readability */}
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
