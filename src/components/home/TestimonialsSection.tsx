'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            name: 'Suyash Sharma',
            position: 'CEO',
            company: 'Tutors Factory Pvt. Ltd.',
            content: 'Spidertech transformed our digital presence completely. Their team delivered a stunning website that not only looks amazing but also drives real business results. Our conversion rates increased by 40% within the first month!',
            rating: 5,
            image: '/api/placeholder/60/60'
        },
        {
            name: 'Afroz Alam',
            position: 'Director',
            company: 'Indian Mentors',
            content: 'Working with Spidertech was an absolute pleasure. They understood our vision perfectly and delivered a mobile app that exceeded our expectations. The user experience is seamless and our customers love it.',
            rating: 5,
            image: '/api/placeholder/60/60'
        },
        {
            name: 'Dr. Omvijay Sahu',
            position: 'Founder',
            company: 'Digital Ayurved',
            content: 'The custom software solution Spidertech built for us has streamlined our operations significantly. Their technical expertise and problem-solving approach made the entire process smooth and efficient.',

            rating: 5,
            image: '/api/placeholder/60/60'
        }
    ];

    const [current_testimonial, set_current_testimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    // Auto-play functionality with progress tracking
    useEffect(() => {
        if (!isAutoPlaying) {
            setProgress(0);
            return;
        }

        const duration = 5000; // 5 seconds
        const interval = 50; // Update every 50ms for smooth progress
        const increment = (interval / duration) * 100;

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    set_current_testimonial((current) => (current + 1) % testimonials.length);
                    return 0;
                }
                return prev + increment;
            });
        }, interval);

        return () => clearInterval(progressInterval);
    }, [isAutoPlaying, current_testimonial, testimonials.length]);

    // Navigation functions
    const next_testimonial = () => {
        set_current_testimonial((current) => (current + 1) % testimonials.length);
        setProgress(0);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prev_testimonial = () => {
        set_current_testimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
        setProgress(0);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Pause auto-play when user interacts with dots
    const handleDotClick = (index: number) => {
        set_current_testimonial(index);
        setProgress(0);
        setIsAutoPlaying(false);

        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="section-padding">
            <div className="container-custom">
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
                            What Our
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Spidertech.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-6xl mx-auto overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current_testimonial}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 0.9 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.4, 0.0, 0.2, 1]
                            }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden backdrop-blur-sm">
                                {/* Background Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-400/5 dark:to-cyan-400/5 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    {/* Header Section */}
                                    <div className="flex items-start justify-between mb-8">
                                        {/* Quote Icon */}
                                        <div className="inline-flex p-4 rounded-2xl ">
                                            <Quote className="h-32 w-32 mt-5 text-purple-50 absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                        </div>

                                        {/* Rating */}
                                        <div className="flex space-x-1">
                                            {[...Array(testimonials[current_testimonial].rating)].map((_, index) => (
                                                <Star key={index} className="h-5 w-5 text-yellow-400 fill-current drop-shadow-sm dark:drop-shadow-yellow-400/25" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <motion.blockquote
                                        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <div className="absolute -top-2 -left-2 text-6xl text-purple-200 dark:text-purple-800/60 font-serif">&ldquo;</div>
                                        <div className="relative z-10 pl-8">
                                            {testimonials[current_testimonial].content}
                                        </div>
                                    </motion.blockquote>

                                    {/* Author Section */}
                                    <motion.div
                                        className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {/* Avatar */}
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg dark:shadow-purple-500/25">
                                                {testimonials[current_testimonial].name.charAt(0)}
                                            </div>
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex-1">
                                            <div className="font-bold text-gray-900 dark:text-white text-lg">
                                                {testimonials[current_testimonial].name}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                                                {testimonials[current_testimonial].position}
                                            </div>
                                            <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                                                {testimonials[current_testimonial].company}
                                            </div>
                                        </div>

                                        {/* Verification Badge */}
                                        {/* <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full border border-green-200 dark:border-green-700/30">
                                            <div className="w-2 h-2 bg-green-500 rounded-full shadow-sm"></div>
                                            <span className="text-xs font-semibold text-green-700 dark:text-green-300">Verified</span>
                                        </div> */}
                                    </motion.div>

                                    {/* Bottom Decoration */}
                                    <div className="mt-6 flex justify-center">
                                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence >

                    {/* Navigation Arrows */}
                    {/* < div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20" >
                        <motion.button
                            onClick={prev_testimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                        </motion.button>
                    </div >

                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                        <motion.button
                            onClick={next_testimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                        </motion.button>
                    </div> */}

                    {/* Dots Indicator with Auto-play Status */}
                    <div className="flex flex-col items-center mt-8 space-y-4">
                        {/* Dots */}
                        <div className="flex space-x-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${index === current_testimonial
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg dark:shadow-purple-500/25'
                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110 shadow-sm'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div >

                {/* Stats */}
                < motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                >
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            98%
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">
                            Client Satisfaction Rate
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-2xl border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            4.9/5
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">
                            Average Rating
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl border border-green-200/30 dark:border-green-700/30 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                            85%
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">
                            Repeat Client Rate
                        </div>
                    </div>
                </motion.div >
            </div >
        </section >
    );
};

export default TestimonialsSection;
