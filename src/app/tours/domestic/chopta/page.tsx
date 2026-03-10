import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Chopta Tour Package - Mini Switzerland | GoTraveled',
  description: 'Explore Chopta - discover beautiful attractions and create unforgettable memories.',
};

export default function ChoptaTourPage() {
  const attractions = [
    { name: 'Main Attraction 1', description: 'Experience the beauty and charm of this popular destination with stunning views.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Main Attraction 2', description: 'Discover cultural heritage and natural wonders in this must-visit location.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
    { name: 'Main Attraction 3', description: 'Enjoy adventure activities and scenic landscapes in this beautiful spot.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80' },
    { name: 'Main Attraction 4', description: 'Visit historical sites and experience local culture at this remarkable place.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' },
    { name: 'Main Attraction 5', description: 'Explore natural beauty and peaceful environment perfect for relaxation.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Main Attraction 6', description: 'Experience unique attractions and memorable activities at this destination.', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80' },
  ];

  const highlights = ['Sightseeing tours', 'Local cuisine experience', 'Cultural activities', 'Nature walks', 'Photography opportunities', 'Shopping', 'Adventure activities', 'Guided tours'];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Chopta" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="text-sm mb-4"><Link href="/tours" className="hover:underline">Tours</Link> / <Link href="/tours/domestic" className="hover:underline ml-1">Domestic</Link> / <span className="ml-1">Chopta</span></nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Chopta Tour Package - Mini Switzerland</h1>
            <p className="text-2xl md:text-3xl mb-6">🏔️ Mini Switzerland 🏔️</p>
            <p className="text-xl max-w-3xl mx-auto">Discover the beauty and charm of Chopta with unforgettable experiences</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">⏱️</div><h3 className="font-bold text-lg mb-2">Best Duration</h3><p className="text-gray-700">2-3 Days</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">🌡️</div><h3 className="font-bold text-lg mb-2">Best Time</h3><p className="text-gray-700">April-Nov</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">✈️</div><h3 className="font-bold text-lg mb-2">Nearest Airport</h3><p className="text-gray-700">Dehradun (220km)</p></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Chopta</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">Chopta is a beautiful destination in Uttarakhand offering stunning natural beauty, rich cultural heritage, and memorable experiences for travelers.</p>
            <p className="text-gray-700 text-lg leading-relaxed">From scenic attractions to adventure activities, Chopta provides the perfect blend of relaxation and excitement for all types of travelers.</p>
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
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">What to Pack</h3><ul className="space-y-2 text-gray-700"><li>• Comfortable shoes</li><li>• Warm clothing</li><li>• Sunscreen & sunglasses</li><li>• Camera</li><li>• First aid kit</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3><ul className="space-y-2 text-gray-700"><li>• Book accommodation ahead</li><li>• Carry cash</li><li>• Try local cuisine</li><li>• Respect local culture</li><li>• Check weather forecast</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3><p className="text-gray-700 mb-2"><strong>Peak Season:</strong> April-Nov</p><p className="text-gray-700">Plan your visit during these months for the best experience.</p></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3><p className="text-gray-700 mb-2"><strong>By Air:</strong> Dehradun (220km)</p><p className="text-gray-700 mb-2"><strong>By Road:</strong> Well-connected</p><p className="text-gray-700"><strong>By Train:</strong> Nearest railway station</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Chopta Tour Package - Mini Switzerland" destination="Chopta, Uttarakhand" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Related Destinations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Shimla', 'Manali', 'Kashmir', 'Goa'].map((dest) => (
              <Link key={dest} href={`/tours/domestic/${dest.toLowerCase()}`} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
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
