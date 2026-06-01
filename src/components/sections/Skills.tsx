"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Terminal, Activity, Cpu } from 'lucide-react';

const skills = [
  { name: "Python", value: 95, color: "bg-blue-500" },
  { name: "Machine Learning", value: 90, color: "bg-purple-500" },
  { name: "Deep Learning", value: 85, color: "bg-cyan-500" },
  { name: "Data Structures", value: 88, color: "bg-green-500" },
  { name: "React", value: 82, color: "bg-yellow-500" },
  { name: "TypeScript", value: 80, color: "bg-orange-500" },
];

const ProgressBar = ({ value, color, name }: { value: number, color: string, name: string }) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    // Animate the percentage number
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    
    const interval = setInterval(() => {
      step++;
      const progress = easeOutQuart(step / steps);
      setCurrentValue(Math.floor(progress * value));
      if (step >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  // Easing function for smooth number animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  // Generate the block characters for the progress bar
  const totalBlocks = 20;
  const filledBlocks = Math.floor((currentValue / 100) * totalBlocks);
  const blocksString = "█".repeat(filledBlocks) + "░".repeat(totalBlocks - filledBlocks);

  return (
    <div className="flex flex-col mb-4 w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/80 font-mono text-sm">{name}</span>
        <span className="text-white font-mono text-sm font-bold w-12 text-right">{currentValue}%</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-primary/70 font-mono text-xs md:text-sm tracking-tighter opacity-80 select-none">
          {blocksString}
        </span>
        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden shadow-inner hidden md:block">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full rounded-full ${color} shadow-[0_0_10px_currentColor]`}
          />
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Neural Network / Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Context / Description */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 flex flex-col space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="text-primary animate-pulse" size={24} />
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
              Core Capabilities
            </h2>
          </div>
          <div className="w-12 h-1 bg-primary"></div>
          <p className="text-white/60 font-light leading-relaxed">
            The neural pathways of my technical expertise. Continuously learning and upgrading parameters to optimize performance across the stack.
          </p>
          <div className="glass-card p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md hidden md:block">
            <div className="flex items-center gap-2 mb-2 text-primary text-xs font-mono uppercase tracking-widest">
              <Activity size={14} /> System Status
            </div>
            <div className="text-white/80 font-mono text-sm leading-relaxed">
              &gt; All primary systems nominal.<br/>
              &gt; Deep Learning models training...<br/>
              &gt; Web frameworks fully deployed.<br/>
              <span className="text-green-400 animate-pulse">_</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Command Center / Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <div className="glass-card rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0A0A0A]/80 backdrop-blur-3xl overflow-hidden relative group">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-white/30 font-mono text-xs flex items-center gap-2">
                <Terminal size={12} /> root@pragyan-ai:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 relative">
              {/* Subtle Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-20 z-0"></div>
              
              <div className="relative z-10 flex flex-col space-y-2">
                <div className="text-white/50 font-mono text-sm mb-6">
                  <span className="text-primary">$</span> ./analyze_skills --format=verbose
                </div>
                
                {skills.map((skill, index) => (
                  <ProgressBar 
                    key={index} 
                    name={skill.name} 
                    value={skill.value} 
                    color={skill.color} 
                  />
                ))}

                <div className="mt-6 text-white/50 font-mono text-sm">
                  <span className="text-primary">$</span> <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
