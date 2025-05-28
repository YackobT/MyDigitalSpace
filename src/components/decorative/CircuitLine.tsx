'use client'

import React from 'react';

interface CircuitLineProps {
  className?: string;
  [key: string]: any; // To allow other standard SVG/HTML attributes
}

const CircuitLine: React.FC<CircuitLineProps> = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 64 64" // Example viewBox, can be adjusted
      stroke="currentColor" // Use Tailwind text color for stroke
      // Note: {...props} will pass className and any other explicitly passed props.
      // If type safety for all SVG props was desired, extending React.SVGProps is better.
      // This change is to satisfy a specific lint rule interpretation.
      {...props}
    >
      {/* A more abstract and flowing circuit line example */}
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M5 58 Q20 58 20 43 T35 28 Q50 13 60 13" 
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M5 45 Q20 45 20 30 T35 15 Q50 0 60 0"
        opacity="0.6"
      />
      <circle cx="20" cy="43" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="35" cy="28" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="35" cy="15" r="2" fill="currentColor" opacity="0.5" />
       {/* Small decorative circles along the path */}
      <circle cx="5" cy="58" r="1.5" fill="currentColor" />
      <circle cx="60" cy="13" r="1.5" fill="currentColor" />
      <circle cx="5" cy="45" r="1.5" fill="currentColor" />
      <circle cx="60" cy="0" r="1.5" fill="currentColor" />
    </svg>
  );
};

export default CircuitLine;
