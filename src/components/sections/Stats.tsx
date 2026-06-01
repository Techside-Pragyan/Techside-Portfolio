"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitCommit, Cpu, Lightbulb, BrainCircuit } from 'lucide-react';

const stats = [
  { label: "Projects Built", value: "50+", icon: <Code2 size={24} />, color: "text-blue-400" },
  { label: "Contributions", value: "1186+", icon: <GitCommit size={24} />, color: "text-purple-400" },
  { label: "Technologies", value: "20+", icon: <Cpu size={24} />, color: "text-cyan-400" },
  { label: "Problems Solved", value: "500+", icon: <Lightbulb size={24} />, color: "text-yellow-400" },
  { label: "Models Built", value: "15+", icon: <BrainCircuit size={24} />, color: "text-green-400" },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#050505] py-16 border-y border-white/5 relative z-20">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors duration-500 bg-black/40 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
              
              <div className={`mb-4 p-3 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}>
                {stat.icon}
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                {stat.value}
              </h4>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
