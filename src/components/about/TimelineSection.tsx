'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Globe } from 'lucide-react';

const TimelineSection: React.FC = () => {
    const milestones = [
        {
            year: '2019',
            title: 'Company Founded',
            description: 'Spidertech was established with a vision to transform digital experiences.',
            icon: Calendar
        },
        {
            year: '2020',
            title: 'First 50 Projects',
            description: 'Successfully completed our first 50 projects and expanded our team.',
            icon: Users
        },
        {
            year: '2021',
            title: 'Award Recognition',
            description: 'Received industry recognition for excellence in web development.',
            icon: Award
        },
        {
            year: '2022',
            title: 'Global Expansion',
            description: 'Expanded our services globally and reached 200+ clients worldwide.',
            icon: Globe
        },
        {
            year: '2023',
            title: 'Innovation Hub',
            description: 'Launched our innovation lab and introduced cutting-edge solutions.',
            icon: Award
        },
        {
            year: '2024',
            title: 'Future Forward',
            description: 'Continuing to push boundaries and shape the future of digital experiences.',
            icon: Globe
        }
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-2 mb-6">
                        Our{' '}
                        <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="body-text text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From humble beginnings to becoming a leading digital solutions provider, our journey has been marked by continuous growth and innovation.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="card p-6">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <milestone.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="relative z-10">
                                    <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                                </div>

                                {/* Empty space for alignment */}
                                <div className="w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
