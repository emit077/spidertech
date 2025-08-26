'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Code, TestTube, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
    const processSteps = [
        {
            icon: Lightbulb,
            title: 'Discovery & Planning',
            description: 'AI-powered analysis of requirements and automated project planning',
            features: ['Requirement Analysis', 'AI-Powered Planning', 'Technology Selection', 'Timeline Estimation'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Code,
            title: 'AI-Driven Development',
            description: 'Intelligent code generation and automated development processes',
            features: ['Smart Code Generation', 'Automated Testing', 'Performance Optimization', 'Security Integration'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: TestTube,
            title: 'Quality Assurance',
            description: 'Comprehensive AI-powered testing and quality control',
            features: ['Automated Testing', 'Performance Testing', 'Security Audits', 'User Experience Testing'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Rocket,
            title: 'Deployment & Launch',
            description: 'Seamless deployment with AI monitoring and optimization',
            features: ['Automated Deployment', 'Performance Monitoring', 'Security Monitoring', '24/7 Support'],
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
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

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        <span className="block text-gray-900 dark:text-white">
                            Our AI-Driven
                        </span>
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
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                        >
                            {/* Step Content */}
                            <div className="flex-1">
                                <div className="flex items-center mb-6">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mr-4`}>
                                        <step.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                            Step {index + 1}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {step.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step Visual */}
                            <div className="flex-1">
                                <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10" />
                                    <div className="relative z-10">
                                        <div className="text-6xl md:text-8xl font-bold mb-4 opacity-20">
                                            {index + 1}
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold mb-4">
                                            {step.title}
                                        </h4>
                                        <p className="text-white/90 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow (except for last step) */}
                            {index < processSteps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                    viewport={{ once: true }}
                                    className="hidden lg:block"
                                >
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                        <ArrowRight className="h-6 w-6 text-white" />
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Process Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Our Process Works
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our AI-enhanced process delivers superior results through intelligent automation and expert oversight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Intelligent Automation',
                                description: 'AI handles repetitive tasks while experts focus on innovation and creativity'
                            },
                            {
                                title: 'Continuous Optimization',
                                description: 'Real-time monitoring and AI-driven improvements throughout the process'
                            },
                            {
                                title: 'Quality Assurance',
                                description: 'Multiple layers of testing and validation ensure flawless delivery'
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="h-8 w-8 text-white" />
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        {benefit.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                                Experience the power of AI-driven development with our proven process and expert team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                >
                                    <span>Get Started</span>
                                    <Rocket className="h-5 w-5" />
                                </a>
                                <a
                                    href="/why-spidertech"
                                    className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>Learn More</span>
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

export default ProcessSection;
