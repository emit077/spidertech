import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/shared';
import { PortfolioHero, PortfolioGrid, PortfolioStats } from '@/components/portfolio';

export const metadata: Metadata = {
    title: 'Portfolio - Our Projects | Spidertech.in',
    description: 'Explore our portfolio of successful projects including Cashpo, Tutors Factory, Indianmentors, Medx, Wednicely, BurnBlack, Rawfit, GimBooks, Digital Ayurved, and more. See how we transform ideas into digital solutions.',
    keywords: 'portfolio, projects, web development, mobile apps, digital solutions, Spidertech projects',
    openGraph: {
        title: 'Portfolio - Our Projects | Spidertech.in',
        description: 'Explore our portfolio of successful projects including Cashpo, Tutors Factory, Indianmentors, Medx, Wednicely, BurnBlack, Rawfit, GimBooks, Digital Ayurved, and more.',
        type: 'website',
        url: 'https://spidertech.in/portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio - Our Projects | Spidertech.in',
        description: 'Explore our portfolio of successful projects including Cashpo, Tutors Factory, Indianmentors, Medx, Wednicely, BurnBlack, Rawfit, GimBooks, Digital Ayurved, and more.',
    },
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <PortfolioHero />
            <PortfolioStats />
            <PortfolioGrid />
            <Footer />
        </main>
    );
}
