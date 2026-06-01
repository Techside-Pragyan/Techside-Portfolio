"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GITHUB_USER = "Techside-Pragyan";
const BASE = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_USER}/main`;

export default function GithubActivity() {
  return (
    <section id="github" className="py-32 px-6 relative z-10 bg-[#010103] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-[#010103] to-[#010103] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-[0.3em]">
              <FaGithub size={16} />
              <span>Open Source</span>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            GITHUB{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative inline-block">
              ACTIVITY
              <div className="absolute bottom-2 left-0 w-full h-[4px] bg-secondary opacity-50 blur-[2px]"></div>
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            A visual representation of my open-source contributions, continuous learning, and project history.
          </p>
        </motion.div>

        {/* Graphs Container */}
        <div className="flex flex-col gap-16">

          {/* 📐 3D Perspective History */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-3xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center cursor-crosshair"
          >
            <div className="flex items-center gap-3 self-start mb-12 text-white font-mono uppercase tracking-widest text-sm relative z-10">
              <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                <Activity size={18} />
              </div>
              <span className="font-bold">📐 3D Perspective History</span>
            </div>

            <div className="relative w-full max-w-5xl flex justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
              <img
                src={`${BASE}/profile-3d-contrib/profile-night-view.svg`}
                alt="GitHub 3D Contribution Graph"
                className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10 mix-blend-screen"
                style={{ filter: "hue-rotate(-10deg) saturate(1.5)" }}
              />
            </div>
          </motion.div>

          {/* 📈 Contribution Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-3xl p-8 md:p-12 hover:border-secondary/30 transition-all duration-500 shadow-2xl hover:shadow-[0_0_60px_rgba(139,92,246,0.15)] flex flex-col items-center justify-center cursor-crosshair"
          >
            <div className="flex items-center gap-3 self-start mb-12 text-white font-mono uppercase tracking-widest text-sm relative z-10">
              <div className="p-2 bg-secondary/20 rounded-lg group-hover:bg-secondary group-hover:text-white text-secondary transition-colors">
                <Activity size={18} />
              </div>
              <span className="font-bold">📈 Contribution Calendar</span>
            </div>

            <div className="relative w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center">
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
              <img
                src={`https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_USER}/output/galaga-contribution-graph-dark.svg`}
                alt="GitHub Contribution Calendar"
                className="min-w-[800px] h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative z-10 mix-blend-screen"
                onError={(e) => {
                  // Fallback to ghchart if metrics svg fails
                  e.currentTarget.src = `https://ghchart.rshah.org/6366f1/${GITHUB_USER}`;
                  e.currentTarget.style.minWidth = "600px";
                  e.currentTarget.style.mixBlendMode = "normal";
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
