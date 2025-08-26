'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Users, Clock, Award } from 'lucide-react';

const PortfolioStats: React.FC = () => {
  const stats = [
    {
      icon: Code,
      number: '50+',
      label: 'Technologies Used',
      description: 'Modern tech stack including Django, Vue.js, React, and more'
    },
    {
      icon: Database,
      number: '100%',
      label: 'Database Reliability',
      description: 'PostgreSQL, MySQL, and MongoDB for robust data management'
    },
    {
      icon: Smartphone,
      number: '100%',
      label: 'Mobile Responsive',
      description: 'All projects optimized for mobile and tablet devices'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Uptime Guarantee',
      description: 'High availability and performance monitoring'
    },
    {
      icon: Users,
      number: '50K+',
      label: 'Active Users',
      description: 'Serving thousands of users across multiple platforms'
    },
    {
      icon: Clock,
      number: '<6',
      label: 'Weeks Delivery',
      description: 'Fast development cycles with rapid deployment'
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
              Our
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Success Metrics
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Numbers that speak for themselves. Here&apos;s how we&apos;ve consistently delivered excellence across all our projects.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                  {stat.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {stat.label}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Award-Winning Development Team
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-lg">
                Recognized for excellence in web development and digital innovation across multiple industries.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">Fintech Solutions</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Healthcare Platforms</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">E-commerce Systems</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Educational Platforms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioStats;
