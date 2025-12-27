
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Play, ArrowUpRight, Filter, ChevronRight, ArrowLeft, Clock, Eye, LayoutGrid, Building2, Megaphone, User } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (view: 'home' | 'work') => void;
}

const CATEGORIES = ['All', 'Real Estate', 'Commercial', 'Personal Brand'];

const PROJECTS = [
  {
    id: 1,
    title: "Skyline Residences",
    category: "Real Estate",
    client: "Skyline Realty Group",
    impact: "+35% Sales Velocity",
    duration: "0:45",
    views: "12.4K",
    description: "A luxury cinematic walkthrough capturing the intersection of modern architecture and urban lifestyle.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyU6IAlNR9tiOjaPMfbWYK3g_Hx-RL90mqBrFxaq46WqhlxIiwOS4ljWgJxsApEuzycElhqoX0KgKK0OvCe3N6wqXHI7FAYffqLcvXJgqntMSpZzyB9SmSWqo55FOVyaxpKjc_2SSXZGx4b_w_EtsNNiMiPzIwLb4ssxmmeArVpSQyezc9J5mGk4SM_IIK9ZZzGB_XeikALvphyqkbcbefIgS4JpHGzwa6wTJEfMes1pJ12iErTsGLKL9s-mfQboVcBn_uQvXhlgqz"
  },
  {
    id: 2,
    title: "InnovateCorp Campaign",
    category: "Commercial",
    client: "Innovate Corp",
    impact: "2.1x Lead Gen",
    duration: "0:15",
    views: "45.2K",
    description: "Fast-paced, high-energy commercial designed for multi-platform digital rollout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVfAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL"
  },
  {
    id: 3,
    title: "The Executive Reel",
    category: "Personal Brand",
    client: "Sarah Liu, CMO",
    impact: "+60% Reach",
    duration: "0:60",
    views: "8.9K",
    description: "Documentary-style profile highlighting thought leadership and brand vision.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyAn2kRbwlFz4Z6pvjBjJCEHyg8i_NETkLnU2bM_JbdV3YzLsJsfiDjy7xrjh6k5igEaBUmgVerIAdzRma-oD3rhPnjIyXOMQ_DiOxjotOhPVFOfpv3zxL0B1Ldw-zZbT0leyaRBgTgUY8MiNmynGRrORrg2gEK4rs4kV3tQsoPaJDmCzkGP9LWl7JFHPvv0vscF2V6lDN3-rBEK3WOH0Cfnta6Nm1dKQyrJFxYxz3DUSvuNL75x74BhOTfkHPyEWf-Oq1n10Y6ZNw"
  },

  {
    id: 5,
    title: "Apex Tech Explainer",
    category: "Commercial",
    client: "Apex Solutions",
    impact: "40% KPI Improvement",
    duration: "0:50",
    views: "22.3K",
    description: "Complex data made simple through cinematic storytelling and motion graphics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVfAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL"
  },
  {
    id: 6,
    title: "Summit Retreats",
    category: "Real Estate",
    client: "Summit Leisure",
    impact: "100% Bookings",
    duration: "0:45",
    views: "31.7K",
    description: "High-altitude luxury captured through precision drone work and stabilized ground shots.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyAn2kRbwlFz4Z6pvjBjJCEHyg8i_NETkLnU2bM_JbdV3YzLsJsfiDjy7xrjh6k5igEaBUmgVerIAdzRma-oD3rhPnjIyXOMQ_DiOxjotOhPVFOfpv3zxL0B1Ldw-zZbT0leyaRBgTgUY8MiNmynGRrORrg2gEK4rs4kV3tQsoPaJDmCzkGP9LWl7JFHPvv0vscF2V6lDN3-rBEK3WOH0Cfnta6Nm1dKQyrJFxYxz3DUSvuNL75x74BhOTfkHPyEWf-Oq1n10Y6ZNw"
  }
];

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, initialCategory = 'All' }) => {
  const [activeFilter, setActiveFilter] = useState(initialCategory);

  // Update active filter when initialCategory changes
  useEffect(() => {
    setActiveFilter(initialCategory);
  }, [initialCategory]);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background-dark pt-20 md:pt-44 pb-32 min-h-screen relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Navigation Breadcrumb */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Back to Home</span>
        </motion.button>

        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-body text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Browse our curated collection of high-impact video reels. From viral real estate tours to cinematic brand stories, we create content that converts.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat, idx) => {
            const icons = {
              'All': LayoutGrid,
              'Real Estate': Building2,
              'Commercial': Megaphone,
              'Personal Brand': User
            };
            const Icon = icons[cat as keyof typeof icons] || Filter;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${isActive
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-surface-light/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'} />
                <span className="text-sm font-bold tracking-wide">{cat === 'All' ? 'All Reels' : cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Uniform 9:16 Portrait */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative aspect-[9/16] overflow-hidden bg-surface-dark rounded-2xl cursor-pointer ring-1 ring-white/5 hover:ring-primary/50 transition-all duration-500 shadow-2xl"
                  >
                    {/* Background Image with Zoom */}
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    {/* Top Overlay Stats */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10">
                      <div className="flex flex-col gap-2">
                        <div className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                          <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] leading-none">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center flex flex-col items-center gap-6"
          >
            <h3 className="text-4xl font-heading font-bold uppercase text-gray-600">No Reels in this Category</h3>
            <button
              onClick={() => setActiveFilter('All')}
              className="text-primary font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Bottom CTA Section */}

      </div>
    </div>
  );
};
