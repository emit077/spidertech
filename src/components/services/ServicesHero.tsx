'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Users, Globe, TrendingUp } from 'lucide-react';

const ServicesHero: React.FC = () => {
    const highlights = [
        {
            icon: Zap,
            title: 'AI-Powered Development',
            description: 'Cutting-edge AI technology for faster, smarter solutions'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-level security protocols and compliance standards'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Seasoned professionals with years of experience'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Serving clients worldwide with 24/7 support'
        }
    ];

    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 0.8, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-6xl mx-auto">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white"
                        style={{ lineHeight: '1.2' }}
                    >
                        Comprehensive
                        <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Digital Services
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                    >
                        From concept to deployment, we provide end-to-end digital solutions that transform businesses and drive growth. Our AI-powered approach ensures faster delivery, better quality, and exceptional results.
                    </motion.p>

                    {/* Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <highlight.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="/contact"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                        >
                            <span>Get Free Consultation</span>
                            <Sparkles className="h-5 w-5" />
                        </a>
                        <a
                            href="/portfolio"
                            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                            <span>View Our Work</span>
                            <TrendingUp className="h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
