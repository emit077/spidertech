import React from 'react';
import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/shared';
import { HeroSection, VelocitySection, AboutSection, ServicesSection, TestimonialsSection, CTASection } from '@/components/home';

export const metadata: Metadata = {
  title: 'Spidertech.in - Innovative Web Solutions & Digital Transformation',
  description: 'Transform your digital presence with Spidertech.in. We deliver cutting-edge web solutions, mobile apps, and digital experiences that drive business growth.',
  keywords: 'web development, digital solutions, mobile apps, UI/UX design, digital transformation, Spidertech',
  openGraph: {
    title: 'Spidertech.in - Innovative Web Solutions & Digital Transformation',
    description: 'Transform your digital presence with cutting-edge web solutions and innovative technology.',
    url: 'https://spidertech.in',
    siteName: 'Spidertech.in',
    images: [
      {
        url: '/logo/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Spidertech.in - Innovative Web Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spidertech.in - Innovative Web Solutions & Digital Transformation',
    description: 'Transform your digital presence with cutting-edge web solutions and innovative technology.',
    images: ['/logo/favicon.png'],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VelocitySection />
      {/* <AboutSection /> */}
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
