
import React from 'react';

// Partner logos
const MARQUEE_LOGOS = [
  { name: "Partner 1", src: "/logos/partner-1.jpg" },
  { name: "Partner 2", src: "/logos/partner-2.jpg" },
  { name: "Partner 3", src: "/logos/partner-3.jpg" },
  { name: "Partner 4", src: "/logos/partner-4.jpg" },
  { name: "Partner 5", src: "/logos/partner-5.jpg" },
  { name: "Partner 6", src: "/logos/partner-six.jpg" },
  { name: "Partner 7", src: "/logos/partner-seven.jpg" },
  { name: "AK Media", src: "/logos/ak_media.jpg" },
  { name: "Caprice Collective", src: "/logos/caprice.jpg" },
  { name: "Reveal", src: "/logos/reveal.jpg" },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="relative py-10 bg-black overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
      <div className="flex w-max">
        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center">
          {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.name}
              className="h-20 md:h-24 w-auto object-contain opacity-100 hover:scale-110 transition-transform duration-300 rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
