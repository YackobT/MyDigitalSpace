// src/components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image'; // Import next/image

export interface ProjectCardProps {
  title: string;
  categoryTag: string;
  description: string;
  imageUrl: string;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  categoryTag,
  description,
  imageUrl,
  onViewDetails,
}) => {
  return (
    <article 
      className="bg-card_background rounded-xl p-6 flex flex-col h-[400px] shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out custom-cursor-hover-target"
    >
      {/* Container for Next/Image - must have position relative and defined dimensions */}
      <div className="relative w-full h-[120px] mb-4 custom-cursor-hover-target rounded-lg overflow-hidden"> 
        <Image 
          src={imageUrl}
          alt={`Project image for ${title}`}
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg" 
          loading="lazy"
        />
      </div>

      <h3 
         className="text-lg sm:text-xl font-bold text-text_primary mb-2 leading-snug custom-cursor-hover-target"
       >
        {title}
      </h3>

      <div className="mb-2">
        <span 
         className="bg-accent_primary text-white text-[10px] sm:text-xs font-normal py-1 px-3 rounded-full inline-block custom-cursor-hover-target"
        >
          {categoryTag}
        </span>
      </div>

      <p 
         className="text-xs sm:text-sm text-text_secondary leading-relaxed mb-4 flex-grow overflow-hidden css-line-clamp-3"
       >
        {description}
      </p>

      <div className="mt-auto"> 
        <button 
          onClick={onViewDetails}
          aria-label={`View details for ${title}`}
          className="group inline-flex items-center text-accent_primary text-xs font-bold uppercase custom-cursor-hover-target focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent_primary focus:ring-offset-card_background"
        >
          VIEW DETAILS
          <span className="ml-1 transition-transform duration-300 ease-in-out group-focus:underline group-hover:underline">
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;