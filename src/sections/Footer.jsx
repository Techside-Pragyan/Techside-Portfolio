import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-transparent pt-20 pb-10 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A9715B]/30 to-transparent opacity-50 shadow-[0_0_15px_rgba(169,113,91,0.15)]"></div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#A9715B]/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-2 tracking-tighter flex items-center justify-center md:justify-start gap-2 text-gradient-animated">
               <div className="w-6 h-6 rounded bg-[#2C2621] flex items-center justify-center text-white text-xs shadow-[0_0_10px_rgba(44,38,33,0.15)]">
                 T
               </div>
               Techside
            </h2>
            <p className="text-[#7C7267] text-sm max-w-sm">
              Engineering intelligent systems and crafting futuristic digital experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <SocialLink href="#" icon={<FaGithub />} />
            <SocialLink href="#" icon={<FaLinkedin />} />
            <SocialLink href="#" icon={<FaTwitter />} />
          </div>

          <div>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-[#A9715B] hover:text-white hover:bg-[#A9715B] border border-[#A9715B]/30 cursor-pointer transition-all duration-300 interactive group"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="text-center border-t border-black/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7C7267] text-sm font-medium">
            &copy; {new Date().getFullYear()} Pragyan Paramita Moharana. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-[#7C7267]">
            <span className="hover:text-[#A9715B] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#A9715B] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-[#7C7267] hover:text-[#A9715B] hover:border-[#A9715B] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(169,113,91,0.15)] interactive text-xl"
  >
    {icon}
  </a>
)

export default Footer;
