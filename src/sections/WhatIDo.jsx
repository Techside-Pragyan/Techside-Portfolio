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

          {/* Right Side: AI Neural Terminal Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center order-1 lg:order-2"
          >
            {/* Background glowing data rings */}
            <div className="absolute w-[80%] h-[80%] max-w-[500px] max-h-[500px] rounded-full border-[1px] border-dashed border-[#A9715B]/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[60%] h-[60%] max-w-[350px] max-h-[350px] rounded-full border-[1px] border-[#A9715B]/30 animate-[spin_25s_linear_infinite_reverse]" />
            
            {/* Floating Terminal Window */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 md:right-[5%] top-[10%] w-[280px] md:w-[320px] bg-[#1a1614] backdrop-blur-xl border border-[#A9715B]/30 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-30"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#A9715B]/20 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-[#A9715B]/70 text-[10px] font-mono ml-2 uppercase tracking-widest">train_model.py</span>
              </div>
              <div className="p-5 font-mono text-[10px] md:text-[11px] text-[#34d399] leading-loose opacity-90">
                <p>import tensorflow as tf</p>
                <p>model = tf.keras.Sequential([</p>
                <p className="pl-4">tf.keras.layers.Dense(512),</p>
                <p className="pl-4">tf.keras.layers.Dropout(0.2),</p>
                <p className="pl-4">tf.keras.layers.Dense(10)</p>
                <p>])</p>
                <p className="text-[#A9715B] mt-3">> Epoch 1/50... [Running]</p>
                <p className="text-white/60">> Loss: 0.234 | Acc: 0.94</p>
              </div>
            </motion.div>

            {/* Floating Glass Stats Card */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-0 md:left-[5%] bottom-[10%] w-[220px] md:w-[260px] bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 shadow-[0_30px_60px_rgba(169,113,91,0.15)] z-40 flex flex-col items-center gap-4"
            >
              <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="40%" stroke="rgba(169,113,91,0.1)" strokeWidth="8" fill="none" />
                  <circle cx="50%" cy="50%" r="40%" stroke="#A9715B" strokeWidth="8" fill="none" strokeDasharray="250" strokeDashoffset="40" className="animate-[spin_3s_ease-in-out_infinite]" />
                </svg>
                <div className="absolute text-xl md:text-2xl font-black text-[#2C2621]">98<span className="text-sm font-bold">%</span></div>
              </div>
              <div className="text-center">
                <h4 className="text-[#2C2621] font-black text-sm tracking-tight">Model Accuracy</h4>
                <p className="text-[#A9715B] text-[9px] font-mono uppercase tracking-widest mt-1">Live Optimization</p>
              </div>
            </motion.div>

            {/* Central glowing AI Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#A9715B] to-[#2C2621] rounded-full blur-[60px] opacity-30 animate-pulse z-10"></div>
            
            <motion.div 
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-48 h-48 md:w-64 md:h-64 border border-[#A9715B]/30 rounded-[3rem] bg-white/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(169,113,91,0.2)] overflow-hidden group/core"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
              <FiCpu className="text-6xl md:text-7xl text-[#2C2621] drop-shadow-lg relative z-10 group-hover/core:scale-110 transition-transform duration-500" />
            </motion.div>
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
