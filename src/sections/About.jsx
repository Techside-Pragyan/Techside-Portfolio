import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineCode, HiOutlineBadgeCheck } from 'react-icons/hi';

const SkillRadar = () => {
  const points = "150,50 250,120 220,230 80,230 50,120"; // Sample points for a pentagon
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Radar Background Polygons */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <motion.polygon
            key={i}
            points={points}
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity={0.1}
            style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
          />
        ))}
        {/* Connecting Lines */}
        <line x1="150" y1="150" x2="150" y2="50" stroke="white" strokeWidth="1" opacity="0.1" />
        <line x1="150" y1="150" x2="250" y2="120" stroke="white" strokeWidth="1" opacity="0.1" />
        <line x1="150" y1="150" x2="220" y2="230" stroke="white" strokeWidth="1" opacity="0.1" />
        <line x1="150" y1="150" x2="80" y2="230" stroke="white" strokeWidth="1" opacity="0.1" />
        <line x1="150" y1="150" x2="50" y2="120" stroke="white" strokeWidth="1" opacity="0.1" />

        {/* Data Polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          points="150,80 230,130 190,200 100,210 70,130"
          fill="url(#radarGradient)"
          stroke="#06b6d4"
          strokeWidth="2"
          style={{ transformOrigin: 'center' }}
        />
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      {/* Labels */}
      <div className="absolute top-0 text-[8px] font-bold text-gray-500 uppercase tracking-widest">Logic</div>
      <div className="absolute bottom-0 text-[8px] font-bold text-gray-500 uppercase tracking-widest">AI/ML</div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[8px] font-bold text-gray-500 uppercase tracking-widest">Tools</div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[8px] font-bold text-gray-500 uppercase tracking-widest">Web</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-purple-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
              >
                The Developer
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white leading-tight">
                Decoding <br/>
                <span className="text-gradient-animated">Intelligence</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm Pragyan, an <span className="text-white font-semibold">AI/ML Enthusiast</span> and Full Stack Developer. My journey is fueled by a relentless drive to build clean, functional, and creative technology.
              </p>
              <p>
                I specialize in bridging the gap between sophisticated Machine Learning models and high-performance web interfaces, ensuring every project is as smart as it is beautiful.
              </p>
            </div>

            <div className="flex items-center gap-10">
               <SkillRadar />
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <HiOutlineBadgeCheck className="text-cyan-400 text-xl" />
                     <span className="text-sm font-bold text-gray-300">Verified Researcher</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-sm font-bold text-gray-300">Open for Collaboration</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Portrait Image with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-white/20">
                 <div className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                    Pragyan <HiOutlineBadgeCheck className="text-cyan-400" />
                 </div>
                 <div className="text-gray-400 text-sm">Building the future of AI.</div>
              </div>
            </div>

            {/* Decorative mesh */}
            <div className="absolute -top-10 -right-10 w-full h-full border-r-2 border-t-2 border-white/5 rounded-[2.5rem] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
