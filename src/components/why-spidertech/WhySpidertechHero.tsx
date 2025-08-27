'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Users, Zap, Brain, Shield } from 'lucide-react';

const WhySpidertechHero: React.FC = () => {
    const highlights = [
        {
            icon: Bot,
            title: 'AI-Driven Development',
            description: 'Leveraging cutting-edge AI to accelerate development and enhance functionality'
        },
        {
            icon: Users,
            title: 'Expert Curation',
            description: 'Handpicked by industry experts with years of experience in digital innovation'
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Rapid development cycles with AI-powered automation and optimization'
        },
        {
            icon: Brain,
            title: 'Intelligent Solutions',
            description: 'Smart, scalable solutions that adapt and grow with your business needs'
        }
    ];

    return (
        <section className="pt-32 relative  flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-6xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="heading-1 mb-6">
                        Why{' '}
                        <span className="gradient-text">Spidertech</span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                    >
                        We combine <span className="font-semibold text-purple-600 dark:text-purple-400">AI-driven development</span> with
                        <span className="font-semibold text-purple-600 dark:text-purple-400"> expert curation</span> to deliver
                        innovative, scalable, and cutting-edge digital solutions that drive business growth and exceed expectations.
                    </motion.p>

                    {/* Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <highlight.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 dark:text-gray-400"
                    >
                        <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span>Enterprise-Grade Security</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span>24/7 Expert Support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            <span>100% Satisfaction Guaranteed</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhySpidertechHero;
