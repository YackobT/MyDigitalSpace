'use client'

import { motion } from 'framer-motion'
import { Testimonial } from '@/data/testimonials' // Ensure this path is correct

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const cardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => {
  // Fallback background if no specific image URL is provided
  const backgroundStyle = testimonial.backgroundImageUrl 
    ? { backgroundImage: `url(${testimonial.backgroundImageUrl})` }
    : { backgroundColor: 'rgba(10, 15, 31, 0.5)' }; // bg-background/50 equivalent

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-xl group" // Added group for potential group-hover effects
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      {/* Outer Container for Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm" // blur-sm is 4px, use blur-md for 8px if preferred
        style={backgroundStyle}
      ></div>

      {/* Quote Overlay */}
      <div className="relative bg-white/10 backdrop-blur-xs p-6 md:p-8 rounded-lg m-2 md:m-4"> {/* backdrop-blur-xs for subtle effect on overlay itself */}
        <div className="relative"> {/* For positioning quote marks */}
          <span className="absolute -top-4 -left-4 text-7xl md:text-8xl text-accent opacity-30 select-none">&ldquo;</span>
          <p className="text-xl md:text-2xl italic text-text-primary leading-relaxed relative z-10">
            {testimonial.quote}
          </p>
          <span className="absolute -bottom-8 -right-4 text-7xl md:text-8xl text-accent opacity-30 select-none">&rdquo;</span>
        </div>
        <p className="mt-6 text-right text-text-secondary font-medium">
          — {testimonial.name}
          {testimonial.company && `, ${testimonial.company}`}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;
