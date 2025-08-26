'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const ServiceCTA: React.FC = () => {
    const contactMethods = [
        {
            icon: MessageCircle,
            title: 'Live Chat',
            description: 'Get instant answers to your questions',
            action: 'Start Chat',
            href: '/contact',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Speak directly with our experts',
            action: 'Call Now',
            href: 'tel:+918305050674',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Send us your project details',
            action: 'Send Email',
            href: 'mailto:info@spidertech.in',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Main CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                            Ready to Transform
                            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Your Business?
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Let&apos;s discuss your project requirements and create a custom solution that drives real results for your business. Our team is ready to help you succeed.
                        </p>
                        
                        {/* Main CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                            >
                                <span>Get Free Consultation</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a
                                href="/portfolio"
                                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <span>View Our Work</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <method.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {method.description}
                                    </p>
                                    <a
                                        href={method.href}
                                        className={`inline-flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                            method.color.includes('green')
                                                ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30'
                                                : method.color.includes('blue')
                                                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30'
                                                : 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30'
                                        }`}
                                    >
                                        <span>{method.action}</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Why Choose Spidertech?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">Success Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">60%</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">Faster Delivery</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">Support Available</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">Satisfaction Guaranteed</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;
