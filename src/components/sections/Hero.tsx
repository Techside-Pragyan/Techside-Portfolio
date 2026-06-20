"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as XIcon } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ParticlesBackground from '../ui/ParticlesBackground';
import MagneticButton from '../ui/MagneticButton';

const roles = [
  "Machine Learning Engineer",
  "AI Researcher",
  "Data Scientist",
  "Full-Stack Architect"
];

// Live Terminal Component built to look like an active model training session
const LiveTerminal = () => {
  const [epoch, setEpoch] = useState(1);
  const [loss, setLoss] = useState(2.453);
  const [accuracy, setAccuracy] = useState(45.2);
  const [logs, setLogs] = useState<string[]>(["Initializing Neural Network...", "Loading datasets..."]);

  useEffect(() => {
    const timer = setInterval(() => {
      setEpoch(e => e + 1);
      setLoss(l => Math.max(0.01, l - Math.random() * 0.15));
      setAccuracy(a => Math.min(99.9, a + Math.random() * 2.5));
      
      setLogs(prev => {
        const currentLoss = Math.max(0.01, loss - Math.random() * 0.15).toFixed(4);
        const currentAcc = Math.min(99.9, accuracy + Math.random() * 2.5).toFixed(2);
        const newLogs = [...prev, `[GPU:0] Epoch ${epoch}: loss=${currentLoss}, acc=${currentAcc}%`];
        if (newLogs.length > 5) newLogs.shift();
        return newLogs;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, [epoch, loss, accuracy]);

  return (
    <div className="w-full glass-card rounded-2xl border border-white/10 p-6 overflow-hidden relative shadow-[0_0_50px_rgba(0,208,255,0.1)] group">
      {/* Background sweep */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0055ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        </div>
        <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">train_model.py</span>
      </div>
      
      {/* Terminal Logs */}
      <div className="font-mono text-xs text-[#00ffaa] space-y-2 min-h-[140px] flex flex-col justify-end relative z-10">
        {logs.map((log, i) => (
          <div key={i} className="opacity-80 break-all">{log}</div>
        ))}
        <div className="animate-pulse">_</div>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 relative z-10">
        <div>
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Model Accuracy</div>
          <div className="text-2xl text-[#00d0ff] font-bold font-mono">{accuracy.toFixed(2)}%</div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Validation Loss</div>
          <div className="text-2xl text-white font-bold font-mono">{loss.toFixed(4)}</div>
        </div>
      </div>
    </div>
  );
};

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
    }, isDeleting ? 30 : 60);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#020202]">
      {/* 3D Background & Particles (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticlesBackground />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Aurora Gradient Lights */}
      <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-[#0055ff] rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-[#00ffaa] rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse opacity-[0.05]" style={{ animationDelay: '2s' }}></div>

      {/* Main Content Container */}
      <div className="container mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10 w-full pt-32 md:pt-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* LEFT COLUMN: Massive Typography */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center items-start pointer-events-auto">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-max mb-8 shadow-[0_0_20px_rgba(0,255,170,0.1)]"
            >
              <div className="w-2 h-2 rounded-full bg-[#00ffaa] shadow-[0_0_10px_#00ffaa] animate-pulse" />
              <span className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase">System Online // AI Architecture</span>
            </motion.div>

            {/* Huge Name Lockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col relative"
            >
              <h1 className="text-[12vw] lg:text-[7.5rem] xl:text-[9.5rem] leading-[0.85] font-black text-white tracking-tighter uppercase drop-shadow-2xl">
                PRAGYAN
                <br />
                <span className="text-transparent outline-text opacity-70 hover:opacity-100 hover:text-white transition-all duration-500 cursor-default">
                  MOHARANA
                </span>
              </h1>
            </motion.div>

            {/* Role / Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 min-h-[40px]"
            >
              <span className="text-xl md:text-3xl font-light text-white/40 uppercase tracking-widest">Role:</span>
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d0ff] to-[#00ffaa] tracking-tight">
                {currentText}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-[3px] h-[30px] sm:h-[40px] bg-[#00ffaa] ml-2 align-middle shadow-[0_0_10px_#00ffaa]"
                />
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 max-w-2xl text-base md:text-lg text-white/50 font-light leading-relaxed tracking-wide"
            >
              Architecting intelligent digital experiences by combining advanced <span className="text-white font-medium">Neural Networks</span> with highly scalable <span className="text-white font-medium">Full-Stack Development</span>. I build elegant software that solves complex problems through data.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              className="flex flex-wrap items-center gap-4 mt-12 w-full"
            >
              <MagneticButton intensity={0.3}>
                <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d0ff] to-[#00ffaa] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 group-hover:text-black transition-colors">Explore Works</span>
                  <Globe size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </MagneticButton>

              <MagneticButton intensity={0.2}>
                <a href="/resume.pdf" className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3">
                  <span>Resume</span>
                  <FileText size={18} />
                </a>
              </MagneticButton>

              <MagneticButton intensity={0.2}>
                <a href="#contact" className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3">
                  <span>Contact</span>
                  <Mail size={18} />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Socials */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
               className="flex items-center gap-6 mt-12 pb-10 lg:pb-0"
            >
               <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00ffaa] transition-colors hover:scale-110 transform duration-300">
                 <Github size={24} />
               </a>
               <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
                 <Linkedin size={24} />
               </a>
               <a href="#" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00ffaa] transition-colors hover:scale-110 transform duration-300">
                 <SiLeetcode size={24} />
               </a>
               <a href="#" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00d0ff] transition-colors hover:scale-110 transform duration-300">
                 <XIcon size={24} />
               </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Live ML Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="hidden lg:block w-full lg:w-[35%] relative pointer-events-auto"
          >
            <LiveTerminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
