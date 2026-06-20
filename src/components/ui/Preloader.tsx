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
      // Fast, smooth increment to 100
      currentProgress += Math.random() * 8 + 2;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Wait half a second at 100% before removing
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 500);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 40);

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
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
          >
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
                className="h-full bg-white"
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
