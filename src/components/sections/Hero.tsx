"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import ParticlesBackground from '../ui/ParticlesBackground';
import HeroObject from '../canvas/HeroObject';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <HeroObject />

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-primary font-mono tracking-[0.3em] text-sm uppercase"
            >
              AI / ML Engineer
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
                PRAGYAN
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                PARAMITA
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
                MOHARANA
              </span>
            </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass-card p-6 rounded-2xl max-w-lg border-l-4 border-l-primary"
          >
            <p className="text-foreground/80 font-light leading-relaxed">
              Building <span className="text-primary font-semibold">intelligent systems</span>, optimizing predictive models, and engineering creative AI solutions. Exploring the intersection of data, mathematical logic, and deep learning.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="glass p-3 rounded-full hover:bg-surface-hover hover:scale-110 transition-all text-primary">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="glass p-3 rounded-full hover:bg-surface-hover hover:scale-110 transition-all text-primary">
              <Linkedin size={20} />
            </a>
            <a href="mailto:pragyanpramitamoharana@gmail.com" className="glass p-3 rounded-full hover:bg-surface-hover hover:scale-110 transition-all text-primary">
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-6 mt-4"
          >
            <a href="#projects" className="px-8 py-4 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2 group">
              View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side is intentionally empty for the 3D HeroObject to shine in the background on desktop */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-surface-border rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-primary rounded-full"></div>
      </motion.div>
    </section>
  );
}
