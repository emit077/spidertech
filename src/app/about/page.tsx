import React from 'react';
import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/shared';
import { WEBSITE_STATS } from '@/constants/stats';



export const metadata: Metadata = {
    title: 'About Us - Spidertech.in | Our Story, Mission & Achievements',
    description: 'Learn about Spidertech.in - our journey, mission, vision, and the measurable impact we\'ve made in the digital world.',
    keywords: 'about Spidertech, our story, achievements, mission, vision, digital solutions company, stats',
    openGraph: {
        title: 'About Us - Spidertech.in | Our Story, Mission & Achievements',
        description: 'Learn about Spidertech.in - our journey, mission, vision, and the measurable impact we\'ve made in the digital world.',
        url: 'https://spidertech.in/about',
        siteName: 'Spidertech.in',
        images: [
            {
                url: '/logo/favicon.png',
                width: 1200,
                height: 630,
                alt: 'About Spidertech.in',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us - Spidertech.in | Our Story, Mission & Achievements',
        description: 'Learn about Spidertech.in - our journey, mission, vision, and the measurable impact we\'ve made in the digital world.',
        images: ['/logo/favicon.png'],
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">


                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white" style={{ lineHeight: '1.2' }}>
                            We&apos;re Building the
                            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Future of Digital
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                            From a small startup to a leading digital solutions company, we&apos;ve been transforming ideas into reality with cutting-edge technology and innovative thinking.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                AI-Powered Development
                            </span>
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Global Reach
                            </span>
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                Innovation First
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20"></div>
                <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/10 rounded-full blur-3xl"></div>

                <div className="container-custom relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                            Mission & Vision
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Driving digital transformation through innovation, partnership, and measurable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Mission Section */}
                        <div className="relative">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl text-white">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                                Our Mission
                                            </h3>
                                            <p className="text-purple-600 dark:text-purple-400 font-medium">Empowering businesses through technology</p>
                                        </div>
                                    </div>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        To democratize digital innovation by making cutting-edge technology accessible to businesses of all sizes. We believe every company deserves world-class digital solutions that drive growth and success.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/30 dark:border-purple-700/30">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-lg">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Innovation at Scale</h4>
                                                <p className="text-gray-600 dark:text-gray-300">Leveraging AI and modern technologies to deliver solutions that scale with your business and adapt to changing needs.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/30 dark:border-blue-700/30">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-lg">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Client Success Focus</h4>
                                                <p className="text-gray-600 dark:text-gray-300">Your success is our success. We measure our performance by your business outcomes and long-term growth.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/30 dark:border-green-700/30">
                                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-lg">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Sustainable Growth</h4>
                                                <p className="text-gray-600 dark:text-gray-300">Building solutions that grow with you, ensuring long-term value, ROI, and continuous improvement.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                            <span className="text-2xl">🌟</span>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                                Our Vision
                                            </h3>
                                            <p className="text-purple-200 font-medium">Shaping the future of digital</p>
                                        </div>
                                    </div>

                                    <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                                        To be the leading force in digital transformation, where every business we touch becomes more efficient, innovative, and successful through our technology solutions.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                            <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                                            <span className="text-white font-semibold">Global technology leader</span>
                                        </div>
                                        <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                            <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                                            <span className="text-white font-semibold">Innovation hub for businesses</span>
                                        </div>
                                        <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                            <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                                            <span className="text-white font-semibold">Trusted digital partner</span>
                                        </div>
                                        <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                            <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                                            <span className="text-white font-semibold">Catalyst for change</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                        <h4 className="font-bold text-white mb-3">Our Promise</h4>
                                        <p className="text-purple-200 text-sm leading-relaxed">
                                            We commit to delivering exceptional value, fostering innovation, and building lasting partnerships that drive sustainable business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The numbers tell our story of growth, innovation, and success in transforming businesses through technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-700/50">
                            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{WEBSITE_STATS.PROJECTS.COMPLETED}</div>
                            <div className="text-gray-700 dark:text-gray-300 font-semibold">Projects Delivered</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-700 dark:text-gray-300 font-semibold">Happy Clients</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/50">
                            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">98%</div>
                            <div className="text-gray-700 dark:text-gray-300 font-semibold">Success Rate</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-200/50 dark:border-orange-700/50">
                            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">60%</div>
                            <div className="text-gray-700 dark:text-gray-300 font-semibold">Faster Development</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Values Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The principles that guide everything we do and shape our relationships with clients and partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation First</h3>
                            <p className="text-gray-600 dark:text-gray-300">We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Client Partnership</h3>
                            <p className="text-gray-600 dark:text-gray-300">We work as an extension of your team, deeply invested in your success and growth.</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Speed & Quality</h3>
                            <p className="text-gray-600 dark:text-gray-300">We deliver fast without compromising on quality, ensuring your projects succeed on time.</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Results Driven</h3>
                            <p className="text-gray-600 dark:text-gray-300">Every solution we build is designed to deliver measurable business outcomes and ROI.</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global Impact</h3>
                            <p className="text-gray-600 dark:text-gray-300">We serve clients worldwide, bringing diverse perspectives and global best practices.</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
                            <p className="text-gray-600 dark:text-gray-300">We stay ahead of technology trends and continuously improve our processes and skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Start Your Digital Journey?
                            </h2>
                            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                Join hundreds of businesses that have transformed their digital presence with Spidertech. Let&apos;s create something amazing together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                >
                                    <span>Start Your Project</span>
                                    <span>→</span>
                                </a>
                                <a
                                    href="/portfolio"
                                    className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>View Our Work</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
