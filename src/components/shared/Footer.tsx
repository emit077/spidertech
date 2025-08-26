'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';

const Footer: React.FC = () => {
    const current_year = new Date().getFullYear();

    const footer_sections = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/about' },
                { name: 'Why Spidertech', href: '/why-spidertech' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
            ],
        },
        {
            title: 'Services',
            links: [
                { name: 'Web Development', href: '/services/web-development' },
                { name: 'Mobile Apps', href: '/services/mobile-apps' },
                { name: 'UI/UX Design', href: '/services/ui-ux-design' },
                { name: 'Digital Marketing', href: '/services/digital-marketing' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '/blog' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Documentation', href: '/docs' },
                { name: 'Support', href: '/support' },
            ],
        },
    ];

    const social_links = [
        { name: 'Facebook', icon: Facebook, href: CONTACT_INFO.SOCIAL.FACEBOOK },
        { name: 'Twitter', icon: Twitter, href: CONTACT_INFO.SOCIAL.TWITTER },
        { name: 'Instagram', icon: Instagram, href: CONTACT_INFO.SOCIAL.INSTAGRAM },
        { name: 'LinkedIn', icon: Linkedin, href: CONTACT_INFO.SOCIAL.LINKEDIN },
    ];

    const contact_info = [
        { icon: Mail, text: CONTACT_INFO.EMAIL.PRIMARY, href: CONTACT_INFO.EMAIL.PRIMARY_MAILTO },
        { icon: Phone, text: CONTACT_INFO.PHONE.PRIMARY + ", " + CONTACT_INFO.PHONE.SECONDARY, href: `tel:${CONTACT_INFO.PHONE.PRIMARY_TEL}` },
        { icon: MapPin, text: CONTACT_INFO.ADDRESS.LOCATION, href: '#' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo/logo-white.svg"
                                alt="Spidertech"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Transforming ideas into digital reality. We create innovative web solutions that drive business growth and user engagement.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            {contact_info.map((contact, index) => (
                                <motion.a
                                    key={index}
                                    href={contact.href}
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                                    whileHover={{ x: 5 }}
                                >
                                    <contact.icon className="h-4 w-4" />
                                    <span className="text-sm">{contact.text}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footer_sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm">
                            © {current_year} Spidertech.in. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {social_links.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Additional Links */}
                    {/* <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-gray-800">
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Cookie Policy
                        </Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
