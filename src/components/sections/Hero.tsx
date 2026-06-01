"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import ParticlesBackground from '../ui/ParticlesBackground';
import HeroObject from '../canvas/HeroObject';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020205]">
      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticlesBackground />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)] opacity-80 z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between h-full pt-20 md:pt-0">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 pointer-events-auto mt-10 md:mt-0 z-20">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 glass-card px-5 py-2.5 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-xl bg-black/20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest">
              SYS.INIT // AI.ENGINEER
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] drop-shadow-2xl">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative inline-block">
                Intelligent
                <div className="absolute -inset-2 bg-primary/20 blur-2xl -z-10 rounded-full opacity-50"></div>
              </span> <br/>
              Systems.
            </h1>
            <h2 className="text-xl md:text-2xl text-white/50 font-light mt-6 tracking-wide border-l-2 border-primary/50 pl-4">
              Pragyan Paramita Moharana
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="glass-card p-5 rounded-2xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-w-md bg-black/40 backdrop-blur-xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent group-hover:shadow-[0_0_15px_rgba(59,130,246,1)] transition-all"></div>
            <div className="flex items-center gap-3 mb-3">
              <Terminal size={16} className="text-primary" />
              <span className="text-xs font-mono text-white/70 uppercase tracking-wider">Profile_Active</span>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              Bridging innovative ideas with transformative technologies. Engineering extreme performance AI solutions and full-stack applications for the future.
            </p>
          </motion.div>

          {/* Actions & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-2"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Explore Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pragyanpramitamoharana@gmail.com" className="w-12 h-12 rounded-full glass bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 h-[45vh] md:h-[80vh] relative pointer-events-auto flex items-center justify-center mt-10 md:mt-0"
        >
          {/* Subtle glow behind the 3D object to make it pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
          
          <HeroObject />
        </motion.div>

      </div>
    </section>
  );
}
