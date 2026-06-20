"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "INTELLIGENCE",
  "ENGINEERING",
  "ALGORITHMS",
  "INNOVATION",
  "PRAGYAN"
];

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Check if we've already loaded in this session
    const hasLoaded = sessionStorage.getItem('site-loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    let interval: NodeJS.Timeout;
    let currentProgress = 0;

    // Faster word switching based on progress
    const wordInterval = setInterval(() => {
      setWordIndex(prev => {
        if (prev < words.length - 1) return prev + 1;
        return prev;
      });
    }, 400);

    interval = setInterval(() => {
      currentProgress += Math.random() * 10 + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setWordIndex(words.length - 1); // Ensure final word is shown
        clearInterval(interval);
        clearInterval(wordInterval);
        
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 1200);
      } else {
        setProgress(currentProgress);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[99999] pointer-events-none flex flex-col"
          >
            {/* Split Screen Background - Top Half */}
            <motion.div 
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="w-full h-1/2 bg-[#020202] border-b border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
            </motion.div>

            {/* Split Screen Background - Bottom Half */}
            <motion.div 
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="w-full h-1/2 bg-[#020202] border-t border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </motion.div>

            {/* Centered Content */}
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-difference text-white"
            >
              {/* Dynamic Word Reveal */}
              <div className="h-[80px] md:h-[120px] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={wordIndex}
                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -50, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase"
                    style={{ WebkitTextStroke: wordIndex === words.length - 1 ? '0px' : '1px rgba(255,255,255,0.5)', color: wordIndex === words.length - 1 ? 'white' : 'transparent' }}
                  >
                    {words[wordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Massive Percentage Counter */}
              <div className="absolute bottom-10 right-10 flex items-end">
                <div className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter tabular-nums">
                  {Math.floor(progress)}
                </div>
                <div className="text-2xl md:text-5xl font-bold mb-2 md:mb-6 text-white/50">
                  %
                </div>
              </div>

              {/* Loading Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>

              {/* Status Text */}
              <div className="absolute bottom-12 left-10 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-white/60">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  System Initialization
                </motion.span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Real page content is rendered behind the preloader */}
      {children}
    </>
  );
}
