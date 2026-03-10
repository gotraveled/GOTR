import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ToursWidget from '@/components/widgets/ToursWidget';

export const metadata: Metadata = {
  title: 'International Tour Packages - World Tours | GoTraveled',
  description: 'Explore amazing international tour packages worldwide. Europe, Asia, Africa and more.',
};

export default function InternationalToursPage() {
  const internationalPackages = [
    {
      name: 'Europe Grand Tour',
      duration: '14 Days / 13 Nights',
      price: '$3,999',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
      highlights: ['7 Countries', '12 Cities', 'All Meals', 'Expert Guide']
    },
    {
      name: 'Thailand Island Hopping',
      duration: '7 Days / 6 Nights',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80',
      highlights: ['Phuket', 'Phi Phi Islands', 'Beach Resorts', 'Snorkeling']
    },
    {
      name: 'Dubai Luxury Experience',
      duration: '5 Days / 4 Nights',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
      highlights: ['Burj Khalifa', 'Desert Safari', '5-Star Hotels', 'Shopping']
    },
    {
      name: 'Japan Cultural Tour',
      duration: '10 Days / 9 Nights',
      price: '$3,499',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80',
      highlights: ['Tokyo', 'Kyoto', 'Temples', 'Mount Fuji']
    },
    {
      name: 'Bali Paradise Package',
      duration: '6 Days / 5 Nights',
      price: '$999',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      highlights: ['Ubud', 'Beach Resort', 'Spa', 'Temple Tours']
    },
    {
      name: 'Paris & French Riviera',
      duration: '8 Days / 7 Nights',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      highlights: ['Eiffel Tower', 'Nice', 'Monaco', 'Wine Tours']
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-4">
            <Link href="/tours" className="hover:underline">Tours</Link> / <span>International</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">International Tour Packages</h1>
          <p className="text-xl">Explore the world with our expertly crafted international tours</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalPackages.map((pkg, idx) => (
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
                    <span className="text-2xl font-bold text-purple-600">{pkg.price}</span>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Find More International Tours</h2>
          <ToursWidget city="Europe" partnerId="250882" />
        </div>
      </section>
    </div>
  );
}
