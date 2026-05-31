"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TechUniverse from '../canvas/TechUniverse';

export default function TechStack() {
  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#020205]">
      {/* 3D Tech Universe Background */}
      <TechUniverse />

      {/* Foreground UI Overlay */}
      <div className="absolute top-0 w-full pt-32 pointer-events-none z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-2 text-white drop-shadow-2xl tracking-tight">
            Tech Stack
          </h2>
          <p className="text-white/60 text-sm font-mono lowercase tracking-widest drop-shadow-md">
            (hint: press a key)
          </p>
        </motion.div>
      </div>
      
      {/* Subtle vignette for deep space effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#020205]/80" />
    </section>
  );
}
