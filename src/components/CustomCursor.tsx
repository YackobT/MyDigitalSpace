// src/components/CustomCursor.tsx
'use client';

import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target or any of its parents have the hover target class
      if (target.closest('.custom-cursor-hover-target')) {
        setIsHoveringInteractive(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target or any of its parents had the hover target class
      // This ensures that if the mouse moves to a child of the target, it still remains "hovering"
      // The check is primarily for when the mouse leaves the target element or its children entirely.
      // A more robust solution might involve checking relatedTarget if needed, but closest should handle most cases.
      if (target.closest('.custom-cursor-hover-target')) {
        // A simple check like this might cause it to flicker if moving between children of a hover target.
        // A better way for mouseout is to check if the new target (relatedTarget) is OUTSIDE the .custom-cursor-hover-target
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (!relatedTarget || !relatedTarget.closest('.custom-cursor-hover-target')) {
          setIsHoveringInteractive(false);
        }
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    // Hide the default system cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      // Restore default system cursor on component unmount
      document.body.style.cursor = 'auto';
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Dynamic styles for the cursor
  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isHoveringInteractive ? '40px' : '30px', // Change size on hover
    height: isHoveringInteractive ? '40px' : '30px', // Change size on hover
    backgroundColor: isHoveringInteractive
      ? 'rgba(168, 85, 247, 0.8)' // More solid accent_primary (Purple) on hover
      : 'rgba(168, 85, 247, 0.5)', // Default: Semi-transparent accent_primary (Purple)
    borderRadius: '50%',
    pointerEvents: 'none', // Allows clicking through the cursor
    transform: 'translate(-50%, -50%)', // Center the cursor element on the actual pointer
    zIndex: 9999, // Ensure it's on top
    transition: 'width 0.15s ease-out, height 0.15s ease-out, background-color 0.15s ease-out', // Smoothed transition
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
