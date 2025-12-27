
import React from 'react';

const LOGOS = [
  "GlobalTech", "Stratagen", "Innovate Corp", "Apex Solutions", "Ventura", "Synapse", "Elevate"
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="relative py-16 bg-charcoal overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal z-10 pointer-events-none"></div>
      <div className="flex w-max">
        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <span key={idx} className="text-3xl md:text-4xl font-heading font-bold text-white/30 uppercase tracking-tight hover:text-white/60 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
