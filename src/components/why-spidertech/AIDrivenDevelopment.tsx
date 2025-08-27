'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Code, Database, Shield, TrendingUp } from 'lucide-react';

const AIDrivenDevelopment: React.FC = () => {
    const aiFeatures = [
        {
            icon: Zap,
            title: 'Lightning Fast Development',
            description: 'AI-powered code generation and automation reduce development time by 60%',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Brain,
            title: 'Intelligent Code Optimization',
            description: 'AI algorithms automatically optimize performance, security, and scalability',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Shield,
            title: 'AI-Powered Security',
            description: 'Advanced threat detection and automated security testing for bulletproof applications',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: TrendingUp,
            title: 'Predictive Analytics',
            description: 'AI-driven insights help optimize user experience and business performance',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Code,
            title: 'Smart Code Generation',
            description: 'Generate boilerplate code, APIs, and complex functionality with AI assistance',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: Database,
            title: 'Intelligent Data Management',
            description: 'AI-powered database optimization and intelligent data processing',
            color: 'from-red-500 to-pink-500'
        }
    ];

    const aiBenefits = [
        {
            metric: '60%',
            label: 'Faster Development',
            description: 'Reduced time to market with AI-powered automation'
        },
        {
            metric: '90%',
            label: 'Bug Reduction',
            description: 'AI-powered testing and code review catch issues early'
        },
        {
            metric: '3x',
            label: 'Performance Boost',
            description: 'AI-optimized code and infrastructure deliver superior performance'
        },
        {
            metric: '24/7',
            label: 'AI Monitoring',
            description: 'Continuous monitoring and optimization with AI systems'
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
                            AI-Driven
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Development
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        We leverage cutting-edge artificial intelligence to revolutionize the development process, delivering faster, smarter, and more innovative digital solutions.
                    </p>
                </motion.div>

                {/* AI Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* AI Benefits Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            AI-Powered Results
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our AI-driven approach delivers measurable improvements across all aspects of development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aiBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10" />
                                    <div className="relative z-10">
                                        <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {benefit.metric}
                                        </div>
                                        <h4 className="text-lg font-semibold mb-2">
                                            {benefit.label}
                                        </h4>
                                        <p className="text-purple-100 text-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIDrivenDevelopment;
