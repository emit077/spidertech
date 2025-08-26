'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Heart, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
    const values = [
        {
            icon: Target,
            title: 'Innovation',
            description: 'Constantly pushing boundaries with cutting-edge technology and creative solutions.'
        },
        {
            icon: Heart,
            title: 'Passion',
            description: 'We love what we do and it shows in every project we deliver.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality work that exceeds expectations.'
        },
        {
            icon: CheckCircle,
            title: 'Reliability',
            description: 'Trusted partner for businesses looking to transform their digital presence.'
        }
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            <span className="block text-gray-900 dark:text-white">
                                About
                            </span>
                            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                Spidertech
                            </span>
                        </h2>

                        <p className="body-text text-gray-600 dark:text-gray-300 mb-6">
                            Founded with a vision to transform the digital landscape, Spidertech has been at the forefront of web innovation since our inception. We believe that every business deserves a digital presence that not only looks stunning but also drives real results.
                        </p>

                        <p className="body-text text-gray-600 dark:text-gray-300 mb-8">
                            Our team of passionate developers, designers, and strategists work together to create digital experiences that captivate audiences and convert visitors into loyal customers. We combine technical expertise with creative vision to deliver solutions that stand out in today&apos;s competitive digital world.
                        </p>

                        {/* Key Points */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Expert Team
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Skilled professionals with years of experience in modern web technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Proven Results
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Track record of delivering successful projects that drive business growth.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Ongoing Support
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Continuous support and maintenance to ensure your digital success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="btn-primary">
                            Learn More About Us
                        </button>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image Placeholder */}
                        <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-lg leading-relaxed">
                                    To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital world.
                                </p>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"
                            />
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 w-12 h-12 bg-cyan-400 rounded-full opacity-80"
                            />
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="card p-4 text-center"
                            >
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                                    5+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Years Experience
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="card p-4 text-center"
                            >
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                                    50+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Team Members
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="heading-3 text-center mb-12">
                        Our Core{' '}
                        <span className="gradient-text">Values</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="inline-flex p-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
