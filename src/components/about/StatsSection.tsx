'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Shield, Zap, Users, TrendingUp, Star } from 'lucide-react';
import { WEBSITE_STATS, ACHIEVEMENTS } from '@/constants';

const StatsSection: React.FC = () => {
    const stats = [
        {
            icon: Trophy,
            number: WEBSITE_STATS.PROJECTS.COMPLETED,
            label: 'Projects Completed',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Users,
            number: WEBSITE_STATS.PROJECTS.CLIENTS_SERVED,
            label: 'Happy Clients',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Star,
            number: WEBSITE_STATS.PERFORMANCE.CLIENT_SATISFACTION,
            label: 'Client Satisfaction',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Zap,
            number: WEBSITE_STATS.PERFORMANCE.DEVELOPMENT_SPEED,
            label: 'Faster Development',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    const achievements = [
        {
            icon: Award,
            title: 'Awards & Recognition',
            items: ACHIEVEMENTS.AWARDS.slice(0, 2),
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Certifications',
            items: ACHIEVEMENTS.CERTIFICATIONS.slice(0, 2),
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: TrendingUp,
            title: 'Performance Metrics',
            items: [
                `${WEBSITE_STATS.PERFORMANCE.COST_REDUCTION} Cost Reduction`,
                `${WEBSITE_STATS.SUPPORT.RESPONSE_TIME} Response Time`,
                `${WEBSITE_STATS.SUPPORT.UPTIME} Uptime`
            ],
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
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
            </div>

            <div className="container-custom relative z-10">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        <span className="block text-gray-900 dark:text-white">
                            Our Impact in
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Numbers
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover the measurable impact we&apos;ve made in the digital world through our innovative solutions and dedicated approach.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="h-8 w-8 text-white" />
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

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Awards & Recognition
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our commitment to excellence has been recognized by industry leaders and our valued clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <achievement.icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        {achievement.title}
                                    </h4>

                                    <ul className="space-y-3">
                                        {achievement.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-600 dark:text-gray-300 text-sm">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Join Our Success Story?
                            </h3>
                            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                                Let&apos;s create something amazing together and add your project to our growing list of successful deliveries.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                >
                                    <span>Start Your Project</span>
                                    <Zap className="h-5 w-5" />
                                </a>
                                <a
                                    href="/portfolio"
                                    className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>View Our Work</span>
                                    <Trophy className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
