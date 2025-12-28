
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Instagram, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'work') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = {
    Solutions: ['ROI Optimization', 'Market Penetration', 'Brand Authority', 'Data Analytics'],
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 md:pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">


        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <motion.div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-white cursor-pointer"
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.3 } }}
          >
            <img src="/logo.png" alt="Nocap Studios" className="h-16 w-auto object-contain" />
          </motion.div>
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
