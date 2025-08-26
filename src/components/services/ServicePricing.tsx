'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const ServicePricing: React.FC = () => {
    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Perfect for small businesses and startups',
            price: '$2,500',
            duration: '4-6 weeks',
            features: [
                'Responsive Website Design',
                'Basic SEO Optimization',
                'Contact Form Integration',
                'Social Media Integration',
                'Basic Analytics Setup',
                '1 Month Free Support'
            ],
            color: 'from-blue-500 to-cyan-500',
            popular: false
        },
        {
            name: 'Professional',
            description: 'Ideal for growing businesses',
            price: '$5,000',
            duration: '6-10 weeks',
            features: [
                'Everything in Starter',
                'Advanced SEO Optimization',
                'Custom Functionality',
                'E-commerce Integration',
                'Advanced Analytics',
                '3 Months Free Support',
                'Performance Optimization',
                'Security Implementation'
            ],
            color: 'from-purple-500 to-pink-500',
            popular: true
        },
        {
            name: 'Enterprise',
            description: 'For large-scale projects and enterprises',
            price: '$12,000',
            duration: '10-16 weeks',
            features: [
                'Everything in Professional',
                'Custom Web Application',
                'Advanced E-commerce',
                'Multi-language Support',
                'API Development',
                'Cloud Infrastructure',
                '6 Months Free Support',
                'Priority Support',
                'Custom Integrations',
                'Advanced Security'
            ],
            color: 'from-orange-500 to-red-500',
            popular: false
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
                        <span className="block">Transparent</span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Choose the perfect plan for your business needs. All plans include our AI-powered development process and quality guarantee.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                                        <Star className="h-4 w-4" />
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            <div className={`bg-white dark:bg-gray-900 rounded-3xl p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl ${
                                plan.popular 
                                    ? 'border-purple-500 shadow-xl' 
                                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                            }`}>
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                                        {plan.popular ? (
                                            <Crown className="h-8 w-8 text-white" />
                                        ) : (
                                            <Zap className="h-8 w-8 text-white" />
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {plan.description}
                                    </p>
                                    <div className="mb-6">
                                        <div className="text-4xl font-bold text-gray-900 dark:text-white">
                                            {plan.price}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {plan.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-3">
                                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <div className="text-center">
                                    <a
                                        href="/contact"
                                        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/20 border border-gray-300 dark:border-gray-600'
                                        }`}
                                    >
                                        <span>Get Started</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            All Plans Include
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center space-x-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700 dark:text-gray-300">AI-Powered Development</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700 dark:text-gray-300">Quality Guarantee</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700 dark:text-gray-300">Free Consultation</span>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm">
                            * Custom pricing available for enterprise projects. Contact us for a personalized quote.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicePricing;
