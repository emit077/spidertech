'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Database, Smartphone } from 'lucide-react';

const PortfolioGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const project_list = [
    {
      title: "Cashpo",
      description: "A platform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Key Highlight e-Mandate/NACH, e-KYC, Auto Disbursement etc.",
      image: "/api/placeholder/400/300",
      working_link: "https://cashpo.in",
      tech_stack: ["django", "python", "vue-js", "html-5", "sass", "postgresql"],
      category: "fintech"
    },
    {
      title: "Tutors Factory",
      description: "Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Business Developer portal And Admin portal",
      image: "/api/placeholder/400/300",
      working_link: "https://www.tutorsfactory.com",
      tech_stack: ["django", "python", "vue-js", "html-5", "sass", "postgresql"],
      category: "education"
    },
    {
      title: "Indianmentors",
      description: "Indianmentors is the best home tutor provider have connected the 20,000+ tutors with almost 35,000+ students across the glob. It has Student portal, Tutor portal, Business Developer portal And Admin portal",
      image: "/api/placeholder/400/300",
      working_link: "https://www.indianmentors.in/",
      tech_stack: ["django", "python", "vue-js", "html-5", "sass", "postgresql"],
      category: "education"
    },
    {
      title: "Medx",
      description: "A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. This platform have some key feature Like Shipment Lifecycle, Live tracking, Wallet and Payout etc.",
      image: "/api/placeholder/400/300",
      working_link: "https://themedx.in",
      tech_stack: ["django", "python", "vue-js", "html-5", "postgresql"],
      category: "healthcare"
    },

    {
      title: "BurnBlack",
      description: "BurnBlack is platform who provide the financial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",
      image: "/api/placeholder/400/300",
      working_link: "https://burnblack.in/",
      tech_stack: ["django", "python", "vue-js", "html-5", "postgresql"],
      category: "fintech"
    },
    {
      title: "Digital Ayurved",
      description: "Digital ayurveda is patients management platform for docters where they can manage all the medical records and drugs record.",
      image: "/api/placeholder/400/300",
      working_link: "https://digitalayurved.in/",
      tech_stack: ["django", "python", "html-5", "vue", "vuetify", "javascript", "mysql"],
      category: "healthcare"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: project_list.length },
    { id: 'fintech', name: 'Fintech', count: project_list.filter(p => p.category === 'fintech').length },
    { id: 'education', name: 'Education', count: project_list.filter(p => p.category === 'education').length },
    { id: 'healthcare', name: 'Healthcare', count: project_list.filter(p => p.category === 'healthcare').length },
    { id: 'lifestyle', name: 'Lifestyle', count: project_list.filter(p => p.category === 'lifestyle').length },
    { id: 'tech', name: 'Tech', count: project_list.filter(p => p.category === 'tech').length }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? project_list
    : project_list.filter(project => project.category === selectedCategory);

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'django':
      case 'python':
        return <Code className="h-4 w-4" />;
      case 'postgresql':
      case 'mysql':
        return <Database className="h-4 w-4" />;
      case 'vue-js':
      case 'vue':
      case 'vuetify':
      case 'html-5':
      case 'javascript':
      case 'sass':
        return <Smartphone className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

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


          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block text-gray-900 dark:text-white">
              Featured
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Explore our diverse portfolio of successful projects across multiple industries. Each project showcases our expertise in delivering innovative digital solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{project.title}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.working_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                      {project.tech_stack.length > 4 && (
                        <span className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full text-xs">
                          +{project.tech_stack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Link */}
                  <a
                    href={project.working_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-200"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s create something amazing together. Our team is ready to bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href="/portfolio"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>View More Projects</span>
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
