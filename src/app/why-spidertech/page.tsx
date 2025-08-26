import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/shared';
import { WhySpidertechHero, WhyChooseUs, ProcessSection } from '@/components/why-spidertech';

export const metadata: Metadata = {
    title: 'Why Spidertech - AI-Driven Development & Expert Curation | Spidertech.in',
    description: 'Discover why Spidertech is your ideal partner. We combine AI-driven development with expert curation to deliver innovative, scalable, and cutting-edge digital solutions that drive business growth.',
    keywords: 'AI-driven development, expert curation, why choose Spidertech, digital innovation, cutting-edge technology, business growth',
    openGraph: {
        title: 'Why Spidertech - AI-Driven Development & Expert Curation | Spidertech.in',
        description: 'Discover why Spidertech is your ideal partner. We combine AI-driven development with expert curation to deliver innovative, scalable, and cutting-edge digital solutions.',
        type: 'website',
        url: 'https://spidertech.in/why-spidertech',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Why Spidertech - AI-Driven Development & Expert Curation | Spidertech.in',
        description: 'Discover why Spidertech is your ideal partner. We combine AI-driven development with expert curation to deliver innovative, scalable, and cutting-edge digital solutions.',
    },
};

export default function WhySpidertechPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <WhySpidertechHero />
            <ProcessSection />

            <WhyChooseUs />
            <Footer />
        </main>
    );
}
