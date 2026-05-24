import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayout } from 'react-icons/fi';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Interactive 3D Portal Crystal */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[700px] pointer-events-auto flex items-center justify-center group"
          >
            {/* Very subtle background circle */}
            <div className="absolute w-[70%] h-[70%] rounded-full border border-black/5 bg-black/[0.02] group-hover:bg-black/[0.04] transition-colors duration-700" />
            
            {isInView ? (
              <spline-viewer 
                url="https://prod.spline.design/6Wq1Q7YGyM2G5qth/scene.splinecode" 
                className="w-full h-full scale-110 relative z-10 drop-shadow-2xl"
              ></spline-viewer>
            ) : (
              <div className="w-[300px] h-[300px] rounded-full bg-black/5 animate-pulse relative z-10"></div>
            )}
          </motion.div>

          {/* Right Side: Editorial Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#2C2621]/30"></div>
                <span className="text-[#2C2621]/60 font-mono tracking-[0.3em] uppercase text-xs font-semibold">01. About Me</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#2C2621] leading-[1.1] tracking-tighter">
                Crafting <span className="italic font-light text-[#A9715B]">Digital</span> <br/>
                Experiences.
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6 text-[#7C7267] text-lg md:text-xl leading-relaxed font-light max-w-xl">
              <p>
                I'm a <b className="text-[#2C2621] font-semibold">Creative Developer & Designer</b> who bridges the gap between engineering and art.
              </p>
              <p>
                My passion lies in building intuitive, high-performance web applications that don't just function flawlessly—they leave a lasting visual impact. Driven by continuous learning, I transform complex problems into elegant, engaging digital solutions.
              </p>
            </motion.div>

            {/* Feature Badges - Editorial style */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 text-[#2C2621] text-xs uppercase tracking-widest font-semibold hover:bg-black/5 transition-colors cursor-default">
                <FiCode className="text-lg text-[#A9715B]" />
                Frontend Engineering
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 text-[#2C2621] text-xs uppercase tracking-widest font-semibold hover:bg-black/5 transition-colors cursor-default">
                <FiLayout className="text-lg text-[#A9715B]" />
                UI/UX Design
              </div>
            </motion.div>

            {/* Stats Section - Minimalist */}
            <motion.div variants={itemVariants} className="flex items-center gap-12 pt-10 border-t border-black/10">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-black text-[#2C2621] tracking-tighter">10</span>
                  <span className="text-3xl font-bold text-[#A9715B]">+</span>
                </div>
                <span className="text-[10px] font-mono text-[#2C2621]/50 uppercase tracking-widest mt-3 font-semibold">Projects Completed</span>
              </div>

              <div className="w-[1px] h-16 bg-black/10"></div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-black text-[#2C2621] tracking-tighter">1</span>
                  <span className="text-3xl font-bold text-[#A9715B]">+</span>
                </div>
                <span className="text-[10px] font-mono text-[#2C2621]/50 uppercase tracking-widest mt-3 font-semibold">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
