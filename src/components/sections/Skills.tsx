"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SkillSpheres from '../canvas/SkillSpheres';

const skillProgress = [
  { name: 'AI / ML', progress: 95, color: 'bg-primary' },
  { name: 'Python', progress: 90, color: 'bg-[#facc15]' },
  { name: 'TensorFlow', progress: 85, color: 'bg-[#f97316]' },
  { name: 'OpenCV', progress: 80, color: 'bg-[#10b981]' },
  { name: 'SQL', progress: 85, color: 'bg-[#8b5cf6]' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: 3D Spheres Canvas */}
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] glass-card overflow-hidden">
          <SkillSpheres />
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
        </div>

        {/* Right: Skills Info & Progress Indicators */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
              CORE <span className="text-primary">SKILLS</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed font-light text-lg">
              Interact with the 3D spheres on the left! Below is a breakdown of my proficiency in various technologies driving my AI solutions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 mt-4">
            {skillProgress.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between items-center text-sm font-bold tracking-wider">
                  <span>{skill.name}</span>
                  <span className="text-foreground/60">{skill.progress}%</span>
                </div>
                <div className="w-full h-2 glass rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
