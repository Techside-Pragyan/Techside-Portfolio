import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaRegStar, FaRegEye } from 'react-icons/fa';

const GitHubGraph = () => {
  // Generate random data for contribution graph
  const rows = 7;
  const cols = 20;
  const graph = Array.from({ length: rows * cols }, () => Math.floor(Math.random() * 5));

  return (
    <div className="relative group perspective-1000">
      <div className="grid grid-flow-col grid-rows-7 gap-1 md:gap-2 transform rotate-x-20 rotate-y-[-20deg] skew-x-5 transition-transform duration-700 group-hover:rotate-x-30 group-hover:rotate-y-[-30deg]">
        {graph.map((level, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.005 }}
            className={`w-3 h-3 md:w-5 md:h-5 rounded-sm md:rounded shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
              level === 0 ? 'bg-white/5' : 
              level === 1 ? 'bg-emerald-900/40' :
              level === 2 ? 'bg-emerald-700/60' :
              level === 3 ? 'bg-emerald-500/80' : 'bg-emerald-400'
            }`}
            style={{ 
              height: `${level * 4 + 12}px`,
              boxShadow: level > 0 ? `0 0 ${level * 5}px rgba(52, 211, 153, 0.4)` : 'none'
            }}
          ></motion.div>
        ))}
      </div>
      
      {/* 3D Label */}
      <div className="absolute -bottom-10 left-0 text-xs font-mono text-emerald-400/50 flex items-center gap-2">
         <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
         2,164 contributions in the last year
      </div>
    </div>
  );
};

const Activity = () => {
  return (
    <section id="activity" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
           <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white">
                GitHub <span className="text-gradient-animated">Activity</span>
              </h2>
              <p className="text-gray-400 max-w-md">
                Tracking the evolution of code. A visual representation of daily commits and technical growth.
              </p>
           </div>
           
           <div className="flex gap-6">
              <div className="glass-card p-4 flex flex-col items-center gap-1 min-w-[100px]">
                 <FaCodeBranch className="text-purple-500 text-xl" />
                 <span className="text-2xl font-black text-white">178</span>
                 <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Repos</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center gap-1 min-w-[100px]">
                 <FaRegStar className="text-cyan-400 text-xl" />
                 <span className="text-2xl font-black text-white">1.2k</span>
                 <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Stars</span>
              </div>
           </div>
        </div>

        <div className="glass-card p-10 md:p-20 flex flex-col items-center justify-center overflow-hidden">
           <GitHubGraph />
           
           <div className="mt-20 grid md:grid-cols-3 gap-10 w-full">
              {[
                { label: "JavaScript", color: "bg-yellow-400", percent: 45 },
                { label: "Python", color: "bg-blue-500", percent: 35 },
                { label: "TypeScript", color: "bg-cyan-500", percent: 20 },
              ].map(lang => (
                <div key={lang.label} className="space-y-3">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">{lang.label}</span>
                      <span className="text-white">{lang.percent}%</span>
                   </div>
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        transition={{ duration: 1 }}
                        className={`h-full ${lang.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                      ></motion.div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
