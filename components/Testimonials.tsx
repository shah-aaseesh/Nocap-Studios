
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Nocap Studios transformed our content strategy into a revenue-generating engine. Their data-driven approach led to a 40% improvement in our key performance indicators, solidifying our market position.",
    author: "Dr. Evelyn Reed",
    role: "Head of Growth, Apex Solutions",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdv4cSb-r-R0pYA9a_1hqHyqe5DeyeFPikn69vO18WguTRJEiEKQr0TNSCU5f5CmubufFInG9qdySUEsSX_4Eg4ULHKxbnksgJmr97fGjAd37b6oRZ1qjczjCp0H266yrWgpQXV7Yf7r_ib1GWUeULympvikHzB5fLoX4HZQPPL57rEw74VStCMUHrZLCBcAfNCJxBjpF9nR64ghO3LQbnrAICAB-_YDmMBATcs5tn9JNJ8zcaIYIxhRgOMS0wAOAV7NmPyB1S0O0g"
  },
  {
    text: "The level of detail and cinematic quality they brought to our real estate portfolio was unmatched. We saw properties moving twice as fast after implementing their video tours.",
    author: "Marcus James",
    role: "Director, Skyline Realty",
    initials: "MJ"
  },
  {
    text: "A partner that truly understands the intersection of brand narrative and performance metrics. Their work on our rebranding campaign was pivotal to our successful IPO.",
    author: "Sarah Liu",
    role: "CMO, Innovate Corp",
    initials: "SL"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Client Stories</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mt-4 uppercase">Partnerships</h2>
          </motion.div>
          <div className="hidden md:flex gap-3">
            <button className="w-14 h-14 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all rounded-full group">
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="w-14 h-14 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all rounded-full group">
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar snap-x snap-mandatory">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="min-w-[90vw] md:min-w-[550px] snap-center bg-gradient-to-br from-white/5 to-black border border-white/5 p-10 md:p-14 rounded-2xl flex flex-col gap-8 hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="text-primary opacity-50" size={48} />
              <p className="text-gray-300 text-xl leading-relaxed font-light italic">
                "{t.text}"
              </p>
              <div className="mt-auto flex items-center gap-5 pt-8 border-t border-white/5">
                {t.img ? (
                  <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary/50" style={{ backgroundImage: `url(${t.img})` }} />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-primary/30">
                    <span className="font-heading font-bold text-2xl">{t.initials}</span>
                  </div>
                )}
                <div>
                  <h4 className="text-white font-heading font-bold text-xl uppercase tracking-tight">{t.author}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
