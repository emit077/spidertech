'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, Star, CheckCircle, Target, Heart, Shield } from 'lucide-react';

const ExpertCuration: React.FC = () => {
    const expertAreas = [
        {
            icon: Users,
            title: 'Industry Veterans',
            description: 'Team of seasoned professionals with 10+ years of experience in digital innovation',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Award,
            title: 'Award-Winning Excellence',
            description: 'Recognized for outstanding achievements in web development and digital solutions',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Star,
            title: 'Proven Track Record',
            description: 'Successfully delivered 100+ projects across diverse industries and technologies',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Target,
            title: 'Strategic Vision',
            description: 'Deep understanding of business needs and market trends to deliver impactful solutions',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    const expertise = [
        {
            category: 'Frontend Development',
            skills: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            icon: '🎨'
        },
        {
            category: 'Backend Development',
            skills: ['Django', 'Python', 'Node.js', 'PostgreSQL', 'MySQL', 'REST APIs'],
            icon: '⚙️'
        },
        {
            category: 'Mobile Development',
            skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform', 'PWA'],
            icon: '📱'
        },
        {
            category: 'DevOps & Cloud',
            skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Monitoring', 'Security'],
            icon: '☁️'
        }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Passion for Excellence',
            description: 'We love what we do and it shows in every project we deliver'
        },
        {
            icon: Shield,
            title: 'Quality Assurance',
            description: 'Rigorous testing and quality control ensure flawless delivery'
        },
        {
            icon: CheckCircle,
            title: 'Client Success',
            description: 'Your success is our success - we&apos;re invested in your growth'
        },
        {
            icon: Target,
            title: 'Innovation Focus',
            description: 'Constantly exploring new technologies and methodologies'
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
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-50/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-200/50 dark:border-purple-700/50">
                        <Sparkles className="h-4 w-4" />
                        <span>powered by AI 🤖✨</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        <span className="block text-gray-900 dark:text-white">
                            Expert
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Curation
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Every solution is carefully crafted by industry experts with deep domain knowledge and years of experience in delivering exceptional digital experiences.
                    </p>
                </motion.div>

                {/* Expert Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {expertAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${area.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <area.icon className="h-6 w-6 text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                    {area.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expertise Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Areas of Expertise
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our team brings deep expertise across the full spectrum of modern web development technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {expertise.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50"
                            >
                                <div className="flex items-center mb-6">
                                    <span className="text-3xl mr-4">{area.icon}</span>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {area.category}
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {area.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Core Values
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            These principles guide everything we do and ensure we deliver exceptional results for our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        {value.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Expert Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Work with Experts?
                            </h3>
                            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                                Our team of seasoned professionals is ready to bring your vision to life with expert precision and innovative solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                >
                                    <span>Start Your Project</span>
                                    <Users className="h-5 w-5" />
                                </a>
                                <a
                                    href="/about"
                                    className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>Meet Our Team</span>
                                    <Award className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExpertCuration;
