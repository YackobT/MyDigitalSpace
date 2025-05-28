'use client'

import { motion } from 'framer-motion'

const PageLoader = () => {
  const colors = ['bg-accent-purple', 'bg-accent-teal', 'bg-accent'];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2, // Stagger the animation of each dot
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const dotVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1, 1.2, 1], // Pulse effect
      opacity: [0.8, 1, 0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity, // Loop the pulse
        repeatType: 'mirror' as const, // Ensures smooth transition back and forth
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background z-[100] flex items-center justify-center"
      initial="initial" // Not really needed for this outer div if exit is handled by AnimatePresence
      animate="animate" // Not really needed for this outer div
      exit="exit" // This will be triggered by AnimatePresence
      variants={{ exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } } }} // Explicit exit for the whole loader
    >
      <motion.div
        className="flex space-x-4"
        variants={containerVariants}
        initial="initial"
        animate="animate" // Trigger staggerChildren
      >
        {colors.map((colorClass, index) => (
          <motion.div
            key={index}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${colorClass}`}
            variants={dotVariants}
            // No need for initial/animate here as parent containerVariants handles stagger
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
