// src/components/ProjectCard.tsx
import React from 'react';
// import Link from 'next/link'; // Not used for now, button for modal trigger

// Define a type for the props this card will accept
export interface ProjectCardProps {
  title: string;
  categoryTag: string; // For the tag text
  description: string;
  imagePlaceholderClass: string; // e.g., 'bg-purple-500' or 'bg-green-500'
  onViewDetails: () => void; // Function to call when "View Details" is clicked
}

const ProjectCard: React.FC<ProjectCardProps> = ({ // No longer Partial, all props are expected
  title,
  categoryTag,
  description,
  imagePlaceholderClass,
  onViewDetails,
}) => {
  // Default values are removed, props are now required.
  // Description truncation is handled by CSS line-clamp in styling.

  return (
    <article 
      className={`
        bg-[#2A3030] text-text_primary rounded-xl p-6 flex flex-col h-[400px] 
        shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]  /* Enhanced hover shadow */
        hover:-translate-y-1.5 /* Slightly more lift on hover */
        transition-all duration-300 ease-in-out
        custom-cursor-hover-target flex-shrink-0 /* Ensure it doesn't shrink in flex/grid if content varies wildly */
      `}
      style={{ fontFamily: 'var(--font-poppins)' }} // Apply Poppins to the whole card
    >
      {/* Image Placeholder */}
      <div 
        className={`h-[120px] rounded-lg flex items-center justify-center text-center ${imagePlaceholderClass} custom-cursor-hover-target mb-4`}
      >
        <p className="text-white uppercase text-xs font-medium opacity-60 tracking-wider"> {/* Adjusted styling */ }
          PROJECT IMAGE
        </p>
      </div>

      {/* Title */}
      <h3 
        className="text-lg sm:text-xl font-bold text-white mt-1 mb-2 leading-snug custom-cursor-hover-target truncate" /* Mobile: text-lg (18px), sm and up: text-xl (20px) */
      >
        {title}
      </h3>

      {/* Tags */}
      <div className="mb-3"> {/* Adjusted margin */}
        <span 
          className="bg-accent_primary text-white text-[10px] sm:text-xs font-medium py-1 px-3 rounded-full inline-block custom-cursor-hover-target tracking-wide" /* Mobile: 10px, sm and up: text-xs (12px) */
        >
          {categoryTag}
        </span>
      </div>

      {/* Description */}
      <p 
        className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-4 flex-grow" /* Mobile: text-xs (12px), sm and up: text-sm (14px) */
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3, // Limit to 3 lines
          overflow: 'hidden', // Keep overflow hidden for -webkit-line-clamp to work
          textOverflow: 'ellipsis',
          // maxHeight: 'calc(1.6em * 3)', // Fallback maxHeight can be removed if -webkit-line-clamp is broadly supported enough for target browsers
        }}
      >
        {description}
      </p>

      {/* View Details Button */}
      <div className="mt-auto pt-2"> {/* Pushes button to the bottom, added padding top */}
        <button 
          onClick={onViewDetails}
          className="group inline-flex items-center text-accent_primary text-xs font-bold uppercase custom-cursor-hover-target focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent_primary focus:ring-offset-[#2A3030]"
          aria-label={`View details for ${title}`} // Accessibility improvement
        >
          VIEW DETAILS
          <span className="ml-1.5 transform transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 group-focus:underline"> {/* Added underline on focus to match hover */}
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
