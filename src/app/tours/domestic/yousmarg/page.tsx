import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Yousmarg Tour Package - Meadow of Jesus | GoTraveled',
  description: 'Discover Yousmarg - offbeat meadow destination with pristine beauty and tranquility.',
};

export default function YousmargTourPage() {
  const attractions = [
    { name: 'Nilnag Lake', description: 'Beautiful alpine lake surrounded by meadows and pine forests. Perfect for picnics and nature walks.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Doodhganga River', description: 'Pristine river flowing through meadows. Ideal spot for photography and riverside relaxation.', image: 'https://images.unsplash.com/photo-1541943869728-4bd4f450c8f5?w=800&q=80' },
    { name: 'Sang-e-Safed Valley', description: 'Scenic valley with white rocks and lush meadows. Less crowded, perfect for solitude seekers.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Charar-i-Sharief', description: 'Historic Sufi shrine dedicated to Sheikh Noor-ud-din Noorani. Important religious site with beautiful architecture.', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80' },
    { name: 'Tosa Maidan', description: 'Vast meadow perfect for camping and trekking. Offers stunning views of snow-capped peaks.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80' },
    { name: 'Pine Forests', description: 'Dense pine and fir forests surrounding the meadows. Great for nature walks and bird watching.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' },
  ];

  const highlights = ['Visit Nilnag Lake', 'Explore meadows on horseback', 'Photography opportunities', 'Nature walks in forests', 'Picnic by Doodhganga', 'Visit Charar-i-Sharief', 'Camping under stars', 'Peaceful environment'];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80" alt="Yousmarg" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="text-sm mb-4"><Link href="/tours" className="hover:underline">Tours</Link> / <Link href="/tours/domestic" className="hover:underline ml-1">Domestic</Link> / <span className="ml-1">Yousmarg</span></nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Yousmarg Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">🌾 Meadow of Jesus 🌾</p>
            <p className="text-xl max-w-3xl mx-auto">Experience offbeat Kashmir with pristine meadows and tranquil beauty</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">⏱️</div><h3 className="font-bold text-lg mb-2">Best Duration</h3><p className="text-gray-700">1-2 Days</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">🌡️</div><h3 className="font-bold text-lg mb-2">Best Time</h3><p className="text-gray-700">May-September</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">✈️</div><h3 className="font-bold text-lg mb-2">Nearest Airport</h3><p className="text-gray-700">Srinagar (47 km)</p></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Yousmarg</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">Yousmarg is an offbeat meadow destination in Budgam district at 2,396 meters. Less crowded than other Kashmir destinations, it offers pristine beauty and tranquility.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Surrounded by pine forests with Nilnag Lake and Doodhganga River, Yousmarg is perfect for nature lovers seeking peaceful mountain experiences away from tourist crowds.</p>
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
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">What to Pack</h3><ul className="space-y-2 text-gray-700"><li>• Warm clothing</li><li>• Walking shoes</li><li>• Camera</li><li>• Picnic supplies</li><li>• Sunscreen</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3><ul className="space-y-2 text-gray-700"><li>• Limited accommodation</li><li>• Carry snacks and water</li><li>• No ATMs nearby</li><li>• Mobile signals weak</li><li>• Best for day trips</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3><p className="text-gray-700 mb-2"><strong>Summer (May-Jul):</strong> Green meadows</p><p className="text-gray-700"><strong>Autumn (Aug-Sep):</strong> Pleasant weather</p></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3><p className="text-gray-700 mb-2"><strong>By Air:</strong> Srinagar + 2 hour drive</p><p className="text-gray-700 mb-2"><strong>By Road:</strong> 47 km from Srinagar</p><p className="text-gray-700"><strong>Note:</strong> Road condition varies</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Yousmarg Tour Package" destination="Yousmarg, Jammu & Kashmir" />
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
