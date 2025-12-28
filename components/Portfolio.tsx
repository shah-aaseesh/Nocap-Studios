import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
    title: "Neon City Music Video",
    tag: "Others",
    impact: "Viral Launch",
    views: "1.2M",
    img: "https://images.unsplash.com/photo-1507842217121-ad0773cf4a0f?q=80&w=2670&auto=format&fit=crop"
  }
];

interface PortfolioProps {
  onNavigate: (view: 'home' | 'work') => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 bg-background-dark relative border-t border-white/5" id="selected-works">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Our Portfolio</span>
            <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mt-4 uppercase leading-[0.9]">SELECTED WORKS</h2>
          </motion.div>
          <button
            onClick={() => onNavigate('work')}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
          >
            <span className="text-sm font-bold tracking-[0.2em]">View all Reels</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKS.slice(0, 4).map((work, idx) => (
            <motion.div
              key={idx}
              onClick={() => onNavigate('work')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative aspect-[9/16] overflow-hidden rounded-2xl bg-surface-dark flex flex-col justify-end p-6 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ring-1 ring-white/5 hover:ring-primary/40`}
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






            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
