// src/components/ProjectCard.tsx
import React from 'react';
// Link component is not used in this version, can be removed if only button for modal
// import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  categoryTag: string;
  description: string;
  imagePlaceholderClass?: string; // Made optional as it's being replaced by actual image
  imageUrl: string; // New prop for actual image
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  categoryTag,
  description,
  // imagePlaceholderClass, // No longer directly used for main image display
  imageUrl,
  onViewDetails,
}) => {
  return (
    <article
      className={`
        bg-[#2A3030] rounded-xl p-6 flex flex-col h-[400px]
        shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]
        hover:-translate-y-1.5 transition-all duration-300 ease-in-out
        custom-cursor-hover-target
      `}
      // Applying Poppins font through Tailwind's font-sans which should be configured globally
      // style={{fontFamily: 'var(--font-poppins)'}} // Removed as Poppins should be default via tailwind.config.js
    >
      {/* Actual Image */}
      <img
        src={imageUrl}
        alt={`Project image for ${title}`}
        className="w-full h-[120px] object-cover rounded-lg mb-4 custom-cursor-hover-target"
        loading="lazy" // Added lazy loading for images
      />

      {/* Title */}
      <h3
         className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug custom-cursor-hover-target" // Removed mt-4 as image now has mb-4
         // style={{fontFamily: 'var(--font-poppins)'}} // Removed
       >
        {title}
      </h3>

      {/* Tags */}
      <div className="mb-2">
        <span
         className="bg-accent_primary text-white text-[10px] sm:text-xs font-normal py-1 px-3 rounded-full inline-block custom-cursor-hover-target" // Changed from #8B5CF6 to accent_primary
         // style={{fontFamily: 'var(--font-poppins)'}} // Removed
        >
          {categoryTag}
        </span>
      </div>

      {/* Description */}
      <p
         className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-4 flex-grow overflow-hidden css-line-clamp-3" // Using a utility class for line-clamp
         // style={{fontFamily: 'var(--font-poppins)'}} // Removed
       >
        {description}
      </p>

      {/* View Details Button */}
      <div className="mt-auto">
        <button
          onClick={onViewDetails}
          aria-label={`View details for ${title}`}
          className="group inline-flex items-center text-accent_primary text-xs font-bold uppercase custom-cursor-hover-target focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent_primary focus:ring-offset-[#2A3030]" // Changed from #8B5CF6 to accent_primary
          // style={{fontFamily: 'var(--font-poppins)'}} // Removed
        >
          VIEW DETAILS
          <span className="ml-1 transition-transform duration-300 ease-in-out group-focus:underline group-hover:underline"> {/* Added group-focus:underline */}
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
