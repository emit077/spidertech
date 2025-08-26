'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

const MissionVision: React.FC = () => {
    return (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex p-4 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
                            <Target className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h2 className="heading-3 mb-6">
                            Our{' '}
                            <span className="gradient-text">Mission</span>
                        </h2>
                        <p className="body-text text-gray-600 dark:text-gray-300 mb-6">
                            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital world. We strive to be the trusted partner that transforms ideas into reality.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Heart className="h-5 w-5 text-red-500" />
                                <span className="text-gray-700 dark:text-gray-300">Deliver exceptional value to our clients</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Award className="h-5 w-5 text-yellow-500" />
                                <span className="text-gray-700 dark:text-gray-300">Maintain the highest standards of quality</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Target className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700 dark:text-gray-300">Foster innovation and creativity</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                            <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="heading-3 mb-6">
                            Our{' '}
                            <span className="gradient-text">Vision</span>
                        </h2>
                        <p className="body-text text-gray-600 dark:text-gray-300 mb-6">
                            To be the leading digital solutions provider, recognized globally for our innovative approach, technical excellence, and unwavering commitment to client success. We envision a future where every business has access to world-class digital experiences.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Target className="h-5 w-5 text-purple-500" />
                                <span className="text-gray-700 dark:text-gray-300">Global recognition for excellence</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Award className="h-5 w-5 text-blue-500" />
                                <span className="text-gray-700 dark:text-gray-300">Industry-leading innovation</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Heart className="h-5 w-5 text-pink-500" />
                                <span className="text-gray-700 dark:text-gray-300">Sustainable business growth</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
