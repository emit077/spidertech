'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';

const ContactInfo: React.FC = () => {
    const contact_details = [
        {
            icon: MapPin,
            title: 'Office Address',
            content: CONTACT_INFO.ADDRESS.LOCATION,
            description: CONTACT_INFO.ADDRESS.DESCRIPTION
        },
        {
            icon: Phone,
            title: 'Phone Number',
            content: CONTACT_INFO.PHONE.PRIMARY,
            description: 'Call us anytime'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            content: CONTACT_INFO.WHATSAPP.NUMBER,
            description: 'Chat with us on WhatsApp'
        },
        {
            icon: Mail,
            title: 'Email Address',
            content: CONTACT_INFO.EMAIL.PRIMARY,
            description: 'Send us an email'
        },

    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
        >
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We&apos;re here to help bring your vision to life
                    </p>
                </div>

                <div className="space-y-6">
                    {contact_details.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <detail.icon className="h-7 w-7 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {detail.title}
                                    </h3>
                                    <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">
                                        {detail.content}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {detail.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.div>
    );
};

export default ContactInfo;
