"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if we've already loaded in this session
    const hasLoaded = sessionStorage.getItem('site-loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    let interval: NodeJS.Timeout;
    let currentProgress = 0;

    interval = setInterval(() => {
      // Steady increment
      currentProgress += 1;
      
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        
        // Wait at 100% before removing
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 800);
      } else {
        setProgress(currentProgress);
      }
    }, 30); // 30ms * 100 = 3 seconds total loading time

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center justify-center w-full max-w-md px-6">
              
              {/* Top Text */}
              <h2 className="text-[#00d0ff] text-2xl md:text-3xl font-bold tracking-widest mb-6 uppercase" style={{ textShadow: "0 0 10px rgba(0, 208, 255, 0.5)" }}>
                PLEASE WAIT
              </h2>

              {/* Segmented Progress Bar Container */}
              <div className="w-full h-8 md:h-10 border-2 border-white/10 rounded-sm p-1 relative overflow-hidden bg-black flex items-center">
                
                {/* The glowing segmented bar itself */}
                <motion.div 
                  className="h-full bg-transparent"
                  style={{ 
                    // This creates the vertical segments
                    backgroundImage: "repeating-linear-gradient(to right, #00ff44 0px, #00ff44 4px, transparent 4px, transparent 6px)",
                    // Add glow to the green segments
                    filter: "drop-shadow(0 0 8px rgba(0, 255, 68, 0.8))"
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>

              {/* Bottom Percentage */}
              <div className="text-[#00d0ff] text-xl md:text-2xl font-bold mt-6 tracking-wider" style={{ textShadow: "0 0 10px rgba(0, 208, 255, 0.5)" }}>
                {progress}%
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Page Content */}
      {children}
    </>
  );
}
