
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'work';
  onNavigate: (view: 'home' | 'work') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home', href: '#' },
    { name: 'Our Work', view: 'work', href: '#work' },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'work', href: string) => {
    if (href.startsWith('#') && href !== '#work') {
      e.preventDefault();
      if (currentView !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(view);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (currentView === 'work') return link.view === 'work';
    if (currentView === 'home' && link.view === 'home' && link.href === '#') return true;
    return false;
  };

  const socialLinks = (
    <div className="flex items-center gap-4">
      <a href="https://www.instagram.com/_darshitjain_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
      <a href="https://www.linkedin.com/in/darshit-jain-685455335/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
      <a href="mailto:darshit@nocapstudios.co" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 border-b ${isScrolled ? 'glass-nav border-white/10 py-4 shadow-2xl' : 'bg-transparent border-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.3 } }}
        >

          <img src="/logo.png" alt="Nocap Studios" className="h-20 w-auto object-contain" />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.view as any, link.href)}
                  className={`text-xs font-bold uppercase tracking-[0.3em] transition-all relative py-2 px-4 rounded-full ${active ? 'bg-white text-blue-600' : 'text-gray-500 hover:bg-white hover:text-blue-600'
                    }`}
                >
                  {link.name}

                </a>
              );
            })}
          </div>


          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/darshitae913/interview-with-darshit-jain', '_blank')}
            className="group relative border border-white/20 rounded-full h-12 px-10 bg-transparent transition-all text-white hover:bg-white hover:text-blue-600 overflow-hidden"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em]">Book a Call</span>
          </motion.button>

          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

          {socialLinks}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? <X key="x" size={28} /> : <Menu key="menu" size={28} />}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-background-dark/98 border-b border-white/10 overflow-hidden backdrop-blur-3xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.view as any, link.href)}
                  className="text-2xl font-heading font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex gap-6 py-4">
                {socialLinks}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary text-white py-5 font-bold uppercase tracking-[0.3em] text-sm mt-4 active:scale-[0.98] transition-transform"
              >
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
