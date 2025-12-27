
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Eye } from 'lucide-react';

const WORKS = [
  { 
    title: "Skyline Residences", 
    tag: "Real Estate", 
    impact: "+35% Sales", 
    views: "12K",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyU6IAlNR9tiOjaPMfbWYK3g_Hx-RL90mqBrFxaq46WqhlXiwOS4ljWgJxsApEuzycElhqoX0KgKKdOvCe3N6wqXHI7FAYffqLcvXJgqntMSpZzyB9SmSWqo55FOVyaxpKjc_2SSXZGx4b_w_EtsNNiMiPzIwLb4ssxmmeArVpSQyezc9J5mGk4SM_IIK9ZZzGB_XeikALzphyqkbcbefIgS4JpHGzwa6wTJEfMes1pJ12iErTsGLKL9s-mfQboVcBn_uQvXhlgqz" 
  },
  { 
    title: "InnovateCorp Ads", 
    tag: "Commercial", 
    impact: "2.1x Leads", 
    views: "45K",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVvAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL" 
  },
  { 
    title: "Executive Reel", 
    tag: "Personal Brand", 
    impact: "+60% Reach", 
    views: "9K",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyAn2kRbwlFz4Z6pvjBjJCEHyg8i_NETkLnU2bM_JbdV3YzLsJsfiDjy7xrjh6k5igEaBUmgVerIAdzRma-oD3rhPnjIyXOMQ_DiOxjotOhPVFOfpv3zxL0B1Ldw-zZbT0leyaRBgTgUY8MiNmynGRrORrg2gEK4rs4kV3tQsoPaJDmCzkGP9LWl7JFHPvv0vscF2V6lDN3-rBEK3WOH0Cfnta6Nm1dKQyrJFxYxz3DUSvuNL75x74BhOTfkHPyEWf-Oq1n10Y6ZNw" 
  },
  { 
    title: "DataStream Tech", 
    tag: "Commercial", 
    impact: "+40% KPI", 
    views: "22K",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyU6IAlNR9tiOjaPMfbWYK3g_Hx-RL90mqBrFxaq46WqhlXiwOS4ljWgJxsApEuzycElhqoX0KgKKdOvCe3N6wqXHI7FAYffqLcvXJgqntMSpZzyB9SmSWqo55FOVyaxpKjc_2SSXZGx4b_w_EtsNNiMiPzIwLb4ssxmmeArVpSQyezc9J5mGk4SM_IIK9ZZzGB_XeikALzphyqkbcbefIgS4JpHGzwa6wTJEfMes1pJ12iErTsGLKL9s-mfQboVcBn_uQvXhlgqz" 
  },
  { 
    title: "Urban Loft Tour", 
    tag: "Architecture", 
    impact: "Premium Feel", 
    views: "15K",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVvAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL" 
  }
];

interface PortfolioProps {
  onNavigate: (view: 'home' | 'work') => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-background-dark relative border-t border-white/5" id="selected-works">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Portfolio</span>
            <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mt-4 uppercase leading-[0.9]">Latest Reels</h2>
          </motion.div>
          <button 
            onClick={() => onNavigate('work')}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-2"
          >
            Explore Full Archive
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-6">
          {WORKS.map((work, idx) => (
            <motion.div
              key={idx}
              onClick={() => onNavigate('work')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative aspect-[9/16] overflow-hidden rounded-2xl bg-surface-dark flex flex-col justify-end p-6 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ring-1 ring-white/5 hover:ring-primary/40 ${idx > 3 ? 'hidden xl:flex' : ''}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${work.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] leading-none">{work.tag}</span>
                </div>
              </div>

              {/* View Count */}
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                   <Eye size={12} />
                   {work.views}
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                  <Play fill="white" size={32} />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-1">
                <h3 className="text-2xl font-heading font-bold text-white uppercase group-hover:text-primary transition-colors leading-tight">
                  {work.title}
                </h3>
                <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase opacity-90 transition-opacity">
                  {work.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
