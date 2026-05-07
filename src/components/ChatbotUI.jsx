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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] z-[90] interactive hover:bg-cyan-500/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
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
            className="fixed bottom-24 right-6 w-80 sm:w-96 glass-card border border-purple-500/30 z-[90] shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-purple-900/40 p-4 border-b border-purple-500/20 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/50">
                    <FaRobot />
                  </div>
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                  <p className="text-xs text-cyan-400">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white interactive"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 h-64 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar bg-[#030014]/60">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-cyan-500/20 border border-cyan-500/30 text-white self-end rounded-tr-sm' 
                      : 'bg-purple-500/20 border border-purple-500/30 text-gray-200 self-start rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-purple-500/20 bg-black/40 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500"
              />
              <button 
                type="submit" 
                className="w-8 h-8 rounded-full bg-purple-500/50 flex items-center justify-center text-white hover:bg-cyan-500/50 transition-colors interactive"
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
