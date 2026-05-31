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
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          TECH <span className="text-secondary">STACK</span>
        </h2>
        <p className="text-foreground/60 text-sm font-mono uppercase tracking-widest">
          (Hint: interact with the keys)
        </p>
      </motion.div>

      {/* 3D Keyboard Canvas */}
      <div className="w-full max-w-5xl mx-auto relative z-20">
        <Keyboard />
      </div>
    </section>
  );
}
