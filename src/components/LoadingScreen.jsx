import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Wait a moment at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#EAD8C3]"
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 noise-bg opacity-10"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-widest text-gradient-animated"
        >
          INITIALIZING...
        </motion.div>
        
        <div className="w-64 h-1 bg-[#EAE2D5] rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#A9715B] to-[#E3CBB3] shadow-[0_0_15px_rgba(169,113,91,0.4)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
        
        <div className="mt-4 text-[#A9715B] font-mono text-sm tracking-widest">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
