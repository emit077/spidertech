import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spidertech.in - Innovative Web Solutions',
  description: 'Spidertech.in delivers cutting-edge web solutions with modern design and innovative technology. Transform your digital presence with our expert team.',
  keywords: 'web development, digital solutions, technology, innovation, Spidertech',
  authors: [{ name: 'Spidertech Team' }],
  creator: 'Spidertech',
  publisher: 'Spidertech',
  robots: 'index, follow',
  openGraph: {
    title: 'Spidertech.in - Innovative Web Solutions',
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
    title: 'Spidertech.in - Innovative Web Solutions',
    description: 'Transform your digital presence with cutting-edge web solutions and innovative technology.',
    images: ['/logo/favicon.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#673DE6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
