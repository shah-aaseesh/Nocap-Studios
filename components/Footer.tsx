
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'work') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = {
    Solutions: ['ROI Optimization', 'Market Penetration', 'Brand Authority', 'Data Analytics'],
    Company: ['About Us', 'Careers', 'Contact', 'Privacy'],
    Connect: ['LinkedIn', 'Twitter / X', 'Insights']
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div className="flex flex-col gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white text-6xl md:text-[7rem] font-heading font-bold tracking-tight uppercase leading-[0.85]"
            >
              Unlock your<br />
              <span className="text-primary">potential</span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-md font-body leading-relaxed">
              Let's discuss how Nocap Studios can drive your next wave of growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="h-16 px-10 bg-primary hover:bg-white text-white hover:text-black text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-primary/10"
              >
                Schedule Strategy Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="h-16 px-10 border border-white/20 hover:bg-white/5 text-white text-sm font-bold uppercase tracking-widest transition-all"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:justify-items-end pt-8">
            <div className="flex flex-col gap-8">
              <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm">Quick Links</h4>
              <div className="flex flex-col gap-4">
                <button onClick={() => onNavigate('home')} className="text-gray-500 hover:text-white transition-colors text-base font-body text-left">Home</button>
                <button onClick={() => onNavigate('work')} className="text-gray-500 hover:text-white transition-colors text-base font-body text-left">The Archive</button>
                <button onClick={() => { onNavigate('home'); setTimeout(() => document.querySelector('#expertise')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-gray-500 hover:text-white transition-colors text-base font-body text-left">Expertise</button>
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              title !== 'Solutions' && (
                <div key={title} className="flex flex-col gap-8">
                  <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm">{title}</h4>
                  <div className="flex flex-col gap-4">
                    {links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="text-gray-500 hover:text-white transition-colors text-base font-body"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div onClick={() => onNavigate('home')} className="flex items-center gap-3 text-white cursor-pointer">
            <Camera className="text-primary" size={28} />
            <span className="font-heading font-bold tracking-tight uppercase text-2xl">Nocap Studios</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
            <p className="text-gray-600 text-xs font-body uppercase tracking-widest">
              © 2024 Nocap Studios Partners. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
