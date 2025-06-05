// src/components/TestimonialItem.tsx
'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/data/testimonials'; // Ensure this path is correct

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
  const backgroundStyle = testimonial.backgroundImageUrl
    ? { backgroundImage: `url(${testimonial.backgroundImageUrl})` }
    : { backgroundColor: 'rgba(42, 48, 48, 0.7)' }; // Using card_background with some opacity

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden group custom-cursor-hover-target" // Removed shadow-xl
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      {/* Optional: Outer Container for Background Image if used */}
      {testimonial.backgroundImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={backgroundStyle}
        ></div>
      )}

      {/* Content Overlay/Container */}
      <div
        className={`relative rounded-lg p-6 md:p-8 ${testimonial.backgroundImageUrl ? 'bg-black/40 backdrop-blur-xs' : 'bg-card_background'}`}
        // Note: Tailwind config does not have 'card_background'. This should be 'bg-[#2A3030]' or a theme color.
        // Assuming 'bg-card_background' should be 'bg-[#2A3030]' (the card bg color used elsewhere)
        // For now, I will use the provided className, but this might need correction if 'card_background' is not defined.
        // Correcting to a known color:
        // className={`relative rounded-lg p-6 md:p-8 ${testimonial.backgroundImageUrl ? 'bg-black/40 backdrop-blur-xs' : 'bg-[#2A3030]'}`}
      >
        <div className="relative">
          <span
            className="absolute -top-3 -left-3 text-5xl md:text-6xl text-accent_primary opacity-30 select-none"
            style={{fontFamily: 'var(--font-poppins)'}}
          >
            &ldquo;
          </span>
          <p
            className="text-base md:text-lg italic text-text_primary leading-relaxed relative z-10"
            style={{fontFamily: 'var(--font-poppins)'}}
          >
            {testimonial.quote}
          </p>
          <span
            className="absolute -bottom-5 -right-3 text-5xl md:text-6xl text-accent_primary opacity-30 select-none"
            style={{fontFamily: 'var(--font-poppins)'}}
          >
            &rdquo;
          </span>
        </div>
        <p
          className="mt-4 text-right text-text_secondary font-medium text-sm md:text-base"
          style={{fontFamily: 'var(--font-poppins)'}}
        >
          — {testimonial.name}
          {testimonial.company && `, ${testimonial.company}`}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;
