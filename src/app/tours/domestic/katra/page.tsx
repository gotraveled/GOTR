import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Katra Tour Package - Gateway to Vaishno Devi | GoTraveled',
  description: 'Visit Katra - base camp for Vaishno Devi Temple. Experience spirituality and scenic beauty of Jammu region.',
};

export default function KatraTourPage() {
  const attractions = [
    {
      name: 'Vaishno Devi Temple',
      description: 'One of India\'s most sacred Hindu temples dedicated to Goddess Vaishno Devi. Located in Trikuta Mountains, attracts millions of pilgrims annually.',
      image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=800&q=80'
    },
    {
      name: 'Bhairon Temple',
      description: 'Important shrine located 2.5 km from Vaishno Devi. Pilgrimage is considered incomplete without visiting this temple.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
    },
    {
      name: 'Ardhkuwari',
      description: 'Cave temple midway to Vaishno Devi where the Goddess is believed to have meditated. Important pilgrimage stop.',
      image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=800&q=80'
    },
    {
      name: 'Baba Dhansar',
      description: 'Sacred site with naturally formed Shivling with water continuously dripping on it. Surrounded by lush green forests.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
    },
    {
      name: 'Shivkhori Cave',
      description: 'Natural cave shrine with 150m long tunnel housing a self-manifested Shivling. Less crowded spiritual destination.',
      image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=800&q=80'
    },
    {
      name: 'Jhajjar Kotli',
      description: 'Scenic picnic spot with waterfalls and rock formations. Perfect for family outings and nature photography.',
      image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80'
    },
  ];

  const highlights = [
    'Pilgrimage to Vaishno Devi Temple',
    'Visit Bhairon Temple',
    'Helicopter services available',
    'Explore Ardhkuwari Cave',
    'Visit Baba Dhansar',
    'Shopping at local markets',
    'Accommodation options for all budgets',
    'Traditional prasad and cuisine'
  ];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=1920&q=80"
          alt="Katra - Gateway to Vaishno Devi"
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
              <span className="ml-1">Katra</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Katra Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">🙏 Gateway to Vaishno Devi 🙏</p>
            <p className="text-xl max-w-3xl mx-auto">
              Experience divine spirituality and natural beauty at the base camp of sacred Vaishno Devi Temple
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
              <p className="text-gray-700">March-October</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-bold text-lg mb-2">Nearest Airport</h3>
              <p className="text-gray-700">Jammu (50 km)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Katra</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Katra is a small town in Reasi district of Jammu & Kashmir, serving as the base camp for the holy shrine 
              of Vaishno Devi. Located at the foothills of Trikuta Mountains, Katra welcomes millions of devotees every 
              year who come to seek blessings of Mata Vaishno Devi. The town has excellent infrastructure with hotels, 
              restaurants, and facilities for pilgrims.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Beyond the spiritual journey, Katra offers several other attractions including ancient caves, temples, 
              and scenic spots. The well-organized pilgrimage facilities including helicopter services, pony rides, 
              and palanquin services make the journey comfortable for all age groups.
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
                <li>• Comfortable walking shoes</li>
                <li>• Light clothing for trek</li>
                <li>• Valid ID proof (mandatory)</li>
                <li>• Warm jacket for evening</li>
                <li>• Personal medication</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Register online before visit</li>
                <li>• Start early morning for trek</li>
                <li>• Lockers available for luggage</li>
                <li>• Follow temple dress code</li>
                <li>• Stay hydrated during trek</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3>
              <p className="text-gray-700 mb-2"><strong>Spring (Mar-May):</strong> Pleasant weather, moderate crowds</p>
              <p className="text-gray-700"><strong>Autumn (Sep-Nov):</strong> Post-monsoon, clear skies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3>
              <p className="text-gray-700 mb-2"><strong>By Air:</strong> Jammu Airport + 1 hour drive</p>
              <p className="text-gray-700 mb-2"><strong>By Train:</strong> Katra Railway Station</p>
              <p className="text-gray-700"><strong>By Road:</strong> Well-connected to major cities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Katra Tour Package" destination="Katra, Jammu & Kashmir" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Kashmir', 'Srinagar', 'Gulmarg', 'Pahalgam'].map((dest) => (
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
