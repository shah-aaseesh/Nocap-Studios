
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UploadCloud, PhoneCall, FileEdit } from 'lucide-react';
import { Typewriter } from './Typewriter';

export const Process: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });
    const steps = [
        {
            icon: <UploadCloud size={32} className="text-white" />,
            title: "Step 1: Upload Your Resources",
            description: "All you need to do is to upload your resources such as videos, podcasts, interviews, live speeches and give basic requirements detail such as recommended clips, video length any special requirements etc."
        },
        {
            icon: <PhoneCall size={32} className="text-white" />,
            title: "Step 2: Have A Call With Our Representative (Optional)",
            description: "Help us understand your requirements even better so we can reflect what you most desire in the most beautiful way in the video."
        },
        {
            icon: <FileEdit size={32} className="text-white" />,
            title: "Step 3: Review Draft & Request Changes",
            description: "After we deliver you our draft video, you can recommend it if you want any changes. We provide you edits on draft up-to 2 times for free so you get the best output."
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Our Process</span>
                    <h2 ref={ref} className="text-6xl md:text-8xl font-heading font-bold text-white mt-4 uppercase leading-[0.9]">
                        <Typewriter start={isInView} segments={[{ text: "We Make It " }]} /> <br />
                        <Typewriter start={isInView} initialDelay={1200} segments={[{ text: "Super Easy", className: "text-blue-400" }]} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col items-center text-center gap-6"
                        >
                            <div className="w-20 h-20 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-blue-400/20 transition-colors duration-500" />
                                {step.icon}
                            </div>

                            <h3 className="text-blue-400 font-bold text-lg uppercase tracking-wide font-heading">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed font-light">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
