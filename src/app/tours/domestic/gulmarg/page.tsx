import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Gulmarg Tour Package - Meadow of Flowers | GoTraveled',
  description: 'Experience Gulmarg - Asia\'s premier skiing destination. Ride the world\'s second-highest cable car and explore pristine meadows.',
};

export default function GulmargTourPage() {
  const attractions = [
    {
      name: 'Gulmarg Gondola',
      description: 'World\'s second-highest cable car offering breathtaking views of snow-capped peaks. The two-phase ropeway takes you to Apharwat Peak at 4,200m altitude.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    },
    {
      name: 'Apharwat Peak',
      description: 'Summit offering panoramic 360-degree views of the Himalayas. Popular for skiing in winter and trekking in summer with stunning glacier views.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80'
    },
    {
      name: 'Gulmarg Golf Course',
      description: 'One of the world\'s highest golf courses at 2,650m. This 18-hole course offers spectacular mountain views and unique golfing experience.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80'
    },
    {
      name: 'Alpather Lake',
      description: 'Beautiful alpine lake at the foot of Apharwat Peak. Frozen most of the year, it\'s perfect for trekking and offers serene mountain scenery.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Ski Slopes',
      description: 'Asia\'s best skiing destination with world-class slopes. Suitable for beginners to advanced skiers, offering powder snow from December to March.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80'
    },
    {
      name: 'St. Mary\'s Church',
      description: 'Historic Catholic church built in 1902 during British era. Features beautiful Victorian architecture and stained glass windows.',
      image: 'https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?w=800&q=80'
    },
  ];

  const highlights = [
    'Gondola ride to Apharwat Peak',
    'Skiing and snowboarding activities',
    'Horse riding through meadows',
    'Visit to Golf Course',
    'Trek to Alpather Lake',
    'Snow activities in winter',
    'Photography opportunities',
    'Shopping for local handicrafts'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
          alt="Gulmarg - Meadow of Flowers"
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
              <span className="ml-1">Gulmarg</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Gulmarg Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">⛷️ Meadow of Flowers ⛷️</p>
            <p className="text-xl max-w-3xl mx-auto">
              Experience Asia's premier ski resort with the world's highest cable car and stunning alpine landscapes
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
              <p className="text-gray-700">2-3 Days</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🌡️</div>
              <h3 className="font-bold text-lg mb-2">Best Time</h3>
              <p className="text-gray-700">Dec-Feb (Skiing) / Apr-Jun (Meadows)</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-bold text-lg mb-2">Nearest Airport</h3>
              <p className="text-gray-700">Srinagar (50 km)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Gulmarg</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Gulmarg, meaning "Meadow of Flowers," is a spectacular hill station in Jammu & Kashmir, situated at 
              2,650 meters above sea level. It's renowned as Asia's premier skiing destination and home to the 
              world's second-highest operating cable car - the Gulmarg Gondola. In winter, it transforms into a 
              snow paradise with world-class skiing slopes, while summer reveals lush green meadows carpeted with wildflowers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're an adventure enthusiast seeking powder snow, a nature lover wanting to explore alpine 
              meadows, or simply looking for breathtaking Himalayan views, Gulmarg offers an unforgettable mountain 
              experience. The town also features one of the world's highest golf courses and provides access to 
              stunning trekking trails.
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
                <li>• Heavy winter clothing (Dec-Feb)</li>
                <li>• Ski gear or rent locally</li>
                <li>• Sturdy trekking boots</li>
                <li>• Sunscreen and snow goggles</li>
                <li>• Warm gloves and thermal wear</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Book Gondola tickets early in peak season</li>
                <li>• Carry altitude sickness medication</li>
                <li>• Hire certified ski instructors</li>
                <li>• Weather can change quickly</li>
                <li>• Limited internet connectivity</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3>
              <p className="text-gray-700 mb-2"><strong>Winter (Dec-Feb):</strong> Best for skiing and snow activities</p>
              <p className="text-gray-700"><strong>Summer (Apr-Jun):</strong> Flower-covered meadows, pleasant weather</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3>
              <p className="text-gray-700 mb-2"><strong>By Air:</strong> Srinagar Airport + 2 hour drive</p>
              <p className="text-gray-700 mb-2"><strong>By Road:</strong> 50 km from Srinagar (taxi/cab)</p>
              <p className="text-gray-700"><strong>Note:</strong> Road may close in heavy snowfall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Gulmarg Tour Package" destination="Gulmarg, Jammu & Kashmir" />
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Kashmir', 'Srinagar', 'Pahalgam', 'Sonamarg'].map((dest) => (
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
