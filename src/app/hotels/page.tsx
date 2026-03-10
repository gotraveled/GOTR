'use client';

import HotelWidget from '@/components/widgets/HotelWidget';
import { useEffect } from 'react';
import Image from 'next/image';

export default function HotelsPage() {
  useEffect(() => {
    document.title = 'Hotel Booking - Find & Compare Best Hotel Deals | GoTraveled';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Search and book hotels worldwide. Compare prices from top booking sites and find the perfect accommodation for your trip.');
    }
  }, []);

  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const topCities = [
    {
      city: 'Dubai',
      hotels: '2,500+',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80',
    },
    {
      city: 'Bali',
      hotels: '3,200+',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80',
    },
    {
      city: 'Paris',
      hotels: '4,100+',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    },
    {
      city: 'Tokyo',
      hotels: '3,800+',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80',
    },
    {
      city: 'New York',
      hotels: '5,000+',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80',
    },
    {
      city: 'London',
      hotels: '4,500+',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="Hotels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Hotel
            </h1>
            <p className="text-xl mb-8">
              Compare prices and book the best hotels worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Search Widget */}
      <section id="search-section" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <HotelWidget />
          </div>
        </div>
      </section>

      {/* Best Hotels by City */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Hotel Destinations</h2>
          <p className="section-subtitle text-center">
            Discover amazing hotels in top cities around the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCities.map((destination) => (
              <div 
                key={destination.city} 
                onClick={scrollToSearch}
                className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToSearch();
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.city}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{destination.city}</h3>
                    <p className="text-blue-200">{destination.hotels} hotels</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Hotel Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Budget Hotels</h3>
              <p className="text-gray-600 mb-6">
                Comfortable stays at affordable prices for budget-conscious travelers
              </p>
              <button onClick={scrollToSearch} className="btn-primary">Search Budget Hotels</button>
            </div>

            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">Mid-Range Hotels</h3>
              <p className="text-gray-600 mb-6">
                Perfect balance of comfort, amenities, and value for money
              </p>
              <button onClick={scrollToSearch} className="btn-primary">Search Mid-Range</button>
            </div>

            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-3">Luxury Hotels</h3>
              <p className="text-gray-600 mb-6">
                Premium accommodations with world-class service and amenities
              </p>
              <button onClick={scrollToSearch} className="btn-primary">Search Luxury Hotels</button>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Booking Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Hotel Booking Tips</h2>
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                1. Compare Multiple Booking Sites
              </h3>
              <p className="text-gray-700">
                The same hotel can have different prices on different booking platforms. 
                Always compare at least 3-4 sites before making your final booking.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                2. Check Cancellation Policies
              </h3>
              <p className="text-gray-700">
                Look for hotels with free cancellation options, especially if your travel 
                plans might change. This flexibility can save you money if you need to modify 
                your booking.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                3. Read Recent Reviews
              </h3>
              <p className="text-gray-700">
                Check recent guest reviews to get honest feedback about the hotel's current 
                condition, service quality, and amenities. Pay attention to reviews from 
                travelers similar to you.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                4. Consider Location Carefully
              </h3>
              <p className="text-gray-700">
                A hotel's location can significantly impact your trip. Consider proximity to 
                attractions, public transportation, and safety when making your choice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
