'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';

const CTASection: React.FC = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >


                        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            <span className="block text-white">
                                Ready to Start Your
                            </span>
                            <span className="block text-yellow-300">
                                Digital Journey
                            </span>
                            <span className="block text-white">
                                ?
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Let&apos;s transform your ideas into reality. Get in touch with us today and discover how we can help your business thrive in the digital world.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact" className="group">
                                <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                                    Start Your Project
                                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </Link>

                            <a
                                href={`tel:${CONTACT_INFO.PHONE.PRIMARY_TEL}`}
                                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                Call Us Now
                            </a>
                        </div>

                        {/* Contact Options */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                            >
                                <Phone className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                                <p className="text-purple-100 text-sm">{CONTACT_INFO.PHONE.PRIMARY}</p>
                                <p className="text-purple-100 text-sm">{CONTACT_INFO.WORKING_HOURS.SHORT}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                            >
                                <Mail className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                                <p className="text-purple-100 text-sm">{CONTACT_INFO.EMAIL.PRIMARY}</p>
                                <p className="text-purple-100 text-sm">24/7 Support</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                            >
                                <MessageCircle className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                                <p className="text-purple-100 text-sm">{CONTACT_INFO.WHATSAPP.NUMBER}</p>
                                <p className="text-purple-100 text-sm">Instant Response</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                            >
                                <div className="h-8 w-8 bg-yellow-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-purple-600 font-bold text-sm">24/7</span>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                                <p className="text-purple-100 text-sm">Get instant help</p>
                                <p className="text-purple-100 text-sm">Always available</p>
                            </motion.div>
                        </div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-12 pt-8 border-t border-white/20"
                        >
                            <p className="text-purple-100 text-sm mb-4">
                                Trusted by 10+ businesses worldwide
                            </p>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                                <div className="text-white text-sm font-medium">✓ Free Consultation</div>
                                <div className="text-white text-sm font-medium">✓ No Hidden Costs</div>
                                <div className="text-white text-sm font-medium">✓ 100% Satisfaction</div>
                                <div className="text-white text-sm font-medium">✓ 24/7 Support</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
