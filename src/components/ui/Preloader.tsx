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
    }, 150); // Sped up from 400ms to 150ms

    interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 8; // Faster increment
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setWordIndex(words.length - 1); // Ensure final word is shown
        clearInterval(interval);
        clearInterval(wordInterval);
        
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 500); // Sped up from 1200ms to 500ms
      } else {
        setProgress(currentProgress);
      }
    }, 50); // Sped up from 100ms to 50ms

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
            className="fixed inset-0 z-[99999] pointer-events-none flex flex-col bg-[#050505]"
          >
            {/* Split Screen Background - Top Half */}
            <motion.div 
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="w-full h-1/2 bg-[#020202] border-b border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </motion.div>

            {/* Split Screen Background - Bottom Half */}
            <motion.div 
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="w-full h-1/2 bg-[#020202] border-t border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </motion.div>

            {/* Centered Content */}
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white"
            >
              {/* Dynamic Word Reveal */}
              <div className="h-[80px] md:h-[120px] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={wordIndex}
                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -50, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase"
                    style={{ 
                      WebkitTextStroke: wordIndex === words.length - 1 ? '0px' : '2px rgba(59,130,246,0.8)', 
                      color: wordIndex === words.length - 1 ? 'white' : 'transparent',
                      textShadow: wordIndex === words.length - 1 ? '0 0 40px rgba(255,255,255,0.3)' : 'none'
                    }}
                  >
                    {words[wordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Massive Percentage Counter */}
              <div className="absolute bottom-10 right-10 flex items-end">
                <div className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-t from-primary/20 to-white drop-shadow-2xl">
                  {Math.floor(progress)}
                </div>
                <div className="text-2xl md:text-5xl font-bold mb-2 md:mb-6 text-primary">
                  %
                </div>
              </div>

              {/* Loading Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                <motion.div 
                  className="h-full bg-primary shadow-[0_0_20px_rgba(59,130,246,1)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>

              {/* Status Text */}
              <div className="absolute bottom-12 left-10 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-primary font-bold">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
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
