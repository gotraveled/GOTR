import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';

export const metadata: Metadata = {
  title: 'Patnitop Tour Package - Hill Station Paradise | GoTraveled',
  description: 'Visit Patnitop - scenic hill station perfect for nature lovers. Adventure activities and mountain views.',
};

export default function PatnitopTourPage() {
  const attractions = [
    { name: 'Nathatop', description: 'Scenic spot at 2,711m offering panoramic Himalayan views. Perfect for skiing in winter and trekking in summer.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Sanasar', description: 'Adventure sports hub offering paragliding, camping, and trekking. Beautiful meadow surrounded by pine forests.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
    { name: 'Sudh Mahadev Temple', description: 'Ancient Shiva temple with natural spring. Popular pilgrimage site with historic significance.', image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=800&q=80' },
    { name: 'Madhatop', description: 'Beautiful meadow with dense forests. Ideal for nature walks and picnics with family.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80' },
    { name: 'Shiv Garh', description: 'Ancient fortress ruins offering historical insights and trekking opportunities with mountain views.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { name: 'Kud Park', description: 'Well-maintained park with panoramic valley views. Perfect spot for relaxation and photography.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' },
  ];

  const highlights = ['Visit Nathatop for views', 'Adventure at Sanasar', 'Skiing in winter', 'Nature walks in meadows', 'Visit Sudh Mahadev', 'Paragliding experience', 'Shopping for local crafts', 'Photography opportunities'];

  return (
    <div>
      <section className="relative h-[600px]">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Patnitop" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="text-sm mb-4"><Link href="/tours" className="hover:underline">Tours</Link> / <Link href="/tours/domestic" className="hover:underline ml-1">Domestic</Link> / <span className="ml-1">Patnitop</span></nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Patnitop Tour Package</h1>
            <p className="text-2xl md:text-3xl mb-6">🏔️ Hill Station Paradise 🏔️</p>
            <p className="text-xl max-w-3xl mx-auto">Experience adventure and serenity in this beautiful hill station</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">⏱️</div><h3 className="font-bold text-lg mb-2">Best Duration</h3><p className="text-gray-700">2-3 Days</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">🌡️</div><h3 className="font-bold text-lg mb-2">Best Time</h3><p className="text-gray-700">April-October</p></div>
            <div className="text-center p-6 bg-blue-50 rounded-xl"><div className="text-4xl mb-3">✈️</div><h3 className="font-bold text-lg mb-2">Nearest Airport</h3><p className="text-gray-700">Jammu (110 km)</p></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Patnitop</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">Patnitop is a beautiful hill station at 2,024 meters in Udhampur district. Known for stunning views, meadows, and adventure activities, it's a perfect weekend getaway.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Surrounded by pine forests and offering skiing, paragliding, and trekking, Patnitop combines natural beauty with adventure tourism.</p>
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
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">What to Pack</h3><ul className="space-y-2 text-gray-700"><li>• Warm clothes</li><li>• Trekking shoes</li><li>• Sunscreen</li><li>• Camera</li><li>• First aid</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Travel Tips</h3><ul className="space-y-2 text-gray-700"><li>• Book adventure activities ahead</li><li>• Carry cash</li><li>• Weather changes quickly</li><li>• Hire local guides</li><li>• Try local cuisine</li></ul></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">Best Season</h3><p className="text-gray-700 mb-2"><strong>Summer (Apr-Jun):</strong> Pleasant weather</p><p className="text-gray-700"><strong>Winter (Dec-Feb):</strong> Snowfall and skiing</p></div>
            <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">How to Reach</h3><p className="text-gray-700 mb-2"><strong>By Air:</strong> Jammu + 3 hour drive</p><p className="text-gray-700 mb-2"><strong>By Road:</strong> NH44 from Jammu</p><p className="text-gray-700"><strong>By Train:</strong> Udhampur station</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <TourInquiryForm tourName="Patnitop Tour Package" destination="Patnitop, Jammu & Kashmir" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Other Destinations in Jammu & Kashmir</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Kashmir', 'Katra', 'Srinagar', 'Gulmarg'].map((dest) => (
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
