'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Users, TrendingUp, MessageCircle } from 'lucide-react';
import { WEBSITE_STATS } from '@/constants';

const HeroSection: React.FC = () => {
    const stats = [
        { icon: Users, number: WEBSITE_STATS.PROJECTS.CLIENTS_SERVED, label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
        { icon: Globe, number: '5+', label: 'Countries Served', color: 'from-purple-500 to-pink-500' },
        { icon: TrendingUp, number: WEBSITE_STATS.PROJECTS.SUCCESS_RATE, label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <section className="pt-32 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Geometric Shapes */}
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
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
                        style={{

                            lineHeight: '1.2',
                        }}
                    >
                        <span className="block text-gray-900 dark:text-white">
                            Transform Your
                        </span>
                        <span className="gradient-text">
                            Digital Future
                        </span>
                        <span className="block text-gray-900 dark:text-white">
                            With Spidertech
                        </span>
                    </motion.h1>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-50/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-200/50 dark:border-purple-700/50"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span>powered by AI 🤖✨</span>
                        <div className="flex space-x-1">
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                    >
                        We craft cutting-edge web solutions, mobile apps, and digital experiences that drive
                        <span className="font-semibold text-purple-600 dark:text-purple-400"> business growth</span> and
                        <span className="font-semibold text-purple-600 dark:text-purple-400"> user engagement</span>.
                        Your success is our mission.
                    </motion.p>


                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    >
                        <Link href="/contact" className="group">
                            <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 overflow-hidden">
                                <span className="relative z-10">Start Your Project</span>
                                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Link>

                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
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
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span>Lightning Fast Performance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>24/7 Support Available</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span>100% Satisfaction Guaranteed</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Scroll Indicator */}
            {/* 

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center space-y-2 cursor-pointer"
                >
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div> */}

            {/* Floating Action Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="fixed bottom-8 right-8 z-50"
            >
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <MessageCircle className="h-6 w-6" />
                </button>
            </motion.div>
        </section>
    );
};

export default HeroSection;
