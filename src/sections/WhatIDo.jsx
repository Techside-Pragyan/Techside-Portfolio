import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineCode, HiOutlinePencilAlt, HiOutlineChip } from 'react-icons/hi';

const WhatIDo = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="work" className="py-32 px-6 relative z-10 overflow-hidden bg-transparent">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#A9715B]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Background Glass Plate */}
            <div className="absolute -inset-10 bg-white/30 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] -z-10 hidden lg:block" />

            <motion.div variants={itemVariants} className="mb-12 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#A9715B]"></div>
                <span className="text-[#A9715B] font-bold tracking-[0.4em] uppercase text-xs">My Expertise</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-[#2C2621] leading-[0.9] tracking-tighter">
                 WHAT <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9715B] to-[#D4A373]">I DO</span>
              </h2>
            </motion.div>

            <div className="flex flex-col relative group/deck pt-4">
              <motion.div variants={itemVariants} className="relative z-30 transition-all duration-500 hover:-translate-y-8 hover:scale-[1.02] hover:z-50 origin-bottom cursor-pointer">
                <CompetencyCard 
                  title="AI & ML ENGINEERING"
                  description="Architecting intelligent systems, training predictive models, and integrating state-of-the-art AI into practical applications."
                  icon={<HiOutlineChip />}
                  skills={['PYTHON', 'TENSORFLOW', 'SCIKIT-LEARN', 'COMPUTER VISION', 'GENAI']}
                />
              </motion.div>
              <motion.div variants={itemVariants} className="relative z-20 -mt-12 md:-mt-16 transition-all duration-500 hover:-translate-y-8 hover:scale-[1.02] hover:z-50 origin-bottom cursor-pointer group-hover/deck:translate-y-2">
                <CompetencyCard 
                  title="FULL STACK DEVELOPMENT"
                  description="Building high-performance, scalable web applications with the MERN stack, ensuring robust architecture and seamless user experiences."
                  icon={<HiOutlineCode />}
                  skills={['REACT', 'NODE.JS', 'MONGODB', 'EXPRESS', 'API INTEGRATION']}
                />
              </motion.div>
              <motion.div variants={itemVariants} className="relative z-10 -mt-12 md:-mt-16 transition-all duration-500 hover:-translate-y-8 hover:scale-[1.02] hover:z-50 origin-bottom cursor-pointer group-hover/deck:translate-y-4">
                <CompetencyCard 
                  title="PRODUCT DESIGN"
                  description="Crafting visually stunning, intuitive interfaces with a focus on premium aesthetics, smooth motion, and accessible design."
                  icon={<HiOutlinePencilAlt />}
                  skills={['FIGMA', 'PROTOTYPING', 'MOTION DESIGN', 'BRANDING']}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Immersive 3D Workstation Scene (Lazy Loaded) */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] lg:h-[800px] pointer-events-auto order-1 lg:order-2 cursor-grab active:cursor-grabbing flex items-center justify-center group"
          >
            {/* Spinning Aura */}
            <div className="absolute w-[70%] h-[70%] rounded-full border border-[#A9715B]/15 bg-gradient-to-tr from-[#A9715B]/5 to-transparent backdrop-blur-md animate-[spin_30s_linear_infinite] group-hover:bg-[#A9715B]/10 transition-colors duration-700" />

            {isInView ? (
              <spline-viewer 
                url="https://prod.spline.design/Kz77MhlO0h94hVp5/scene.splinecode" 
                className="w-full h-full scale-110 relative z-10 drop-shadow-2xl"
              ></spline-viewer>
            ) : (
              <div className="w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(169,113,91,0.15),transparent_70%)] blur-3xl animate-pulse pointer-events-none relative z-10"></div>
            )}
            
            {/* Overlay Gradient to blend desk with background */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#EAD8C3] to-transparent pointer-events-none z-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const CompetencyCard = ({ title, description, icon, skills }) => (
  <div className="relative overflow-hidden p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/90 to-white/40 border border-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 group">
    {/* Subtle glowing orb inside card */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#A9715B]/10 rounded-full blur-3xl group-hover:bg-[#A9715B]/20 transition-colors duration-500 pointer-events-none" />

    <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
      <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#2C2621] to-[#4A3F35] shadow-[0_10px_20px_rgba(44,38,33,0.2)] flex items-center justify-center text-3xl text-[#EAD8C3] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
        {icon}
      </div>
      <div className="space-y-4 w-full">
        <h3 className="text-2xl md:text-3xl font-black text-[#2C2621] tracking-tighter">{title}</h3>
        <p className="text-[#5C4A3D] font-light text-[16px] leading-[1.8] max-w-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-3">
           {skills.map(skill => (
             <span key={skill} className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-xl bg-white/60 text-[#8C5A46] border border-[#A9715B]/15 shadow-sm group-hover:bg-white transition-colors duration-300">
                {skill}
             </span>
           ))}
        </div>
      </div>
    </div>
  </div>
);

export default WhatIDo;
