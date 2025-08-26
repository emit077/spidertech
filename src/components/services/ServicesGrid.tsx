'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    Smartphone,
    Palette,
    Search,
    ShoppingCart,
    Database,
    Shield,
    Zap,
    Code,
    BarChart3,
    MessageSquare,
    Cloud
} from 'lucide-react';

const ServicesGrid: React.FC = () => {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible', 'Modern Frameworks', 'Performance Optimization'],
            color: 'from-blue-500 to-cyan-500',
            price: 'Starting from $2,500',
            duration: '4-8 weeks'
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.',
            features: ['iOS & Android', 'Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications', 'Offline Support'],
            color: 'from-purple-500 to-pink-500',
            price: 'Starting from $5,000',
            duration: '6-12 weeks'
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with user experience in mind to maximize engagement and conversions.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'User Testing', 'Design Handoff'],
            color: 'from-green-500 to-emerald-500',
            price: 'Starting from $1,500',
            duration: '2-4 weeks'
        },
        {
            icon: Search,
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing strategies to increase your online presence and drive business growth.',
            features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics', 'PPC Campaigns', 'Email Marketing'],
            color: 'from-yellow-500 to-orange-500',
            price: 'Starting from $800/month',
            duration: 'Ongoing'
        },
        {
            icon: ShoppingCart,
            title: 'E-commerce Solutions',
            description: 'Complete e-commerce platforms that help you sell online with secure payment processing and inventory management.',
            features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Support', 'Multi-vendor', 'Analytics'],
            color: 'from-red-500 to-pink-500',
            price: 'Starting from $3,500',
            duration: '6-10 weeks'
        },
        {
            icon: Database,
            title: 'Custom Software',
            description: 'Tailored software solutions designed to meet your specific business needs and streamline operations.',
            features: ['Custom Development', 'API Integration', 'Data Management', 'Scalable Architecture', 'Cloud Deployment', 'Maintenance'],
            color: 'from-indigo-500 to-purple-500',
            price: 'Starting from $8,000',
            duration: '8-16 weeks'
        },
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
            features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response', 'Security Training', '24/7 Monitoring'],
            color: 'from-red-600 to-orange-600',
            price: 'Starting from $2,000',
            duration: '2-4 weeks'
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
            features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Monitoring', 'Backup & Recovery', 'Cost Optimization'],
            color: 'from-blue-600 to-indigo-600',
            price: 'Starting from $1,500',
            duration: '2-6 weeks'
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                        <span className="block">Our</span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        We offer a comprehensive range of digital services to help your business thrive in the modern digital landscape.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Price and Duration */}
                                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Price:</span>
                                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{service.price}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Duration:</span>
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{service.duration}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <Zap className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <div className="mt-6">
                                    <a
                                        href="/contact"
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                    >
                                        <span>Get Started</span>
                                        <Code className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
