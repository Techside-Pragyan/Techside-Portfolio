import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayout, FiArrowUpRight, FiCoffee } from 'react-icons/fi';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  const bentoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#A9715B]"></div>
              <span className="text-[#A9715B] font-bold tracking-[0.3em] uppercase text-xs">Discover</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#2C2621] tracking-tighter leading-none">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9715B] to-[#D4A373]">ME</span>
            </h2>
          </div>
          <p className="text-[#7C7267] font-medium max-w-sm text-sm uppercase tracking-widest">
            Bridging the gap between algorithmic logic and creative design.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]" ref={containerRef}>
          
          {/* Bento 1: 3D Scene (Large Left) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-5 row-span-2 rounded-[2.5rem] bg-[#2C2621] overflow-hidden relative group flex flex-col shadow-[0_20px_40px_rgba(44,38,33,0.15)] min-h-[400px]"
          >
            <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest">Live Anime Assistant</span>
            </div>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,113,91,0.25),transparent_60%)] pointer-events-none transition-opacity duration-700 group-hover:opacity-60"></div>

            <div className="flex-1 w-full h-full relative pointer-events-auto flex items-center justify-center">
              {isInView ? (
                /* 
                  TODO FOR USER: 
                  To add your waving 3D Anime Girl, go to Spline (spline.design), find an anime girl model, 
                  click "Export" -> "Public URL", and replace the URL below with your new scene.splinecode link!
                */
                <spline-viewer 
                  url="https://prod.spline.design/6Wq1Q7YGyM2G5qth/scene.splinecode" 
                  className="w-full h-full scale-[1.15]"
                ></spline-viewer>
              ) : (
                <div className="w-[200px] h-[200px] rounded-full bg-white/5 animate-pulse"></div>
              )}
            </div>
          </motion.div>

          {/* Bento 2: Main Bio (Top Right) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:bg-white/80 transition-colors duration-500"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#A9715B]/10 rounded-full blur-3xl group-hover:bg-[#A9715B]/20 transition-colors duration-700"></div>
            
            <h3 className="text-3xl md:text-5xl font-black text-[#2C2621] mb-6 tracking-tight leading-[1.1]">
              I build <span className="italic font-light text-[#A9715B]">intelligent</span> applications that leave a lasting impact.
            </h3>
            <p className="text-[#7C7267] text-lg leading-relaxed font-light mb-10 max-w-2xl">
              As a <b className="text-[#2C2621] font-bold">Creative Developer & AI Enthusiast</b>, I don't just write code—I craft digital experiences. Driven by continuous learning, I transform complex problems into elegant, highly-performant solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2621] text-white text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#A9715B] transition-all cursor-default shadow-lg">
                <FiCode className="text-lg" /> Frontend Eng
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#2C2621]/10 text-[#2C2621] text-xs font-bold uppercase tracking-widest hover:scale-105 hover:border-[#A9715B]/40 transition-all cursor-default shadow-sm">
                <FiLayout className="text-[#A9715B] text-lg" /> UI/UX Design
              </div>
            </div>
          </motion.div>

          {/* Bento 3: Stat 1 (Bottom Middle-Left) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-4 rounded-[2.5rem] bg-[#A9715B] p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-[0_15px_30px_rgba(169,113,91,0.25)] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-8 group-hover:rotate-12 group-hover:bg-white/30 transition-all">
              <FiCoffee className="text-2xl" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">10</span>
                <span className="text-3xl font-bold text-white/70">+</span>
              </div>
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest mt-2 block">Projects Completed</span>
            </div>
          </motion.div>

          {/* Bento 4: Stat 2 & CTA (Bottom Right) */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-3 rounded-[2.5rem] bg-gradient-to-br from-[#E6D5C3] to-[#D4A373] p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-[0_15px_30px_rgba(44,38,33,0.08)] border border-white/40 flex flex-col justify-between"
          >
            <div className="flex justify-end">
              <a href="#work" className="w-14 h-14 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#2C2621] hover:bg-white hover:rotate-45 hover:shadow-lg transition-all shadow-sm">
                <FiArrowUpRight className="text-2xl" />
              </a>
            </div>
            <div className="mt-8">
              <div className="flex items-baseline gap-1">
                <span className="text-6xl md:text-7xl font-black text-[#2C2621] tracking-tighter">1</span>
                <span className="text-3xl font-bold text-[#A9715B]">+</span>
              </div>
              <span className="text-[#5C4A3D] text-xs font-bold uppercase tracking-widest mt-2 block">Years Experience</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
