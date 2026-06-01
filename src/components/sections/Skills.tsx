"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Briefcase, Trophy } from 'lucide-react';
import SkillEcosystem from '../canvas/SkillEcosystem';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<any>(null);

  return (
    <section 
      id="skills" 
      className="relative w-full h-[100vh] min-h-[800px] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#020205' }}
    >
      {/* 3D Canvas Background (Z-index 0) */}
      <div className="absolute inset-0 z-0">
        <SkillEcosystem setActiveSkill={setActiveSkill} />
      </div>

      {/* Subtle top/bottom vignette to blend perfectly with other sections */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#020205_0%,transparent_5%,transparent_95%,#020205_100%)] z-10" />

      {/* Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-40 md:top-48 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Sys.Init.Neural_Net
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl text-center">
            TECHNOLOGIES <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">& TOOLS</span>
          </h2>
          <p className="text-white/50 font-light mt-2 max-w-lg text-center text-sm md:text-base px-6 drop-shadow-md">
            Hover to explore the neural pathways. Click any node to access detailed capabilities.
          </p>
        </motion.div>
      </div>

      {/* Foreground UI - Skill Details Card Overlay */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md pointer-events-auto"
          >
            <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden border shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                 style={{ borderColor: `${activeSkill.color}50` }}>
              
              {/* Colored glow behind the card based on skill color */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-30 pointer-events-none"
                style={{ backgroundColor: activeSkill.color }}
              ></div>

              {/* Close button */}
              <button 
                onClick={() => setActiveSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition-colors z-20"
              >
                <X size={16} className="text-white" />
              </button>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg border"
                  style={{ backgroundColor: `${activeSkill.color}20`, color: activeSkill.color, borderColor: `${activeSkill.color}40` }}
                >
                  {activeSkill.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{activeSkill.name}</h3>
                  <div className="text-white/50 text-xs font-mono uppercase tracking-widest mt-1">Skill Profile</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="glass rounded-xl p-4 border border-white/5 bg-black/20">
                  <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider mb-2">
                    <Trophy size={14} /> Proficiency
                  </div>
                  <div className="text-2xl font-black text-white">{activeSkill.prof}</div>
                  <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: activeSkill.prof }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: activeSkill.color, boxShadow: `0 0 10px ${activeSkill.color}` }}
                    />
                  </div>
                </div>

                <div className="glass rounded-xl p-4 border border-white/5 bg-black/20">
                  <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider mb-2">
                    <Briefcase size={14} /> Experience
                  </div>
                  <div className="text-2xl font-black text-white">{activeSkill.exp}</div>
                </div>

                <div className="col-span-2 glass rounded-xl p-4 border border-white/5 bg-black/20 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-default">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="p-2 rounded-lg bg-white/5">
                      <Code2 size={16} style={{ color: activeSkill.color }} />
                    </div>
                    <span className="font-semibold text-sm">Deployed Projects</span>
                  </div>
                  <div className="font-mono font-bold text-xl text-white mr-2">{activeSkill.projects}</div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
