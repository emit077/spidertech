'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, TestTube, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceProcess: React.FC = () => {
    const processSteps = [
        {
            icon: Lightbulb,
            title: 'Discovery & Planning',
            description: 'We start by understanding your business goals, target audience, and project requirements.',
            features: ['Requirement Analysis', 'AI-Powered Planning', 'Technology Selection', 'Timeline Estimation', 'Budget Planning'],
            color: 'from-blue-500 to-cyan-500',
            duration: '1-2 weeks'
        },
        {
            icon: Code,
            title: 'AI-Driven Development',
            description: 'Our intelligent development process combines AI automation with human expertise.',
            features: ['Smart Code Generation', 'Automated Testing', 'Performance Optimization', 'Security Integration', 'Continuous Integration'],
            color: 'from-purple-500 to-pink-500',
            duration: '4-12 weeks'
        },
        {
            icon: TestTube,
            title: 'Quality Assurance',
            description: 'Comprehensive testing and quality control to ensure flawless delivery.',
            features: ['Automated Testing', 'Performance Testing', 'Security Audits', 'User Experience Testing', 'Cross-browser Testing'],
            color: 'from-green-500 to-emerald-500',
            duration: '1-2 weeks'
        },
        {
            icon: Rocket,
            title: 'Deployment & Launch',
            description: 'Seamless deployment with ongoing support and monitoring.',
            features: ['Automated Deployment', 'Performance Monitoring', 'Security Monitoring', '24/7 Support', 'Post-launch Optimization'],
            color: 'from-orange-500 to-red-500',
            duration: '1 week'
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-3xl"
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
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                        <span className="block">Our AI-Driven</span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Process
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        We follow a streamlined, AI-enhanced development process that ensures quality, speed, and innovation at every step.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="space-y-12">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Connection Line */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute left-1/2 top-24 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 z-0"></div>
                            )}

                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-full blur-3xl`}></div>
                                
                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                                        {/* Icon and Number */}
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <step.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <div className="lg:hidden">
                                                <div className="text-2xl font-bold text-gray-900 dark:text-white">Step {index + 1}</div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{step.duration}</div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                    {step.title}
                                                </h3>
                                                <div className="hidden lg:flex items-center space-x-2">
                                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Duration:</span>
                                                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{step.duration}</span>
                                                </div>
                                            </div>
                                            
                                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {step.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center space-x-3">
                                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Arrow for mobile */}
                                        {index < processSteps.length - 1 && (
                                            <div className="lg:hidden flex justify-center">
                                                <ArrowRight className="h-6 w-6 text-purple-500 transform rotate-90" />
                                            </div>
                                        )}
                                    </div>
                                </div>
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
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                                Let&apos;s discuss your requirements and create a custom solution that drives real results for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                >
                                    <span>Get Free Consultation</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <a
                                    href="/portfolio"
                                    className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>View Our Work</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceProcess;
