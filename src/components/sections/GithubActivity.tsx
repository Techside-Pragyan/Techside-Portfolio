"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';

const GITHUB_USER = "Techside-Pragyan";

export default function GithubActivity() {
  return (
    <section id="github" className="py-32 px-6 relative z-10 overflow-hidden" style={{ background: '#0d1117' }}>

      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#010103] to-transparent pointer-events-none z-0" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#30363d]" />
            <div className="flex items-center gap-2 text-[#58a6ff] font-mono text-sm uppercase tracking-[0.3em]">
              <FaGithub size={16} />
              <span>Open Source</span>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#30363d]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            GITHUB <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#3fb950]">ACTIVITY</span>
          </h2>
          <p className="text-[#8b949e] text-lg max-w-2xl mx-auto font-light">
            A visual snapshot of my open-source contributions, streaks, and coding activity.
          </p>
        </motion.div>

        {/* GitHub-styled profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden mb-6"
        >
          {/* Card header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#161b22]">
            <FaGithub size={16} className="text-[#8b949e]" />
            <span className="text-[#58a6ff] text-sm font-semibold hover:underline cursor-pointer">{GITHUB_USER}</span>
            <span className="text-[#8b949e] text-sm">/ Overview</span>
          </div>

          {/* Stats grid — GitHub-style */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#30363d]">
            {[
              { icon: <FaCode size={14} />, label: "Repositories", value: "60+", color: "text-[#58a6ff]" },
              { icon: <FaStar size={14} />, label: "Total Stars", value: "120+", color: "text-[#e3b341]" },
              { icon: <FaCodeBranch size={14} />, label: "Total Forks", value: "40+", color: "text-[#3fb950]" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#161b22] px-6 py-5 flex items-center gap-3">
                <span className={`${stat.color}`}>{stat.icon}</span>
                <div>
                  <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
                  <div className="text-[#8b949e] text-xs mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Graph — exact GitHub look */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden mb-6"
        >
          {/* Card header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d]">
            <span className="text-[#e6edf3] text-sm font-semibold">📈 Contribution Calendar</span>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#58a6ff] text-xs hover:underline flex items-center gap-1"
            >
              View on GitHub <FaGithub size={12} />
            </a>
          </div>

          <div className="p-4 md:p-6 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/3fb950/${GITHUB_USER}`}
              alt="GitHub Contribution Calendar"
              className="w-full h-auto min-w-[600px]"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="flex items-center justify-end gap-1 mt-3 text-[#8b949e] text-xs">
              <span>Less</span>
              {['#161b22','#0e4429','#006d32','#26a641','#3fb950'].map(c => (
                <span key={c} className="w-3 h-3 rounded-sm inline-block border border-[#30363d]" style={{ background: c }} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-[#30363d]">
              <span className="text-[#e6edf3] text-sm font-semibold">📊 GitHub Stats</span>
            </div>
            <div className="p-4 flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=github_dark&hide_border=true&bg_color=161b22&title_color=58a6ff&icon_color=3fb950&text_color=8b949e&ring_color=3fb950&include_all_commits=true&count_private=true`}
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Most Used Languages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-[#30363d]">
              <span className="text-[#e6edf3] text-sm font-semibold">🔤 Most Used Languages</span>
            </div>
            <div className="p-4 flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=github_dark&hide_border=true&bg_color=161b22&title_color=58a6ff&text_color=8b949e&langs_count=8`}
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
