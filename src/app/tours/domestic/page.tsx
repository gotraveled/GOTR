import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ToursWidget from '@/components/widgets/ToursWidget';

export const metadata: Metadata = {
  title: 'Domestic Tour Packages - USA Tours | GoTraveled',
  description: 'Explore amazing domestic tour packages across USA. City tours, national parks, road trips and more.',
};

export default function DomesticToursPage() {
  const domesticPackages = [
    {
      name: 'Grand Canyon Adventure',
      duration: '3 Days / 2 Nights',
      price: '$599',
      image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&q=80',
      highlights: ['South Rim Tour', 'Helicopter Ride', 'All Meals Included']
    },
    {
      name: 'New York City Explorer',
      duration: '4 Days / 3 Nights',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
      highlights: ['Statue of Liberty', 'Broadway Show', 'Museum Pass']
    },
    {
      name: 'Yellowstone & Grand Teton',
      duration: '5 Days / 4 Nights',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
      highlights: ['Wildlife Safari', 'Guided Hikes', 'All Transportation']
    },
    {
      name: 'California Coast Road Trip',
      duration: '7 Days / 6 Nights',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80',
      highlights: ['San Francisco', 'Big Sur', 'Los Angeles']
    },
    {
      name: 'Las Vegas & Hoover Dam',
      duration: '3 Days / 2 Nights',
      price: '$549',
      image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=600&q=80',
      highlights: ['Vegas Strip Tour', 'Hoover Dam', 'Show Tickets']
    },
    {
      name: 'Miami & Florida Keys',
      duration: '4 Days / 3 Nights',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
      highlights: ['South Beach', 'Key West', 'Snorkeling']
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-4">
            <Link href="/tours" className="hover:underline">Tours</Link> / <span>Domestic</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Domestic Tour Packages</h1>
          <p className="text-xl">Discover the best of USA with our curated domestic tours</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticPackages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-56">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <ul className="space-y-2 mb-4">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700">✓ {item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Find More Domestic Tours</h2>
          <ToursWidget city="USA" partnerId="250882" />
        </div>
      </section>
    </div>
  );
}
