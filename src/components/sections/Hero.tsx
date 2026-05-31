"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, Terminal, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import ParticlesBackground from '../ui/ParticlesBackground';
import HeroObject from '../canvas/HeroObject';

// Custom Scramble Text Effect Component for the "Shock" factor
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((old) => 
        text.split('').map((letter, index) => {
          if (index < iteration) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 3D Magnetic Tilt Physics for the Typography
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const mouseXSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020205] perspective-1000"
    >
      {/* "Shock" Cinematic Flashbang on Load */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-[999] pointer-events-none mix-blend-overlay"
      />

      {/* Dynamic Mouse Flashlight Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-50"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(59, 130, 246, 0.3) 0%, transparent 40%)`
          )
        }}
      />

      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
        <HeroObject />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)] opacity-80 z-0" />

      {/* Massive 3D Magnetic Central Typography (Z-10) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none select-none px-4 mt-[-5vh]" style={{ perspective: 1000 }}>
        
        <motion.div 
          initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[2px] w-12 bg-primary"></div>
          <span className="text-primary font-mono tracking-[0.5em] text-xs md:text-sm uppercase drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
            {isLoaded ? <ScrambleText text="SYS.INIT // AI.ENGINEER" /> : "..."}
          </span>
          <div className="h-[2px] w-12 bg-primary"></div>
        </motion.div>

        <motion.h1 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="font-black leading-[0.85] tracking-tighter uppercase flex flex-col items-center relative"
        >
          {/* Glowing Aura behind text */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>

          {/* PRAGYAN */}
          <motion.span 
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "backOut", delay: 0.8 }}
            className="text-[14vw] md:text-[12vw] text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 relative"
            style={{ transform: "translateZ(50px)" }}
          >
            PRAGYAN
          </motion.span>
          
          {/* PARAMITA */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut", delay: 1.2 }}
            className="text-[14vw] md:text-[12vw] text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent relative z-20 drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            style={{ transform: "translateZ(100px)" }}
          >
            PARAMITA
          </motion.span>
          
          {/* MOHARANA */}
          <motion.span 
            initial={{ opacity: 0, y: -100, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "backOut", delay: 1 }}
            className="text-[14vw] md:text-[12vw] text-transparent relative z-30"
            style={{ 
              WebkitTextStroke: '3px rgba(255,255,255,0.8)', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 30px 60px rgba(0,0,0,0.8)',
              transform: "translateZ(150px)"
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2, type: "spring" }}
          className="glass-card p-6 rounded-3xl max-w-sm pointer-events-auto border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl mb-6 md:mb-0 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent group-hover:shadow-[0_0_30px_rgba(59,130,246,1)] transition-all"></div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Terminal size={16} className="text-primary animate-pulse" />
            </div>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Sys.Profile_Active</span>
          </div>
          <p className="text-white/80 font-light text-sm leading-relaxed">
            Architecting <strong className="text-white font-black tracking-wide">intelligent neural systems</strong> and engineering extreme performance AI solutions for the future.
          </p>
        </motion.div>

        {/* Center: Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="hidden md:flex flex-col items-center gap-4 absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-20 bg-gradient-to-b from-primary via-secondary to-transparent drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
          ></motion.div>
          <span className="text-[10px] text-primary font-mono uppercase tracking-[0.4em] drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">Initiate_Scroll</span>
        </motion.div>

        {/* Right: Actions & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2, type: "spring" }}
          className="flex flex-col items-end gap-6 pointer-events-auto"
        >
          <div className="flex items-center gap-4">
            <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300">
              <Linkedin size={22} />
            </a>
            <a href="mailto:pragyanpramitamoharana@gmail.com" className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300">
              <Mail size={22} />
            </a>
          </div>

          <a href="#projects" className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Enter Network</span>
            <ArrowDownRight size={20} className="relative z-10 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
