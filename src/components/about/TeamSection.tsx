'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
    const team_members = [
        {
            name: 'Alex Johnson',
            position: 'CEO & Founder',
            description: 'Visionary leader with 10+ years of experience in digital transformation.',
            image: '/api/placeholder/300/300',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'alex@spidertech.in'
            }
        },
        {
            name: 'Sarah Chen',
            position: 'CTO',
            description: 'Technical expert specializing in scalable architecture and emerging technologies.',
            image: '/api/placeholder/300/300',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'sarah@spidertech.in'
            }
        },
        {
            name: 'Michael Rodriguez',
            position: 'Head of Design',
            description: 'Creative director with a passion for user-centered design and innovation.',
            image: '/api/placeholder/300/300',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'michael@spidertech.in'
            }
        },
        {
            name: 'Emily Watson',
            position: 'Head of Marketing',
            description: 'Strategic marketing leader driving growth and brand development.',
            image: '/api/placeholder/300/300',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'emily@spidertech.in'
            }
        }
    ];

    return (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-2 mb-6">
                        Meet Our{' '}
                        <span className="gradient-text">Team</span>
                    </h2>
                    <p className="body-text text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Our talented team of professionals brings together diverse expertise and passion to deliver exceptional results for our clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team_members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="card p-6 text-center hover:shadow-2xl transition-all duration-300">
                                {/* Avatar */}
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                                    {member.name.charAt(0)}
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                                    {member.position}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {member.description}
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-3">
                                    <a
                                        href={member.social.linkedin}
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                    </a>
                                    <a
                                        href={`mailto:${member.social.email}`}
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                                        aria-label="Email"
                                    >
                                        <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Us CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Join Our Team
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            We&apos;re always looking for talented individuals who are passionate about technology and innovation. Join us in shaping the future of digital experiences.
                        </p>
                        <button className="btn-primary">
                            View Open Positions
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
