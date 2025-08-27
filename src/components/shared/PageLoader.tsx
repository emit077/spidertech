'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedDots: React.FC = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev === '.') return '..';
                if (prev === '..') return '...';
                if (prev === '...') return '';
                return '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <span className="inline-block w-6 text-left">{dots}</span>;
};

interface PageLoaderProps {
    isLoading?: boolean;
    onComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading = true, onComplete }) => {
    useEffect(() => {
        if (!isLoading) return;

        // Simulate loading time for infinite loader
        const timer = setTimeout(() => {
            onComplete?.();
        }, 2500); // 2.5 seconds minimum

        return () => clearTimeout(timer);
    }, [isLoading, onComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
                >

                    {/* Main Content */}
                    <div className="relative z-10 text-center">


                        {/* Simple Spinner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-4"
                        >
                            <div className="relative w-12 h-12 mx-auto">
                                <motion.div
                                    className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1.1,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Loading Text */}
                        <div className="text-center">
                            <motion.p
                                className="text-gray-600 text-sm font-medium mb-4"
                            >
                                Loading your digital experience
                                <AnimatedDots />
                            </motion.p>
                        </div>
                        <hr className="mb-4 border-purple-500" />
                        {/* Logo */}
                        <Image
                            src="/logo/logo-solid.svg"
                            alt="Spidertech"
                            width={200}
                            height={80}
                            className="h-16 w-auto mx-auto"
                            priority
                        />



                    </div>


                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
