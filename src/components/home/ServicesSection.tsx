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
    Shield
} from 'lucide-react';

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.',
            features: ['iOS & Android', 'Cross-platform', 'Native Performance', 'App Store Ready'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with user experience in mind to maximize engagement and conversions.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Search,
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing strategies to increase your online presence and drive business growth.',
            features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: ShoppingCart,
            title: 'E-commerce Solutions',
            description: 'Complete e-commerce platforms that help you sell online with secure payment processing and inventory management.',
            features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Support'],
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: Database,
            title: 'Custom Software',
            description: 'Tailored software solutions designed to meet your specific business needs and streamline operations.',
            features: ['Custom Development', 'API Integration', 'Data Management', 'Scalable Architecture'],
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    return (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        <span className="block text-gray-900 dark:text-white">
                            Our
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        We offer a comprehensive range of digital services to help your business thrive in the modern digital landscape.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="card p-6 h-full hover:shadow-2xl transition-all duration-300">
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

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <Shield className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project requirements and create a custom solution that drives real results for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Get Free Consultation
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
