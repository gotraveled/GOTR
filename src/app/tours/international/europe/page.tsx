import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Europe Tour Package - Grand European Tour | GoTraveled',
  description: 'Explore Europe - discover amazing attractions and unforgettable experiences.',
};

export default function EuropeTourPage() {
  const attractions = [
    { name: 'Main Attraction 1', description: 'Discover the iconic landmarks and cultural treasures of this amazing destination.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Main Attraction 2', description: 'Experience world-class attractions and entertainment in this vibrant location.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
    { name: 'Main Attraction 3', description: 'Enjoy stunning architecture, shopping, and dining experiences.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80' },
    { name: 'Main Attraction 4', description: 'Visit historical sites and cultural landmarks that define this destination.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' },
    { name: 'Main Attraction 5', description: 'Explore natural beauty and modern attractions in perfect harmony.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Main Attraction 6', description: 'Experience unique culture, cuisine, and entertainment options.', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80' },
  ];

  const highlights = ['City tours & sightseeing', 'Cultural experiences', 'International cuisine', 'Shopping & entertainment', 'Photography opportunities', 'Guided excursions', 'Local experiences', 'Comfortable accommodations'];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Europe" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="text-sm mb-4"><Link href="/tours" className="hover:underline">Tours</Link> / <Link href="/tours/international" className="hover:underline ml-1">International</Link> / <span className="ml-1">Europe</span></nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Europe Tour Package - Grand European Tour</h1>
            <p className="text-2xl md:text-3xl mb-6">🏰 Grand European Tour 🏰</p>
            <p className="text-xl max-w-3xl mx-auto">Discover the wonders of Europe with our expertly crafted tours</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">⏱️</div><h3 className="font-bold text-lg mb-2">Best Duration</h3><p className="text-gray-700">10-15 Days</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">🌡️</div><h3 className="font-bold text-lg mb-2">Best Time</h3><p className="text-gray-700">May-Sept</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">✈️</div><h3 className="font-bold text-lg mb-2">Main Airport</h3><p className="text-gray-700">Various</p></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Europe</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">Europe is an incredible destination offering world-class attractions, rich cultural heritage, and unforgettable experiences for international travelers.</p>
            <p className="text-gray-700 text-lg leading-relaxed">From iconic landmarks to unique cultural experiences, Europe provides the perfect blend of adventure, relaxation, and discovery.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Places to Visit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-64"><Image src={attraction.image} alt={attraction.name} fill className="object-cover" /></div>
                <div className="p-6"><h3 className="text-2xl font-bold mb-3 text-blue-600">{attraction.name}</h3><p className="text-gray-700 leading-relaxed">{attraction.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Package Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <span className="text-green-600 text-2xl">✓</span><span className="text-gray-800 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">What to Pack</h3><ul className="space-y-2 text-gray-700"><li>• Valid passport & visa</li><li>• Comfortable clothing</li><li>• Travel adapter</li><li>• Camera & chargers</li><li>• Travel insurance</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3><ul className="space-y-2 text-gray-700"><li>• Book flights & hotels early</li><li>• Check visa requirements</li><li>• Get travel insurance</li><li>• Learn basic local phrases</li><li>• Respect local customs</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3><p className="text-gray-700 mb-2"><strong>Ideal Time:</strong> May-Sept</p><p className="text-gray-700">Plan ahead for the best weather and experiences.</p></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3><p className="text-gray-700 mb-2"><strong>By Air:</strong> Various</p><p className="text-gray-700 mb-2"><strong>Visa:</strong> Check requirements</p><p className="text-gray-700"><strong>Currency:</strong> Check exchange rates</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Europe Tour Package - Grand European Tour" destination="Europe" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Related International Destinations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Dubai', 'Singapore', 'Thailand', 'Malaysia'].map((dest) => (
              <Link key={dest} href={`/tours/international/${dest.toLowerCase()}`} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-orange-400 to-pink-600"></div>
                  <div className="p-4 text-center"><h3 className="font-bold text-lg group-hover:text-blue-600">{dest}</h3></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
