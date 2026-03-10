import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Sonamarg Tour Package - Meadow of Gold | GoTraveled',
  description: 'Explore Sonamarg - gateway to Ladakh with stunning glaciers, alpine lakes, and adventure activities.',
};

export default function SonamargTourPage() {
  const attractions = [
    {
      name: 'Thajiwas Glacier',
      description: 'Snow-covered glacier accessible by pony or trek. Offers spectacular views and snow activities even in summer months.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80'
    },
    {
      name: 'Vishansar Lake',
      description: 'Pristine alpine lake surrounded by snow-capped peaks. Popular trekking destination with crystal-clear blue waters.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Krishansar Lake',
      description: 'Beautiful twin lake near Vishansar. Part of the Kashmir Great Lakes trek, offering stunning mountain reflections.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Zoji La Pass',
      description: 'High mountain pass at 3,528m connecting Kashmir to Ladakh. Offers breathtaking views and adventure driving experience.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80'
    },
    {
      name: 'Baltal Valley',
      description: 'Base camp for Amarnath Yatra via shorter route. Scenic valley with camping facilities and mountain views.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Nilagrad River',
      description: 'River with reddish water believed to have medicinal properties. Popular spot for photography and relaxation.',
      image: 'https://images.unsplash.com/photo-1541943869728-4bd4f450c8f5?w=800&q=80'
    },
  ];

  const highlights = [
    'Trek to Thajiwas Glacier',
    'Pony rides through meadows',
    'Visit Vishansar & Krishansar Lakes',
    'Photography at Zoji La Pass',
    'River rafting opportunities',
    'Camping under stars',
    'Trout fishing',
    'Explore Baltal Valley'
  ];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
          alt="Sonamarg - Meadow of Gold"
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
              <span className="ml-1">Sonamarg</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Sonamarg Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">⛰️ Meadow of Gold ⛰️</p>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the gateway to Ladakh with stunning glaciers, alpine meadows, and adventure activities
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
              <p className="text-gray-700">May-October</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-bold text-lg mb-2">Nearest Airport</h3>
              <p className="text-gray-700">Srinagar (80 km)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Sonamarg</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Sonamarg, meaning "Meadow of Gold," is a spectacular hill station in Ganderbal district at 2,800 meters. 
              The town gets its name from the golden flowers that bloom in meadows during summer. Situated on the Srinagar-Leh 
              highway, it serves as the gateway to Ladakh and is surrounded by majestic glaciers and snow-capped peaks.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Famous for the Thajiwas Glacier, pristine alpine lakes, and adventure activities, Sonamarg is a paradise 
              for nature lovers and adventure enthusiasts. The area offers excellent trekking opportunities, including 
              the famous Kashmir Great Lakes trek, and provides a base for Amarnath pilgrims.
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
                <li>• Heavy winter clothing</li>
                <li>• Sturdy trekking boots</li>
                <li>• Sunscreen (high SPF)</li>
                <li>• Sunglasses and cap</li>
                <li>• Basic medicines</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Limited accommodation options</li>
                <li>• Carry sufficient cash</li>
                <li>• Book pony rides in advance</li>
                <li>• Check weather conditions</li>
                <li>• Altitude precautions necessary</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3>
              <p className="text-gray-700 mb-2"><strong>Summer (May-Jun):</strong> Golden meadows, pleasant weather</p>
              <p className="text-gray-700"><strong>Autumn (Sep-Oct):</strong> Clear skies, ideal for trekking</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3>
              <p className="text-gray-700 mb-2"><strong>By Air:</strong> Srinagar Airport + 2.5 hour drive</p>
              <p className="text-gray-700 mb-2"><strong>By Road:</strong> 80 km from Srinagar</p>
              <p className="text-gray-700"><strong>Note:</strong> Road closed in winter (Nov-Apr)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Sonamarg Tour Package" destination="Sonamarg, Jammu & Kashmir" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Kashmir', 'Gulmarg', 'Pahalgam', 'Srinagar'].map((dest) => (
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
