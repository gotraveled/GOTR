import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Destinations - Explore Amazing Places Worldwide | GoTraveled',
  description: 'Discover amazing travel destinations around the world. Find travel guides, tips, and deals for your next adventure.',
  keywords: 'travel destinations, vacation spots, travel guides, world destinations',
};

export default function DestinationsPage() {
  const destinations = [
    {
      name: 'Dubai',
      country: 'United Arab Emirates',
      description: 'Experience luxury, modern architecture, and Arabian culture in this spectacular desert metropolis.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      link: '/destinations/dubai',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      link: '/destinations/bali',
      highlights: ['Ubud Rice Terraces', 'Beaches', 'Temples', 'Surfing'],
    },
    {
      name: 'Paris',
      country: 'France',
      description: 'The City of Light offers romance, art, fashion, and world-class cuisine.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      link: '/destinations/paris',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'],
    },
    {
      name: 'Thailand',
      country: 'Southeast Asia',
      description: 'Ancient temples, tropical beaches, bustling markets, and incredible street food.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      link: '/destinations/thailand',
      highlights: ['Bangkok Temples', 'Phuket Beaches', 'Street Food', 'Islands'],
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      description: 'Where ancient traditions meet cutting-edge technology in perfect harmony.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      link: '/destinations/tokyo',
      highlights: ['Shibuya Crossing', 'Temples', 'Sushi', 'Cherry Blossoms'],
    },
    {
      name: 'New York',
      country: 'United States',
      description: 'The city that never sleeps offers endless entertainment, culture, and dining.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      link: '/destinations/new-york',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Broadway'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Amazing Destinations
            </h1>
            <p className="text-xl">
              Discover your next adventure with our comprehensive travel guides
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                href={destination.link}
                className="card group overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-1">{destination.name}</h2>
                    <p className="text-blue-200">{destination.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-primary font-semibold group-hover:underline">
                    Explore {destination.name} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Travel With GoTraveled?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                💡
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Guides</h3>
              <p className="text-gray-600">
                Comprehensive travel guides written by experienced travelers and locals
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">Best Deals</h3>
              <p className="text-gray-600">
                Compare prices from hundreds of providers to find the best travel deals
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Service</h3>
              <p className="text-gray-600">
                Reliable booking services and 24/7 customer support for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
