"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileText, Globe, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as XIcon } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ParticlesBackground from '../ui/ParticlesBackground';
import HeroObject from '../canvas/HeroObject';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ParticlesBackground />
      </div>

      {/* Aurora Gradient Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-90 z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full pt-24 md:pt-0">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="w-full md:w-[55%] flex flex-col justify-center items-start space-y-8 pointer-events-auto mt-10 md:mt-0 z-20">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 glass-card px-5 py-2.5 rounded-full border border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-xl bg-black/40"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
            <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.2em]">
              System Online // Core Active
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col relative"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1] drop-shadow-2xl uppercase outline-text">
              PRAGYAN PARAMITA <br/> MOHARANA
            </h1>
            <h2 className="text-3xl md:text-5xl font-black mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary relative inline-block text-glow tracking-tight uppercase">
              AI / ML ENGINEER
              <div className="absolute -inset-2 bg-primary/20 blur-3xl -z-10 rounded-full opacity-60"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-8"></div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="glass-card p-6 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] max-w-xl bg-black/50 backdrop-blur-2xl relative overflow-hidden group hover:border-primary/40 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary group-hover:shadow-[0_0_20px_rgba(59,130,246,1)] transition-all"></div>
            <h3 className="text-lg font-bold text-white mb-2">Building Intelligent Systems That Solve Real Problems</h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-3">
              AI/ML Engineer | Full Stack Developer | Future Innovator
            </p>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Passionate about Artificial Intelligence, Machine Learning, Full-Stack Development and building products that create real-world impact.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2 w-full"
          >
            <MagneticButton>
              <a href="#projects" className="group relative px-6 py-3.5 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden neon-glow">
                <span className="relative z-10">Explore My Universe</span>
                <Globe size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#github" className="group relative px-6 py-3.5 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-3">
                <span>View Projects</span>
                <Terminal size={18} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#" className="group relative px-6 py-3.5 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-3">
                <span>Download Resume</span>
                <FileText size={18} />
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
             <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
               <Github size={24} />
             </a>
             <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
               <Linkedin size={24} />
             </a>
             <a href="#" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
               <SiLeetcode size={24} />
             </a>
             <a href="#" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
               <XIcon size={24} />
             </a>
             <a href="mailto:pragyanpramitamoharana@gmail.com" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
               <Mail size={24} />
             </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D Holographic AI Core */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="w-full md:w-[45%] h-[50vh] md:h-[80vh] relative pointer-events-auto flex items-center justify-center mt-10 md:mt-0"
        >
          {/* Intense Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-cyan-400/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>
          
          <HeroObject />
        </motion.div>

      </div>
    </section>
  );
}
