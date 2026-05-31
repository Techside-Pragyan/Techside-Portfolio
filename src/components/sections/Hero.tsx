"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import ParticlesBackground from '../ui/ParticlesBackground';
import HeroObject from '../canvas/HeroObject';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020205]">
      
      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
        <HeroObject />
      </div>

      {/* Subtle vignette for blending */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)] opacity-80 z-0" />

      {/* Massive Central Typography (Z-10) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none select-none px-4 mt-[-5vh]">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary/50"></div>
          <span className="text-primary font-mono tracking-[0.5em] text-xs md:text-sm uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
            AI / ML Engineer
          </span>
          <div className="h-[1px] w-12 bg-primary/50"></div>
        </motion.div>

        <motion.h1 
          className="font-black leading-[0.85] tracking-tighter uppercase flex flex-col items-center"
        >
          {/* PRAGYAN - Solid White */}
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-[12vw] md:text-[10vw] text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            PRAGYAN
          </motion.span>
          
          {/* PARAMITA - Glowing Gradient */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-[12vw] md:text-[10vw] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative z-20 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            PARAMITA
          </motion.span>
          
          {/* MOHARANA - Luxury Outline Effect */}
          <motion.span 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-[12vw] md:text-[10vw] text-transparent relative z-10"
            style={{ 
              WebkitTextStroke: '2px rgba(255,255,255,0.4)', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            MOHARANA
          </motion.span>
        </motion.h1>
      </div>

      {/* Floating Bottom Widgets (Z-20) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row items-end justify-between z-20 pointer-events-none">
        
        {/* Left: Bio Widget */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-card p-6 rounded-3xl max-w-sm pointer-events-auto border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl mb-6 md:mb-0 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:shadow-[0_0_20px_rgba(59,130,246,1)] transition-all"></div>
          <div className="flex items-center gap-3 mb-3">
            <Terminal size={16} className="text-primary" />
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Sys.Profile</span>
          </div>
          <p className="text-white/80 font-light text-sm leading-relaxed">
            Building <strong className="text-white font-bold">intelligent systems</strong>, optimizing predictive models, and engineering creative AI solutions.
          </p>
        </motion.div>

        {/* Center: Scroll Indicator (Hidden on mobile) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden md:flex flex-col items-center gap-4 absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"
          ></motion.div>
          <span className="text-[10px] text-white/30 font-mono uppercase tracking-[0.2em] rotating-text">Scroll</span>
        </motion.div>

        {/* Right: Actions & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-end gap-6 pointer-events-auto"
        >
          <div className="flex items-center gap-4">
            <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:pragyanpramitamoharana@gmail.com" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <Mail size={20} />
            </a>
          </div>

          <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 group-hover:text-white transition-colors">Explore Work</span>
            <ArrowDownRight size={18} className="relative z-10 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
