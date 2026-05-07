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
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#030014]"
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 noise-bg opacity-10"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest"
        >
          INITIALIZING...
        </motion.div>
        
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
        
        <div className="mt-4 text-cyan-400 font-mono text-sm tracking-widest">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
