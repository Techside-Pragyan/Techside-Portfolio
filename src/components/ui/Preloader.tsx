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

    let currentProgress = 0;

    const interval = setInterval(() => {
      // Slow, steady increment by 1
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
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Status Text */}
            <div className="mb-6 font-mono text-sm tracking-[0.4em] uppercase text-white/50">
              Initializing...
            </div>

            {/* Minimalist 0-100 Counter */}
            <div className="flex items-baseline">
              <span className="text-7xl md:text-[10rem] font-black tracking-tighter text-white tabular-nums">
                {progress}
              </span>
              <span className="text-3xl md:text-6xl font-bold text-white/40 ml-2">
                %
              </span>
            </div>

            {/* Simple Loading Bar at the bottom of the screen */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10">
              <motion.div 
                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Page Content */}
      {children}
    </>
  );
}
