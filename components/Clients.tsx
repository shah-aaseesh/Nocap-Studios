
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typewriter } from './Typewriter';

const CLIENTS = [
    { name: "Intuit", domain: "intuit.com", logo: "/logos/intuit.png", sizing: "h-16 md:h-20 max-w-[160px] md:max-w-[220px]" },
    { name: "Bell", domain: "bell.ca", logo: "/logos/bell.png" },
    { name: "Accenture", domain: "accenture.com", logo: "/logos/accenture.png" },
    { name: "Cisco", domain: "cisco.com", logo: "/logos/cisco.png", sizing: "h-16 md:h-20 max-w-[150px] md:max-w-[200px]" },
    { name: "Roche", domain: "roche.com", logo: "/logos/roche.png" },
    { name: "Informatica", domain: "informatica.com", logo: "/logos/informatica.png" },
    { name: "Apple", domain: "apple.com", logo: "/logos/apple.png" },
    { name: "McDonald's", domain: "mcdonalds.com", logo: "/logos/mcdonalds.png", sizing: "h-20 md:h-24 max-w-[160px] md:max-w-[200px]" },
    { name: "Reckitt", domain: "reckitt.com", logo: "/logos/rb.png" },
    { name: "Dell", domain: "dell.com", logo: "/logos/dell.png" },
    { name: "Medtronic", domain: "medtronic.com", logo: "/logos/medtronic.png" },
    { name: "Humana", domain: "humana.com", logo: "/logos/humana.png" },
    { name: "QNB", domain: "qnb.com", logo: "/logos/qnb.png" },
    { name: "TIM", domain: "tim.it", logo: "/logos/tim.png" },
    { name: "ADNOC", domain: "adnoc.ae", logo: "/logos/adnoc.png" },
    { name: "Mercedes-Benz", domain: "mercedes-benz.com", logo: "/logos/mercedes.png", sizing: "h-20 md:h-24 max-w-[160px] md:max-w-[200px]" },
    { name: "Travelport", domain: "travelport.com", logo: "/logos/travelport.png", sizing: "h-16 md:h-20 max-w-[180px] md:max-w-[240px]" },
    { name: "IBM", domain: "ibm.com", logo: "/logos/ibm.png" },
    { name: "Ford", domain: "ford.com", logo: "/logos/ford.png" },
    { name: "Tesla", domain: "tesla.com", logo: "/logos/tesla.png" }
];

export const Clients: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <section className="py-24 bg-surface-dark relative overflow-hidden border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Our Reach</span>
                    <h2 ref={ref} className="text-6xl md:text-8xl font-heading font-bold text-white mt-4 uppercase leading-[0.9]">
                        <Typewriter start={isInView} segments={[{ text: "Our Clients Are " }]} /> <br />
                        <Typewriter start={isInView} initialDelay={1500} segments={[{ text: "Booked By", className: "text-blue-400" }]} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-items-center">
                    {CLIENTS.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="w-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500 group"
                        >
                            <img
                                src={(client as any).logo || `https://logo.clearbit.com/${client.domain}`}
                                alt={client.name}
                                className={`${(client as any).sizing || 'max-w-[140px] md:max-w-[180px] h-12 md:h-16'} w-auto object-contain filter grayscale brightness-0 invert group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500`}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-base md:text-lg font-heading font-bold text-white uppercase tracking-widest text-center opacity-80">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
