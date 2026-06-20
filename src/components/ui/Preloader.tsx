"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if we've already loaded in this session to prevent annoyance
    const hasLoaded = sessionStorage.getItem('site-loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    let interval: NodeJS.Timeout;
    let currentProgress = 0;

    interval = setInterval(() => {
      // Simulate varied loading speed
      currentProgress += Math.random() * 15 + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 800);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="relative flex overflow-hidden text-6xl md:text-9xl font-black text-transparent outline-text mb-8">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  PRAGYAN
                </motion.span>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary to-secondary mix-blend-color animate-pulse" />
              </div>
              
              <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative mt-8">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-cyan-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>
              
              <div className="mt-4 font-mono text-primary text-sm tracking-[0.3em]">
                {progress}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* We always render children, but we could wrap them or rely on the preloader overlay covering everything */}
      {children}
    </>
  );
}
