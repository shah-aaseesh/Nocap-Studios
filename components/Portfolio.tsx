import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { Typewriter } from './Typewriter';

const WORKS = [
  {
    title: "Suburban Dream Home",
    tag: "Real Estate",
    impact: "high inquiries",
    views: "7.8K",
    img: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087755/r8_tc883v.jpg",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087755/r8_tc883v.mp4"
  },
  {
    title: "Gourmet Coffee Ad",
    tag: "Commercial",
    impact: "Sales Boost",
    views: "32.1K",
    img: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092106/c4_ypoec8.jpg",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092106/c4_ypoec8.mp4"
  },
  {
    title: "Thought Leader",
    tag: "Personal Brand",
    impact: "+60% Reach",
    views: "9.5K",
    img: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p3_dqupug.jpg",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p3_dqupug.mp4"
  },
  {
    title: "Travel Documentary",
    tag: "Others",
    impact: "High Engagement",
    views: "28.9K",
    img: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092951/05_zrj1wd.jpg",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092951/05_zrj1wd.mp4"
  }
];

interface PortfolioProps {
  onNavigate: (view: 'home' | 'work') => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <section className="py-12 bg-background-dark relative border-t border-white/5" id="selected-works">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Our Portfolio</span>
            <h2 ref={ref} className="text-6xl md:text-8xl font-heading font-bold text-white mt-4 uppercase leading-[0.9]">
              <Typewriter start={isInView} segments={[{ text: "SELECTED WORKS" }]} />
            </h2>
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
              <div className="absolute inset-0">
                <VideoPlayer
                  src={work.video}
                  poster={work.img}
                  className="w-full h-full"
                  autoPlay={false}
                  muted={true}
                  loop={true}
                />
              </div>

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
