'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';
import { submitToGoogleForms, testGoogleFormsURL, testEntryIDs } from '@/config/google-forms';

interface FormData {
    name: string;
    email: string;
    phone: string;
    project_type: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const ContactForm: React.FC = () => {
    const [form_data, set_form_data] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        project_type: '',
        message: ''
    });

    const [is_submitting, set_is_submitting] = useState(false);
    const [submit_status, set_submit_status] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, set_errors] = useState<FormErrors>({});

    const project_types = [
        { value: 'web-development', label: 'Web Development' },
        { value: 'mobile-app', label: 'Mobile App Development' },
        { value: 'ui-ux-design', label: 'UI/UX Design' },
        { value: 'digital-marketing', label: 'Digital Marketing' },
        { value: 'ecommerce', label: 'E-commerce Solution' },
        { value: 'custom-software', label: 'Custom Software' },
        { value: 'consultation', label: 'Consultation' },
        { value: 'other', label: 'Other' }
    ];



    const validate_form = (): boolean => {
        const new_errors: FormErrors = {};

        if (!form_data.name.trim()) {
            new_errors.name = 'Name is required';
        }

        if (!form_data.email.trim()) {
            new_errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form_data.email)) {
            new_errors.email = 'Please enter a valid email';
        }

        if (!form_data.message.trim()) {
            new_errors.message = 'Message is required';
        }

        if (form_data.phone && !/^[\+]?91?[\s]?[6-9][\d]{9}$/.test(form_data.phone.replace(/\s/g, ''))) {
            new_errors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210 or +91 9876543210)';
        }

        set_errors(new_errors);
        return Object.keys(new_errors).length === 0;
    };

    const handle_input_change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        set_form_data(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            set_errors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const submit_to_google_forms = async (data: FormData): Promise<boolean> => {
        // Convert to the format expected by Google Forms
        const googleFormData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: '', // Removed field
            project_type: data.project_type,
            budget_range: '', // Removed field
            timeline: '', // Removed field
            message: data.message
        };
        return await submitToGoogleForms(googleFormData);
    };

    const handle_submit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate_form()) {
            return;
        }

        set_is_submitting(true);
        set_submit_status('idle');

        try {
            // Test Google Forms URL first
            console.log('Testing Google Forms URL...');
            const url_accessible = await testGoogleFormsURL();

            if (!url_accessible) {
                console.error('Google Forms URL is not accessible');
                set_submit_status('error');
                return;
            }

            // Test entry IDs
            console.log('Testing entry IDs...');
            const entry_ids_valid = await testEntryIDs();

            if (!entry_ids_valid) {
                console.error('Entry IDs are not valid');
                set_submit_status('error');
                return;
            }

            // Submit to Google Forms
            const google_success = await submit_to_google_forms(form_data);

            if (google_success) {
                set_submit_status('success');

                // Reset form
                set_form_data({
                    name: '',
                    email: '',
                    phone: '',
                    project_type: '',
                    message: ''
                });

                // Reset status after 5 seconds
                setTimeout(() => {
                    set_submit_status('idle');
                }, 5000);
            } else {
                set_submit_status('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            set_submit_status('error');
        } finally {
            set_is_submitting(false);
        }
    };

    return (
        <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
        >
            {/* Success/Error Messages */}
            {submit_status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl"
                >
                    <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                                Message Sent Successfully!
                            </h3>
                            <p className="text-green-700 dark:text-green-300">
                                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            {submit_status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl"
                >
                    <div className="flex items-center">
                        <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
                                Something went wrong
                            </h3>
                            <p className="text-red-700 dark:text-red-300">
                                Please try again or contact us directly at {CONTACT_INFO.EMAIL.PRIMARY}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Start Your Project
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Tell us about your project and we&apos;ll get back to you with a custom solution.
                </p>
            </div>

            <form onSubmit={handle_submit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Full Name *
                        </label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form_data.name}
                                onChange={handle_input_change}
                                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                    }`}
                                placeholder="Your full name"
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Email Address *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form_data.email}
                                onChange={handle_input_change}
                                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                    }`}
                                placeholder="your@email.com"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Phone Number
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form_data.phone}
                            onChange={handle_input_change}
                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                }`}
                            placeholder="9876543210"
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                    )}
                </div>

                {/* Project Type */}
                <div>
                    <label htmlFor="project_type" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Project Type
                    </label>
                    <select
                        id="project_type"
                        name="project_type"
                        value={form_data.project_type}
                        onChange={handle_input_change}
                        className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    >
                        <option value="">Select project type</option>
                        {project_types.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Project Details *
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                        <textarea
                            id="message"
                            name="message"
                            value={form_data.message}
                            onChange={handle_input_change}
                            rows={4}
                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-200 ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                }`}
                            placeholder="Tell us about your project, goals, and requirements..."
                        />
                    </div>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={is_submitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                    {is_submitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Message...
                        </>
                    ) : (
                        <>
                            <Send className="h-5 w-5 mr-3" />
                            Send Message
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    We&apos;ll respond within 24 hours
                </p>
            </form>
        </motion.div>
    );
};

export default ContactForm;
