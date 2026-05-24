import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayout, FiArrowUpRight, FiCoffee, FiTerminal, FiCpu } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import animeAssistantAdvanced from '../assets/anime_assistant_advanced.png';
import '@google/model-viewer';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  const bentoVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-transparent">
      {/* High-Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto max-w-7xl relative">
        
        {/* Section Header with Futuristic Glitch UI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#A9715B] shadow-[0_0_10px_#A9715B]"></div>
              <span className="text-[#A9715B] font-mono tracking-[0.4em] uppercase text-xs flex items-center gap-2">
                <FiTerminal /> SYS.INIT.ABOUT
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#2C2621] tracking-tighter leading-none relative inline-block">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9715B] to-[#D4A373]">ME</span>
              <span className="absolute -top-4 -right-10 text-[10px] font-mono text-[#A9715B]/80 border border-[#A9715B]/30 px-2 py-0.5 rounded-full animate-pulse bg-white/50 backdrop-blur-md">v2.0</span>
            </h2>
          </div>
          <p className="text-[#7C7267] font-mono text-xs uppercase tracking-[0.2em] max-w-sm border-l-2 border-[#A9715B]/30 pl-4 py-1">
            Bridging the gap between <span className="text-[#2C2621] font-bold">algorithmic logic</span> & <span className="text-[#A9715B] font-bold">creative design</span>.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]" ref={containerRef}>
          
          {/* Bento 1: Interactive Anime Assistant (Advanced Cyberpunk) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-5 row-span-2 rounded-[2.5rem] bg-[#2C2621] overflow-hidden relative group flex flex-col shadow-[0_20px_40px_rgba(44,38,33,0.2)] border border-[#A9715B]/20 min-h-[450px]"
          >
            {/* Cyberpunk UI Overlay Elements */}
            <div className="absolute top-6 left-6 z-30 flex items-center gap-3 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"></span>
              <span className="text-white text-[10px] font-mono uppercase tracking-[0.2em]">Neural Link: Active</span>
            </div>
            
            <div className="absolute bottom-6 left-6 z-30 font-mono text-[8px] text-white/40 uppercase tracking-widest text-left leading-relaxed">
              ID: PRGYN-041 <br/>
              STATUS: ONLINE <br/>
              SYNC RATE: 99.8%
            </div>

            <div className="absolute bottom-6 right-6 z-30 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
               <FiCpu className="text-2xl text-[#34d399] animate-pulse" />
            </div>

            {/* Glowing Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,113,91,0.15),transparent_70%)] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 z-10"></div>
            
            {/* Cyber Scanner Line Animation */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#34d399] to-transparent opacity-0 group-hover:opacity-40 z-20 pointer-events-none blur-[1px]"
            ></motion.div>

            <div className="flex-1 w-full h-full relative pointer-events-auto flex items-center justify-center overflow-hidden">
              {isInView ? (
                <div className="w-full h-full relative z-20">
                  {/* Holographic Speech Bubble */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] right-[10%] z-40 bg-black/60 backdrop-blur-md border border-[#34d399]/50 text-white px-4 py-2 rounded-2xl rounded-br-none shadow-[0_0_15px_rgba(52,211,153,0.3)] pointer-events-none"
                  >
                    <span className="font-mono text-sm tracking-widest text-[#34d399] font-bold">Hii to everyone!</span>
                    <div className="absolute -bottom-2 right-0 w-4 h-4 bg-black/60 border-b border-r border-[#34d399]/50 transform rotate-45 translate-x-1 -translate-y-2"></div>
                  </motion.div>

                  {/* True Live 3D Interactive Female Avatar */}
                  <model-viewer
                    src="https://assets.babylonjs.com/meshes/HVGirl.glb"
                    alt="A 3D animated female avatar"
                    animation-name="Idle"
                    autoplay
                    camera-controls
                    disable-zoom
                    shadow-intensity="1"
                    style={{ width: '100%', height: '110%', backgroundColor: 'transparent', outline: 'none' }}
                  ></model-viewer>
                </div>
              ) : (
                <div className="w-[200px] h-[200px] rounded-full bg-white/5 animate-pulse border border-[#A9715B]/20"></div>
              )}
            </div>
          </motion.div>

          {/* Bento 2: Main Bio with Glass Tech Style */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] bg-white/40 backdrop-blur-3xl border border-white/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden group hover:bg-white/60 transition-colors duration-500 hover:shadow-[0_20px_50px_rgba(169,113,91,0.15)]"
          >
            {/* Tech Dots Background inside the card */}
            <div className="absolute inset-0 bg-[radial-gradient(#A9715B_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500"></div>
            
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-[#A9715B]/10 to-[#EAD8C3]/20 rounded-full blur-3xl group-hover:bg-[#A9715B]/25 transition-colors duration-700 pointer-events-none"></div>
            
            <h3 className="text-3xl md:text-5xl font-black text-[#2C2621] mb-6 tracking-tight leading-[1.1] relative z-10">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9715B] to-[#2C2621] italic pr-2">intelligent</span> applications that leave a lasting impact.
            </h3>
            <p className="text-[#7C7267] text-lg leading-relaxed font-light mb-10 max-w-2xl relative z-10">
              As a <b className="text-[#2C2621] font-bold">Creative Developer & AI Enthusiast</b>, I don't just write code—I engineer digital experiences. Driven by continuous learning, I transform complex problems into elegant, highly-performant solutions.
            </p>

            <div className="flex flex-wrap gap-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2C2621] text-white text-xs font-mono uppercase tracking-[0.15em] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,38,33,0.3)] transition-all cursor-default border border-transparent hover:border-[#A9715B]/50">
                <FiCode className="text-lg text-[#A9715B]" /> Frontend Eng
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white text-[#2C2621] text-xs font-mono uppercase tracking-[0.15em] hover:-translate-y-1 hover:shadow-lg transition-all cursor-default hover:bg-white">
                <FiLayout className="text-[#A9715B] text-lg" /> UI/UX Design
              </div>
            </div>
          </motion.div>

          {/* Bento 3: Stat 1 (Glowing Cyber Card) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-4 rounded-[2.5rem] bg-[#A9715B] p-8 md:p-10 relative overflow-hidden group hover:scale-[1.03] transition-transform duration-500 shadow-[0_15px_30px_rgba(169,113,91,0.3)] flex flex-col justify-between border border-[#A9715B]"
          >
            {/* Tech line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-[100px] pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
              <FiCoffee className="text-2xl" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl md:text-7xl font-black text-white tracking-tighter drop-shadow-md">10</span>
                <span className="text-3xl font-bold text-white/80 animate-pulse">+</span>
              </div>
              <span className="text-white/90 text-[10px] font-mono uppercase tracking-[0.2em] mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                Projects Completed
              </span>
            </div>
          </motion.div>

          {/* Bento 4: Stat 2 (Metallic Copper Card) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-3 rounded-[2.5rem] bg-gradient-to-br from-[#E6D5C3] via-[#D4A373] to-[#A9715B] p-8 md:p-10 relative overflow-hidden group hover:scale-[1.03] transition-transform duration-500 shadow-[0_15px_30px_rgba(169,113,91,0.2)] border border-white/40 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay pointer-events-none"></div>
            
            <div className="flex justify-end">
              <a href="#work" className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#2C2621] hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 z-10 relative">
                <FiArrowUpRight className="text-2xl" />
              </a>
            </div>
            <div className="mt-8 relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="text-6xl md:text-7xl font-black text-[#2C2621] tracking-tighter drop-shadow-sm">1</span>
                <span className="text-3xl font-bold text-[#A9715B] drop-shadow-sm">+</span>
              </div>
              <span className="text-[#5C4A3D] text-[10px] font-mono uppercase tracking-[0.2em] mt-3 block font-bold">
                Years Experience
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
