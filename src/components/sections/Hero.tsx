"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, Globe, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as XIcon } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ParticlesBackground from '../ui/ParticlesBackground';
import MagneticButton from '../ui/MagneticButton';
import HeroObject from '../canvas/HeroObject';

const roles = [
  "AI Engineer",
  "Machine Learning Developer",
  "Python Programmer",
  "Future Data Scientist"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const greeting = currentTime ? (() => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  })() : 'Welcome to my space';

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at end of typing
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ParticlesBackground />
      </div>

      {/* Aurora Gradient Lights */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-400/20 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] opacity-90 z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full pt-28 pb-10 lg:pt-0 lg:pb-0 gap-8 lg:gap-0">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-start space-y-6 lg:space-y-8 pointer-events-auto z-20">
          
          {/* Title & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col relative w-full"
          >
            {/* Elegant Greeting Tag & Time */}
            <div className="flex flex-col gap-2 mb-4 lg:mb-6">
              <div className="flex items-center gap-3 lg:gap-4">
                 <div className="w-8 lg:w-12 h-[1px] bg-gradient-to-r from-[#00d0ff] to-transparent"></div>
                 <span className="font-mono text-[#00d0ff] tracking-[0.2em] lg:tracking-[0.25em] uppercase text-[10px] md:text-sm drop-shadow-[0_0_10px_rgba(0,208,255,0.5)]">
                   {greeting}
                 </span>
              </div>
              <div className="flex items-center pl-11 lg:pl-16 h-4">
                 {currentTime && (
                   <motion.span 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="font-mono text-[#00ffaa]/70 uppercase text-[10px] tracking-widest flex items-center gap-3"
                   >
                     <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                     <span className="w-1 h-1 rounded-full bg-[#00ffaa]/40"></span>
                     <span>{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                   </motion.span>
                 )}
              </div>
            </div>

            {/* Refined Name */}
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl font-serif text-foreground tracking-wide drop-shadow-2xl">
              Pragyan Paramita <br className="hidden sm:block"/> Moharana.
            </h1>
            
            {/* Role & Typing */}
            <div className="mt-4 lg:mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-white/50 text-base md:text-xl font-light">I build intelligent systems as an</span>
              <div className="flex items-center">
                <h2 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d0ff] to-[#00ffaa] tracking-wide">
                  {currentText}
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[2px] h-[20px] md:h-[24px] bg-[#00ffaa] ml-1.5 align-middle shadow-[0_0_10px_#00ffaa]"
                  />
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Minimalist Bio with animated border */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="pl-5 lg:pl-6 border-l border-white/10 relative max-w-lg group py-1 lg:py-2"
          >
            <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-gradient-to-b from-[#00d0ff] to-[#00ffaa] group-hover:h-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,208,255,0.5)]"></div>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              I architect intelligent digital experiences by combining advanced <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(0,208,255,0.4)]">Machine Learning</span> algorithms with robust <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(0,255,170,0.4)]">Full-Stack Development</span>. Passionate about building products that create real-world impact through AI.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 lg:gap-4 pt-2 lg:pt-4 w-full"
          >
            <MagneticButton intensity={0.3}>
              <a href="#projects" className="group relative px-6 lg:px-7 py-3 lg:py-3.5 bg-gradient-to-r from-[#0055ff] via-[#00d0ff] to-[#00ffaa] text-black font-black text-[10px] md:text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-[0_0_20px_rgba(0,208,255,0.3)]">
                <span className="relative z-10">View Projects</span>
                <Globe size={14} className="relative z-10 group-hover:rotate-12 transition-transform duration-300 md:w-4 md:h-4" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.2}>
              <a href="/resume.pdf" className="group relative px-6 lg:px-7 py-3 lg:py-3.5 bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium text-[10px] md:text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 lg:gap-3">
                <span>Resume</span>
                <FileText size={14} className="md:w-4 md:h-4" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.2}>
              <a href="#contact" className="group relative px-6 lg:px-7 py-3 lg:py-3.5 bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium text-[10px] md:text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 lg:gap-3">
                <span>Contact</span>
                <Mail size={14} className="md:w-4 md:h-4" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex items-center gap-5 lg:gap-6 pt-4 lg:pt-6"
          >
             <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#00ffaa] transition-colors hover:scale-110 transform duration-300">
               <Github size={20} className="lg:w-[22px] lg:h-[22px]" />
             </a>
             <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
               <Linkedin size={20} className="lg:w-[22px] lg:h-[22px]" />
             </a>
             <a href="#" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#00ffaa] transition-colors hover:scale-110 transform duration-300">
               <SiLeetcode size={20} className="lg:w-[22px] lg:h-[22px]" />
             </a>
             <a href="#" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
               <XIcon size={20} className="lg:w-[22px] lg:h-[22px]" />
             </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D Object */}
        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[600px] relative pointer-events-auto flex items-center justify-center mt-6 lg:mt-0">
          {/* We make the Canvas container significantly larger than its grid column on desktop
              to ensure the rotating 3D labels and glowing mesh are never cut off by a hard line. */}
          <div className="absolute w-[100%] lg:w-[160%] h-[100%] lg:h-[120%] z-0">
            <HeroObject />
          </div>
        </div>

      </div>
    </section>
  );
}
