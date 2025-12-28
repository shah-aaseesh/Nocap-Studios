import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
            >
                <img src="/logo.png" alt="Nocap Studios" className="h-24 md:h-32 w-auto object-contain" />

                {/* Glow effect matching site primary color (assumed blue-ish based on 'primary' usage) */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full z-[-1]" />
            </motion.div>

            {/* Loading Bar */}
            <motion.div
                className="mt-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
};
