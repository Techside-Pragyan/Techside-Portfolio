"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading Assets...");
  const [systemReady, setSystemReady] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('site-loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    let interval: NodeJS.Timeout;
    let currentProgress = 0;

    interval = setInterval(() => {
      // Slower, cinematic increment
      currentProgress += Math.random() * 2 + 0.5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatusText("Welcome");
        setSystemReady(true);
        clearInterval(interval);
        
        // Wait at 100% to show SYSTEM READY, then fade out
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('site-loaded', 'true');
        }, 1500);
      } else {
        const p = Math.floor(currentProgress);
        setProgress(p);

        // Update status text based on percentage
        if (p < 15) setStatusText("Loading Assets...");
        else if (p < 30) setStatusText("Connecting Systems...");
        else if (p < 50) setStatusText("Initializing Interface...");
        else if (p < 70) setStatusText("Loading Portfolio Data...");
        else if (p < 85) setStatusText("Activating AI Modules...");
        else if (p < 95) setStatusText("Preparing Experience...");
        else setStatusText("Finalizing Setup...");
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
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0),rgba(0,255,255,0.05))] bg-[length:100%_4px] pointer-events-none" />
              {/* Soft center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6">
              
              {/* Top Text */}
              <AnimatePresence mode="wait">
                {!systemReady ? (
                  <motion.h2
                    key="init"
                    exit={{ opacity: 0, y: -20 }}
                    className="text-[#00d0ff] text-xl md:text-2xl font-mono font-bold tracking-[0.3em] mb-12 uppercase" 
                    style={{ textShadow: "0 0 20px rgba(0, 208, 255, 0.8)" }}
                  >
                    INITIALIZING SYSTEM...
                  </motion.h2>
                ) : (
                  <motion.h2
                    key="ready"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-[#00ff44] text-3xl md:text-4xl font-black tracking-[0.4em] mb-12 uppercase" 
                    style={{ textShadow: "0 0 30px rgba(0, 255, 68, 1)" }}
                  >
                    SYSTEM READY
                  </motion.h2>
                )}
              </AnimatePresence>

              {/* Progress Bar Container - Glassmorphism & Cyberpunk */}
              <div className="w-full h-[6px] md:h-[8px] bg-white/5 border border-white/10 rounded-full relative overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(0,208,255,0.1)]">
                {/* Glowing Fill */}
                <motion.div 
                  className="h-full relative rounded-full"
                  style={{ 
                    background: "linear-gradient(90deg, #0055ff, #00d0ff, #00ffaa)",
                    boxShadow: "0 0 20px rgba(0, 208, 255, 0.8), 0 0 40px rgba(0, 255, 170, 0.4)"
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                >
                  {/* Light Reflection/Shimmer inside the bar */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-r from-transparent to-white/80 blur-[2px]"></div>
                </motion.div>
              </div>

              {/* Details Row */}
              <div className="w-full flex justify-between items-center mt-6">
                <div className="text-[#00d0ff] text-xs md:text-sm font-mono tracking-widest opacity-80" style={{ textShadow: "0 0 10px rgba(0, 208, 255, 0.5)" }}>
                  {progress}% - {statusText}
                </div>
                
                {/* Small Glowing Dots Indicator */}
                <div className="flex gap-1.5">
                  <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-[#00d0ff] rounded-full shadow-[0_0_5px_#00d0ff]" />
                  <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 bg-[#00d0ff] rounded-full shadow-[0_0_5px_#00d0ff]" />
                  <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }} className="w-1.5 h-1.5 bg-[#00d0ff] rounded-full shadow-[0_0_5px_#00d0ff]" />
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
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-[#00ff44]/10 mix-blend-screen pointer-events-none z-20"
                />
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
      {/* Page Content */}
      {children}
    </>
  );
}
