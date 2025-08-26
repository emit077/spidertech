'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, DollarSign, Users, Zap, Bot, Lightbulb, ArrowRight, CheckCircle, XCircle, IndianRupee } from 'lucide-react';

const VelocitySection: React.FC = () => {
  const challenges = [
    {
      icon: Clock,
      problem: '6–12 months MVP cycles',
      solution: 'Ready in 6 weeks',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: IndianRupee,
      problem: 'Overspending on mis-hires',
      solution: 'Fixed team from Day 1',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      problem: 'Endless coordination chaos',
      solution: 'Streamlined, AI-assisted workflow',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: XCircle,
      problem: 'Unclear outcomes',
      solution: 'Predictable progress and fast feedback',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Build With Momentum',
      description: 'No long kick-off delays. We roll up our sleeves from day one and keep things moving at startup speed.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Bot,
      title: 'Tech + AI Synergy',
      description: 'Our development process blends AI-driven efficiency with human creativity to get more done in less time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'A Partner, Not Just a Vendor',
      description: 'We act like an extension of your founding team — invested, adaptive, and laser-focused on your product\'s success.',
      color: 'from-purple-500 to-pink-500'
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
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block text-gray-900 dark:text-white">
              Turning Concepts Into
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              Products — With Velocity
            </span>
            <span className="block text-gray-900 dark:text-white">
              🚀
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            You&apos;ve put in the thought, done the research, and mapped the vision. Now it&apos;s time to see it live in the hands of users.
          </p>
        </motion.div>

        {/* The Real Founder Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Real Founder Challenge
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Most startups don&apos;t fail on ideas. They stumble because execution drags, teams take forever to form, and momentum fades. At Spider Tech, we make sure you launch while the energy is still hot.
            </p>
          </div>

          {/* Challenge Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${challenge.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                      <XCircle className="h-4 w-4" />
                      <span className="text-sm font-medium line-through">{challenge.problem}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-semibold">{challenge.solution}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Build With Spider Tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Build With Spider Tech?
            </h3>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Launch Your Vision?
              </h3>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s turn your concept into a product that users love, faster than you thought possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/why-spidertech"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <Rocket className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VelocitySection;
