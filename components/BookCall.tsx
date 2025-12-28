import React from 'react';
import { motion } from 'framer-motion';

export const BookCall: React.FC = () => {
    const [isIframeLoaded, setIsIframeLoaded] = React.useState(false);

    return (
        <section className="py-20 bg-surface-dark relative overflow-hidden border-t border-white/5">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] block">Get Started</span>
                    <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mt-4 uppercase leading-[0.9]">
                        Book A Call
                    </h2>
                </motion.div>

                <div
                    className="w-full rounded-xl overflow-hidden shadow-2xl shadow-primary/5 bg-surface-dark border border-white/5 h-[700px] relative"
                >
                    {/* Loading Spinner */}
                    {!isIframeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-surface-dark z-10">
                            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        </div>
                    )}

                    {/* Direct Iframe Embed - Fastest Loading Method */}
                    <iframe
                        src="https://calendly.com/darshitae913/interview-with-darshit-jain?month=2025-12&background_color=161d26&text_color=ffffff&primary_color=0a3d62&hide_gdpr_banner=1"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Select a Date & Time - Calendly"
                        loading="eager" // Force immediate load
                        onLoad={() => setIsIframeLoaded(true)}
                        className={`transition-opacity duration-500 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
