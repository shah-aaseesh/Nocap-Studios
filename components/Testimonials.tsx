
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
  },
  {
    text: "Working with Nocap was a game-changer for our social presence. The quality of content they deliver consistently outperforms our previous benchmarks.",
    author: "James Chen",
    role: "VP Marketing, TechFlow",
    initials: "JC"
  },
  {
    text: "Their team doesn't just shoot video; they build stories that resonate. The engagement metrics on our latest campaign speak for themselves.",
    author: "Elena Rodriguez",
    role: "Brand Director, Luxe Living",
    initials: "ER"
  },
  {
    text: "Professional, creative, and data-focused. Nocap Studios helped us scale our ad spend profitably through high-converting video creatives.",
    author: "Michael Ross",
    role: "Founder, Growth Masters",
    initials: "MR"
  }
];

export const Testimonials: React.FC = () => {
  // Duplicate testimonials for seamless looping
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 bg-surface-dark relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Client Stories</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mt-4 uppercase">Partnerships</h2>
        </motion.div>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6 pointer-events-none hover:pointer-events-auto"
          animate={{ x: "-50%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {doubledTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85vw] md:w-[450px] bg-gradient-to-br from-white/5 to-black border border-white/5 p-8 rounded-2xl flex flex-col gap-6 hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="text-blue-400 opacity-80" size={32} />
              <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                "{t.text}"
              </p>
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                {t.img ? (
                  <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary/50" style={{ backgroundImage: `url(${t.img})` }} />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-primary/30">
                    <span className="font-heading font-bold text-lg">{t.initials}</span>
                  </div>
                )}
                <div>
                  <h4 className="text-white font-heading font-bold text-lg uppercase tracking-tight">{t.author}</h4>
                  <p className="text-blue-300 text-[10px] font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
