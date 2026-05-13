import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaRegStar } from 'react-icons/fa';

const TechBall = ({ icon, color, label }) => (
  <motion.div
    drag
    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
    animate={{ 
      y: [0, Math.random() * 20 - 10, 0],
      x: [0, Math.random() * 20 - 10, 0],
      rotate: [0, Math.random() * 10 - 5, 0]
    }}
    transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center cursor-grab active:cursor-grabbing"
  >
    {/* The Ball */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
       <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
       <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white opacity-10 blur-xl rounded-full"></div>
    </div>
    
    {/* Icon */}
    <div className="relative z-10 text-3xl md:text-5xl text-white/80">
      {icon}
    </div>
    
    {/* Label */}
    <div className="absolute -bottom-4 text-[8px] font-bold text-gray-500 uppercase tracking-widest">{label}</div>
  </motion.div>
);

const Activity = () => {
  return (
    <section id="activity" className="py-24 px-6 relative z-10 overflow-hidden bg-[#030014]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
           <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">
                MY TECH <span className="text-gradient-animated">STACK</span>
              </h2>
              <p className="text-gray-400 max-w-md font-light">
                The core technologies I use to bring ideas to life. Interactive 3D elements representing my technical foundation.
              </p>
           </div>
           
           <div className="flex gap-6">
              <div className="glass-card p-4 flex flex-col items-center gap-1 min-w-[100px]">
                 <FaCodeBranch className="text-purple-500 text-xl" />
                 <span className="text-2xl font-black text-white">178</span>
                 <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Repos</span>
              </div>
           </div>
        </div>

        {/* Tech Balls Container */}
        <div className="relative py-20 flex flex-wrap items-center justify-center gap-10 md:gap-20">
           <TechBall label="React" color="from-cyan-500/20" icon="⚛️" />
           <TechBall label="Next.js" color="from-gray-500/20" icon="▲" />
           <TechBall label="Tailwind" color="from-blue-400/20" icon="🎨" />
           <TechBall label="Node.js" color="from-green-500/20" icon="🟢" />
           <TechBall label="Python" color="from-blue-600/20" icon="🐍" />
           <TechBall label="JS" color="from-yellow-400/20" icon="JS" />
           <TechBall label="Figma" color="from-purple-500/20" icon="🎨" />
        </div>

        {/* GitHub Graph (Subtle Background) */}
        <div className="mt-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
           <h3 className="text-center text-[10px] font-bold text-gray-600 uppercase tracking-[0.5em] mb-10">Contribution History</h3>
           <div className="flex justify-center overflow-hidden pointer-events-none">
              <GitHubGraphPreview />
           </div>
        </div>
      </div>
    </section>
  );
};

const GitHubGraphPreview = () => {
  const rows = 7;
  const cols = 50;
  const graph = Array.from({ length: rows * cols }, () => Math.floor(Math.random() * 5));

  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1">
      {graph.map((level, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-sm ${
            level === 0 ? 'bg-white/5' : 
            level === 1 ? 'bg-emerald-900/40' :
            level === 2 ? 'bg-emerald-700/60' :
            level === 3 ? 'bg-emerald-500/80' : 'bg-emerald-400'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Activity;
