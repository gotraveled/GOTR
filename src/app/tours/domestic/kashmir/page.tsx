import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Kashmir Tour Package - Paradise on Earth | GoTraveled',
  description: 'Explore the breathtaking beauty of Kashmir. Visit Srinagar, Dal Lake, Mughal Gardens, and experience the paradise on earth.',
};

export default function KashmirTourPage() {
  const attractions = [
    {
      name: 'Dal Lake',
      description: 'Famous for houseboats and Shikara rides, Dal Lake is the jewel of Srinagar. Experience the floating gardens and witness stunning sunrises over the Himalayas.',
      image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80'
    },
    {
      name: 'Mughal Gardens',
      description: 'Explore the magnificent Nishat Bagh, Shalimar Bagh, and Chashme Shahi gardens. Built by Mughal emperors, these terraced gardens offer stunning views and Persian architecture.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80'
    },
    {
      name: 'Gulmarg',
      description: 'Asia\'s premier skiing destination and home to the world\'s second-highest cable car. Experience the Gulmarg Gondola offering panoramic views of snow-capped peaks.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    },
    {
      name: 'Pahalgam',
      description: 'The valley of shepherds, known for its scenic beauty and adventure activities. Base camp for Amarnath Yatra pilgrimage and perfect for nature walks.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80'
    },
    {
      name: 'Sonamarg',
      description: 'The "Meadow of Gold" surrounded by majestic glaciers and serene lakes. Perfect for trekking to Thajiwas Glacier and enjoying pristine mountain scenery.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    },
    {
      name: 'Betaab Valley',
      description: 'Named after Bollywood film Betaab, this valley offers crystal clear streams, lush green meadows, and snow-covered mountains. Popular for picnics and photography.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80'
    },
  ];

  const highlights = [
    'Shikara ride on Dal Lake',
    'Stay in traditional houseboat',
    'Visit Mughal Gardens',
    'Gondola ride in Gulmarg',
    'Explore Pahalgam valley',
    'Shopping at Lal Chowk',
    'Try authentic Kashmiri Wazwan',
    'Visit Shankaracharya Temple'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1920&q=80"
          alt="Kashmir - Paradise on Earth"
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
              <span className="ml-1">Kashmir</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Kashmir Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">🏔️ Paradise on Earth 🏔️</p>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the breathtaking beauty of Kashmir - pristine lakes, snow-capped mountains, Mughal gardens, and warm hospitality
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
              <p className="text-gray-700">5-7 Days</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🌡️</div>
              <h3 className="font-bold text-lg mb-2">Best Time</h3>
              <p className="text-gray-700">April-October</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-bold text-lg mb-2">Nearest Airport</h3>
              <p className="text-gray-700">Srinagar (SXR)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Kashmir</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Kashmir, often called "Paradise on Earth," is a region of stunning natural beauty in the northernmost 
              part of India. Known for its pristine lakes, snow-capped mountains, lush valleys, and Mughal gardens, 
              Kashmir offers an unforgettable experience. The region boasts the famous Dal Lake with its houseboats 
              and shikaras, the meadows of Gulmarg perfect for skiing, and the scenic valley of Pahalgam.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The rich cultural heritage, warm hospitality, and delicious Kashmiri cuisine make it a must-visit 
              destination. Whether you're seeking adventure in the mountains, tranquility by the lakes, or cultural 
              experiences in ancient gardens and temples, Kashmir has something for every traveler.
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
                <li>• Warm clothing (even in summer)</li>
                <li>• Comfortable walking shoes</li>
                <li>• Sunscreen and sunglasses</li>
                <li>• Camera for stunning landscapes</li>
                <li>• Valid ID proof</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Book accommodations in advance</li>
                <li>• Carry sufficient cash (limited ATMs)</li>
                <li>• Respect local customs and culture</li>
                <li>• Try local Kashmiri cuisine</li>
                <li>• Check weather before traveling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3>
              <p className="text-gray-700 mb-2"><strong>Summer (April-June):</strong> Pleasant weather, perfect for sightseeing</p>
              <p className="text-gray-700"><strong>Autumn (September-October):</strong> Clear skies, beautiful landscapes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3>
              <p className="text-gray-700 mb-2"><strong>By Air:</strong> Srinagar Airport (well connected)</p>
              <p className="text-gray-700 mb-2"><strong>By Train:</strong> Jammu Tawi, then taxi to Srinagar</p>
              <p className="text-gray-700"><strong>By Road:</strong> Well-connected highways from major cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Kashmir Tour Package" destination="Kashmir, Jammu & Kashmir" />
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Gulmarg', 'Pahalgam', 'Sonamarg', 'Srinagar'].map((dest) => (
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
