import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am Pragyan\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: 'Thanks for reaching out! Pragyan will check this message soon. Feel free to explore the portfolio or use the contact form for formal inquiries.' 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#A9715B]/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_4px_20px_rgba(169,113,91,0.3)] z-[90] interactive hover:bg-[#2C2621]/90 hover:shadow-[0_4px_20px_rgba(44,38,33,0.3)] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaRobot size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 glass-card border border-black/[0.06] z-[90] shadow-[0_15px_50px_rgba(44,38,33,0.08)] flex flex-col overflow-hidden bg-white/60"
          >
            {/* Header */}
            <div className="bg-[#EAD8C3]/80 p-4 border-b border-black/[0.06] flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#A9715B]/10 flex items-center justify-center text-[#A9715B] border border-[#A9715B]/30">
                    <FaRobot />
                  </div>
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C2621] text-sm">AI Assistant</h3>
                  <p className="text-xs text-[#A9715B]">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#7C7267] hover:text-[#2C2621] interactive"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 h-64 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar bg-[#EAD8C3]/95">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm font-medium ${
                    msg.sender === 'user' 
                      ? 'bg-[#A9715B]/15 border border-[#A9715B]/20 text-[#2C2621] self-end rounded-tr-sm shadow-sm' 
                      : 'bg-[#EAE2D5]/40 border border-black/[0.04] text-[#2C2621]/90 self-start rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-black/[0.06] bg-[#EAD8C3] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-[#2C2621] text-sm placeholder-gray-400 font-medium"
              />
              <button 
                type="submit" 
                className="w-8 h-8 rounded-full bg-[#2C2621] flex items-center justify-center text-white hover:bg-[#A9715B] transition-colors interactive"
              >
                <FaPaperPlane size={12} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotUI;
