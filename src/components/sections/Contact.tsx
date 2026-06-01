"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // Honeypot: hidden field to catch spam bots (bots fill it in, humans don't see it)
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If honeypot field is filled, it's a bot — silently ignore
    if (honeypot) {
      return;
    }
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-glow rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full glass text-primary text-xs font-mono uppercase tracking-widest mb-4">
            Transmission
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">CONTACT</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col justify-center gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Establish Connection</h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                Seeking new challenges, collaborations, and opportunities. Deploy a message below and I will intercept it shortly.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href="mailto:pragyanpramitamoharana@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs text-foreground/50 font-mono uppercase tracking-widest mb-1">Secure Email</h4>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">pragyanpramitamoharana@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs text-foreground/50 font-mono uppercase tracking-widest mb-1">Base Coordinates</h4>
                  <p className="text-lg font-medium group-hover:text-secondary transition-colors">India</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com/Techside-Pragyan" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pragyan-paramita-moharana" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-secondary hover:scale-110 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:pragyanpramitamoharana@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent hover:scale-110 transition-all">
                <FaEnvelope size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-[2.5rem] flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-foreground/60 uppercase tracking-widest">Identifier (Name)</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-surface border border-surface-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-foreground/60 uppercase tracking-widest">Return Address (Email)</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-surface border border-surface-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
                  placeholder="john@protocol.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-foreground/60 uppercase tracking-widest">Payload (Message)</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-surface border border-surface-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all resize-none"
                  placeholder="Initiate communication protocol..."
                />
              </div>

              {/* Honeypot field: invisible to humans, spam bots fill this in */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }}>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="group relative flex items-center justify-center gap-3 w-full py-4 mt-2 rounded-xl bg-primary text-white font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10">{loading ? 'Transmitting...' : 'Transmit Data'}</span>
                {!loading && <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {success && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm font-mono text-center mt-2 uppercase">
                  ✓ Transmission Successful
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
