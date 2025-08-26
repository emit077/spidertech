import React from 'react';
import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/shared';
import { ServicesHero, ServicesGrid, ServiceProcess, ServicePricing, ServiceCTA } from '@/components/services';

export const metadata: Metadata = {
    title: 'Our Services - Web Development, Mobile Apps, UI/UX Design | Spidertech.in',
    description: 'Explore our comprehensive digital services including web development, mobile apps, UI/UX design, digital marketing, e-commerce solutions, and custom software development.',
    keywords: 'web development, mobile apps, UI/UX design, digital marketing, e-commerce, custom software, digital services',
    openGraph: {
        title: 'Our Services - Web Development, Mobile Apps, UI/UX Design | Spidertech.in',
        description: 'Explore our comprehensive digital services including web development, mobile apps, UI/UX design, digital marketing, e-commerce solutions, and custom software development.',
        url: 'https://spidertech.in/services',
        siteName: 'Spidertech.in',
        images: [
            {
                url: '/logo/favicon.png',
                width: 1200,
                height: 630,
                alt: 'Spidertech Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services - Web Development, Mobile Apps, UI/UX Design | Spidertech.in',
        description: 'Explore our comprehensive digital services including web development, mobile apps, UI/UX design, digital marketing, e-commerce solutions, and custom software development.',
        images: ['/logo/favicon.png'],
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Navigation />
            <ServicesHero />
            <ServicesGrid />
            <ServiceProcess />
            <ServicePricing />
            <ServiceCTA />
            <Footer />
        </main>
    );
}
