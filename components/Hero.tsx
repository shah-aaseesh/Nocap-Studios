
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Zap, ArrowRight } from 'lucide-react';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGoIMoJ_3zw0cKhwurxxm76PpCN1PxAY3Gr1hXDW0s94Ib3wo7ulMltU3g6kc44KPsyZINdwS1xHmIAOjomxUydIakGuFDTHkgfyMz_26ziodhJLnflCZ4wWTSghGFkLz_jkHmhO4i1F3DyOHw9rAUBYj5DjU4J6uSpq85YaeOUHbNKJKj7_W7jEwRO51jIsKs41CWSaGJUtbnn55SVnGKogwSMDUEc-iQUrkyrP7jVY17Oah-aazWhTjEN2e5arCjkwGGrhXCiNF-",
};

interface HeroProps {
  onNavigate: (view: 'home' | 'work') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const stats = [
    { icon: <TrendingUp size={32} />, value: '$400M+', label: 'Property Value' },
    { icon: <BarChart3 size={32} />, value: '100M+', label: 'Engagement' },
    { icon: <Zap size={32} />, value: 'GLOBAL', label: 'Projects Delivered' },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-32 pb-24 px-6">
      {/* Background with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_100%)] z-10 opacity-80"></div>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto text-center flex flex-col gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold leading-[0.85] tracking-tight uppercase">
            Quantifiable Impact<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3D62] via-[#A7B9CB] to-[#0A3D62] bg-[length:200%_auto] animate-gradient-flow">
              Strategic Growth
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-body font-bold leading-relaxed max-w-3xl mx-auto tracking-wide">
            We engineer video content that doesn't just look expensive—it performs. Data-driven strategies for high-stakes brands.
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="https://speakervideos.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 text-sm font-bold text-gray-300 tracking-wider hover:bg-white/10 transition-colors"
            >
              Partnered with <span className="text-white">SPEAKERVIDEOS</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 bg-white/5 backdrop-blur-sm flex flex-col items-center gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-primary/80 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p className="text-6xl lg:text-7xl font-heading font-bold text-white">{stat.value}</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
        >
          <motion.button
            onClick={() => onNavigate('work')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 min-w-[240px] h-16 px-10 bg-primary hover:bg-white text-white hover:text-black text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_40px_rgba(10,61,98,0.2)] group"
          >
            <span>Explore Our Works</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
