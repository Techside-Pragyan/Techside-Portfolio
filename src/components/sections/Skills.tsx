"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Briefcase, Trophy } from 'lucide-react';
import SkillEcosystem from '../canvas/SkillEcosystem';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<any>(null);

  return (
    <section id="skills" className="relative w-full h-[100vh] min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Massive Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-black text-white/5 tracking-tighter whitespace-nowrap"
        >
          CORE SKILLS
        </motion.h2>
      </div>

      {/* Subtle top/bottom vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#050505_0%,transparent_15%,transparent_85%,#050505_100%)] z-10" />

      {/* Physics 3D Ecosystem Canvas */}
      <div className="w-full h-full relative z-20">
        <SkillEcosystem setActiveSkill={setActiveSkill} />
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
            <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              {/* Colored glow behind the card based on skill color */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-30 pointer-events-none"
                style={{ backgroundColor: activeSkill.color }}
              ></div>

              {/* Close button */}
              <button 
                onClick={() => setActiveSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition-colors"
              >
                <X size={16} className="text-white" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg border border-white/20"
                  style={{ backgroundColor: `${activeSkill.color}20`, color: activeSkill.color }}
                >
                  {activeSkill.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{activeSkill.name}</h3>
                  <div className="text-white/50 text-xs font-mono uppercase tracking-widest mt-1">Skill Profile</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 border border-white/5">
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
                      style={{ backgroundColor: activeSkill.color }}
                    />
                  </div>
                </div>

                <div className="glass rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider mb-2">
                    <Briefcase size={14} /> Experience
                  </div>
                  <div className="text-2xl font-black text-white">{activeSkill.exp}</div>
                </div>

                <div className="col-span-2 glass rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/80">
                    <Code2 size={16} className="text-primary" />
                    <span className="font-semibold text-sm">Deployed Projects</span>
                  </div>
                  <div className="font-mono font-bold text-lg text-white">{activeSkill.projects}</div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
