import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayout, FiAward } from 'react-icons/fi';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-transparent">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#A9715B]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Interactive 3D Portal Crystal (Lazy Loaded) */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] lg:h-[700px] pointer-events-auto cursor-grab active:cursor-grabbing flex items-center justify-center group"
          >
            {/* Elegant glass ring behind 3D object */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-[#A9715B]/20 bg-[#A9715B]/5 backdrop-blur-3xl animate-[spin_20s_linear_infinite] group-hover:bg-[#A9715B]/10 transition-colors duration-700" />
            
            {isInView ? (
              <spline-viewer 
                url="https://prod.spline.design/6Wq1Q7YGyM2G5qth/scene.splinecode" 
                className="w-full h-full scale-110 relative z-10 drop-shadow-2xl"
              ></spline-viewer>
            ) : (
              <div className="w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(169,113,91,0.15),transparent_70%)] blur-3xl animate-pulse pointer-events-none relative z-10"></div>
            )}
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,113,91,0.08),transparent_70%)] -z-10 pointer-events-none"></div>
          </motion.div>

          {/* Right Side: Premium About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative space-y-10"
          >
            {/* Floating Glass Card Background for Text */}
            <div className="absolute -inset-8 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.02)] -z-10 hidden md:block" />

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#A9715B]"></div>
                <span className="text-[#A9715B] font-bold tracking-[0.4em] uppercase text-xs">Discover Who I Am</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#2C2621] leading-[1.1] tracking-tighter">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9715B] to-[#D4A373]">Digital</span> <br/>
                Experiences.
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6 text-[#7C7267] text-lg md:text-xl leading-relaxed font-light max-w-xl">
              <p>
                I'm a <b className="text-[#2C2621] font-bold">Creative Developer & Designer</b> who bridges the gap between engineering and art.
              </p>
              <p>
                My passion lies in building intuitive, high-performance web applications that don't just function flawlessly—they leave a lasting visual impact. Driven by continuous learning, I transform complex problems into elegant, engaging digital solutions.
              </p>
            </motion.div>

            {/* Feature Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 border border-white shadow-sm backdrop-blur-md text-[#2C2621] font-medium text-sm hover:-translate-y-1 transition-transform cursor-default">
                <FiCode className="text-[#A9715B] text-lg" />
                Frontend Engineering
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 border border-white shadow-sm backdrop-blur-md text-[#2C2621] font-medium text-sm hover:-translate-y-1 transition-transform cursor-default">
                <FiLayout className="text-[#A9715B] text-lg" />
                UI/UX Design
              </div>
            </motion.div>

            {/* Stats Section with Glass Cards */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 pt-10">
              <div className="w-full sm:flex-1 p-6 rounded-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-[#2C2621]">10+</span>
                  <div className="w-10 h-10 rounded-full bg-[#A9715B]/10 flex items-center justify-center text-[#A9715B]">
                    <FiAward className="text-xl" />
                  </div>
                </div>
                <span className="text-xs font-bold text-[#7C7267] uppercase tracking-widest mt-2 block">Projects Completed</span>
              </div>

              <div className="w-full sm:flex-1 p-6 rounded-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-[#2C2621]">1+</span>
                  <div className="w-10 h-10 rounded-full bg-[#A9715B]/10 flex items-center justify-center text-[#A9715B]">
                    <FiCode className="text-xl" />
                  </div>
                </div>
                <span className="text-xs font-bold text-[#7C7267] uppercase tracking-widest mt-2 block">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
