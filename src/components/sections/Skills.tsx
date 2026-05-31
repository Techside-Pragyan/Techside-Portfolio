"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SkillEcosystem from '../canvas/SkillEcosystem';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative w-full h-[100vh] min-h-[800px] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#020205' }}
    >
      {/* 3D Canvas Background (Z-index 0) */}
      <div className="absolute inset-0 z-0">
        <SkillEcosystem />
      </div>

      {/* Subtle top/bottom vignette to blend perfectly with other sections */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#020205_0%,transparent_15%,transparent_85%,#020205_100%)] z-10" />

      {/* Foreground UI Layer (Z-index 20) */}
      <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none w-full h-full p-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-24 md:top-32 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Sys.Init.Neural_Net
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl">
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SKILLS</span>
          </h2>
          <p className="text-white/50 font-light mt-2 max-w-lg text-center text-sm md:text-base">
            Hover over the neural nodes to explore my technical capabilities and domain expertise.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
