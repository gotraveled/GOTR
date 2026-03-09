import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GoTraveled - Find Cheap Flights, Hotels & Travel Deals Worldwide',
  description: 'Discover the best travel deals on flights, hotels, car rentals, and airport transfers. Book your next adventure with GoTraveled and save big on worldwide destinations.',
  keywords: 'cheap flights, hotel booking, car rental, airport transfers, travel deals, vacation packages',
  authors: [{ name: 'GoTraveled' }],
  openGraph: {
    title: 'GoTraveled - Find Cheap Flights, Hotels & Travel Deals Worldwide',
    description: 'Discover the best travel deals on flights, hotels, car rentals, and airport transfers.',
    url: 'https://gotraveled.com',
    siteName: 'GoTraveled',
    images: [
      {
        url: 'https://gotraveled.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoTraveled - Find Cheap Flights, Hotels & Travel Deals Worldwide',
    description: 'Discover the best travel deals on flights, hotels, car rentals, and airport transfers.',
    images: ['https://gotraveled.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
