
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Play, ArrowUpRight, Filter, ChevronRight, ArrowLeft, Clock, Eye } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (view: 'home' | 'work') => void;
}

const CATEGORIES = ['All', 'Real Estate', 'Commercial', 'Personal Brand', 'Architecture'];

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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyU6IAlNR9tiOjaPMfbWYK3g_Hx-RL90mqBrFxaq46WqhlXiwOS4ljWgJxsApEuzycElhqoX0KgKKdOvCe3N6wqXHI7FAYffqLcvXJgqntMSpZzyB9SmSWqo55FOVyaxpKjc_2SSXZGx4b_w_EtsNNiMiPzIwLb4ssxmmeArVpSQyezc9J5mGk4SM_IIK9ZZzGB_XeikALzphyqkbcbefIgS4JpHGzwa6wTJEfMes1pJ12iErTsGLKL9s-mfQboVcBn_uQvXhlgqz"
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVvAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL"
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
    id: 4,
    title: "Urban Loft Experience",
    category: "Architecture",
    client: "Modern Living",
    impact: "Premium Position",
    duration: "0:30",
    views: "15.1K",
    description: "Capturing the texture, light, and soul of modern urban living spaces.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyU6IAlNR9tiOjaPMfbWYK3g_Hx-RL90mqBrFxaq46WqhlXiwOS4ljWgJxsApEuzycElhqoX0KgKKdOvCe3N6wqXHI7FAYffqLcvXJgqntMSpZzyB9SmSWqo55FOVyaxpKjc_2SSXZGx4b_w_EtsNNiMiPzIwLb4ssxmmeArVpSQyezc9J5mGk4SM_IIK9ZZzGB_XeikALzphyqkbcbefIgS4JpHGzwa6wTJEfMes1pJ12iErTsGLKL9s-mfQboVcBn_uQvXhlgqz"
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVvAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL"
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

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background-dark pt-32 md:pt-44 pb-32 min-h-screen relative z-10 overflow-hidden">
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
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm block">The Collection</span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-bold text-white uppercase leading-[0.8] tracking-tighter">
              Vertical<br />Reels
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 items-start md:items-end"
          >
            <p className="text-gray-400 font-body text-lg max-w-xs text-left md:text-right leading-relaxed font-light">
              High-impact vertical content engineered for the mobile-first generation.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 md:gap-10 mb-16 border-b border-white/10 pb-10 items-center overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 text-primary font-bold mr-4 shrink-0">
            <Filter size={18} />
            <span className="uppercase text-xs tracking-[0.2em]">Filter By Tag</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm font-bold uppercase tracking-[0.2em] transition-all relative py-2 shrink-0 ${
                activeFilter === cat ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div 
                  layoutId="filter-pill"
                  className="absolute -bottom-[2px] left-0 w-full h-[3px] bg-primary" 
                />
              )}
            </button>
          ))}
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
                      <div className="flex flex-col items-end gap-2 text-white/70">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                          <Eye size={12} />
                          {project.views}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                          <Clock size={12} />
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-10">
                      <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <h3 className="text-white font-heading font-bold text-3xl uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2 text-primary">
                          <span className="text-[10px] font-bold uppercase tracking-widest border-b border-primary/30">{project.impact}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-gray-300 text-xs leading-relaxed font-light">
                           {project.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-white font-bold uppercase tracking-[0.3em] text-[10px]">
                          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all">
                            <Play size={14} fill="currentColor" />
                          </div>
                          Play Reel
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
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-48 bg-charcoal border border-white/5 rounded-[2rem] p-10 md:p-32 flex flex-col items-center text-center gap-10 md:gap-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32" />

          <div className="max-w-3xl flex flex-col gap-8 relative z-10">
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs md:text-sm">Dominate Mobile</span>
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-white uppercase leading-[0.9] tracking-tight">
              Vertical<br />By Design
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed font-light">
              Stop the scroll with content engineered for thumb-stopping engagement.
            </p>
          </div>
          <button
            className="group relative flex items-center gap-6 bg-white text-black px-12 md:px-16 py-6 md:py-8 font-bold uppercase tracking-[0.3em] text-xs md:text-sm hover:bg-primary hover:text-white transition-all rounded-full shadow-2xl shadow-primary/20 overflow-hidden"
          >
            <span className="relative z-10">Ignite Your Feed</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={20} />
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
