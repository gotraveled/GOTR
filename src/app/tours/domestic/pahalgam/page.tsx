import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Pahalgam Tour Package - Valley of Shepherds | GoTraveled',
  description: 'Explore Pahalgam - scenic valley known for Betaab Valley, Aru Valley, and Amarnath Yatra base camp.',
};

export default function PahalgamTourPage() {
  const attractions = [
    {
      name: 'Betaab Valley',
      description: 'Named after Bollywood film Betaab, this pristine valley features crystal-clear streams, lush meadows, and snow-capped peaks. Perfect for picnics and photography.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80'
    },
    {
      name: 'Aru Valley',
      description: 'Picturesque village and starting point for many treks including Kolahoi Glacier. Offers stunning views and peaceful environment surrounded by mountains.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Chandanwari',
      description: 'Base camp for Amarnath Yatra pilgrimage. Known for snow sledging and scenic beauty with Lidder River flowing through alpine meadows.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80'
    },
    {
      name: 'Lidder River',
      description: 'Fast-flowing river perfect for white water rafting and trout fishing. The riverbanks offer scenic walks and relaxation spots.',
      image: 'https://images.unsplash.com/photo-1541943869728-4bd4f450c8f5?w=800&q=80'
    },
    {
      name: 'Baisaran',
      description: 'Known as Mini Switzerland, this meadow is surrounded by dense pine forests. Accessible by pony ride, offering spectacular valley views.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Sheshnag Lake',
      description: 'Alpine high-altitude lake on Amarnath Yatra route. Known for its deep blue waters and surrounded by snow-covered mountains.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
  ];

  const highlights = [
    'Visit Betaab Valley',
    'Explore Aru Valley meadows',
    'Pony rides to Baisaran',
    'River rafting in Lidder',
    'Photography opportunities',
    'Trek to Chandanwari',
    'Trout fishing experience',
    'Nature walks along river'
  ];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=80"
          alt="Pahalgam - Valley of Shepherds"
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
              <span className="ml-1">Pahalgam</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Pahalgam Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">🏔️ Valley of Shepherds 🏔️</p>
            <p className="text-xl max-w-3xl mx-auto">
              Discover pristine valleys, adventure activities, and natural beauty in Kashmir's scenic paradise
            </p>
          </div>
        </div>
      </section>

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
              <p className="text-gray-700">April-October</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-bold text-lg mb-2">Nearest Airport</h3>
              <p className="text-gray-700">Srinagar (95 km)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Pahalgam</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Pahalgam, meaning "Village of Shepherds," is one of Kashmir's most beautiful hill stations at 2,740 meters. 
              Known for its scenic beauty, pine forests, and adventure activities, it serves as the base camp for the annual 
              Amarnath Yatra pilgrimage. The Lidder River flows through this picturesque town, adding to its charm.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From Bollywood-famous Betaab Valley to tranquil Aru Valley, Pahalgam offers numerous attractions. Adventure 
              enthusiasts enjoy trekking, river rafting, and fishing, while nature lovers appreciate the serene landscapes 
              and pristine environment.
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Warm clothing and jacket</li>
                <li>• Trekking shoes</li>
                <li>• Sunscreen and sunglasses</li>
                <li>• Camera for scenic views</li>
                <li>• First aid kit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Book accommodations in advance</li>
                <li>• Hire local guides for treks</li>
                <li>• Carry cash (limited ATMs)</li>
                <li>• Try local cuisine</li>
                <li>• Respect wildlife and nature</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3>
              <p className="text-gray-700 mb-2"><strong>Summer (Apr-Jun):</strong> Pleasant weather, all activities available</p>
              <p className="text-gray-700"><strong>Autumn (Sep-Oct):</strong> Clear skies, beautiful landscapes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3>
              <p className="text-gray-700 mb-2"><strong>By Air:</strong> Srinagar Airport + 3 hour drive</p>
              <p className="text-gray-700 mb-2"><strong>By Road:</strong> 95 km from Srinagar (taxi/cab)</p>
              <p className="text-gray-700"><strong>By Bus:</strong> Regular buses from Srinagar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Pahalgam Tour Package" destination="Pahalgam, Jammu & Kashmir" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Kashmir', 'Gulmarg', 'Srinagar', 'Sonamarg'].map((dest) => (
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
