'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Heart } from 'lucide-react';

const AboutHero: React.FC = () => {
    const stats = [
        { icon: Users, number: '50+', label: 'Team Members' },
        { icon: Award, number: '10+', label: 'Projects Completed' },
        { icon: Target, number: '98%', label: 'Client Satisfaction' },
        { icon: Heart, number: '5+', label: 'Years Experience' }
    ];

    return (
        <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading-1 mb-6">
                            Our{' '}
                            <span className="gradient-text">Story</span>
                        </h1>

                        <p className="body-text text-gray-600 dark:text-gray-300 mb-6">
                            Founded in 2019, Spidertech began as a small team of passionate developers and designers with a shared vision: to create digital experiences that not only look stunning but also drive real business results.
                        </p>

                        <p className="body-text text-gray-600 dark:text-gray-300 mb-8">
                            What started as a startup has grown into a trusted partner for businesses worldwide. We&apos;ve helped hundreds of companies transform their digital presence, from small startups to large enterprises, always maintaining our commitment to quality, innovation, and client success.
                        </p>

                        {/* Key Points */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Innovation-Driven
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        We stay ahead of the curve with cutting-edge technologies and creative solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Client-Focused
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Your success is our success. We work closely with you to understand your needs and deliver solutions that exceed expectations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Quality Assured
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Every project undergoes rigorous testing and quality assurance to ensure the best possible outcome.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Image Placeholder */}
                        <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                                <p className="text-lg leading-relaxed">
                                    From humble beginnings to becoming a leading digital solutions provider, our journey has been marked by innovation, dedication, and unwavering commitment to excellence.
                                </p>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"
                            />
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 w-12 h-12 bg-cyan-400 rounded-full opacity-80"
                            />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="card p-4 text-center"
                                >
                                    <stat.icon className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                                    <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
