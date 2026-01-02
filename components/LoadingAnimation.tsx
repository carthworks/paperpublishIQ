"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingAnimation() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
            <div className="text-center">
                {/* Animated Logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-800 to-teal-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
                        <span className="text-4xl font-bold text-white">IQ</span>
                    </div>
                </motion.div>

                {/* Brand Name */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-3xl font-bold gradient-text mb-4"
                >
                    PaperPublishIQ
                </motion.h1>

                {/* Loading Spinner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex justify-center space-x-2"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-blue-800 to-teal-600 rounded-full"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-6 text-muted-foreground"
                >
                    Loading excellence...
                </motion.p>
            </div>
        </motion.div>
    );
}
