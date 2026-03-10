import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ToursWidget from '@/components/widgets/ToursWidget';

export const metadata: Metadata = {
  title: 'Domestic Tour Packages - India Tours | GoTraveled',
  description: 'Explore amazing domestic tour packages across India. Kashmir, Himachal, Uttarakhand, Rajasthan and more.',
};

export default function DomesticToursPage() {
  const destinations = {
    'Jammu & Kashmir': [
      { name: 'Kashmir', slug: 'kashmir', image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=600&q=80' },
      { name: 'Gulmarg', slug: 'gulmarg', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80' },
      { name: 'Srinagar', slug: 'srinagar', image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=600&q=80' },
      { name: 'Pahalgam', slug: 'pahalgam', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80' },
      { name: 'Sonamarg', slug: 'sonmarg', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80' },
      { name: 'Katra', slug: 'katra', image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=600&q=80' },
      { name: 'Patnitop', slug: 'patnitop', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { name: 'Yousmarg', slug: 'yousmarg', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80' },
    ],
    'Himachal Pradesh': [
      { name: 'Shimla', slug: 'shimla', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80' },
      { name: 'Manali', slug: 'manali', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { name: 'Dharamshala', slug: 'dharamshala', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80' },
      { name: 'Dalhousie', slug: 'dalhousie', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80' },
      { name: 'Khajjiar', slug: 'khajjiar', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
      { name: 'Chamba', slug: 'chamba', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
    ],
    'Uttarakhand': [
      { name: 'Nainital', slug: 'nainital', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { name: 'Mussoorie', slug: 'mussoorie', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
      { name: 'Rishikesh', slug: 'rishikesh', image: 'https://images.unsplash.com/photo-1541943869728-4bd4f450c8f5?w=600&q=80' },
      { name: 'Haridwar', slug: 'haridwar', image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=600&q=80' },
      { name: 'Jim Corbett', slug: 'corbett', image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&q=80' },
      { name: 'Almora', slug: 'almora', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80' },
      { name: 'Kausani', slug: 'kausani', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { name: 'Ranikhet', slug: 'ranikhet', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
      { name: 'Chopta', slug: 'chopta', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80' },
    ],
    'Rajasthan': [
      { name: 'Jaipur', slug: 'jaipur', image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=600&q=80' },
      { name: 'Udaipur', slug: 'udaipur', image: 'https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=600&q=80' },
      { name: 'Jaisalmer', slug: 'jaisalmer', image: 'https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?w=600&q=80' },
      { name: 'Jodhpur', slug: 'jodhpur', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80' },
      { name: 'Pushkar', slug: 'pushkar', image: 'https://images.unsplash.com/photo-1582366527063-5e8f95a48b71?w=600&q=80' },
      { name: 'Bikaner', slug: 'bikaner', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80' },
      { name: 'Mount Abu', slug: 'mount-abu', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      { name: 'Golden Triangle', slug: 'golden-triangle', image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=600&q=80' },
    ],
    'Other Destinations': [
      { name: 'Goa', slug: 'goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80' },
      { name: 'Kerala', slug: 'kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
      { name: 'Leh Ladakh', slug: 'leh-ladakh', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80' },
      { name: 'Darjeeling Gangtok', slug: 'darjeeling-gangtok', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80' },
    ],
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-4">
            <Link href="/tours" className="hover:underline">Tours</Link> / <span>Domestic</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Domestic Tour Packages</h1>
          <p className="text-xl">Explore the incredible beauty and diversity of India with our curated tour packages</p>
        </div>
      </section>

      {Object.entries(destinations).map(([region, dests]) => (
        <section key={region} className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">{region}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dests.map((dest) => (
                <Link key={dest.slug} href={`/tours/domestic/${dest.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                    <div className="relative h-48">
                      <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold group-hover:text-blue-600">{dest.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Explore More Tours</h2>
          <ToursWidget city="India" partnerId="250882" />
        </div>
      </section>
    </div>
  );
}
