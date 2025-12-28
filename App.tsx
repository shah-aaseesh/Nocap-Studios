
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { BookCall } from './components/BookCall';
import { WorkPage, PROJECTS } from './components/WorkPage'; // Static import for eager content loading
const Navbar = React.lazy(() => import('./components/Navbar').then(module => ({ default: module.Navbar })));
const Hero = React.lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const LogoMarquee = React.lazy(() => import('./components/LogoMarquee').then(module => ({ default: module.LogoMarquee })));
const Categories = React.lazy(() => import('./components/Categories').then(module => ({ default: module.Categories })));
const Portfolio = React.lazy(() => import('./components/Portfolio').then(module => ({ default: module.Portfolio })));
const Process = React.lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Clients = React.lazy(() => import('./components/Clients').then(module => ({ default: module.Clients })));
// const BookCall = React.lazy(() => import('./components/BookCall').then(module => ({ default: module.BookCall }))); // Static import above
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
// const WorkPage = React.lazy(() => import('./components/WorkPage').then(module => ({ default: module.WorkPage }))); // Now static

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-dark text-white">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

import { Preloader } from './components/Preloader';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'work'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  // Simulate initial loading & Eager load external scripts & assets
  useEffect(() => {
    // 1. Load Calendly Script immediately
    // (Handled automatically by preconnect/browsers, but explicit fetch helps)

    // 2. Preload WorkPage Images
    PROJECTS.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });

    // 3. Wait for 2.5 seconds to show off the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <React.Suspense fallback={<div className="h-20 bg-background-dark/80 backdrop-blur fixed top-0 w-full z-50" />}>
        <Navbar currentView={currentView} onNavigate={(view) => navigateTo(view)} />
      </React.Suspense>

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
              <React.Suspense fallback={<PageLoader />}>
                <Hero onNavigate={(view) => navigateTo(view)} isLoading={isLoading} />
                <LogoMarquee />
                <Categories onNavigate={navigateTo} />
                <Portfolio onNavigate={(view) => navigateTo(view)} />
                <Testimonials />
                <Clients />
                <Process />
              </React.Suspense>
              <BookCall /> {/* Loaded immediately outside Suspense to ensure iframe builds during Preloader */}
            </motion.div>
          ) : (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <React.Suspense fallback={<PageLoader />}>
                <WorkPage onNavigate={(view) => navigateTo(view)} initialCategory={selectedCategory} />
              </React.Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <React.Suspense fallback={<div className="h-20 bg-background-dark" />}>
        <Footer onNavigate={(view) => navigateTo(view)} />
      </React.Suspense>
    </div>
  );
};

export default App;
