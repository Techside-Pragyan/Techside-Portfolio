"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Keyboard from '../canvas/Keyboard';

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden flex flex-col items-center justify-center bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-0 mt-10"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-2 text-white drop-shadow-md">
          Tech Stack
        </h2>
        <p className="text-white/60 text-xs font-mono lowercase tracking-widest">
          (hint: press a key)
        </p>
      </motion.div>

      {/* 3D Keyboard Canvas */}
      <div className="w-full max-w-5xl mx-auto relative z-20">
        <Keyboard />
      </div>
    </section>
  );
}
