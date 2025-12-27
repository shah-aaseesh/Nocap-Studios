
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { Categories } from './components/Categories';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WorkPage } from './components/WorkPage';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'work'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#work') {
        setCurrentView('work');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view: 'home' | 'work', category: string = 'All') => {
    if (view === 'work') {
      window.location.hash = 'work';
      setSelectedCategory(category);
    } else {
      window.location.hash = '';
      setSelectedCategory('All');
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <div className="relative min-h-screen bg-background-dark text-white font-body selection:bg-primary selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar currentView={currentView} onNavigate={(view) => navigateTo(view)} />

      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Hero onNavigate={(view) => navigateTo(view)} />
              <LogoMarquee />
              <Categories onNavigate={navigateTo} />
              <Portfolio onNavigate={(view) => navigateTo(view)} />
              <Testimonials />
            </motion.div>
          ) : (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <WorkPage onNavigate={(view) => navigateTo(view)} initialCategory={selectedCategory} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={(view) => navigateTo(view)} />
    </div>
  );
};

export default App;
