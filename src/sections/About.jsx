import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineCode, HiOutlineGlobe } from 'react-icons/hi';

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
                Passionate <br/>
                <span className="text-gradient-animated">Full Stack Developer</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a B.Tech Computer Science student at <span className="text-white font-semibold">DRIEMS University</span> with a deep love for code. I don't just build websites; I build digital experiences.
              </p>
              <p>
                My core strength lies in translating complex requirements into clean, efficient, and scalable code. Whether it's crafting a pixel-perfect frontend or architecting a robust backend, I thrive on challenges.
              </p>
            </div>

            {/* Stats Integrated */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="space-y-2">
                <div className="text-4xl font-black text-purple-500">1+ Years</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-cyan-400">10+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Projects</div>
              </div>
            </div>

            <div className="flex gap-4">
               <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                  <HiOutlineLightBulb size={24} />
               </div>
               <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                  <HiOutlineCode size={24} />
               </div>
               <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-blue-400">
                  <HiOutlineAcademicCap size={24} />
               </div>
            </div>
          </motion.div>

          {/* Right Side: Portrait Image with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-white/20">
                 <div className="text-white font-bold text-lg mb-1">The Developer</div>
                 <div className="text-gray-400 text-sm">Building the future, one line at a time.</div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] -z-10"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] -z-10"
            ></motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
