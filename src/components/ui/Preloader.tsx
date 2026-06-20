"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(true);

  useEffect(() => {
    // Check if we've already loaded in this session
    const hasLoaded = sessionStorage.getItem('site-loaded');
    if (hasLoaded) {
      setIsLoading(false);
      setHasLoadedBefore(true);
      return;
    }
    
    setHasLoadedBefore(false);

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 3000; // 3-second elegant load

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 800); // Hang at 100% for a brief moment of impact
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#020202] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
          >
            {/* Ambient Liquid Core (Background) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
               {/* This orb expands as progress increases */}
               <motion.div 
                 className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full mix-blend-screen opacity-80"
                 style={{
                   background: "radial-gradient(circle, rgba(0,112,243,0.8) 0%, rgba(0,208,255,0.4) 50%, transparent 80%)",
                   filter: "blur(80px)",
                 }}
                 animate={{ 
                   scale: 1 + (progress / 100) * 4, // Grows massive by 100%
                   rotate: progress * 2 // Slow rotation
                 }}
                 transition={{ ease: "linear", duration: 0.1 }}
               />
               <motion.div 
                 className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full mix-blend-screen opacity-60"
                 style={{
                   background: "radial-gradient(circle, rgba(0,255,170,0.6) 0%, rgba(0,112,243,0.3) 50%, transparent 80%)",
                   filter: "blur(100px)",
                 }}
                 animate={{ 
                   scale: 1 + (progress / 100) * 3, 
                   rotate: -progress * 1.5 
                 }}
                 transition={{ ease: "linear", duration: 0.1 }}
               />
            </div>

            {/* Grain Overlay for premium texture */}
            <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat"></div>

            {/* Content Foreground */}
            <div className="relative z-20 flex flex-col items-center">
              
              {/* Massive Elegant Percentage */}
              <div className="flex items-start tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <span className="text-[8rem] md:text-[14rem] font-light leading-none tabular-nums">
                  {progress}
                </span>
                <span className="text-3xl md:text-5xl font-light mt-4 md:mt-8 opacity-50">
                  %
                </span>
              </div>

              {/* Status Indicator */}
              <motion.div 
                className="mt-4 flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10"
                animate={{ opacity: progress === 100 ? 0 : 1 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#00d0ff] shadow-[0_0_10px_#00d0ff] animate-pulse"></div>
                <span className="text-white/80 font-mono text-xs uppercase tracking-widest">
                  Loading Experience
                </span>
              </motion.div>

              {/* Ready Indicator */}
              <AnimatePresence>
                {progress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 translate-y-20 text-white font-mono text-sm tracking-[0.5em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  >
                    Experience Ready
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
            
            {/* White flash transition at 100% */}
            <AnimatePresence>
              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 bg-white z-30 pointer-events-none mix-blend-overlay"
                />
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Smooth reveal of main page */}
      <motion.div
        initial={!hasLoadedBefore ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: isLoading ? 0 : 0.3 }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
