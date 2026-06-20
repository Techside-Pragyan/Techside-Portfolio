"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing...");
  const [systemReady, setSystemReady] = useState(false);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(true); // Assume true until checked

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
    const duration = 4000; // Exact 4-second loading time

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Mathematically calculate progress based on exactly 4000ms
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(currentProgress);

      // Exact status text changes
      if (currentProgress < 15) setStatusText("Initializing...");
      else if (currentProgress < 30) setStatusText("Loading Components...");
      else if (currentProgress < 45) setStatusText("Connecting Systems...");
      else if (currentProgress < 60) setStatusText("Loading Assets...");
      else if (currentProgress < 75) setStatusText("Preparing Portfolio...");
      else if (currentProgress < 90) setStatusText("Optimizing Experience...");
      else setStatusText("Final Checks...");

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        setStatusText("Ready");
        setSystemReady(true);
        
        // Wait 0.8 seconds at 100% to show SYSTEM READY, then slide up preloader
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 800);
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
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0),rgba(0,255,68,0.02))] bg-[length:100%_4px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff44]/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full px-6">
              
              {/* Top Text */}
              <AnimatePresence mode="wait">
                {!systemReady ? (
                  <motion.h2
                    key="init"
                    exit={{ opacity: 0, y: -20 }}
                    className="text-[#00d0ff] text-2xl md:text-4xl font-black tracking-[0.2em] mb-12 uppercase drop-shadow-[0_0_15px_rgba(0,208,255,0.8)]" 
                  >
                    PLEASE WAIT
                  </motion.h2>
                ) : (
                  <motion.h2
                    key="ready"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-[#00ff44] text-3xl md:text-5xl font-black tracking-[0.3em] mb-12 uppercase drop-shadow-[0_0_25px_rgba(0,255,68,1)]" 
                  >
                    SYSTEM READY
                  </motion.h2>
                )}
              </AnimatePresence>

              {/* Segmented Progress Bar Container */}
              <div className="w-full max-w-[600px] h-10 border-2 border-white/10 rounded p-1 relative overflow-hidden bg-[#050505] shadow-[0_0_30px_rgba(0,255,68,0.1)]">
                {/* Glowing Fill */}
                <motion.div 
                  className="h-full bg-transparent"
                  style={{ 
                    backgroundImage: "repeating-linear-gradient(to right, #00ff44 0px, #00ff44 4px, transparent 4px, transparent 8px)",
                    filter: "drop-shadow(0 0 10px rgba(0, 255, 68, 0.9))"
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>

              {/* Details Row */}
              <div className="w-full max-w-[600px] flex justify-between items-center mt-6">
                <div className="text-[#00d0ff] text-xl md:text-2xl font-black tracking-widest drop-shadow-[0_0_10px_rgba(0,208,255,0.6)]">
                  {progress}%
                </div>
                
                <div className="text-[#00ff44] text-sm md:text-base font-mono tracking-widest uppercase opacity-90 drop-shadow-[0_0_10px_rgba(0,255,68,0.4)]">
                  {statusText}
                </div>
              </div>

            </div>
            
            {/* Pulse Flash when ready */}
            <AnimatePresence>
              {systemReady && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[#00ff44]/20 mix-blend-screen pointer-events-none z-20"
                />
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page Content with Reveal Transition */}
      <motion.div
        initial={!hasLoadedBefore ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: isLoading ? 0 : 0.2 }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
