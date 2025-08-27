'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, Clock, DollarSign, Shield, Zap, Star } from 'lucide-react';
import { WEBSITE_STATS } from '@/constants';

const WhyChooseUs: React.FC = () => {

    const comparisons = [
        {
            title: 'Duration',
            traditional: '6-12 months development cycles',
            spidertech: '6-8 weeks with AI acceleration',
            icon: Clock
        },
        {
            title: 'Cost',
            traditional: 'High development costs',
            spidertech: '40% cost reduction with AI optimization',
            icon: DollarSign
        },
        {
            title: 'Quality',
            traditional: 'Manual testing and debugging',
            spidertech: 'AI-powered automated testing',
            icon: Shield
        },
        {
            title: 'Scalability',
            traditional: 'Limited scalability',
            spidertech: 'Auto-scaling with AI monitoring',
            icon: Zap
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
                {/* Comparison Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Traditional vs Spidertech
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            See how our AI-driven approach transforms the development experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {comparisons.map((comparison, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                                        <comparison.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {comparison.title}
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm line-through">
                                                {comparison.traditional}
                                            </p>
                                        </div>
                                    </div>



                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-gray-900 dark:text-white font-medium">
                                                {comparison.spidertech}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Success Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Proven Results
                                </h3>
                                <p className="text-purple-100 text-lg max-w-3xl mx-auto">
                                    Our AI-driven approach has delivered exceptional results for businesses across industries.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { number: WEBSITE_STATS.PERFORMANCE.DEVELOPMENT_SPEED, label: 'Faster Development', description: 'Reduced time to market' },
                                    { number: WEBSITE_STATS.PERFORMANCE.COST_REDUCTION, label: 'Cost Reduction', description: 'Lower development costs' },
                                    { number: WEBSITE_STATS.PERFORMANCE.CLIENT_SATISFACTION, label: 'Client Satisfaction', description: 'Exceeded expectations' },
                                    { number: WEBSITE_STATS.PROJECTS.COMPLETED, label: 'Projects Delivered', description: 'Successful implementations' }
                                ].map((metric, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <div className="text-4xl md:text-5xl font-bold mb-2">
                                            {metric.number}
                                        </div>
                                        <h4 className="text-lg font-semibold mb-2">
                                            {metric.label}
                                        </h4>
                                        <p className="text-purple-100 text-sm">
                                            {metric.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Experience the Difference?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                            Join hundreds of businesses that have transformed their digital presence with Spidertech&apos;s AI-driven development approach.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a
                                href="/why-spidertech"
                                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <span>Learn More</span>
                                <Star className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
