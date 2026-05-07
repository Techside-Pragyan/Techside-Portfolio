import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#030014] border-t border-white/10 pt-16 pb-8">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
              Techside
            </h2>
            <p className="text-gray-400 text-sm">
              Building the future with AI & Web Technologies.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
              <FaGithub size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
              <FaTwitter size={18} />
            </a>
          </div>

          <div>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-500 cursor-pointer transition-all animate-bounce"
            >
              <FaArrowUp />
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Pragyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
