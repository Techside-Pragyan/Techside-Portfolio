import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  // Track if the section is inside the viewport (amount: 0.1 means at least 10% visible)
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden bg-[#030014]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Interactive 3D Portal Crystal (Lazy Loaded) */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] lg:h-[700px] pointer-events-auto cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            {isInView ? (
              <spline-viewer 
                url="https://prod.spline.design/6Wq1Q7YGyM2G5qth/scene.splinecode" 
                className="w-full h-full scale-110"
              ></spline-viewer>
            ) : (
              // High-performance beautiful glowing backing placeholder when off-screen
              <div className="w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-3xl animate-pulse pointer-events-none"></div>
            )}
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)] -z-10 pointer-events-none"></div>
          </motion.div>

          {/* Right Side: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-purple-400 font-bold tracking-[0.4em] uppercase text-xs">About Me</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                I'm a Creative <br/>
                <span className="text-gradient-animated">Developer</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-xl leading-relaxed font-light max-w-xl">
              <p>
                I'm a <span className="text-white font-semibold">passionate developer & designer</span> with a flair for blending technical expertise with creative edge.
              </p>
              <p>
                Driven by curiosity, I always try to explore and learn new skills. My goal is to build digital products that are not just functional, but also visually stunning and memorable.
              </p>
            </div>

            <div className="flex items-center gap-10 pt-10 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">10+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">1+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Years of Experience</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
