'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Smartphone,
    Palette,
    Zap,
    Shield,
    Users,
    Globe,
    BarChart3
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: Code,
            title: 'Modern Development',
            description: 'Built with cutting-edge technologies like React, Next.js, and TypeScript for optimal performance and maintainability.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Smartphone,
            title: 'Mobile-First Design',
            description: 'Responsive design that works seamlessly across all devices, from smartphones to large desktop screens.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Palette,
            title: 'Creative UI/UX',
            description: 'Beautiful, intuitive interfaces designed with user experience in mind, ensuring high engagement and satisfaction.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Optimized for speed with advanced caching, lazy loading, and performance best practices.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security measures and robust infrastructure to protect your data and ensure uptime.',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Seamless collaboration tools and communication channels to keep you updated throughout the development process.',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Worldwide deployment with CDN optimization for fast loading times regardless of your location.',
            color: 'from-teal-500 to-cyan-500'
        },
        {
            icon: BarChart3,
            title: 'Analytics & Insights',
            description: 'Comprehensive analytics and reporting tools to track performance and user behavior.',
            color: 'from-emerald-500 to-green-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className=" bg-gray-50 dark:bg-gray-900">
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="card p-6 h-full hover:shadow-2xl transition-all duration-300">
                                {/* Icon */}
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and see how we can help bring your vision to life with our innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary">
                                Start Your Project
                            </button>
                            <button className="btn-secondary">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
