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
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ParticlesBackground />
      </div>

      {/* Aurora Gradient Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-90 z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between h-full pt-24 md:pt-0 gap-12 md:gap-0">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="w-full md:w-[60%] flex flex-col justify-center items-start space-y-8 pointer-events-auto mt-10 md:mt-0 z-20">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col relative"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[1] drop-shadow-2xl uppercase outline-text">
              PRAGYAN PARAMITA <br/> MOHARANA
            </h1>
            
            <div className="h-[40px] sm:h-[60px] mt-4 flex items-center">
              <h2 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00d0ff] to-[#00ffaa] relative inline-block tracking-tight uppercase">
                {currentText}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-[3px] h-[30px] sm:h-[40px] bg-[#00ffaa] ml-2 align-middle shadow-[0_0_10px_#00ffaa]"
                />
              </h2>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d0ff] to-transparent mt-8"></div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="glass-card p-6 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] max-w-xl bg-white/5 backdrop-blur-2xl relative overflow-hidden group hover:border-[#00d0ff]/40 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00d0ff] to-[#00ffaa] group-hover:shadow-[0_0_20px_#00d0ff] transition-all"></div>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
              I architect intelligent digital experiences by combining advanced <span className="text-[#00d0ff] font-bold">Machine Learning algorithms</span> with <span className="text-[#00ffaa] font-bold">Full-Stack Development</span>. Passionate about building products that create real-world impact through AI.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2 w-full"
          >
            <MagneticButton intensity={0.3}>
              <a href="#projects" className="group relative px-6 py-3.5 bg-gradient-to-r from-[#0055ff] via-[#00d0ff] to-[#00ffaa] text-black font-black text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(0,208,255,0.4)]">
                <span className="relative z-10">View Projects</span>
                <Globe size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.2}>
              <a href="/resume.pdf" className="group relative px-6 py-3.5 bg-black/50 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-3">
                <span>Download Resume</span>
                <FileText size={18} />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.2}>
              <a href="#contact" className="group relative px-6 py-3.5 bg-black/50 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-3">
                <span>Contact Me</span>
                <Mail size={18} />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex items-center gap-5 pt-4"
          >
             <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
               <Github size={24} />
             </a>
             <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
               <Linkedin size={24} />
             </a>
             <a href="#" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
               <SiLeetcode size={24} />
             </a>
             <a href="#" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
               <XIcon size={24} />
             </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D Object */}
        <div className="w-full md:w-[40%] h-[400px] md:h-[600px] relative pointer-events-auto">
          <HeroObject />
        </div>

      </div>
    </section>
  );
}
