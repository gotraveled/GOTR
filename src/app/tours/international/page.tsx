import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ToursWidget from '@/components/widgets/ToursWidget';

export const metadata: Metadata = {
  title: 'International Tour Packages - World Tours | GoTraveled',
  description: 'Explore amazing international tour packages worldwide. Europe, Asia, Africa and more.',
};

export default function InternationalToursPage() {
  const destinations = [
    { name: 'Singapore', slug: 'singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80' },
    { name: 'Malaysia', slug: 'malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80' },
    { name: 'Thailand', slug: 'thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80' },
    { name: 'Dubai', slug: 'dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
    { name: 'Europe', slug: 'europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80' },
    { name: 'Hong Kong', slug: 'hong-kong', image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80' },
    { name: 'Bhutan', slug: 'bhutan', image: 'https://images.unsplash.com/photo-1606166466695-a5d36f2f813e?w=600&q=80' },
    { name: 'Tashkent', slug: 'tashkent', image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&q=80' },
    { name: 'Mauritius', slug: 'mauritius', image: 'https://images.unsplash.com/photo-1613395877613-6b7e5cc74440?w=600&q=80' },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Popular International Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <Link key={dest.slug} href={`/tours/international/${dest.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="relative h-56">
                    <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold group-hover:text-purple-600">{dest.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Explore More Tours</h2>
          <ToursWidget city="International" partnerId="250882" />
        </div>
      </section>
    </div>
  );
}
