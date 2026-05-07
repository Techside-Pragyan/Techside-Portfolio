import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder EmailJS configuration
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
           <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold mb-4 border border-pink-500/20 uppercase tracking-widest">
            Transmission
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Contact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Establish Connection</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Seeking new challenges, collaborations, and opportunities. Deploy a message below and I will intercept it shortly.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer interactive">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300">
                  <FaEnvelope size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Secure Email</h4>
                  <a href="mailto:example@gmail.com" className="text-lg text-white group-hover:text-pink-400 transition-colors font-medium">
                    example@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer interactive">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <FaMapMarkerAlt size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Base Coordinates</h4>
                  <p className="text-lg text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 md:p-10 flex flex-col gap-6 relative group border border-white/10 hover:border-pink-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 pointer-events-none z-0"></div>
              
              <div className="relative z-10 flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Identifier (Name)</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 focus:bg-pink-500/5 transition-all duration-300 placeholder-gray-600 interactive"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Return Address (Email)</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-purple-500/5 transition-all duration-300 placeholder-gray-600 interactive"
                  placeholder="john@protocol.com"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Payload (Message)</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all duration-300 resize-none placeholder-gray-600 custom-scrollbar interactive"
                  placeholder="Initiate communication protocol..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="relative z-10 flex items-center justify-center gap-3 w-full py-4 mt-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 interactive disabled:opacity-50 disabled:cursor-not-allowed group/btn overflow-hidden"
              >
                <span className="relative z-10">{loading ? 'Transmitting...' : 'Transmit Data'}</span>
                {!loading && <FaPaperPlane className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>

              {success && (
                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm font-bold tracking-widest text-center relative z-10 uppercase mt-2">
                  ✓ Transmission Successful
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
