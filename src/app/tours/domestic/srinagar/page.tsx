import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Srinagar Tour Package - City of Lakes | GoTraveled',
  description: 'Explore Srinagar - the summer capital of Kashmir. Experience Dal Lake houseboats, Mughal gardens, and Kashmiri culture.',
};

export default function SrinagarTourPage() {
  const attractions = [
    {
      name: 'Dal Lake',
      description: 'Iconic lake famous for houseboats and Shikara rides. Experience floating gardens, vibrant markets, and stunning Himalayan backdrop.',
      image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80'
    },
    {
      name: 'Shankaracharya Temple',
      description: 'Ancient Hindu temple on Shankaracharya Hill offering panoramic city views. Built in 200 BC, it\'s an important pilgrimage site.',
      image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=800&q=80'
    },
    {
      name: 'Mughal Gardens',
      description: 'Nishat Bagh, Shalimar Bagh, and Chashme Shahi - beautiful terraced gardens built by Mughal emperors with stunning Persian architecture.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80'
    },
    {
      name: 'Hazratbal Shrine',
      description: 'Revered Muslim shrine on the banks of Dal Lake. Houses a relic believed to be a hair of Prophet Muhammad, featuring white marble architecture.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
    },
    {
      name: 'Pari Mahal',
      description: 'Seven-terraced garden overlooking Dal Lake. Historic monument built in mid-1600s, offering spectacular views especially at sunset.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80'
    },
    {
      name: 'Nigeen Lake',
      description: 'Quieter alternative to Dal Lake, perfect for peaceful Shikara rides. Known for its clear water and fewer crowds.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
  ];

  const highlights = [
    'Stay in houseboat on Dal Lake',
    'Shikara ride experience',
    'Visit all three Mughal Gardens',
    'Explore Lal Chowk market',
    'Traditional Kashmiri Wazwan dinner',
    'Shopping for Pashmina shawls',
    'Visit Shankaracharya Temple',
    'Photography at sunrise on Dal Lake'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1920&q=80"
          alt="Srinagar - City of Lakes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="text-sm mb-4">
              <Link href="/tours" className="hover:underline">Tours</Link> / 
              <Link href="/tours/domestic" className="hover:underline ml-1">Domestic</Link> / 
              <span className="ml-1">Srinagar</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Srinagar Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">🏞️ City of Lakes 🏞️</p>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the Venice of the East with iconic houseboats, Mughal gardens, and rich Kashmiri culture
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-bold text-lg mb-2">Best Duration</h3>
              <p className="text-gray-700">3-4 Days</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🌡️</div>
              <h3 className="font-bold text-lg mb-2">Best Time</h3>
              <p className="text-gray-700">March-October</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-bold text-lg mb-2">Nearest Airport</h3>
              <p className="text-gray-700">Srinagar (SXR)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Srinagar</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Srinagar, the summer capital of Jammu & Kashmir, is a city of pristine lakes, magnificent Mughal 
              gardens, and rich cultural heritage. Often called the "Venice of the East," Srinagar is famous for 
              its iconic Dal Lake with traditional houseboats and shikaras. The city showcases a perfect blend of 
              natural beauty and historical architecture.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From floating markets to terraced Mughal gardens, from ancient temples to bustling bazaars, Srinagar 
              offers an authentic Kashmiri experience. The warm hospitality, delicious local cuisine including the 
              famous Wazwan, and exquisite handicrafts make Srinagar a must-visit destination for every traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Places */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Places to Visit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-64">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">{attraction.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Package Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <span className="text-green-600 text-2xl">✓</span>
                <span className="text-gray-800 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Light woolens (even in summer)</li>
                <li>• Comfortable walking shoes</li>
                <li>• Camera for photography</li>
                <li>• Valid photo ID</li>
                <li>• Sunscreen and sunglasses</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Book houseboat stay in advance</li>
                <li>• Negotiate prices at markets</li>
                <li>• Try authentic Kashmiri cuisine</li>
                <li>• Respect local customs</li>
                <li>• Keep cash handy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3>
              <p className="text-gray-700 mb-2"><strong>Spring (Mar-May):</strong> Tulip gardens in bloom, pleasant weather</p>
              <p className="text-gray-700"><strong>Summer (Jun-Aug):</strong> Peak tourist season, all activities available</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3>
              <p className="text-gray-700 mb-2"><strong>By Air:</strong> Direct flights to Srinagar Airport</p>
              <p className="text-gray-700 mb-2"><strong>By Train:</strong> Jammu Tawi + taxi (290 km)</p>
              <p className="text-gray-700"><strong>By Road:</strong> Well-connected to major cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Srinagar Tour Package" destination="Srinagar, Jammu & Kashmir" />
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Kashmir', 'Gulmarg', 'Pahalgam', 'Sonamarg'].map((dest) => (
              <Link key={dest} href={`/tours/domestic/${dest.toLowerCase()}`} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg group-hover:text-blue-600">{dest}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
