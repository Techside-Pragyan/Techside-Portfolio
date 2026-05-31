"use client";
import React from 'react';
import SkillEcosystem from '../canvas/SkillEcosystem';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-[#000000]">
      
      {/* Massive Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-[12vw] md:text-[14vw] font-thin text-[#1a1a1a] tracking-tight leading-none uppercase">
          Core Skills
        </h2>
      </div>

      {/* Physics 3D Ecosystem Canvas */}
      <div className="w-full h-full relative z-10">
        <SkillEcosystem />
      </div>

    </section>
  );
}
