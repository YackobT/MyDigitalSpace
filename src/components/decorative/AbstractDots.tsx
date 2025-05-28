'use client'

import React from 'react';

interface AbstractDotsProps extends React.SVGProps<SVGSVGElement> {
  // className will be used for color (e.g., text-accent-purple for fill) and size (w-X h-X)
}

const AbstractDots: React.FC<AbstractDotsProps> = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 50 50" // Example viewBox, can be adjusted
      fill="currentColor" // Use Tailwind text color for fill
      {...props} // Spread other props like className, width, height
    >
      {/* A small cluster of dots in an abstract pattern */}
      <circle cx="10" cy="10" r="3" />
      <circle cx="22" cy="8" r="2.5" opacity="0.8" />
      <circle cx="15" cy="25" r="2" opacity="0.7" />
      <circle cx="30" cy="20" r="3.5" />
      <circle cx="25" cy="35" r="2.5" opacity="0.9" />
      <circle cx="40" cy="15" r="2" opacity="0.6" />
      <circle cx="38" cy="38" r="3" opacity="0.8" />
      <circle cx="8" cy="40" r="1.5" opacity="0.5" />
    </svg>
  );
};

export default AbstractDots;
