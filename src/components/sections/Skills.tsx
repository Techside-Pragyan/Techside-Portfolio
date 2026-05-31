"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SkillEcosystem from '../canvas/SkillEcosystem';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full h-[100vh] min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#020205]">
      
      {/* Immersive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Massive Background Title matching Hero Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[2px] w-12 bg-primary"></div>
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Sys.Init.Skills
          </span>
          <div className="h-[2px] w-12 bg-primary"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[12vw] md:text-[10vw] font-black tracking-tighter whitespace-nowrap text-white/10 drop-shadow-2xl"
        >
          CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">SKILLS</span>
        </motion.h2>
      </div>

      {/* Subtle top/bottom vignette for blending */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#020205_0%,transparent_15%,transparent_85%,#020205_100%)] z-10" />

      {/* Physics 3D Ecosystem Canvas */}
      <div className="w-full h-full relative z-20">
        <SkillEcosystem />
      </div>

      {/* Overlay Interaction Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <span className="text-white/70 font-mono text-xs uppercase tracking-widest">
            Grab and toss the spheres
          </span>
        </motion.div>
      </div>

    </section>
  );
}
