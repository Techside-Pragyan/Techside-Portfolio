import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineCode, HiOutlinePencilAlt, HiOutlineSparkles } from 'react-icons/hi';

const WhatIDo = () => {
  const containerRef = useRef(null);
  // Lazy load 3D workstation scene only when visible (at least 15% inside screen viewport)
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  return (
    <section id="work" className="py-24 px-6 relative z-10 overflow-hidden bg-[#030014]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-12">
               WHAT <br/>
               <span className="text-gradient-animated">I DO</span>
            </h2>

            <div className="space-y-6">
              <CompetencyCard 
                title="DEVELOP"
                description="I build high-performance web applications using modern frameworks like React and Next.js, ensuring scalability and clean code."
                icon={<HiOutlineCode />}
                skills={['React', 'Next.js', 'Node.js', 'PostgreSQL']}
              />
              <CompetencyCard 
                title="DESIGN"
                description="I create visually stunning and intuitive user interfaces that provide an exceptional user experience and brand identity."
                icon={<HiOutlinePencilAlt />}
                skills={['Figma', 'UI/UX', 'Motion', 'Branding']}
              />
            </div>
          </motion.div>

          {/* Right Side: Immersive 3D Workstation Scene (Lazy Loaded) */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] pointer-events-auto order-1 lg:order-2 cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            {isInView ? (
              <spline-viewer 
                url="https://prod.spline.design/Kz77MhlO0h94hVp5/scene.splinecode" 
                className="w-full h-full"
              ></spline-viewer>
            ) : (
              // Light glowing ambient backdrop to represent desk workspace lighting when offscreen
              <div className="w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] blur-3xl animate-pulse pointer-events-none"></div>
            )}
            
            {/* Overlay Gradient to blend desk with background */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const CompetencyCard = ({ title, description, icon, skills }) => (
  <div className="glass-card p-8 border-white/5 hover:border-purple-500/30 transition-all group">
    <div className="flex items-start gap-6">
      <div className="text-3xl text-purple-400 group-hover:text-purple-300 transition-colors">
        {icon}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-black text-white tracking-tighter">{title}</h3>
        <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
           {skills.map(skill => (
             <span key={skill} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">
                {skill}
             </span>
           ))}
        </div>
      </div>
    </div>
  </div>
);

export default WhatIDo;
