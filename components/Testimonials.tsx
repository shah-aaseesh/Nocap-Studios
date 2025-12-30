
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Typewriter } from './Typewriter';

const TESTIMONIALS: {
  text: string;
  author: string;
  role: string;
  initials: string;
  img?: string;
}[] = [

    {
      text: "Highly creative, easy to communicate with, and consistently delivering a top-notch final product.",
      author: "Tyler Adams",
      role: "HardHat Media",
      initials: "TA",
      img: "/testimonials/tyler.jpg"
    },
    {
      text: "All of their work is crazy. Partnering-up with them gave a boost to my business.",
      author: "Andre",
      role: "AK Media",
      initials: "A",
      img: "/testimonials/andre.jpg"
    },
    {
      text: "NoCap Studios always does a great job with editing my videos, they always take on my feedback and apply it within a timely manner. The unlimited revisions are great, and helps us out a lot!",
      author: "Connor",
      role: "Nexus Media",
      initials: "C",
      img: "/testimonials/connor.jpg"
    },
    {
      text: "They make the entire process seamless, and the final product looks fresh, professional, and perfectly on-brand.",
      author: "Mandy Herold",
      role: "Speaker, Coach, Facilitator",
      initials: "MH",
      img: "/testimonials/mandy.jpg"
    },
    {
      text: "NoCap Studios helped me develop high-impact ideas and turn them into content that captured the market’s attention.",
      author: "Roberto Magana",
      role: "Magana Productions",
      initials: "RM",
      img: "/testimonials/roberto.jpg"
    },
    {
      text: "NoCap Studios has helped me improve my presence in social media and my listings gained a lot of engagement after I started working with them",
      author: "Stacey Robinson",
      role: "Realtor",
      initials: "SR",
      img: "/testimonials/stacey.jpg"
    }
  ];

export const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
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
          <h2 ref={ref} className="text-5xl md:text-6xl font-heading font-bold text-white mt-4 uppercase">
            <Typewriter start={isInView} segments={[{ text: "Partnerships" }]} />
          </h2>
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
